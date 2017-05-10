import React,{Component} from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './DeleteTable.scss';
class DeleteTable extends Component{
  constructor(props){
    super(props);
    this.makeHeader=this.makeHeader.bind(this);
    this.valueRowMapper=this.valueRowMapper.bind(this);
  }
  static makeHeaderConfObj(label,prop){
    return {
      label:label,
      prop:prop
    };
  }
  static headerFooterMapper(conf,i){
    return <th key={i+1}>{conf.label}</th>;
  }
  makeHeader(){
    let rows=[<th key={0}>#</th>];
    let customRows = this.props.columnConfigs.map(DeleteTable.headerFooterMapper);
    rows = rows.concat(customRows);
    let nextKey = this.props.columnConfigs.length+1;
    rows.push(<th key={nextKey} />);

    return <thead><tr>{rows}</tr></thead>;
  }
  deleteFunc(id){
    if(this.props.deleteFunction)
      this.props.deleteFunction(id);
    else
      console.warn("no delete function bound");
  }
  valueRowMapper(key,i){
    let vObj=this.props.rowsObject[key];
    let valueCellMapper=function (confObj,j) {
      let cellKey = key+j.toString();
      return <td key={cellKey}>{vObj[confObj.prop]}</td>;
    };
    let indexKey = key+"_index";
    let indexCell=[<td key={indexKey}>{i+1}</td>];
    let customCells = this.props.columnConfigs.map(valueCellMapper);
    let modKey=key+"_mod";
    let modButtons=[];
    if(this.props.deleteFunction){
      let boundDelete = this.deleteFunc.bind(this,vObj._id);
      let deleteKey=key+"_delete";
      modButtons.push(<button key={deleteKey} className="button is-danger" onClick={boundDelete}><span className="fa fa-remove"/></button>);
    }
    if(this.props.editRootLink) {
      let editKey = key + "_edit";
      let editUri = this.props.editRootLink+"/"+vObj._id;
      modButtons.push(<Link key={editKey} to={editUri} className="button is-primary"><span className="fa fa-pencil" /></Link>);
    }
    let modCells=[<td key={modKey}>{modButtons}</td> ];
    let allCells = indexCell.concat(customCells).concat(modCells);
    let rowId=key+"_row";
    let row = <tr key={rowId}>{allCells}</tr>;
    return row;

  }

  render(){
    let that=this;
    let header = this.makeHeader();
    let rows = Object.keys(this.props.rowsObject).map(this.valueRowMapper);

    let newLink=null;
    if(this.props.newLink){
      newLink = <Link className="button is-primary" to={this.props.newLink}><span className="fa fa-plus"/></Link>;
    }
    let tableContainerClassNames=classNames('scta-DeleteTable_TableContainer',{'scta-DeleteTable_TableContainer_IsLoading':this.props.isLoading});
    let loadingIconWrapperClassNames = classNames('scta-DeleteTable_LoadingIcon',{'scta-DeleteTable_LoadingIcon_TableIsLoading':this.props.isLoading});
    let tableClassNames=classNames("table","scta-DeleteTable_Table",{"scta-DeleteTable_Table_TableIsLoading":this.props.isLoading});
    return(
      <div className="scta-DeleteTable">
        <div className={tableContainerClassNames}>
          <div className={loadingIconWrapperClassNames}><div className="icon is-large"><i className="fa fa-refresh fa-spin fa-4x fa-fw"/></div></div>
          <table className={tableClassNames}>
            {header}
            <tbody>
            {rows}
            </tbody>

          </table>


        </div>
        {newLink}
      </div>
    );
  }
}
DeleteTable.propTypes={
  deleteFunction:PropTypes.func,
  editRootLink:PropTypes.string,
  columnConfigs:PropTypes.arrayOf(PropTypes.shape({
    label:PropTypes.string,
    prop:PropTypes.string
  })).isRequired,
  rowsObject:PropTypes.PropTypes.object.isRequired,
  newLink:PropTypes.string
};

export default DeleteTable;

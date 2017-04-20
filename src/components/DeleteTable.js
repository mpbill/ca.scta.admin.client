import React,{Component} from 'react';
import {Link} from 'react-router';
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
    }
  }
  static headerFooterMapper(conf,i){
    return <th key={i+1}>{conf.label}</th>
  }
  makeHeader(){
    let rows=[<th key={0}>#</th>];
    let customRows = this.props.columnConfigs.map(DeleteTable.headerFooterMapper);
    rows = rows.concat(customRows);
    let nextKey = this.props.columnConfigs.length+1;
    rows.push(<th key={nextKey} />);

    return <thead><tr>{rows}</tr></thead>
  }
  deleteFunc(id){
    if(this.props.deleteFunction)
      this.props.deleteFunction(id);
    else
      console.warn("no delete function bound");
  }
  valueRowMapper(vObj,i){
    let valueCellMapper=function (confObj,j) {
      let key = i.toString()+j.toString();
      return <td key={key}>{vObj[confObj.prop]}</td>
    };
    let indexKey = i+"_index";
    let indexCell=[<td key={indexKey}>{i+1}</td>];
    let customCells = this.props.columnConfigs.map(valueCellMapper);
    let modKey=i+"_mod";
    let modButtons=[];
    if(this.props.deleteFunction){
      let boundDelete = this.deleteFunc.bind(this,vObj._id);
      let deleteKey=i+"_delete";
      modButtons.push(<button key={deleteKey} className="button is-danger" onClick={boundDelete}><span className="fa fa-minus"/></button>)
    }
    if(this.props.editRootLink) {
      let editKey = i + "_edit";
      let editUri = this.props.editRootLink+"/"+vObj._id;
      modButtons.push(<Link to={editUri} className="button is-primary"><span className="fa fa-pencil" /></Link>);
    }
    let modCells=[<td key={modKey}>{modButtons}</td> ];
    let allCells = indexCell.concat(customCells).concat(modCells);
    let rowId=i+"_row";
    let row = <tr key={rowId}>{allCells}</tr>;
    return row;

  }

  render(){
    let header = this.makeHeader();
    let rows = this.props.rowObjects.map(this.valueRowMapper);
    return(
      <div className="delete-table">
        <div>
          <table className="table">
            {header}
            <tbody>
            {rows}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default DeleteTable;

import React,{Component} from 'react';

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
    this.props.deleteFunction(id);
  }
  valueRowMapper(vObj,i){
    let valueCellMapper=function (confObj,j) {
      let key = i.toString()+j.toString();
      return <td key={key}>{vObj[confObj.prop]}</td>
    };
    let indexKey = i+"_index";
    let indexCell=[<td key={indexKey}>{i+1}</td>];
    let customCells = this.props.columnConfigs.map(valueCellMapper);
    let boundDelete = this.deleteFunc.bind(this,vObj._id);
    let deleteKey = i+"_delete";
    let deleteCell=[<td key={deleteKey}><button className="button is-danger" onClick={boundDelete}><span className="fa fa-minus"/></button></td>];
    let allCells = indexCell.concat(customCells).concat(deleteCell);
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

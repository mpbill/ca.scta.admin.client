/**
 * Created by michael.billingham on 4/19/2017.
 */
import React from 'react';
import DeleteTable from '../components/DeleteTable';

let headerConfObjects=[
  DeleteTable.makeHeaderConfObj("Column 1","col1"),
  DeleteTable.makeHeaderConfObj("Column 2","col2"),
  DeleteTable.makeHeaderConfObj("Column 3","col3"),
];
let fakeId=0;
let makeTestRowObj=function (col1,col2,col3) {
  fakeId++;
  return {
    _id:fakeId,
    col1,
    col2,
    col3,
    propNotInTable:"DERP"
  };
};
let testRowObjects=[
  makeTestRowObj("a","b","c"),
  makeTestRowObj("d","e","f"),
  makeTestRowObj("g","h","i")
];
let fakeDeleteFunc=function (id) {
  console.log("DELETING " + id);
};
export default function deleteTableTestPage(){
  return (
    <DeleteTable
      columnConfigs={headerConfObjects}
      rowObjects={testRowObjects}
      deleteFunction={fakeDeleteFunc}
    />
  );
}

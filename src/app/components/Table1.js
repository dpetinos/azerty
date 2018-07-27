import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import './Table.css';

function onSelectRow(row, isSelected, e) {
  if (isSelected) {
    console.log(`You just selected '${row['name']}'`)
  }
}
 
const selectRowProp = {
  mode: 'checkbox',
  clickToSelect: true,
  unselectable: [2],
  selected: [1],
  onSelect: onSelectRow,
  bgColor: 'gold'
};

class Table1 extends Component {
  render() {
    return (
      <div>
        <BootstrapTable 
          keyField='id'
          data={this.props.data}
          columns={this.props.columns}
          striped hover condensed
        />
      </div>
    )
  }
}
 
export default Table1
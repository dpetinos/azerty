import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';


import './TableComponent.css';


class TableComponent extends Component {
  render() {
    return (
      <BootstrapTable 
        keyField='id'
        data={ this.props.data }
        columns={ this.props.columns }
        striped
        hover
        condensed
        filter={ filterFactory() }
       />
    )
  }
}

export default TableComponent

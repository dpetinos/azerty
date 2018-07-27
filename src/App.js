import React, { Component } from 'react';
import Table1 from './app/components/Table1'
import TableComponent from './app/components/TableComponent'
import './App.css';

import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';


const data = {
    columns: [
        {dataField: 'id', text: 'Product ID'},
        {dataField: 'name', text: 'Product Name'},
        {dataField: 'price', text: 'Product Price'}
    ],
    rows: [
        {id: 1, name: 'Gob', price: '2'},
        {id: 2, name: 'Buster', price: '5'},
        {id: 3, name: 'George Michael', price: '4'}
    ]
};

const tableData = {
    columns: [
        {
            dataField: 'Service',
            text: 'Service',
            filter: textFilter({
                style: {
                    'box-sizing' : 'border-box',
                    margin: '10px auto',
                    width: '90%'
                }
            }),
            headerFormatter: nameFormatter
        },
        {dataField: 'CostUnit', text: 'Cost/Unit'},
        {dataField: 'Unit', text: 'Unit'},
        {dataField: 'UnitsRequested', text: 'Units Requested'}
    ],
    rows: [
        {Service: 'Accountance', CostUnit: 50, Unit: '1 Hour', UnitsRequested: 12},
        {Service: 'Direction', CostUnit: 50, Unit: '1 Hour', UnitsRequested: 12},
        {Service: 'Development', CostUnit: 50, Unit: '1 Hour', UnitsRequested: 12},
        {Service: 'QA', CostUnit: 37, Unit: '1 Hour', UnitsRequested: 12},
        {Service: 'Veterinary Assitance', CostUnit: 50, Unit: '1 Hour', UnitsRequested: 12},
        {Service: 'QA', CostUnit: 50, Unit: '1 Hour', UnitsRequested: 25},
        {Service: 'QA', CostUnit: 50, Unit: '1 Hour', UnitsRequested: 12},
        {Service: 'Development', CostUnit: 50, Unit: '1 Hour', UnitsRequested: 12},
        {Service: 'Veterinary Assitance', CostUnit: 50, Unit: '1 Hour', UnitsRequested: 12},
        {Service: 'foo', Unit: null, CostUnit: undefined, UnitsRequested: 42}
    ]
};

function nameFormatter(column, colIndex, { sortElement, filterElement }) {
  return (
    <div className="NameFormatter">
      { filterElement }
      { column.text }
      { sortElement }
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="table-component">

            <TableComponent data={tableData.rows} columns={tableData.columns} />

        </div>
      </div>
    );
  }
}

//  <Table1 data={data.rows} columns={data.columns} />

 

// class App extends Component
//   render()
//     return (
//       <div>
//         <button type="button" className="btn btn-primary">Primary</button>
//       </div>
//     );
//   }
// }


export default App;
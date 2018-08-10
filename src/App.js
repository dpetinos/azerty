import React from "react";
import { Tips } from "./Utils";
import './App.css';

// Import React Table
import "react-table/react-table.css";
import TableComponent from './app/components/TableComponent';
import Header from './app/components/Header';
import Footer from './app/components/Footer';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div id="table-component">

            <Header />


            <TableComponent />


            <br />
            <Tips />


            <Footer />

        </div>
      </div>
    );
  }
}

export default App;

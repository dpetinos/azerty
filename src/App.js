import React from "react";
import './App.css';

// Import React Table
import "react-table/react-table.css";
import Main from './app/components/Main.jsx';
import Header from './app/components/Header.jsx';
import Footer from './app/components/Footer.jsx';


const App = () => (
      <div>
          <Header />
          <Main />
          <Footer />
      </div>
)

export default App;

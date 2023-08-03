import MapComponent from "./MapComponent";
// import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Login from "./Login";

import './App.css';


const Header = () => {
  return (
    <div className="header">
      <h1>Community Forest Right</h1>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
};

// LeftPanel Component
const LeftPanel = () => {
  return (
    <div className="left-panel">
      <p>Control Panel</p>
    </div>
  );
};

// RightPanel Component
const RightPanel = () => {
  return (
    <div className="right-panel">
      <MapComponent />
    </div>
  );
};



function App() {
  return (
    <div className="App">
      <div className="app">
      <Header />
      <div className="main-container">
        <LeftPanel />
        {/* <RightPanel /> */}
        <BrowserRouter>
          <Routes>

            <Route path="/login" component={Login} />
            <Route path="/" component={RightPanel} />
          </Routes>

          </BrowserRouter>
      </div>
    </div>
    </div>
  );
}

export default App;

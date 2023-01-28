import {BrowserRouter, BrowserRouter as Router, Link, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Employees from "./components/employees.component";
import {Routes} from "react-router";
import AddEmployee from "./components/AddEmployee";
import 'react-toastify/dist/ReactToastify.css';
import CardItemEmployee from "./components/cardItemEmployee";
import DetailsEmployee from "./components/DetailsEmployee";

function App() {
  return (
      <Router >
          <nav className="navbar navbar-expand navbar-dark bg-dark">
              <Link to={"/employees"} className="navbar-brand">
                  Dar blockchain
              </Link>
              <div className="navbar-nav mr-auto">
                  <li className="nav-item">
                      <Link to={"/employees"} className="nav-link">
                          Tutorials
                      </Link>
                  </li>
                  <li className="nav-item">
                      <Link to={"/add"} className="nav-link">
                          add
                      </Link>
                  </li>
              </div>
          </nav>

          <div className="container mt-3">
              <Routes>
                  <Route path="/" element={<Employees/>} />
                  <Route path="/employees" element={<Employees/>} />
                  <Route path="/add" element={<AddEmployee/>} />
                  <Route path="/employee/:id" element={<DetailsEmployee/>} />
              </Routes>
          </div>
      </Router>
  );
}

export default App;





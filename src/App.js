import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import Home from './Component/Homepage/Home/Home';
import Header from './Component/Homepage/Header/Header';
import Footer from './Component/Homepage/Footer/Footer';

import Register from './Component/Register/Register';
import Login from './Component/Login/Login';




function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
        <Route path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;



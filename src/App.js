import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Component/Homepage/Home/Home";
import Header from "./Component/Homepage/Header/Header";
import Footer from "./Component/Homepage/Footer/Footer";

import Register from "./Component/Register/Register";
import Login from "./Component/Login/Login";
import AuthProvider from "./Context/AuthProvider";
import Purchase from "./Component/Homepage/Purchase/Purchase";
import Expertise from "./Component/Expertise/Expertise";
import Trips from "./Component/Homepage/Trips/Trips";


function App() {
  return (
    <div className="App">
      
    <AuthProvider>
    <Router>
          <Header></Header>
          <Switch>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/purchase">
              <Purchase></Purchase>
            </Route>
            <Route path="/expertise">
              <Expertise></Expertise>
            </Route>
            <Route path="/trips">
              <Trips></Trips>
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
    </AuthProvider>
      
    </div>
  );
}

export default App;

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import Home from './Component/Homepage/Home/Home';
import Header from './Component/Homepage/Header/Header';
import Footer from './Component/Homepage/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
       
        <Switch>
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


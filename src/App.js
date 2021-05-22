import {useEffect} from "react"
import {connect} from "react-redux"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './App.css';
import Login from "./components/Login"
import Home from "./components/Home";
import Header from "./components/Header";
import {getUserAuth} from "./actions";


function App(props) {

   useEffect(() => {
      props.getUserAuth()
   }, []);
  return (
    <div className="App">
      
     <Router>
        <Switch>


           <Route path = "/home">
               <Header />
               <Home />
           </Route>
           
           <Route exact path = "/">
              <Login />
           </Route>

       </Switch>
    </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
   return {};
};

const mapDispatchToProps = (dispatch) => ({
      getUserAuth: () => {
      dispatch(getUserAuth())
       }
   });

export default connect(mapStateToProps, mapDispatchToProps)(App);

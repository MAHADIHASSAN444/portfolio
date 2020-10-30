import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Resume from './Components/Resume/Resume';

function App() {
  return (
    <div>
      <Router>
      <Route exact path="/" component={Home}/>
     <Route path="/Resume" component={Resume}/>
      </Router>

     

      {/* <Router>
        <Switch>
        <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/Resume">
            <Resume/>
          </Route>
        </Switch>
      </Router> */}

        {/* <Home></Home>
        <Header></Header>
        <Resume></Resume> */}
    </div>
  );
}

export default App;

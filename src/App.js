
import Home from "./component/Home/Home";
import NoMatch from "./component/NoMatch/NoMatch";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Detail from "./component/Detail/Detail";

function App() {
  
  return (
    <Router>
      <Switch>
          <Route path= '/home'>
              <Home/>
          </Route>
          <Route path= '/team/:teamId'>
              <Detail/>
          </Route>
          <Route exact path ='/'>
              <Home/>
          </Route>
          <Route path ='*'>
            <NoMatch></NoMatch>
          </Route>
      </Switch>
    </Router>
  )
}

export default App;

import { Router, Switch, Route} from 'react-router-dom';

import './App.css';
import HomeScreen from './Screens/HomeScreen';
import AboutScreen from './Screens/AboutScreen';
import ContactScreen from './Screens/ContactScreen';

import { createBrowserHistory } from "history";

export const history = createBrowserHistory()

history.listen((location, action) => {
    window.scrollTo(0, 0)
})


function App() {
  return (
    <Router history={history} >
      <Switch>
        <Route exact path = '/' component={HomeScreen}/>
        <Route exact path = '/about' component={AboutScreen}/>
        <Route exact path = '/contact' component={ContactScreen}/>
      </Switch> 
    </Router>
  );
}

export default App;

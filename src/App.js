import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Nav from './components/Nav';
import Search  from './components/Search';
import Home from './components/Home';
import Mylist from './components/Mylist';
import Anime from './components/Anime';
function App() {
  return (
    <div className="App">
      <Router>
      <Nav />
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/search"  exact component={Search}/>
      <Route path="/mylist" exact component={Mylist}/>
      <Route path="/search/:any" exact component={Anime}/>
      <Route path=" `/search/episode/:any`" component={Anime}/>
      </Switch>
      </Router>
  
    </div>
  );
}

export default App;

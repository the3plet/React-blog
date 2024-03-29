
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import BlogDetails from './BlogDetails';
import Create from './Create';
import ErrorPage from './Error';
import Hi from './Hi';
import Home from './Home';
import Navbar from './Navbar'

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route path='/create'> <Create/></Route>
          <Route path='/hi'> <Hi/> </Route>
          <Route path='/blogs/:id'> <BlogDetails/> </Route>
          <Route path="*"><ErrorPage/></Route>
        </Switch>
      </div>
    </div>
    </Router>

    
  );
}

export default App;

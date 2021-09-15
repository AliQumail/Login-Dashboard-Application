import './App.css';
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter className="App">
      <Switch>
            <Route exact path='/'component={Login} />
            <Route exact path='/signup' component={Signup} />
      </Switch>
    
    </BrowserRouter>
  );
}

export default App;

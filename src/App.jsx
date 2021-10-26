import './App.css';

import {Switch,Route} from 'react-router-dom'

import 'rsuite/dist/rsuite.min.css';
import Home from './componentes/Home/Home';
import Login from './componentes/Login/Index';
import Register from './componentes/Register/Index';
import User from './componentes/User/Index';

function App() {

  return (
    <main>
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/user' component={User} />

        </Switch>
      </main>
  );
}

export default App;

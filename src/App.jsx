import './App.css';

import {Switch,Route} from 'react-router-dom'


import Home from './componentes/Home/Home';
import Login from './componentes/Login/Index';
import 'rsuite/dist/rsuite.min.css';

function App() {

  return (
    <main>
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/login' component={Login} />

        </Switch>
      </main>
  );
}

export default App;

import './App.css';

import { Switch, Route } from 'react-router-dom'

import 'rsuite/dist/rsuite.min.css';
import Home from './componentes/Home/Home';
import Login from './componentes/Login/Index';
import Register from './componentes/Register/Index';
import User from './componentes/User/Index';

import StoreProvider from './Store/Provider'
import RoutesPrivate from './Routes/Private/Private';
import Search from './componentes/Search';

function App() {

  return (
    <main>

       <StoreProvider>
        <Switch>

        <RoutesPrivate path='/home' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <RoutesPrivate path='/user' component={User} />
        <Route path='/search' component={Search} />
        <Route path='/' component={Register} />

        </Switch>
        </StoreProvider>
   
    </main>
  );
}

export default App;

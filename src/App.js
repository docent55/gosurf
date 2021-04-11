import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';

import Main from './pages/Main';
import Surf from './pages/Serf';
import Travel from './pages/Travel';



function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/surf' component={Surf} />
        <Route exact path='/travel' component={Travel} />
      </Switch>
    </div>
  );
}

export default App;

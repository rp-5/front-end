import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { NewAmostra } from './pages/Amostra/new';
import Home from './pages/Home';

export default function Routes() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/amostra/new" exact component={NewAmostra} />
      </Switch>
    </BrowserRouter>
  );
}
import { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import Timeline from './components/Timeline';
import Get from './components/Get';
import Ranking from './components/Ranking';

const App: FC = () => (
  <div className="">
    <Router>
      <Header />
      <div className="mt-4" />
      <Switch>
        {/* // タイムライン */}
        <Route exact path="/">
          <Timeline />
        </Route>
        {/* // どうが保存 */}
        <Route exact path="/get">
          <Get />
        </Route>
        {/* // ランキング */}
        <Route exact path="/ranking">
          <Ranking />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;

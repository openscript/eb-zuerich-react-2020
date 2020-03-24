import React from 'react';
import { UsersContainer } from './UsersContainer';
import { DashboardContainer } from './DashboardContainer';
import { ParametersContainer } from './ParametersContainer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path='/' exact component={DashboardContainer} />
          <Route path='/users' component={UsersContainer} />
          <Route path='/parameters/:id' component={ParametersContainer} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

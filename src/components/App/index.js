import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Page from '../Page/Page';

import styles from './app.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <Switch>
        <Route component={Page} exact path="/" />
      </Switch>
    </div>
  );
};

export default App;

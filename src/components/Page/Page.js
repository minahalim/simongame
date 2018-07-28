import React, { PureComponent } from 'react';

import Board from '../Board/Board';
import Instructions from '../Instructions/Instructions';
import Result from '../Result/Result';

import styles from './page.scss';

class Page extends PureComponent {
  state = {
    gameResult: ''
  };

  getGameResult(result) {
    this.setState({
      result
    });
  }

  render() {
    const { result } = this.state;

    return (
      <div className={styles.page}>
        <Instructions />
        <Board getGameResult={gameResult => this.getGameResult(gameResult)} />
        <Result result={result} />
      </div>
    );
  }
}

export default Page;

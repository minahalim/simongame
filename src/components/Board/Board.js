import ProptTypes from 'prop-types';
import React, { PureComponent } from 'react';

import { compare, randomIndex } from '../../utils';
import Square from '../Square/Square';
import StartButton from '../StartButton/StartButton';

import styles from './board.scss';

const initialState = {
  sqaureStatus: [false, false, false, false],
  sequence: [],
  userSequence: [],
  gameResult: ''
};

class Board extends PureComponent {
  state = {
    ...initialState,
    prevSequence: [],
    roundNumber: 0,
    gameStarted: false
  };

  numberOfSquares = 4;

  componentDidUpdate() {
    const { sequence, userSequence, gameStarted } = this.state;

    // if the game is not started just clear the interval to make sure it's being killed
    if (!gameStarted) {
      clearInterval(this.handel);
    }

    // if the game has been started and the user already put some sequence
    // then check whether the userSequence is correct or wrong
    if (userSequence.length > 0 && gameStarted) {
      if (compare(sequence, userSequence)) {
        // if the userSequence matched the sequence then display the result
        if (sequence.length === userSequence.length) {
          this.correctUserSequence();

          // after displaying the correct result, start the next round
          this.startSequence();
        }
      } else {
        this.wrongUserSequence();
      }
    }
  }

  correctUserSequence() {
    const { getGameResult } = this.props;
    const { sequence, roundNumber } = this.state;
    const prevSequence = [...sequence];

    // pass the result to the page so that it can update the Result component
    getGameResult(1);

    this.setState({
      ...initialState,
      roundNumber: roundNumber + 1,
      prevSequence
    });
  }

  wrongUserSequence() {
    const { getGameResult } = this.props;

    // pass the result to the page so that it can update the Result component
    getGameResult(0);

    this.setState({
      ...initialState,
      roundNumber: 0,
      gameResult: 'Wrong!',
      prevSequence: [],
      gameStarted: false
    });
  }

  startSequence(startGame = false) {
    // before starting a new sequence make sure the previous interval is dead
    clearInterval(this.handel);

    // sequence counter
    let count = 0;

    // change the game state to true to indicate it's started already
    if (startGame) {
      // reset everything when the user press on the start button
      this.setState({
        ...initialState,
        prevSequence: [],
        roundNumber: 0,
        gameStarted: true
      });
    } else {
      this.setState({
        gameStarted: true
      });
    }

    this.handel = setInterval(() => {
      const { getGameResult } = this.props;

      // don't display any result when the sequence triggered
      getGameResult(null);

      // each sequence reset the squares status and user the userSequence and the gameResult
      this.setState({
        sqaureStatus: initialState.sqaureStatus,
        userSequence: [],
        gameResult: ''
      });

      // pick the next square to blink it
      const squareToBlink = this.pickSquareToBlink(count);

      // update the sequence array
      this.updateSequence(squareToBlink);

      // update the squares status
      this.updateSquareStatus(squareToBlink);

      // if the counter matched the roundNumber then stop the interval
      if (count >= this.state.roundNumber) {
        clearInterval(this.handel);
      }

      count += 1;
    }, 1000);
  }

  pickSquareToBlink(count) {
    // pick the previously selected square from the previousSequence
    // otherwise, pick a new square
    return this.state.prevSequence[count] !== undefined
      ? this.state.prevSequence[count]
      : randomIndex(0, this.numberOfSquares);
  }

  updateSquareStatus(squareToBlink) {
    // newSquareStatus is an array containing the status of the each square whether it should blink or not
    // ex: [false, false, true, false] plink the third square
    const newSquareStatus = [];

    for (let i = 0; i < this.numberOfSquares; i++) {
      newSquareStatus.push(squareToBlink === i);
    }

    this.setState({
      sqaureStatus: newSquareStatus
    });
  }

  updateSequence(squareIndex) {
    // add the newly picked square index to the sequence array
    this.setState({
      sequence: [...this.state.sequence, squareIndex]
    });
  }

  updateUserSequence(squareId) {
    // add the chosen square picked by the user to the userSequence array
    this.setState({
      userSequence: [...this.state.userSequence, squareId]
    });
  }

  render() {
    const squares = [
      {
        className: styles.red,
        color: 'red'
      },
      {
        className: styles.green,
        color: 'green'
      },
      {
        className: styles.blue,
        color: 'blue'
      },
      {
        className: styles.yellow,
        color: 'yellow'
      }
    ];

    const { sqaureStatus, gameStarted, roundNumber } = this.state;

    return (
      <div className={styles.board}>
        {
          squares.map((square, index) => <Square
            className={squares[index].className}
            color={squares[index].color}
            gameStarted={gameStarted}
            id={index}
            key={index}
            shouldBlink={sqaureStatus[index]}
            updateUserSequence={squareId => this.updateUserSequence(squareId)}
          />)
        }
        <StartButton gameStarted={gameStarted} roundNumber={roundNumber} startSequence={() => this.startSequence(true)} />
      </div>
    );
  }
}

Board.propTypes = {
  getGameResult: ProptTypes.func
};

export default Board;

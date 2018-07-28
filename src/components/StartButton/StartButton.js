import PropTypes from 'prop-types';
import React from 'react';

import styles from './startButton.scss';

const StartButton = (props) => {
  const { gameStarted, startSequence, roundNumber } = props;
  // when the user clicks on the StartButton, it will light up to indicate the game has been started
  const startGameClass = gameStarted ? styles.started : '';

  return (
    <div className={`${styles.circle} ${startGameClass}`} onClick={() => startSequence()}>
      {roundNumber}
    </div>
  );
};

StartButton.propTypes = {
  gameStarted: PropTypes.bool,
  roundNumber: PropTypes.number,
  startSequence: PropTypes.func
};

export default StartButton;

import PropType from 'prop-types';
import React, { PureComponent } from 'react';

import styles from './square.scss';

class Square extends PureComponent {
  // by default the squares are in deactivate state unless the state changed
  state = {
    active: 0
  }

  componentDidUpdate(prevProps) {
    const { shouldBlink } = this.props;

    // This code is to blink the button from the board sequence
    // by sending shouldBlink to true through the props
    if (prevProps.shouldBlink === false && shouldBlink) {
      this.blink();
    }
  }

  blink() {
    // activate the button and then wait for 300ms to deactivate again
    this.setState({
      active: 1
    });

    setTimeout(() => {
      this.setState({
        active: 0
      });
    }, 300);
  }

  handleOnClick () {
    const { gameStarted, updateUserSequence } = this.props;

    // don't blink onClick unless the game has been started
    // don't update the userSequence unless the game has been started
    if (gameStarted) {
      this.blink();
      updateUserSequence(this.props.id);
    }
  }

  render() {
    // if the active state triggered, add opacity 1 to the button to light it up
    // otherwise add opacity 0.8 to deactivate again
    const activeClass = this.state.active ? styles.opacity1 : styles.opacity8;
    const { color, className } = this.props;

    return (
      <div
        className={`${styles.square} ${activeClass} ${styles[color]} ${className}`}
        onClick={() => this.handleOnClick()}
      />
    );
  }
}

Square.propTypes = {
  className: PropType.string,
  color: PropType.string,
  gameStarted: PropType.bool,
  id: PropType.number,
  shouldBlink: PropType.bool,
  updateUserSequence: PropType.func
};

export default Square;

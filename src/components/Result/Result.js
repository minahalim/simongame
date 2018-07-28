import PropTypes from 'prop-types';
import React from 'react';

const Result = (props) => {
  const { result } = props;
  let resultString = '';

  switch (result) {
    case 1:
      resultString = 'Correct';
      break;
    case 0:
      resultString = 'Wrong';
      break;

    default:
      resultString = null;
  }

  return (
    <h2>{resultString}</h2>
  );
};

Result.propTypes = {
  result: PropTypes.number
};

export default Result;

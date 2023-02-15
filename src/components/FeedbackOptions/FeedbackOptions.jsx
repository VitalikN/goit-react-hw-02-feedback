import React from 'react';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(el => (
      <button
        data-feedback={el.toLowerCase()}
        type="button"
        onClick={onLeaveFeedback}
        key={el}
      >
        {el}
      </button>
    ))}
  </div>
);
FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

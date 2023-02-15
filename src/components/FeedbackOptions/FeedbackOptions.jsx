import React from 'react';

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

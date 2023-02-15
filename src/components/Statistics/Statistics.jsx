import React from 'react';
// import css from './Statistics.module.css';

export const Statistics = ({
  onGood,
  onNeutral,
  onBad,
  total,
  onCountPositiveFeedbackPercentage,
}) => {
  return (
    <div>
      <h2>Statistics</h2>
      <p>Good: {onGood}</p>
      <p>Neutral: {onNeutral}</p>
      <p>Bad: {onBad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {onCountPositiveFeedbackPercentage}%</p>
    </div>
  );
};

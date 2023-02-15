import React from 'react';
// import css from './Statistics.module.css';
import { Notification } from '../Notification/Notification';

export const Statistics = ({
  onGood,
  onNeutral,
  onBad,
  total,
  PositiveFeedback,
}) =>
  total ? (
    <div>
      <p>Good: {onGood}</p>
      <p>Neutral: {onNeutral}</p>
      <p>Bad: {onBad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {PositiveFeedback}%</p>
    </div>
  ) : (
    <Notification message={'There is no feedback'} />
  );

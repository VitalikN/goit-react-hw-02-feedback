import React from 'react';
import { Text } from './Statistics.styled';
import { Notification } from '../Notification/Notification';
import PropTypes from 'prop-types';
export const Statistics = ({
  onGood,
  onNeutral,
  onBad,
  total,
  PositiveFeedback,
}) =>
  total ? (
    <div>
      <Text>Good: {onGood}</Text>
      <Text>Neutral: {onNeutral}</Text>
      <Text>Bad: {onBad}</Text>
      <Text>Total: {total}</Text>
      <Text>Positive feedback: {PositiveFeedback}%</Text>
    </div>
  ) : (
    <Notification message={'There is no feedback'} />
  );

Statistics.propTypes = {
  onGood: PropTypes.number.isRequired,
  onNeutral: PropTypes.number.isRequired,
  onBad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  PositiveFeedback: PropTypes.number.isRequired,
};

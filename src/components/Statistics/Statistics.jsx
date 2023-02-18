import React from 'react';
import { Box, Text } from './Statistics.styled';
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
    <Box>
      <Text>
        Good: <span>{onGood}</span>
      </Text>
      <Text>
        Neutral: <span>{onNeutral}</span>
      </Text>
      <Text>
        Bad: <span>{onBad}</span>
      </Text>
      <Text>
        Total: <span>{total}</span>
      </Text>
      <Text>
        Positive feedback: <span>{PositiveFeedback}%</span>
      </Text>
    </Box>
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

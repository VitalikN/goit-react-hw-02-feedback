import React from 'react';
import PropTypes from 'prop-types';
import { Container, Btn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Container>
    {options.map(el => (
      <Btn
        data-feedback={el.toLowerCase()}
        type="button"
        onClick={onLeaveFeedback}
        key={el}
      >
        {el}
      </Btn>
    ))}
  </Container>
);
FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

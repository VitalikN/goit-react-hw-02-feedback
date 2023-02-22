import React from 'react';

import { Statistics } from 'components/Statistics/Statistics';
import { Container } from './App.styled';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onClickBtn = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };
  countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

  countPositiveFeedbackPercentage = ({ good, neutral, bad }) =>
    Math.round((good * 100) / (good + neutral + bad)) || 0;

  render() {
    const { good, neutral, bad } = this.state;
    const optionKey = Object.keys(this.state);
    return (
      <Container>
        <Section titel="Please leave feedback">
          <FeedbackOptions
            options={optionKey}
            onLeaveFeedback={this.onClickBtn}
          />
        </Section>
        <Section titel="Statistics">
          <Statistics
            onGood={good}
            onNeutral={neutral}
            onBad={bad}
            total={this.countTotalFeedback(this.state)}
            PositiveFeedback={this.countPositiveFeedbackPercentage(this.state)}
          />
        </Section>
      </Container>
    );
  }
}

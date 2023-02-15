import React from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import css from './Counter.module.css';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
const options = ['Good', 'Neutral', 'Bad'];

export class Counter extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onClickBtn = ({ target }) => {
    const { feedback } = target.dataset;
    this.setState(prevState => {
      return {
        [feedback]: prevState[feedback] + 1,
      };
    });
  };
  countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

  countPositiveFeedbackPercentage = ({ good, neutral, bad }) =>
    Math.round((good * 100) / (good + neutral + bad)) || 0;

  render() {
    return (
      <div className={css.container}>
        <Section titel="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onClickBtn}
          />
        </Section>
        <Section titel="Statistics">
          <Statistics
            onGood={this.state.good}
            onNeutral={this.state.neutral}
            onBad={this.state.bad}
            total={this.countTotalFeedback(this.state)}
            PositiveFeedback={this.countPositiveFeedbackPercentage(this.state)}
          />
        </Section>
      </div>
    );
  }
}

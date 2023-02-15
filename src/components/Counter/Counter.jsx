import React from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import css from './Counter.module.css';

export class Counter extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  addGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  addNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  addBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };
  countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

  countPositiveFeedbackPercentage = ({ good, neutral, bad }) =>
    Math.round((good * 100) / (good + neutral + bad)) || 0;

  render() {
    return (
      <div className={css.container}>
        <h1>Please leave feedback</h1>
        <button type="button" onClick={this.addGood}>
          Good
        </button>
        <button type="button" onClick={this.addNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.addBad}>
          Bad
        </button>
        <Statistics
          onGood={this.state.good}
          onNeutral={this.state.neutral}
          onBad={this.state.bad}
          total={this.countTotalFeedback(this.state)}
          onCountPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage(
            this.state
          )}
        />
      </div>
    );
  }
}

import React from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import css from './Counter.module.css';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';

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
  // addGood = () => {
  //   this.setState(prevState => ({
  //     good: prevState.good + 1,
  //   }));
  // };
  // addNeutral = () => {
  //   this.setState(prevState => ({
  //     neutral: prevState.neutral + 1,
  //   }));
  // };
  // addBad = () => {
  //   this.setState(prevState => ({
  //     bad: prevState.bad + 1,
  //   }));
  // };
  countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

  countPositiveFeedbackPercentage = ({ good, neutral, bad }) =>
    Math.round((good * 100) / (good + neutral + bad)) || 0;

  render() {
    return (
      <div className={css.container}>
        <h1>Please leave feedback</h1>
        <FeedbackOptions
          // good={this.addGood}
          // neutral={this.addNeutral}
          // bad={this.addBad}
          options={options}
          onLeaveFeedback={this.onClickBtn}
        />
        <h2>Statistics</h2>
        <Statistics
          onGood={this.state.good}
          onNeutral={this.state.neutral}
          onBad={this.state.bad}
          total={this.countTotalFeedback(this.state)}
          PositiveFeedback={this.countPositiveFeedbackPercentage(this.state)}
        />
      </div>
    );
  }
}

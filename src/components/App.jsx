//import './App.css';
import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions'
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';

export class App extends Component  {  
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  
  countGoodFeedback = () => { 
    this.setState(prevState => ({
      good: prevState.good + 1,
    }))
  }

  countNeutralFeedback = () => { 
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }))
  }

  countBadFeedback = () => { 
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }))
  }

  countTotalFeedback () { 
    return (this.state.good + this.state.neutral + this.state.bad);
  }  
  
  countPositiveFeedbackPercentage = () => { 
    return 100 * this.state.good / (this.state.good + this.state.neutral + this.state.bad)
  }

  render() { 
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onGoodFeedback={this.countGoodFeedback}
            onNeutralFeedback={this.countNeutralFeedback}
            onBadFeedback={this.countBadFeedback}
        /> 
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={Number(this.countPositiveFeedbackPercentage()).toFixed(0)}
        />
        </Section>  
      </div>    
  );
  }
}

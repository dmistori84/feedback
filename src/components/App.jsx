//import './App.css';
import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions'
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component  {  
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
   
  countFeedback = (event) => { 
    const currentBtn = event.target.name;
    this.setState(prevState => ({ [currentBtn]: (prevState[currentBtn] + 1)
    }))
  }

  countTotalFeedback () { 
    return (this.state.good + this.state.neutral + this.state.bad);
  }  
  
  countPositiveFeedbackPercentage = () => { 
    return 100 * this.state.good / (this.state.good + this.state.neutral + this.state.bad)
  }

  render() { 
    const { good, neutral, bad } = this.state;
    const totalValue = this.countTotalFeedback();
    
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.countFeedback}
        /> 
        </Section>
        <Section title="Statistics">      
          {totalValue ?
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage().toFixed(0)}
            /> :
            <Notification message="There is no feedback" />}                 
        </Section>  
      </div>    
  );
  }
}

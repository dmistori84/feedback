import PropTypes from 'prop-types';
import { Notification } from '../Notification/Notification';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => ( 
      <div>
        {total > 0 ? (
            <ul>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total: {total}</li>
                <li>Positive feedback: {positivePercentage}%</li>
            </ul>
            ) 
            : (<Notification message="There is no feedback"/>)
    }        
    </div>    
);

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    totalFeedback: PropTypes.number,
    positivPercentage: PropTypes.number,
    positivePercentage: PropTypes.string,
};
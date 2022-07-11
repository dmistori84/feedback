import PropTypes from 'prop-types';
import styles from './Section.module.css';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (         
    <ul className={styles.list}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage}%</li>
    </ul>        
);

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    totalFeedback: PropTypes.number,
    positivPercentage: PropTypes.number,
    
};
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
            options.map(btn =>
            <button
                className={styles.btn}
                name={btn}
                key={btn}
                onClick={onLeaveFeedback}
            >
                {btn}
            </button>)        
    )
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired
};

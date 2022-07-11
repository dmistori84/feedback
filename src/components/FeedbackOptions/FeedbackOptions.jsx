import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        options.map(btn =>
            <button
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

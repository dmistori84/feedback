import PropTypes from 'prop-types';
import styles from './Section.module.css';

export const Section = ({ title, children }) => (
    <section className={styles.indent}>
        <h3>{title}</h3>
        {children}
    </section>
);

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
}
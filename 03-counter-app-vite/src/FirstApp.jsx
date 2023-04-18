import PropTypes from 'prop-types';
import { Fragment } from 'react';

const FirstApp = ({ title, subtitle }) => {
  return (
    <Fragment>
        <h1 data-testid='test-title'>{ title }</h1>
        <p>{ subtitle }</p>
    </Fragment>
  );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
};

FirstApp.defaultProps = {
    subtitle: 'No subtitle...'
}

export default FirstApp;
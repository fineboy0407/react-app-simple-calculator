import PropTypes from 'prop-types'

const ErrorComponent = ({ msg }) => {
  return (
    <div className="error-div">
      <div className="error-msg">{msg}</div>
    </div>
  );
};

ErrorComponent.propTypes = {
  msg: PropTypes.string,
};

export default ErrorComponent;

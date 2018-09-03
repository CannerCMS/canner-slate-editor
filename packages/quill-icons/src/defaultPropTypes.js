import PropTypes from 'prop-types';

export default {
  strokeClassName: PropTypes.string,
  fillClassName: PropTypes.string,
  evenClassName: PropTypes.string,
  colorLabelClassName: PropTypes.string,
  transparentClassName: PropTypes.string,
  thinClassName: PropTypes.string,
  strokeMitterClassName: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  colorStyle: PropTypes.object
};

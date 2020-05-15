import SmartBackground from "./SmartBackground";
import PropTypes from 'prop-types';
import './style.scss';

SmartBackground.propTypes = {
    image: PropTypes.string.isRequired,
    lowImage: PropTypes.string,
    blur: PropTypes.number,
    fill: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    direction: PropTypes.oneOf(["auto", "left", "right", "top", "bottom"]),
    edge: PropTypes.number,
    children: PropTypes.any,
    style: PropTypes.object
};

export default SmartBackground;

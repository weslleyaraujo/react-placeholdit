import React, { PropTypes } from 'react';

const Placeholdit = React.createClass({
  propTypes: {
    width: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    height: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    format: PropTypes.oneOf(['gif', 'png', 'jpg', 'jpeg']),
    children: PropTypes.func
  },

  getDefaultProps() {
    return {
      format: 'gif'
    };
  },

  render() {
    const width = this.props.width;
    const height = this.props.height || this.props.width;
    const format = this.props.format;

    const src = `https://placehold.it/${width}x${height}.${format}`;

    return (
      <img 
        src={src}
        width={width} 
        height={height} />
    );
  }
});

export default Placeholdit;

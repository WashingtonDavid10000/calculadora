import React from 'react';

import PropTypes from 'prop-types';

export default function Display({ displayValue }) {
  return (
    <input type="text" value={displayValue} disabled />
  );
}

Display.propTypes = {
  displayValue: PropTypes.string.isRequired,
};

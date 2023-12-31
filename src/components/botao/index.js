import React from 'react';
import PropTypes from 'prop-types';

export default function Botao({ label, handleClick, classe }) {
  return (
    <button type="button" onClick={handleClick} className={classe}>
      {' '}
      {label}
      {' '}
    </button>
  );
}

Botao.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  classe: PropTypes.string.isRequired,
};

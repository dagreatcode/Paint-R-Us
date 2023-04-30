import React from "react";
import PropTypes from "prop-types";

const TextArea = ({ value, id, className, handleInputChange, placeholder, name, type, rows }) => {
  return (
    <div>
      <textarea
        className={className}
        id={id}
        rows={rows}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
    </div>
  );
};

TextArea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  row: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  rows: PropTypes.string.isRequired,
};

export default TextArea;

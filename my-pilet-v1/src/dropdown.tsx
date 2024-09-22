import React from 'react';

const Dropdown = ({ onChange }) => {
    const handleSelect = (event) => {
        onChange(event.target.value);  // Trigger the onChange prop
      };
    return (
        <select onChange={handleSelect}>
          <option value="">Select</option>
          <option value="kolkata">Kolkata</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
          <option value="chennai">Chennai</option>
        </select>
      );
};

export default Dropdown;
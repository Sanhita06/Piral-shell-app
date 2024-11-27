import React, { useEffect, useState } from 'react';

const Dropdown = ({ onChange, api }) => {
  const [selectedValue, setSelectedValue] = useState(api.getData('selectedValue') || '');

  const handleSelect = (event: any) => {
    const value = event.target.value;
    setSelectedValue(value);
    api.setData('selectedValue', value); // Persist in Piral's global state
    api.emit('selectChange', { value }); // Emit the change event
    onChange(value);
  };

  useEffect(() => {
    const updateSelectedValue = (value) => {
      setSelectedValue(value || '');
    };

    api.on('data-changed', (name, value) => {
      if (name === 'selectedValue') {
        updateSelectedValue(value);
      }
    });

    return () => {
      api.off('data-changed');
    };
  }, [api]);

  return (
    <select
      value={selectedValue}
      onChange={handleSelect}
      className="form-select"
    >
      <option value="">Select</option>
      <option value="kolkata">Kolkata</option>
      <option value="delhi">Delhi</option>
      <option value="mumbai">Mumbai</option>
      <option value="chennai">Chennai</option>
    </select>
  );
};

export default Dropdown;

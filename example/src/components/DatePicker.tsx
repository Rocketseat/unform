import React, { useRef, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';

import { useField } from '../../../lib';

import 'react-datepicker/dist/react-datepicker.css';

export default function ReactDatePicker({ name, label, className = '' }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [selected, setSelected] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [ref.current, fieldName]);

  return (
    <div className={className}>
      {label && <label htmlFor={fieldName}>{label}</label>}
      <DatePicker
        name={fieldName}
        selected={selected}
        onChange={date => setSelected(date)}
        ref={ref}
      />
      {error && <span>{error}</span>}
    </div>
  );
}

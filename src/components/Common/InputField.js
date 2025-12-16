import React from 'react';

const InputField = ({ label, type, value, onChange, required = false, id, placeholder }) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, '-');
    return (
        <div className="form-group">
            <label htmlFor={inputId}>{label}{required && <span style={{ color: 'red' }}>*</span>}</label>
            <input
                type={type}
                id={inputId}
                value={value}
                onChange={onChange}
                required={required}
                placeholder={placeholder || ''}
            />
        </div>
    );
};

export default InputField;
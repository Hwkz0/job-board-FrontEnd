import React from "react";

export default function InputField({ label, type, placeholder, name, value, onChange }) {
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{label}</label>
            <input
                type={type}
                className="form-control"
                placeholder={placeholder}
                id={name}
                name={name}
                value={value}
                onChange={e => onChange(e)}
            />
        </div>
    );
}

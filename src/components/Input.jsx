import React from "react";

const Input = ({ label, name, type, placeholder, className, onChange }) => {
    return (
        <div className="mb-3">
            <label className="block mb-1">{label}</label>
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                className={className}
                onChange={onChange}
            />
        </div>
    );
};

export default Input;
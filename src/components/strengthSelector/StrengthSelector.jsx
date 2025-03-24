import React from 'react';
import './strengthSelector.css';

const StrengthSelector = ({ config, onChange }) => {
    const strengthOptions = config.filter((cfg) => cfg.type === 'frame');

    return (
        <div className="strength-selector">
            <label>Прочность:</label>
            <select onChange={(e) => onChange(e.target.value)}>
                <option value="">Выбрать</option>
                {strengthOptions.map((option) => (
                    <option key={option.key} value={option.key}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default StrengthSelector;

import React from 'react';
import './sizeInput.css';

const SizeInput = ({ config, onChange }) => {
    const lengthConfig = config.find((cfg) => cfg.key === 'length');
    const widthConfig = config.find((cfg) => cfg.key === 'width');

    return (
        <div className="size-input">
            <div className="size-input__field">
                <label htmlFor="length">Длина каркаса (от {lengthConfig?.min} до {lengthConfig?.max}м):</label>
                <input
                    id="length"
                    type="number"
                    min={lengthConfig?.min}
                    max={lengthConfig?.max}
                    step={lengthConfig?.step}
                    onChange={(e) => onChange('length', parseFloat(e.target.value))}
                />
            </div>
            <div className="size-input__field">
                <label htmlFor="width">Ширина каркаса (от {widthConfig?.min} до {widthConfig?.max}м):</label>
                <input
                    id="width"
                    type="number"
                    min={widthConfig?.min}
                    max={widthConfig?.max}
                    step={widthConfig?.step}
                    onChange={(e) => onChange('width', parseFloat(e.target.value))}
                />
            </div>
        </div>
    );
};

export default SizeInput;

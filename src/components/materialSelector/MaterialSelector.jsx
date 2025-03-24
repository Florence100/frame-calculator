import React from 'react';
import './materialSelector.css';

const MaterialSelector = ({ materials, onChange }) => {
    return (
        <div className="material-selector">
            <label htmlFor="materials">Материал покрытия:</label>
            <select id="materials" onChange={(e) => onChange(e.target.value)}>
                <option value="">Выбрать</option>
                {materials.map((material) => (
                    <option key={material.name} value={material.name}>
                        {material.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default MaterialSelector;

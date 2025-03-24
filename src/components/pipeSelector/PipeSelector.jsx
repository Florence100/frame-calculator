import React from 'react';
import './pipeSelector.css';

const PipeSelector = ({ pipes, onChange }) => {
    return (
        <div className="pipe-selector">
            <label htmlFor="pipes">Вид трубы:</label>
            <select id="pipes" onChange={(e) => onChange(e.target.value)}>
                <option value="">Выбрать</option>
                {pipes.map((pipe) => (
                    <option key={pipe.name} value={pipe.name}>
                        {pipe.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default PipeSelector;

import React from 'react';
import MaterialSelector from '../materialSelector/MaterialSelector';
import PipeSelector from '../pipeSelector/PipeSelector';
import SizeInput from '../sizeInput/SizeInput';
import StrengthSelector from '../strengthSelector/StrengthSelector';
import { getMaterials, getPipes, getConfig } from '../../models/dataModel';
import { useDispatch } from 'react-redux';
import { updateInput } from '../../store/inputSlice';
import './inputSection.css';

const InputSection = () => {
    const dispatch = useDispatch();

    const materials = getMaterials();
    const pipes = getPipes();
    const config = getConfig();

    const handleInputChange = (field, value) => {
        dispatch(updateInput({ field, value }));
    };

    return (
        <div className="input-section">
            <h2>Ввод данных</h2>
            <MaterialSelector
                materials={materials}
                onChange={(value) => handleInputChange('material', value)}
            />
            <SizeInput
                config={config}
                onChange={(field, value) => handleInputChange(field, value)}
            />
            <PipeSelector
                pipes={pipes}
                onChange={(value) => handleInputChange('pipe', value)}
            />
            <StrengthSelector
                config={config}
                onChange={(value) => handleInputChange('strength', value)}
            />
        </div>
    );
};

export default InputSection;

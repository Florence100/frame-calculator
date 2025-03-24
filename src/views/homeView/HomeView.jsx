import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import InputSection from '../../components/inputSection/InputSection';
import { calculateSheetCount, calculatePipeLength, calculateScrewCount } from '../../controllers/frameController';
import { getMaterials, getPipes, getConfig } from '../../models/dataModel';
import './homeView.css';

const HomeView = () => {
    const input = useSelector((state) => state.input);
    const [sheetCount, setSheetCount]  = useState(null);
    const [pipeLength, setPipeLength] = useState(null);
    const [screwCount, setScrewCount] = useState(null);
    const materials = getMaterials();
    const pipes = getPipes();
    const config = getConfig();

    useEffect(() => {
        if (input.length && input.width && input.material) {
            try {
                const count = calculateSheetCount(
                    input.length,
                    input.width,
                    input.material,
                    materials
                );
                setSheetCount(count);
            } catch (error) {
                console.error(error.message);
                setSheetCount(null);
            }
        } else {
            setSheetCount(null);
        }
    }, [input, materials]);

    useEffect(() => {
        if (input.length && input.width && input.pipe && input.strength) {
            try {
                const pipe = pipes.find(p => p.name === input.pipe);
                const frameConfig = config.find(c => c.key === input.strength);
        
                if (!pipe || !frameConfig) {
                    throw new Error('Труба или прочность не найдены.');
                }

                const length = calculatePipeLength(
                    input.length,
                    input.width,
                    pipe.width,
                    frameConfig.step
                );

                setPipeLength(length);
            } catch (error) {
                console.error(error.message);
                setPipeLength(null);
            }
        } else {
            setPipeLength(null);
        }
    }, [config, input, pipes]);

    useEffect(() => {
        if (input.length && input.width && input.material) {
            try {
                const screws = calculateScrewCount(
                    input.length,
                    input.width,
                    input.material,
                    config,
                    materials
                );
                setScrewCount(screws);
            } catch (error) {
                console.error(error.message);
                setScrewCount(null);
            }
        } else {
            setScrewCount(null);
        }
    }, [config, input, materials]);

    return (
        <div className="home-view">
            <div className="home-view__input">
                <InputSection />
            </div>
            <div className="home-view__result">
                <h2>Результаты</h2>
                <div>Количество листов: {sheetCount}</div>
                <div>Количество трубы в метрах погонных: {pipeLength}</div>
                <div>Количество саморезов: {screwCount}</div>
            </div>
        </div>
    );
};

export default HomeView;

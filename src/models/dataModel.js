import data from '../data/data.json';
import config from '../data/config.json';

export const getMaterials = () => {
    return data.filter(item => item.type === 'list');
};

export const getPipes = () => {
    return data.filter(item => item.type === 'pipe');
};

export const getConfig = () => {
    return config;
};

export const calculateSheetCount = (length, width, materialName, materials) => {
    const material = materials.find((m) => m.name === materialName);

    if (!material) {
        throw new Error('Материал не найден.');
    }

    const itemArea = length * width;
    const sheetArea = 1 * material.width;
    const sheetCount = Math.ceil(itemArea / sheetArea);
  
    return sheetCount;
};

export const calculatePipeLength = (length, width, pipeWidth, step) => {
    const pipeWidthMeters = pipeWidth / 1000;
    const gapCountWidth = Math.ceil((width - pipeWidthMeters) / step);
    const gapCountLength = Math.ceil((length - pipeWidthMeters) / step);
    const tubeCountWidth = gapCountWidth + 1;
    const tubeCountLength = gapCountLength + 1;
    const totalLength = (tubeCountLength * width) + (tubeCountWidth * length);
    const roundedTotalLength = +totalLength.toFixed(2);

    return roundedTotalLength;
};

export const calculateScrewCount = (length, width, materialName, config, materials) => {
    const material = materials.find((m) => m.name === materialName);
    const materialType = material.material;
    const materialConfig = config.find((c) => c.type === 'fix' && c.key === materialType);
  
    if (!materialConfig) {
        throw new Error('Материал не найден.');
    }

    const area = length * width;
    const screwCount = Math.ceil(area * materialConfig.value);
    return screwCount;
};


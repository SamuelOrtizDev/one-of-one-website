export default function findProductVariant(variants, userSelections) {
    const materialMap = {
        'premium-luster': 'Premium Luster',
        'enhanced-matte': 'Enhanced Matte'
    };

    const material = materialMap[userSelections.material] || userSelections.material;
    const frameText = userSelections.frame ? 'Frame' : 'No Fr';
    const size = userSelections.size.replace('x', '×');

    const matchedVariant = variants.find(variant => {
        
        const hasRightMaterial = variant.title.includes(material);
        const hasRightFrame = variant.title.includes(frameText);
        const hasRightSize = variant.title.includes(size);

        return hasRightMaterial && hasRightFrame && hasRightSize;
    });

    return matchedVariant || null;
}
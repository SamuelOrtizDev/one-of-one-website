export default function normalizeSize(size, orientation) {
    const [width, height] = size.match(/\d+/g).map(Number);

    if (orientation === 'landscape') {
        return `${height}" × ${width}"`;
    }

    return size;
}
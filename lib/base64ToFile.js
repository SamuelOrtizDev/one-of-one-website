export default function base64ToFile(base64String, filename = 'image.png', mimeType = 'image/png') {
    const base64Data = base64String.includes(',')
        ? base64String.split(',')[1]
        : base64String;

    const binaryString = atob(base64Data);
    const bytes = new Uint8Array(binaryString.length);

    for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }

    const blob = new Blob([bytes], { type: mimeType });
    return new File([blob], filename, { type: mimeType });
}
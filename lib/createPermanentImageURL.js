export const createPermanentImageURL = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'ltegdtfu');

    try {
        const response = await fetch('https://api.cloudinary.com/v1_1/det3usthx/image/upload', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();
        return data.secure_url;

    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}
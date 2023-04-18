export const fileUpload = async (file) => {

    // if(!file) throw new Error("Doesn't exist a file loaded");
    if(!file) return null;

    const cloudinaryUrl = "https://api.cloudinary.com/v1_1/app-practices/image/upload";

    const formData = new FormData();
    formData.append('upload_preset', 'react-course-journal');
    formData.append('file', file);

    try {

        const request = await fetch(cloudinaryUrl, {
            method: 'POST',
            body: formData
        });

        if(!request.ok) throw new Error("Could not upload image");

        const cloudinaryResponse = await request.json();

        return cloudinaryResponse.secure_url;
        
    } catch (error) {
        return null;
    };

};
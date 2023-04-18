import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from "../../src/helpers/fileUpload";

cloudinary.config({
    cloud_name: 'app-practices',
    api_key: '225115779369727',
    api_secret: '6bEOcWp8V_auUHfozglWCmfudL4',
    secure: true

});

describe('fileUpload test', () => {



    test('Should to upload file correctly in cloudinary', async () => {

        const imageURL = 'https://images.unsplash.com/photo-1535961652354-923cb08225a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyYWRpc2V8ZW58MHx8MHx8&w=1000&q=80';

        const resp = await fetch(imageURL);
        const blob = await resp.blob();
        const file = new File([blob], 'image.jpg');

        const url = await fileUpload(file);
        expect(typeof url).toBe('string');
        
        const segments = url.split('/');
        const idImage = segments[segments.length - 1].replace('.jpg', '');

        await cloudinary.api.delete_resources([`journal/${idImage}`], {
            resource_type: 'image'
        });

    });

    test('Should to return null if the file is does not send', async () => {

        const file = new File([], 'image.jpg');
        const resp = await fileUpload(file);
        expect(resp).toBe(null);

    });

});
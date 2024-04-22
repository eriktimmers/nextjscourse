'use client'
import React, {useState} from 'react';
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface CloudinaryResult {
    public_id: string;
}

const UploadPage = () => {
    const [publicId, setPublicId] = useState('');

    return (
        <>
        {publicId &&
            <CldImage alt="iets" src={publicId} width={270} height={180}/>}
            <CldUploadWidget
                uploadPreset='gan9nax4'
                options={{
                    sources: ['local','url'],
                    multiple: false,
                    maxFiles: 5,
                    styles: {}
                }}
                onUpload={(result, widget) => {
                    if (result.event !== 'success') return;
                    const info = result.info as CloudinaryResult;
                    setPublicId(info.public_id);
                }}>
                {({ open }) =>
                    <button
                        className='btn btn-primary'
                        onClick={() => open()}>Upload</button>}
            </CldUploadWidget>
        </>

    );
};

export default UploadPage;
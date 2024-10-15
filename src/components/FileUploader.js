import React from 'react';
import { useDropzone } from 'react-dropzone';

const FileUploader = ({ onFilesSelected }) => {
    const { getRootProps, getInputProps } = useDropzone({
        onDrop: onFilesSelected,
        accept: 'application/pdf',
        multiple: true
    });

    return (
        <div {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />
            <p>Drag & drop some files here, or click to select files</p>
        </div>
    );
};

export default FileUploader;

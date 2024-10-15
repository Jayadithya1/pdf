import React, { useState } from 'react';
import { splitPDF } from '../api/pdfToolsApi';  // Use mock API

function SplitTool() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [splitFileUrl, setSplitFileUrl] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSplit = async () => {
        if (!selectedFile) {
            alert("Please select a PDF file to split.");
            return;
        }

        setIsLoading(true);
        try {
            const response = await splitPDF(selectedFile);  // Use mock function
            setSplitFileUrl(response.fileUrl);
        } catch (error) {
            console.error("Error splitting file", error);
        }
        setIsLoading(false);
    };

    return (
        <div>
            <h1>Split PDF</h1>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleSplit} disabled={isLoading}>
                {isLoading ? 'Splitting...' : 'Split PDF'}
            </button>

            {splitFileUrl && (
                <div>
                    <p>Split files are ready:</p>
                    <a href={splitFileUrl} download="split-pages.zip">Download Split Pages</a>
                </div>
            )}
        </div>
    );
}

export default SplitTool;

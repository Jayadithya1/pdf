import React, { useState } from 'react';
import { mergePDF } from '../api/pdfToolsApi';  // Use mock API

function MergeTool() {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [mergedFileUrl, setMergedFileUrl] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFiles([...event.target.files]);
    };

    const handleMerge = async () => {
        if (selectedFiles.length === 0) {
            alert("Please select at least one file to merge.");
            return;
        }

        setIsLoading(true);
        try {
            const response = await mergePDF(selectedFiles);  // Use mock function
            setMergedFileUrl(response.fileUrl);
        } catch (error) {
            console.error("Error merging files", error);
        }
        setIsLoading(false);
    };

    return (
        <div>
            <h1>Merge PDF</h1>
            <input type="file" multiple onChange={handleFileChange} />
            <button onClick={handleMerge} disabled={isLoading}>
                {isLoading ? 'Merging...' : 'Merge PDFs'}
            </button>

            {mergedFileUrl && (
                <div>
                    <p>Merged PDF is ready:</p>
                    <a href={mergedFileUrl} download="merged.pdf">Download Merged PDF</a>
                </div>
            )}
        </div>
    );
}

export default MergeTool;

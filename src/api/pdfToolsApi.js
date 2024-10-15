import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const mergePDF = (files) => {
    return new Promise((resolve) => {
        // Simulate a delay like it's being processed by a backend server
        setTimeout(() => {
            // Resolve with a simulated result (e.g., a dummy download link)
            resolve({ fileUrl: '/mock-files/merged.pdf' });
        }, 2000);  // Simulate 2 seconds of processing time
    });
};

// Mock Split PDF API
export const splitPDF = (file) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ fileUrl: '/mock-files/split-pages.zip' });
        }, 1500);  // Simulate 1.5 seconds of processing time
    });
};

// Mock Compress PDF API
export const compressPDF = (file) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ fileUrl: '/mock-files/compressed.pdf' });
        }, 1000);  // Simulate 1 second of processing time
    });
};
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <h1>PDF Tools</h1>
            <ul>
                <li><Link to="/merge">Merge PDF</Link></li>
                <li><Link to="/split">Split PDF</Link></li>
                <li><Link to="/compress">Compress PDF</Link></li>
            </ul>
        </div>
    );
};

export default HomePage;

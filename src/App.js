import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MergeTool from './components/MergeTool';
import SplitTool from './components/SplitTool';
import CompressTool from './components/CompressTool';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/merge" element={<MergeTool />} />
                <Route path="/split" element={<SplitTool />} />
                <Route path="/compress" element={<CompressTool />} />
            </Routes>
        </Router>
    );
}

export default App;

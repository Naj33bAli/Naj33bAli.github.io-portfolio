import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Portfolio from './components/portfolio';
import TaskManager from './components/taskmanager';

function App() {
  return (
    <div className="App">
      {/* Navigation links */}
      <nav className="bg-gray-800 text-white p-4">
        <ul className="text-center">
          <li className="inline-block mx-4">
            <Link to="/" className="hover:text-gray-400">Portfolio</Link>
          </li>
          <li className="inline-block mx-4">
            <Link to="/task-manager" className="hover:text-gray-400">Task Manager</Link>
          </li>
        </ul>
      </nav>

      {/* Routes for different pages */}
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/task-manager" element={<TaskManager />} />
      </Routes>
    </div>
  );
}

export default App;
import React from 'react';
import './App.css';  // Import file CSS untuk styling

function App() {
  return (
    <div className="container">
      {/* Teks di tengah layar */}
      <div className="center-text">
        Teks di Tengah Layar
      </div>

      {/* Kotak 1 dan Kotak 2 */}
      <div className="flex-container">
        <div className="box box1"></div>
        <div className="box box2"></div>
      </div>
    </div>
  );
}

export default App;
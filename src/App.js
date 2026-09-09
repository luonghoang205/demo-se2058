// import logo from './logo.svg';
// import './App.css';
// // 
// function App() {
//   return (
//     <div className="App">
//      <h1> HELLO </h1>
//          </div>
//   );
// }

// export default App;
// import React from 'react';
// import Exercise4 from './Exercise4';

// function App() {
//   return (
//     <div className="App">
//       <Exercise4 />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import StudentManagement from './StudentManagement';
import Exercise4 from './Exercise4';

function App() {
  return (
    <div className="App" style={{ padding: '20px' }}>
      {}
      <Exercise4 />

      <hr style={{ margin: '40px 0', border: '2px solid #ccc' }} />

      {}
      <StudentManagement />
    </div>
  );
}

export default App;

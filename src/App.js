import React from 'react';
// import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Calls from './components/calls';
import Lesson from './components/language-app-user-2.0-main/views';

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Calls />} />
        <Route path='lesson' element={<Lesson />} />
        {/* <Route path='calendar' element={<Calendar />} />
        <Route path='*' element={<Error />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;




// function App () {
//   return <Calls />
// }

// export default App;

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Calls />}>
//           <Route path='lesson' element={<Lesson />} />
//           <Route path='calendar' element={<Calendar />} />
//           <Route path='*' element={<Error />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }
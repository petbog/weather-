import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='*' element={<Error/>} /> */}
      </Routes>
    </>
  );
}

export default App;

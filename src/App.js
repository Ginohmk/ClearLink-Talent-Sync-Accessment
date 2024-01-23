import { Route, Routes } from 'react-router-dom';

import Home from './pages/home';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

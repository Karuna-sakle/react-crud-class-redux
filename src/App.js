import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserList from './Pages/UserList';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

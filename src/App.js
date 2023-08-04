
import { Outlet } from 'react-router';
import './App.scss';
import NavBar from './routes/NavBar';

function App() {
  return (
    <>
    <NavBar />
    <div id="detail">
      <Outlet />
    </div>
    </>
  );
}

export default App;

import { RouterProvider } from 'react-router-dom';
import './App.css';
import { route } from './routes/Route';
import { ToastContainer  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='max-w-screen-xl mx-auto'>
       <RouterProvider router={route}></RouterProvider>
       <ToastContainer  position="top-center" />
    </div>
  );
}

export default App;

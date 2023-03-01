import { RouterProvider } from 'react-router-dom';
import './App.css';
import { route } from './routes/Route';

function App() {
  return (
    <div className='max-w-screen-xl mx-auto'>
       <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;

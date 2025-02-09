import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Play from './pages/Play';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/play', element: <Play /> },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;

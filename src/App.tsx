import Home from './pages/Home';
import GamePage from './pages/GamePage';
import Header from "./components/Header";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      
    ]
  },
  {
    path: "/game",
    element: <GamePage />,
  },
]);

function App() {
  return (
    <>
      <Header></Header>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
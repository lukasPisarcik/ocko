import Home from './pages/Home';
import Game from './pages/Game';
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
    element: <Game />,
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
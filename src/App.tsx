import Home from './pages/Home';
import GamePage from './pages/GamePage';
import Header from "./components/Header";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/ErrorPage';
import { ThemeProvider } from './theme-provider';

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
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header></Header>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}

export default App;
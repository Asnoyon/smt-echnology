import { Home} from './pages/home';
import { FourOFour } from "./pages/404";
import { permittedRoutes } from "./routes";
import { MainLayout } from "./layouts/main.layout";
import { Navigate, useRoutes } from "react-router-dom";



export const App = () => {

  const mainRoutes = {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "*", element: <Navigate to="/404" /> },
      { path: "/", element: <Home /> },
      { path: "/about", element: "about" },
      { path: "404", element: <FourOFour /> },
    ],
  };

  const routing = useRoutes([mainRoutes, ...permittedRoutes()]);

  return (
    <>
      
      {routing}
      {/* <ToastContainer /> */}
     
    </>
  );
}



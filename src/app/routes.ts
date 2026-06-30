import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Nosotros from "../pages/Nosotros";
import Servicios from "../pages/Servicios";
import Proyectos from "../pages/Proyectos";
import Clientes from "../pages/Clientes";
import Blog from "../pages/Blog";
import Contacto from "../pages/Contacto";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "nosotros", Component: Nosotros },
      { path: "servicios", Component: Servicios },
      { path: "proyectos", Component: Proyectos },
      { path: "clientes", Component: Clientes },
      { path: "blog", Component: Blog },
      { path: "contacto", Component: Contacto },
      { path: "*", Component: NotFound },
    ],
  },
]);

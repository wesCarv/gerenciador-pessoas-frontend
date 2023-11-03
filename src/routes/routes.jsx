import { createBrowserRouter } from "react-router-dom";
import { ListUsuarios } from "../Pages/ListUsuarios";
import { CreateUsuario } from "../Pages/CreateUsuario";
import { EditUsuario } from "Pages/EditUsuario";

const router = createBrowserRouter([
  {
    path: "/cadastro",
    element: <CreateUsuario />,
  },
  {
    path: "/edicao/:userId",
    element: <EditUsuario />,
  },
  { path: "/", element: <ListUsuarios /> },
]);

export default router;

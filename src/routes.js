import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import About from "./components/About/About";
import Login from "./components/Auth/Login";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
      path: "/About",
      element: <About/>
    },
    {
        path: "/Login",
        element: <Login/>
    }
])

    export default router
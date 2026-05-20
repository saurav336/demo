import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {HomePage} from "./pages/Home.jsx";
import {AppLayout} from "./components/AppLayout.jsx";
import {AboutPage} from "./pages/About.jsx";
import {ErrorPage} from "./pages/ErrorPage.jsx";
import {Contact} from "./pages/Contact.jsx";
import {User} from "./pages/User.jsx";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <AppLayout/>,
            errorElement: <ErrorPage/>,
            children: [
                {
                    path: "/",
                    element: <HomePage/>
                },
                {
                    path: "/about",
                    element: <AboutPage/>
                },
                {
                    path: "/contact/",
                    element: <Contact/>
                },
                {
                    path: "/user/:id",
                    element: <User/>
                }

            ]
        }
    ])

    return <RouterProvider router={router}/>
}



export default App;
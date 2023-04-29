import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Category from "../Layouts/Category/Category";
import SingleNewsLayouts from "../SingleNewsLayouts";
import SingleNewsDetails from "../Layouts/Pages/Home/Home/SingleNewsDetails/SingleNewsDetails";



const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Main></Main>
            },
            {
              path:'/category/:id',
              element:<Category></Category>
            }
        ]
    },
    {
        path:'news',
        element:<SingleNewsLayouts></SingleNewsLayouts>,
        children:[
            {
                path:':id',
                element:<SingleNewsDetails></SingleNewsDetails>
            }
        ]
    }

])

export default router;
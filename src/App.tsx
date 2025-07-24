import {
    Route,
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements
} from "react-router-dom";
import Home from './pages/Home/Home.tsx';
import Movies from "./pages/Movies/Movies.tsx";
import RootRoutes from "./routes/RootRoutes.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootRoutes/>} errorElement={<ErrorPage/>}>
            <Route index element={<Home/>}/>
            <Route path='/movies' element={<Movies/>}/>
        </Route>
    )
)

const App = () => <RouterProvider router={router}/>

export default App;



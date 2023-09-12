import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import Root from "./pages/Root";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";

const router = createBrowserRouter([
  { path: '/', element: <Root/>, children: [
    { path: '/', element: <HomePage/>},
    { path: '/contact', element: <ContactPage/>},
    { path: '/about', element: <AboutPage/> }
  ]}
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

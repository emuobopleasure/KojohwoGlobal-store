import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import Root from "./pages/Root";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import SingleProductPage from "./pages/SingleProduct";
import { AppProvider } from "./context/appContext";
import Wishlist from "./pages/Wishlist";

const router = createBrowserRouter([
  {
    path: '/', element: <Root />, children: [
      { path: '/', element: <HomePage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/products/:id', element: <SingleProductPage /> },
      { path: '/wishlist', element: <Wishlist /> }
    ]
  }
])

function App() {

  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;

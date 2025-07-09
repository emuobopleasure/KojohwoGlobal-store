import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import Root from "./pages/Root";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import SingleProductPage from "./pages/SingleProduct";
import { AppProvider } from "./context/appContext";
import Wishlist from "./pages/Wishlist";
import Error from "./pages/Error";
import Products from "./pages/Products";




const router = createBrowserRouter([
  {
    path: '/', element: (
      <AppProvider>
        <Root />
      </AppProvider>
    ),
    errorElement: <Error />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <Products /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/products/:id', element: <SingleProductPage /> },
      { path: '/wishlist', element: <Wishlist /> }
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;

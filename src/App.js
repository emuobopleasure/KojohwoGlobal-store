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


// ✅ Unregister old service workers (place this outside the component)
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(registrations => {
    registrations.forEach(registration => {
      registration.unregister().then(() => {
        window.location.reload();
      });
    });
  });
}

const router = createBrowserRouter([
  {
    path: '/', element: <Root />,
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
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;

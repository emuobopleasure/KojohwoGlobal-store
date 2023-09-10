import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import Root from "./pages/Root";

const router = createBrowserRouter([
  { path: '/', element: <Root/>, children: [
    { path: '/', element: <HomePage/>}
  ]}
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

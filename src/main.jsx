import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import ShopProvider from './Context/ShopProvider';
import router from './routes/Routes';

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ShopProvider>
      <RouterProvider router={router} />
    </ShopProvider>
  </>
);

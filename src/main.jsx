import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import router from './routes/route';
import ShopProvider from './Context/ShopProvider';


ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ShopProvider>
      <RouterProvider router={router} />
    </ShopProvider>
  </>
);

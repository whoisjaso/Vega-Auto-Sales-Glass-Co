import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Financing } from './pages/Financing';
import { Glass } from './pages/Glass';
import { Home } from './pages/Home';
import { Inventory } from './pages/Inventory';
import { VehicleDetail } from './pages/VehicleDetail';
import { Visit } from './pages/Visit';
import './styles/global.css';

function NotFound() {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow">404</p>
        <h1 className="display display--xl">
          Wrong turn off <em>Galveston Road.</em>
        </h1>
        <Link to="/" className="btn btn--gold">
          Return home
        </Link>
      </div>
    </section>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/inventory', element: <Inventory /> },
      { path: '/inventory/:slug', element: <VehicleDetail /> },
      { path: '/glass', element: <Glass /> },
      { path: '/financing', element: <Financing /> },
      { path: '/visit', element: <Visit /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

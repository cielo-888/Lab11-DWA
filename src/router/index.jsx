import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppBarClient, AdminDrawer } from "../layouts";
import { HomeView, AboutView, AdminView , ContactosView ,ServiciosView, NosotrosView  } from "../pages";
import * as ROUTES from "./routes";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppBarClient />}>
          <Route path={ROUTES.HOME} element={<HomeView />} />
          <Route path={ROUTES.ABOUT} element={<AboutView />} />
          <Route path={ROUTES.CONTACTOS} element={<ContactosView />} />
          <Route path={ROUTES.SERVICIOS} element={<ServiciosView />} />
          <Route path={ROUTES.NOSOTROS} element={<NosotrosView />} />
        </Route>
        <Route element={<AdminDrawer />}>
          <Route path={ROUTES.ADMIN} element={<AdminView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

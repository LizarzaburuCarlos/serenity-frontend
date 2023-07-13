import { Route } from "react-router-dom";

import AppSwitch from "../AppSwitch";
import GuestRouteUser from "../GhestRoutesUser";
import ProtectedRoutesUser from "../ProtectedRoutesUser";

import paths from "../paths";

import NotFound from "../../../NotFound";
import LoginUsuario from "../../../user/login";
import Home from "../../../home/Home";
import { InfoAyudaPag } from "../../../user/informacion-ayuda/ver-info";
import { CitasComponent } from "../../../user/citas/citas";
import { MyHorarioComponent } from "../../../user/my-horario/my-horario";
import { SolicitudesComponent } from "../../../user/solicitudes/solicitudes";
import RegistroUsuario from "../../../user/registro";
import Page from "../../../page/page";
import LoginClient from "../../../client/login";
import RegistroClient from "../../../client/registro";
import { EspecialistaPage } from "../../../client/ver-especialistas/ver-especialista/especialista";
import { EspecialistasPag } from "../../../client/ver-especialistas/ver-especialistas";
import { HistorialComponent } from "../../../client/historial-citas/historial";
import { ForosPag } from "../../../client/foros/ver-foros";
import { VerForoPag } from "../../../client/foros/ver-foro/ver-foro";

const AppRouter = () => {
  return (
    <AppSwitch>
      <Route path={paths.root} element={<Page />} />
      <Route path={paths.general.notFound} element={<NotFound />} />

      {/* CLIENT */}
      <Route element={<GuestRouteUser pathname={paths.client.home} />}>
        <Route path={paths.client.login} element={<LoginClient />} />
        <Route path={paths.client.registro} element={<RegistroClient />} />
      </Route>
      <Route element={<ProtectedRoutesUser pathname={paths.client.login} />}>
        <Route path={paths.client.home} element={<Home />} />
        <Route path={paths.client.infoAyuda} element={<InfoAyudaPag />} />
        <Route
          path={paths.client.especialistas}
          element={<EspecialistasPag />}
        />
        <Route
          path={paths.client.especialistasVerEspecialista}
          element={<EspecialistaPage />}
        />
        <Route path={paths.client.historial} element={<HistorialComponent />} />
      </Route>

      {/* USER */}
      <Route element={<GuestRouteUser pathname={paths.user.home} />}>
        <Route path={paths.user.login} element={<LoginUsuario />} />
        <Route path={paths.user.registro} element={<RegistroUsuario />} />
      </Route>
      <Route element={<ProtectedRoutesUser pathname={paths.user.login} />}>
        <Route path={paths.user.home} element={<Home />} />
        <Route path={paths.user.infoAyuda} element={<InfoAyudaPag />} />
        <Route path={paths.client.foros} element={<ForosPag />} />
        <Route path={paths.client.forosVerForo} element={<VerForoPag />} />

        <Route path={paths.user.citas} element={<CitasComponent />} />
        <Route path={paths.user.myHorario} element={<MyHorarioComponent />} />
        <Route
          path={paths.user.solicitudes}
          element={<SolicitudesComponent />}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </AppSwitch>
  );
};

export default AppRouter;

import { Outlet } from "react-router-dom";
import storage from "../../utils/storage";
import RedirectRoute from "../RedirectRoute";
import MenuUser from "../../../user/MenuUser/MenuUser";
import { useSerenityContext } from "../../contexts/SerenityProvider";

type ProtectedRoutesUserProps = {
  pathname: string;
};

const ProtectedRoutesUser: React.FC<ProtectedRoutesUserProps> = ({
  pathname,
}) => {
  const { user, clearAll } = useSerenityContext();
  const isAuthenticated = !!user.getUser()?.id;

  if (!isAuthenticated) {
    clearAll();
    storage.clear();
    return <RedirectRoute pathname={pathname} />;
  }

  return (
    <MenuUser>
      <Outlet />
    </MenuUser>
  );
};

export default ProtectedRoutesUser;

import { Outlet } from "react-router-dom";
import RedirectRoute from "../RedirectRoute";
import { useSerenityContext } from "../../contexts/SerenityProvider";

type GuestRouteUserProps = {
  pathname: string;
};

const GuestRouteUser: React.FC<GuestRouteUserProps> = ({ pathname }) => {
  const { user } = useSerenityContext();
  const isAuthenticated = !!user.getUser()?.id;

  if (isAuthenticated) {
    return <RedirectRoute pathname={pathname} />;
  }

  return (
    <div className="login-provider">
      <Outlet />
    </div>
  );
};

export default GuestRouteUser;

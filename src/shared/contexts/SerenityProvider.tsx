import { createContext, useContext } from "react";
import { UserType } from "../types/user.type";
import { usePersistedState } from "../hooks/usePersistedState";

const appSerenityUserStateKey = "serenety:user";

const initialUserState: UserType = {
  id: 0,
  name: "",
  lastName: "",
  rol: "",
  email: "",
  password: "",
};

export const SerenityContext = createContext<{
  user: {
    getUser: () => UserType | undefined;
    setUser: (user: UserType) => void;
  };
  clearAll: () => void;
} | null>(null);

export const useSerenityContext = () => {
  const context = useContext(SerenityContext);

  if (context === null) {
    throw new Error(
      "useSerenityContext must be used within a SerenityProvider"
    );
  }

  return context;
};

type SerenityProviderProps = {
  children: React.ReactNode;
};

export const SerenityProvider = ({ children }: SerenityProviderProps) => {
  const [userState, setUserState] = usePersistedState<UserType>(
    appSerenityUserStateKey,
    initialUserState
  );

  const getUser = () => {
    return userState;
  };

  const setUser = (user: UserType) => {
    setUserState(user);
  };

  const clearAll = () => {
    setUserState(initialUserState);
  };

  return (
    <SerenityContext.Provider
      value={{
        user: {
          getUser,
          setUser,
        },
        clearAll,
      }}
    >
      {children}
    </SerenityContext.Provider>
  );
};

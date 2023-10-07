import { useState } from "react";

export type User = {
  id: string;
  name: string;
  token: string;
};

export function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const [panel, setPanel] = useState(false);

  const updatePanel = (status: boolean) => {
    setPanel(status);
  };

  const updateUser = (data: User | null) => {
    setUser(data);
  };

  const login = (data: User) => {
    // login logic
    updateUser(data);
  };

  const logout = () => {
    updateUser(null);
    updatePanel(false);
  };

  return {
    user,
    panelOpen: panel,
    updatePanel,
    updateUser,
    login,
    logout,
  };
}

import { atom, useAtom } from "jotai";
import { useState } from "react";

export type User = {
  id: string;
  name: string;
  token: string;
};

const panelAtom = atom(false);

export function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const [panel, setPanel] = useAtom(panelAtom);

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

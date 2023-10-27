import { atom, useAtom } from "jotai";
import { useState } from "react";

export type User = {
  id: string;
  name: string;
  token: string;
};

const panelAtom = atom(false);
const typeAtom = atom<"login" | "signOut">("login");

export function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const [panel, setPanel] = useAtom(panelAtom);
  const [type, setType] = useAtom(typeAtom);

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

  const signOutEmail = ({
    email,
    password,
    username,
  }: {
    email: string;
    password: string;
    username: string;
  }) => {
    if (!email || !password || !username) {
      return;
    }
    // fetch post
    fetch("/api/v1/auth/email/register", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        username,
      }),
    });
  };

  const signOutPhone = ({
    phoneNumber,
    password,
    username,
  }: {
    phoneNumber: string;
    password: string;
    username: string;
  }) => {
    if (!phoneNumber || !password || !username) {
      return;
    }
    // fetch post
    fetch("/api/v1/auth/email/register", {
      method: "POST",
      body: JSON.stringify({
        phoneNumber: phoneNumber.includes("+86")
          ? phoneNumber
          : "+86" + phoneNumber,
        password,
        username,
      }),
    });
  };

  return {
    user,
    panelOpen: panel,
    updatePanel,
    updateUser,
    login,
    logout,
    type,
    setType,
    signOutEmail,
    signOutPhone
  };
}

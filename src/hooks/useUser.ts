import { request } from "@/utils/request";
import { atom, useAtom } from "jotai";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import useSWR from "swr";
import { useEffect } from "react";

export type User = any;

const panelAtom = atom(false);
const typeAtom = atom<"login" | "signOut">("login");
const userAtom = atom<User | null>(null);

export function useUser() {
  const [user, setUser] = useAtom(userAtom);
  const [panel, setPanel] = useAtom(panelAtom);
  const [type, setType] = useAtom(typeAtom);

  const updatePanel = (status: boolean) => {
    setPanel(status);
  };

  const updateUser = (data: User | null) => {
    setUser(data);
  };

  const { data, error, isLoading, mutate } = useSWR("/api/v1/auth/me", () => {
    return request({
      url: "/api/v1/auth/me",
      method: "GET",
      data: {},
    });
  });

  useEffect(() => {
    if (data?.id) {
      setUser(data);
    }
  }, [data]);

  const logout = () => {
    updateUser(null);
    updatePanel(false);
    Cookies.remove("token");
    Cookies.remove("refreshToken");
  };

  const signOutEmail = async ({
    email,
    password,
    username,
  }: {
    email?: string;
    password?: string;
    username?: string;
  }) => {
    console.log("email", email, password, username);
    if (!email || !password || !username) {
      toast.error("请填写完整信息");
      return;
    }
    const res = await request({
      url: "/api/v1/auth/email/register",
      method: "POST",
      data: { email, password, username },
    });
    if (res.message) {
      toast.error(res.message);
    } else {
      // 直接登录
      loginEmail({ email, password });
    }
  };

  const signOutPhone = async ({
    phoneNumber,
    password,
    username,
  }: {
    phoneNumber?: string;
    password?: string;
    username?: string;
  }) => {
    if (!phoneNumber || !password || !username) {
      toast.error("请填写完整信息");
      return;
    }
    const res = await request({
      url: "/api/v1/auth/phone/register",
      method: "POST",
      data: {
        phoneNumber: phoneNumber.includes("+86")
          ? phoneNumber
          : "+86" + phoneNumber,
        password,
        username,
      },
    });
    if (res.message) {
      toast.error(res.message);
    } else {
      // 直接登录
      loginPhone({ phoneNumber, password });
    }
  };

  const loginEmail = async ({
    email,
    password,
  }: {
    email?: string;
    password?: string;
  }) => {
    if (!email || !password) {
      toast.error("请填写完整信息");
      return;
    }
    const res = await request({
      url: "/api/v1/auth/email/login",
      method: "POST",
      data: { email, password },
    });
    if (res.message) {
      toast.error(res.message);
    } else {
      if (res?.user) {
        setUser(res.user);
      }
      const token = res?.token;
      const refreshToken = res?.refreshToken;
      const tokenExpires = res?.tokenExpires;
      if (token) {
        Cookies.set("token", token);
        Cookies.set("refreshToken", refreshToken);
      }
      mutate()
    }
  };

  const loginPhone = async ({
    phoneNumber,
    password,
  }: {
    phoneNumber?: string;
    password?: string;
  }) => {
    if (!phoneNumber || !password) {
      toast.error("请填写完整信息");
      return;
    }
    const res = await request({
      url: "/api/v1/auth/phone/login",
      method: "POST",
      data: {
        phoneNumber: phoneNumber.includes("+86")
          ? phoneNumber
          : "+86" + phoneNumber,
        password,
      },
    });
    if (res.message) {
      toast.error(res.message);
    } else {
      if (res?.user) {
        setUser(res.user);
      }
      const token = res?.token;
      const refreshToken = res?.refreshToken;
      const tokenExpires = res?.tokenExpires;
      if (token) {
        Cookies.set("token", token);
        Cookies.set("refreshToken", refreshToken);
      }
      mutate()
    }
  };

  return {
    user,
    panelOpen: panel,
    updatePanel,
    updateUser,
    logout,
    type,
    setType,
    signOutEmail,
    signOutPhone,
    loginEmail,
    loginPhone,
  };
}

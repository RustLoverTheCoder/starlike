import { useState } from "react";

export function useMenu() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  const setMenu = (status: boolean) => {
    setOpen(status);
  };

  return {
    menuOpen: open,
    toggleMenu,
    setMenu,
  };
}

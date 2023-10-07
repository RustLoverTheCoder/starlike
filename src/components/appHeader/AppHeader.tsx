import { Fragment, useState } from "react";
import { useUser } from "@hooks/useUser";
import { useMenu } from "@hooks/useMenu";

export const AppHeader = () => {
  const [module, setModule] = useState("");
  const { menuOpen, toggleMenu } = useMenu();
  const { user, panelOpen, updatePanel, logout } = useUser();

  const handleToggleMenu = () => {
    if (menuOpen === false) {
      updatePanel(false);
    }

    toggleMenu();
  };

  const handleShowPanel = (m: boolean) => {
    toggleMenu();

    if (panelOpen) {
      if (panelOpen !== m) {
        updatePanel(m);
      } else {
        updatePanel(false);
      }
    } else {
      updatePanel(m);
    }
  };

  const handleLogout = () => {
    updatePanel(false);
    logout();
  };
  return (
    <header
      className={
        "fixed w-full box-border flex justify-between items-center z-[101] select-none pt-[2.72vh] pb-0 px-[2.35vw] left-0 top-0"
      }
    >
      <a className="hy-logo group relative h-8" href="/home">
        <div className="absolute top-0 right-0 left-0 bottom-0">
          <img
            src="/images/common/logo_game_active.png"
            alt=""
            className="h-8 object-contain object-center opacity-0 transition-all duration-[0.3s] group-hover:opacity-100"
          />
        </div>
        <img
          src="/images/common/logo_game.png"
          alt=""
          className="h-8 opacity-100 transition-all duration-[0.3s] object-contain object-center"
        />
      </a>
    </header>
  );
};

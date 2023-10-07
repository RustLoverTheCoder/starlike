import { useUser } from "@hooks/useUser";
import { useMenu } from "@hooks/useMenu";
import { cn } from "@utils/cn";

export const AppHeader = () => {
  const { menuOpen, toggleMenu } = useMenu();
  const { user, panelOpen, updatePanel, logout } = useUser();

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
      <div className="hy-tools flex items-center space-x-3">
        {!user && (
          <>
            <div
              className="relative text-[white] hover:text-[#dab061] tracking-wider transition-all duration-[0.3s] flex items-center"
              onClick={() => handleShowPanel(true)}
            >
              <img
                src="/images/common/icon_login.png"
                alt=""
                className="w-4 h-4 mr-2"
              />
              登录
            </div>
            <div
              onClick={() => handleShowPanel(true)}
              className="relative text-[white] hover:text-[#dab061] tracking-wider transition-all duration-[0.3s] flex items-center"
            >
              <img
                src="/images/common/icon_register.png"
                alt=""
                className="w-4 h-4 mr-2"
              />
              注册
            </div>
          </>
        )}
        <div
          className={`hy-menu_enter h-3 w-5 relative group`}
          onClick={toggleMenu}
        >
          <span
            className={cn(
              "hy-line_top inline-block absolute w-full h-0.5 left-0 bg-white duration-[0.5s] ease-[ease-in-out] origin-center",
              menuOpen ? "rotate-[135deg] top-1/4" : "top-0"
            )}
          ></span>
          <span
            className={cn(
              "hy-line_bottom inline-block absolute w-[72%] h-0.5 duration-[0.5s] ease-[ease-in-out] origin-center left-0 bottom-0 bg-white group-hover:w-full",
              menuOpen ? "w-full rotate-[-135deg] bottom-[60%]" : ""
            )}
          ></span>
        </div>
      </div>
    </header>
  );
};

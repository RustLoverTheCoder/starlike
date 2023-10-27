import { useUser } from "@hooks/useUser";
import { useMenu } from "@hooks/useMenu";
import { cn } from "@utils/cn";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { LoginModal } from "./LoginModal";
import "./AppHeader.css";
import { GalleryModal } from "./galleryModal";
import { useAtom, useSetAtom } from "jotai";
import { showGalleryModalAtom } from "./atoms";

export const AppHeader = () => {
  const { menuOpen, toggleMenu, setMenu } = useMenu();
  const { user, panelOpen, updatePanel, logout, setType } = useUser();

  const handleShowPanel = (m: boolean) => {
    updatePanel(m);
  };

  const handleLogout = () => {
    updatePanel(false);
    logout();
  };
  return (
    <>
      <header
        className={
          "fixed w-full box-border flex justify-between items-center z-[101] select-none pt-[2.72vh] pb-0 px-[2.35vw] left-0 top-0"
        }
      >
        <Logo />
        <div className="hy-tools flex items-center space-x-3">
          {!user && (
            <>
              <div
                className="relative text-[white] hover:text-[#dab061] tracking-wider transition-all duration-[0.3s] flex items-center"
                onClick={() => {
                  setType('login')
                  handleShowPanel(true)
                }}
              >
                <img
                  src="/images/common/icon_login.png"
                  alt=""
                  className="w-4 h-4 mr-2"
                />
                登录
              </div>
              <div
                onClick={() => {
                  setType('signOut')
                  handleShowPanel(true)
                }}
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
            onClick={() => {
              console.log("1");
              toggleMenu();
            }}
          >
            <span
              className={cn(
                "hy-line_top inline-block absolute w-full h-0.5 left-0 bg-white duration-[0.3s] ease-[ease-in-out] origin-center",
                menuOpen ? "rotate-[135deg] top-1/4" : "top-0"
              )}
            />
            <span
              className={cn(
                "hy-line_bottom inline-block absolute w-[72%] h-0.5 duration-[0.3s] ease-[ease-in-out] origin-center left-0 bottom-0 bg-white group-hover:w-full",
                menuOpen ? "w-full rotate-[-135deg] bottom-[60%]" : ""
              )}
            />
          </div>
        </div>
      </header>
      {/* user */}
      <LoginModal />
      {/* menu */}
      <Dialog
        open={menuOpen}
        onClose={() => setMenu(false)}
        className="relative z-[100]"
      >
        <div
          className="fixed top-0 right-0 bottom-0 left-0"
          aria-hidden="true"
        />
        <Transition
          show={menuOpen}
          enter="transition duration-100 ease-out"
          enterFrom="transform opacity-0"
          enterTo="transform opacity-100"
          leave="transition ease-out"
          leaveFrom="transform opacity-100"
          leaveTo="transform opacity-0"
          as={Fragment}
        >
          <div
            className="fixed top-0 right-0 bottom-0 left-0 flex w-screen items-center justify-center p-4"
            style={{
              background:
                "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0.9) 100%)",
            }}
          >
            <Dialog.Panel as={Fragment}>
              <>
                <div
                  className="hy-close-area absolute -top-8 w-[400px] h-[20vh] bg-[url(/images/menu/close\_area.png)] bg-no-repeat bg-center bg-contain right-0"
                  onClick={() => setMenu(false)}
                >
                  <div className="hy-close-btn absolute w-[3px] h-[39px] bg-[#ffd776] shadow-[0_0_8px_#ff8d28,0_0_8px_#ff8d28] right-9 top-24" />
                </div>
                <MenuNav />
              </>
            </Dialog.Panel>
          </div>
        </Transition>
      </Dialog>
      <GalleryModal />
    </>
  );
};

const MenuNav = () => {
  const setShowGalleryModalAtom = useSetAtom(showGalleryModalAtom);
  const navList = [
    {
      en: "chronicle",
      cn: "编年史",
      url: "/",
      click: () => {
        window.open("/", "_self");
      },
    },
    {
      en: "home",
      cn: "首页",
      url: "/home",
      click: () => {
        window.open("/home", "_self");
      },
    },
    {
      en: "game introduction",
      cn: "游戏介绍",
      url: "/introduction",
      click: () => {
        window.open("/introduction", "_self");
      },
    },
    {
      en: "camp",
      cn: "阵营",
      url: "/alliance",
      click: () => {
        window.open("/alliance", "_self");
      },
    },
    {
      en: "starship",
      cn: "星舰",
      url: "/starship",
      click: () => {
        window.open("/starship", "_self");
      },
    },
    {
      en: "celestial body",
      cn: "天体",
      url: "/celestial_body",
      click: () => {
        window.open("/celestial_body", "_self");
      },
    },
    {
      en: "starwhisperer",
      cn: "星语者",
      url: "/starwhisperer",
      click: () => {
        window.open("/starwhisperer", "_self");
      },
    },
    {
      en: "gallery",
      cn: "设定集",
      url: "/gallery",
      click: () => {
        setShowGalleryModalAtom(true);
      },
    },
  ];

  const [currentNav, setCurrentNav] = useState(0);
  const getRandomNumber = (min: string | number, max: string | number) => {
    min = parseInt(String(min));
    max = parseInt(String(max));
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const randomPoint = () => {
    return {
      top: `${getRandomNumber(35, 65)}%`,
      right: `${getRandomNumber(15, 55)}%`,
      animationDelay: `${getRandomNumber(0, 30) / 10}s`,
    };
  };

  return (
    <div className="absolute w-auto top-[16vh] bottom-0 right-0">
      <div className="hy-nav-line absolute w-0.5 h-[100%] bg-[linear-gradient(to_bottom,rgba(116,96,54,0)_0%,#746036_3%,#746036_85%,rgba(116,96,54,0)_100%)] right-9" />
      <div className="hy-nav-wrapper flex flex-col space-y-8 mr-9">
        {navList.map((item, index) => (
          <div
            onMouseOver={() => setCurrentNav(index)}
            className="hy-item relative shrink-0 inline-block text-white self-end text-right outline-none"
            key={item.url}
            onClick={() => {
              item.click && item.click();
            }}
          >
            <div
              className={cn(
                "hy-item-bg absolute -translate-y-2/4 translate-x-[40px] right-[-250px] h-[146px] w-[613px] transition-all duration-[0.4s] ease-[cubic-bezier(0.4,0.01,0.36,0.71)] bg-[url(/images/menu/menu_light.png)] bg-no-repeat bg-contain bg-[left_center] top-2/4",
                index === currentNav
                  ? "opacity-100 -translate-y-2/4 translate-x-0"
                  : "opacity-0"
              )}
            >
              <div className="relative w-full h-full">
                {Array.from({ length: 17 }).map((_, index) => (
                  <div
                    className={cn(
                      "hy-spots inline-block bg-[#baab58] absolute animate-[navLightSopts_3s_ease-in_infinite] w-0.5 h-0.5 rounded-[50%]",
                      index === currentNav ? "opacity-100" : "opacity-0"
                    )}
                    key={index}
                    style={randomPoint()}
                  />
                ))}
              </div>
            </div>

            <div className="hy-item-container relative z-[2] pr-6 cursor-pointer">
              <div className="hy-text mr-6">
                <div
                  className={cn(
                    "hy-cn text-[18px] font-[lighter] transition-all duration-[0.3s] ease-[cubic-bezier(0.4,0.01,0.36,0.71)] text-[white]",
                    index === currentNav ? "text-[#f5c75a]" : "text-[white]"
                  )}
                  style={{ textShadow: "0 5px 8px #000000" }}
                >
                  {item.cn}
                </div>
                <div
                  className={cn(
                    "hy-en text-xs font-normal transition-all duration-[0.5s] ease-[cubic-bezier(0.4,0.01,0.36,0.71)] uppercase mb-[5px]",
                    index === currentNav ? "text-[#966c19]" : "text-[#8e9ca9]"
                  )}
                >
                  {item.en}
                </div>
              </div>

              <div
                className={cn(
                  "hy-icon absolute z-[2] right-[-25.6px] translate-y-[-28px] translate-x-[5px] w-[53.6px] h-[53.6px] transition-all duration-[0.2s] bg-[url(/images/menu/icon.png)] bg-no-repeat bg-center bg-contain top-2/4",
                  index === currentNav ? "opacity-100" : "opacity-0"
                )}
              />
              <div
                className={cn(
                  "hy-point absolute z-[1] -translate-y-1 right-[-3.2px] w-2 h-2 bg-[#746036] rounded-full top-2/4",
                  index === currentNav ? "opacity-0" : "opacity-100"
                )}
              />
              {index === currentNav && (
                <div className="w-0.5 h-24 bg-[linear-gradient(to_bottom,#fbe68e_0%,#fbe68e_80%,#746036_100%)] absolute right-0 -translate-y-16" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Logo = () => {
  return (
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
  );
};

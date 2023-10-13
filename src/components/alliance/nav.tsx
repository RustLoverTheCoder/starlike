import { cn } from "@utils/cn";
import './nav.css'

export const AllianceNav = ({ type }: { type: string }) => {
  const list = [
    {
      name: "selene",
      path: "/alliance/selene",
    },
    {
      name: "empire",
      path: "/alliance/empire",
    },
    {
      name: "cpgu",
      path: "/alliance/cpgu",
    },
    {
      name: "moutainpass",
      path: "/alliance/moutainpass",
    },
    {
      name: "federation",
      path: "/alliance/federation",
    },
  ];
  return (
    <div className="fixed left-0 right-0 bottom-5 pointer-events-none flex justify-center items-center">
      <div className="pointer-events-auto flex items-center">
        {list.map((i) => {
          const active = i.name === type;
          return (
            <a key={i.name} href={i.path} className="w-auto h-auto relative">
              <img
                src="/images/alliance-info/nav/bg.png"
                alt=""
                className="h-[42px]"
              />
              {/* icon */}
              <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                <img
                  src={`/images/alliance/${i.name}_icon.png`}
                  alt=""
                  className="h-5"
                />
              </div>
              <div className="absolute left-0 right-0 bottom-0 flex justify-center items-center">
                <div
                  className={cn("h-1 transition-all", active ? "w-8 nav-line-active" : "w-6 bg-[#52555a]")}
                ></div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

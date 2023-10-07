import { cn } from "@utils/cn";
import { useAtomValue } from "jotai";
import { yearAtom } from "./atoms";

export const Events = () => {
  const direction = "right";
  const year = useAtomValue(yearAtom)
  return (
    <div
      className="w-screen h-screen relative text-white"
      style={{
        textShadow:
          "0 5px 8px rgba(0, 0, 0, 0.38), 0 5px 8px rgba(0, 0, 0, 0.38)",
      }}
    >
      <img
        src={`/images/events/${year}.webp`}
        alt="events"
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute w-screen box-border px-[129px] py-0 left-0 bottom-[18vh]">
        <div
          className="hy-info relative w-full h-full"
          style={{
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }}
        >
          {/* time */}
          <div className="hy-section_time relative font-normal mb-[42px]">
            <h1 className={cn("text-white", "text-right")}>
              <div className="relative z-10 translate-y-4">
                <span className="text-[135.6px] leading-none">138</span>
                <span className="text-[48px] top-[15px]">亿年前</span>
              </div>
            </h1>
          </div>
          {/* content */}
          <div className="relative">
            <div
              className={cn(
                "flex items-center",
                direction === "right" ? "justify-end" : ""
              )}
            >
              <div
                className={cn(direction === "right" ? "text-right mr-5" : "")}
              >
                <div className="text-[30px] mb-3 font-medium leading-[1]">
                  宇宙大爆炸
                </div>
                <div className="uppercase text-[15px]">The Big Bang</div>
              </div>
              {/* icon */}
              <div className="w-[19.2px] h-[52.2px] box-border shadow-[0_0_19.2px_rgba(255,141,40,0.84),0_0_19.2px_rgba(255,141,40,0.84)] border-[4.8px] border-solid border-[#ffe6b7]">
                <div className="w-full h-full shadow-[0_0_9.6px_rgba(255,141,40,0.84)_inset,0_0_9.6px_rgba(255,141,40,0.84)_inset] m-0 p-0" />
              </div>
            </div>
          </div>
          {/* desribe */}
          <div className="flex justify-end">
            <div className="max-w-[510px] text-xs text-[white] tracking-[0.75px] leading-normal font-[lighter] mt-[32.4px] px-0 py-[8px] border-t-2 border-t-[#e5bc76] border-solid">
              <p>
                <span
                  className="relative text-[#ffe6b7]"
                  style={{
                    textShadow:
                      "0 5px 8px rgba(0, 0, 0, 0.38), 0 5px 8px rgba(0, 0, 0, 0.38)",
                  }}
                >
                  138亿年前*
                </span>
                ，一场温度极高、尺度极小的大爆炸启动了新一轮
                <span
                  className="relative text-[#ffe6b7]"
                  style={{
                    textShadow:
                      "0 5px 8px rgba(0, 0, 0, 0.38), 0 5px 8px rgba(0, 0, 0, 0.38)",
                  }}
                >
                  宇宙呼吸的进程*
                </span>
                。
                伴随着持续的膨胀，宇宙的温度和密度迅速下降，使宇宙得以完成原初核合成。在随后的漫长岁月中,
                原子和分子们逐渐复合成为各种气体和尘埃，在分裂、坍缩、聚拢中形成了古老星云的雏形，逐渐开始了对恒星的孕育。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

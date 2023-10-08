import { useState } from "react";
import { Dialog } from "@headlessui/react";
const videoList = [
  {
    title: "《2023偌星告别视频》",
    path: "//player.bilibili.com/player.html?aid=259093525&bvid=BV1Ua411Z7BY&cid=789750417&p=1&high_quality=1",
    bg: "/images/video/0.webp",
  },
  {
    title: "HINNA（海娜）-太空策略游戏《偌星》赛琳娜之耀阵营氛围曲",
    path: "//player.bilibili.com/player.html?aid=516099491&bvid=BV1Ag411v7pY&cid=847828741&p=1&high_quality=1",
    bg: "/images/video/1.webp",
  },
  {
    title: "【战研会客】太空科幻策略游戏《偌星》开发者访谈",
    path: "//player.bilibili.com/player.html?aid=346225602&bvid=BV1yR4y1d74u&cid=849507784&p=1&high_quality=1",
    bg: "/images/video/2.webp",
  },
  {
    title: "HUI SU（辉夙）-太空策略游戏《偌星》一体汉和阵营氛围曲",
    path: "//player.bilibili.com/player.html?aid=561425744&bvid=BV18e4y1q7Jx&cid=856974836&p=1&high_quality=1",
    bg: "/images/video/3.webp",
  },
];
export const AudioBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(videoList[0]);
  return (
    <>
      <div
        className="absolute ml-[-50px] mt-[-50px] w-[100px] h-[100px] opacity-100 transition-all duration-[0.5s] left-2/4 top-2/4 hover:scale-110 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <img
          src="/images/home/video-play.png"
          alt=""
          className="object-contain"
        />
      </div>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-[999]"
      >
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-black/50"
          aria-hidden="true"
        />

        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center px-[200px] pt-[40px] md:pt-[60px] lg:pt-[80px] overflow-y-auto overflow-x-hidden">
          <Dialog.Panel className="w-full flex flex-col h-auto justify-center">
            <div className="w-full text-white text-[24px]">
              {currentVideo.title}
            </div>

            <iframe
              src={currentVideo.path}
              className="aspect-video mt-1 mb-11 max-h-[70vh]"
            />
            <div className="w-full overflow-y-hidden overflow-x-auto h-[120px] flex items-center space-x-7 pointer-events-none">
              {videoList.map((video) => {
                return (
                  <div key={video.path} className="h-[120px] aspect-video rounded-lg overflow-hidden relative cursor-pointer pointer-events-auto" onClick={() => setCurrentVideo(video)}>
                    <img
                      src={video.bg}
                      alt=""
                      className="h-[120px] aspect-video rounded-lg overflow-hidden object-cover object-center"
                    />
                  </div>
                );
              })}
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

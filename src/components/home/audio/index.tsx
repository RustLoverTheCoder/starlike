import { useState } from "react";
import { Dialog } from "@headlessui/react";
export const AudioBtn = () => {
  let [isOpen, setIsOpen] = useState(false);
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
              《2023偌星告别视频》
            </div>
            <iframe
              src="https://player.bilibili.com/player.html?cid=789750417&aid=259093525&page=1&as_wide=1&high_quality=1&danmaku=0"
              className="aspect-video mt-1 mb-11 max-h-[70vh]"
            />
            <div className="w-full overflow-y-hidden overflow-x-auto h-[120px] flex items-center space-x-7">
              <div className="bg-black h-[120px] aspect-video rounded-lg overflow-hidden"></div>
              <div className="bg-black h-[120px] aspect-video rounded-lg overflow-hidden"></div>
              <div className="bg-black h-[120px] aspect-video rounded-lg overflow-hidden"></div>
              <div className="bg-black h-[120px] aspect-video rounded-lg overflow-hidden"></div>
              <div className="bg-black h-[120px] aspect-video rounded-lg overflow-hidden"></div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

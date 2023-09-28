import { useState } from "react";
import { Dialog } from "@headlessui/react";
export const AudioBtn = () => {
  let [isOpen, setIsOpen] = useState(true);
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

        <div className="fixed top-0 left-0 right-0 bottom-0 flex w-screen items-center justify-center p-4">
          <Dialog.Panel className="w-auto">
            <iframe src="//player.bilibili.com/player.html?aid=259093525&bvid=BV1Ua411Z7BY&cid=789750417&p=1&high_quality=1" className="aspect-video h-[70vh]" />
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

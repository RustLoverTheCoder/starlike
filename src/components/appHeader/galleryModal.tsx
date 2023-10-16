import { useAtom } from "jotai";
import { showGalleryModalAtom } from "./atoms";
import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { cn } from "@utils/cn";

export const GalleryModal = () => {
  const [show, setShow] = useAtom(showGalleryModalAtom);
  const images = ["01", "02", "03", "04", "05", "06"];
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <Dialog
        open={show}
        onClose={() => setShow(false)}
        className="relative z-[102]"
      >
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div className="fixed inset-0 bg-black/[67]" aria-hidden="true" />

        {/* Full-screen scrollable container */}
        <div className="fixed top-0 right-0 bottom-0 left-0 w-screen overflow-hidden">
          {/* Container to center the panel */}
          <div className="flex min-h-full items-center justify-center px-[200px] relative">
            {/* The actual dialog panel  */}
            <Dialog.Panel className="w-full h-auto grid grid-cols-3 gap-x-[38px] gap-y-[33px]">
              {images.map((image) => {
                return (
                  <div className="relative h-auto" key={image}>
                    <img
                      src={`/images/gallery/${image}.webp`}
                      alt=""
                      className="w-full"
                    />
                  </div>
                );
              })}
            </Dialog.Panel>
            <Dialog.Panel className="absolute right-[200px] bottom-14">
              <div className="flex items-center space-x-8">
                <div
                  onClick={() => setActiveTab(0)}
                  className={cn(
                    "transition-all duration-300 text-2xl cursor-pointer",
                    activeTab === 0 ? "text-[#FFE19E]" : "text-[#5E5E5E]"
                  )}
                >
                  概念设定
                </div>
                <div
                  onClick={() => setActiveTab(1)}
                  className={cn(
                    "transition-all duration-300 text-2xl cursor-pointer",
                    activeTab === 1 ? "text-[#FFE19E]" : "text-[#5E5E5E]"
                  )}
                >
                  人物设定
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

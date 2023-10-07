import { cn } from "@utils/cn";
import { useState } from "react";
import "./Audio.css";

export const Audio = () => {
  const [audioPlayStatus, setAudioPlayStatus] = useState(false);
  return (
    <div
      className="h-5 fixed flex items-center z-[100] mb-[21px] left-[35.875px] bottom-[51.75px] cursor-pointer hover:opacity-70"
      onClick={() => {
        setAudioPlayStatus(!audioPlayStatus);
      }}
    >
      <span
        className={cn(
          "inline-block w-0.5 h-full ml-[3px] bg-white",
          "h-[70%]",
          audioPlayStatus && "audio_line"
        )}
      />
      <span
        className={cn(
          "inline-block w-0.5 h-full ml-[3px] bg-white",
          "h-[50%]",
          audioPlayStatus && "audio_line"
        )}
      />
      <span
        className={cn(
          "inline-block w-0.5 h-full ml-[3px] bg-white",
          "h-[100%]",
          audioPlayStatus && "audio_line"
        )}
      />
      <span
        className={cn(
          "inline-block w-0.5 h-full ml-[3px] bg-white",
          "h-[50%]",
          audioPlayStatus && "audio_line"
        )}
      />
      <span
        className={cn(
          "inline-block w-0.5 h-full ml-[3px] bg-white",
          "h-[30%]",
          audioPlayStatus && "audio_line"
        )}
      />
    </div>
  );
};

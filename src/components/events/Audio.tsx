import { cn } from "@utils/cn";

export const Audio = () => {
  return (
    <div className="h-5 fixed flex items-center z-[100] mb-[21px] left-[35.875px] bottom-[51.75px]">
      <span
        className={cn("inline-block w-0.5 h-full ml-[3px] bg-white", "h-[70%]")}
      />
      <span
        className={cn("inline-block w-0.5 h-full ml-[3px] bg-white", "h-[50%]")}
      />
      <span
        className={cn(
          "inline-block w-0.5 h-full ml-[3px] bg-white",
          "h-[100%]"
        )}
      />
      <span
        className={cn("inline-block w-0.5 h-full ml-[3px] bg-white", "h-[50%]")}
      />
      <span
        className={cn("inline-block w-0.5 h-full ml-[3px] bg-white", "h-[30%]")}
      />
    </div>
  );
};

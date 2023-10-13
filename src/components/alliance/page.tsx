export interface AlliancePageType {
  type: "selene" | "moutainpass" | "federation" | "empire" | "cpgu";
}

export const AlliancePage = ({ type }: { type: string }) => {
  return (
    <div className="w-full h-full relative max-w-full max-h-full overflow-hidden">
      <img
        src={`/images/alliance-info/${type}_bg.jpg`}
        alt=""
        className="w-full h-full object-cover object-center"
      />
      {/* icon */}
      <div className="absolute top-0 left-0 w-[100px] h-[100px] flex justify-center items-center">
        <img
          src={`/images/alliance-info/${type}_icon.png`}
          alt=""
          className="w-[100px] h-[100px] object-contain"
        />
      </div>
      {/* person */}
      <div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-end">
        <img
          src={`/images/alliance-info/${type}_person.png`}
          alt=""
          className="h-full"
        />
      </div>
    </div>
  );
};

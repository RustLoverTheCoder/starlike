export interface AlliancePageType {
  type: "selene" | "moutainpass" | "federation" | "empire" | "cpgu";
}

type Info = {
  title: string;
  subTitle: string;
  data: { key: string; value: string }[];
};

export const AlliancePage = ({ type, info }: { type: string; info: Info }) => {
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
      {/* info */}
      <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
        <div className="container flex flex-col">
          <div className="text-7xl bg-[linear-gradient(#fffefe,#9e9aa1)] bg-clip-text mb-2">
            {info.title}
          </div>
          <div className="mb-10 text-2xl">{info.subTitle}</div>
          <div className="flex flex-col">
            {info.data.map((item) => (
              <div className="flex items-centers text-sm leading-7">
                <div>【{item.key}】：</div>
                <div>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

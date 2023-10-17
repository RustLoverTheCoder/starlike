export const FooterNav = ({
  current,
  setCurrent,
  list,
  nav,
}: {
  current: number;
  setCurrent: (n: number) => any;
  list: any[];
  nav: string;
}) => {
  return (
    <>
      {/* nav */}
      <div className="absolute left-[10vw] bottom-[7.6vh] text-[#7E704F] text-3xl z-[14]">
        <span
          className="cursor-pointer"
          onClick={() => {
            if (current > 0) {
              setCurrent(current - 1);
            } else {
              setCurrent(list.length);
            }
          }}
        >{`< `}</span>
        <span className="text-[#F5CE70]">{nav}</span>
        {`/2`}
        <span
          className="cursor-pointer"
          onClick={() => {
            if (current < list.length - 1) {
              setCurrent(current + 1);
            } else {
              setCurrent(0);
            }
          }}
        >{` >`}</span>
      </div>
    </>
  );
};

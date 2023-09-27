export const Nav = () => {
  return (
    <div className="fixed w-screen z-[99] select-none left-0 bottom-[51.75px]">
      {/* line */}
      <div className="absolute w-full flex select-none bottom-0">
        {/* hy-line-r */}
        <div className="w-[202px] bg-right bg-[url(/images/events/nav-line\_right.png)]" />
        <div className="w-[calc(100%_-_400px)] bg-[url(/images/events/nav-line\_middle.png)] bg-repeat" />
        <div />
      </div>
    </div>
  );
};

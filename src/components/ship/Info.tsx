export const ShipInfo = () => {
  return (
    <div className="w-full h-full relative">
      <img
        src="/images/ship/info/bg.webp"
        alt="bg"
        className="w-full h-full object-cover object-right"
      />
      <div className="absolute left-[20%] right-[20%] top-0 bottom-0">
        <img
          src="/images/ship/info/bg-center.webp"
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div
        className="absolute top-0 right-0 bottom-0 left-0 backdrop-blur bg-cover bg-no-repeat bg-right z-20"
        style={{
          clipPath: "polygon(66% 0, 100% 0, 100% 100%, 40% 100%)",
          backgroundImage: "url(/images/ship/info/bg-right.webp)",
        }}
      ></div>
      <div className="absolute top-[10%] left-[20%]">
        <img src="/images/ship/info/bg-icon.webp" alt="" className="h-[34vh]" />
      </div>
      {/* name */}
      <div className="absolute top-[10%] left-[20%]">
        <div className="flex items-center space-x-4">
          <div className="h-[100px] w-10 shadow-[0_0_10px_rgba(255,179,70,0.56),0_0_10px_rgba(255,179,70,0.56),0_0_10px_inset_rgba(255,179,70,0.56),0_0_10px_inset_rgba(255,179,70,0.56)] ml-6 border-2 border-solid border-[#ffd790]"></div>
          <div className="flex flex-col items-start">
            <div className="text-3xl">驱逐舰</div>
            <div className="text-2xl">DESTROYER</div>
            <div className="text-5xl">纳卡琳级</div>
          </div>
        </div>
      </div>
      {/* ship */}
      <div className="absolute left-[10%] top-0 right-0 bottom-0 z-[40] flex items-center">
        <img
          src="/images/ship/info/ship.webp"
          alt=""
          className="w-full -translate-y-16"
        />
      </div>
      {/* info */}
      <div className="absolute bottom-20 right-10 flex items-end justify-end space-x-6 z-[50]">
        <div className="flex flex-col text-[15px]">
          <div>帝国海军造船厂</div>
          <div>总吨位 100000</div>
          <div>全长 38000KM</div>
          <div>建造时间 NA3988</div>
          <div>总吨位 100000</div>
        </div>
        <div className="max-w-[36%] text-[15px]">
          自从我们被迫离开了地球故乡，开始了千年的银河流浪，人类孤独地来到了无垠的宇宙之中。生存下来，是我们目前最关注的事情
          作为空间站的指挥官、我们必须面对多样复杂的各种突发事件、谨慎选择我们的策略来平衡民众、各大势力、血统、思潮、以及星语者的各种需求。同时
          我们必须守护着人类的火种，以及这文明数千年的约定
        </div>
        <div className="flex flex-col space-y-10">
          <div className="w-[12vw] h-auto relative">
            <img
              src="/images/ship/info/compositeWeapon.webp"
              alt=""
              className="w-[12vw] h-[10svh] object-cover object-center"
            />
            <div className="absolute -right-8 -bottom-5 ">
              <div className="flex flex-col items-center">
                <div className="text-[24px] leading-[1.5]">复合武器</div>
                <div className="text-[15px]">COMPOSITE WEAPON</div>
              </div>
            </div>
          </div>
          <div className="w-[12vw] h-auto relative">
            <img
              src="/images/ship/info/energyWeapon.webp"
              alt=""
              className="w-[12vw] h-[10vh] object-cover object-center"
            />
            <div className="absolute -right-8 -bottom-5 ">
              <div className="flex flex-col items-center">
                <div className="text-[24px] leading-[1.5]">能量武器</div>
                <div className="text-[15px]">ENERGY WEAPONS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

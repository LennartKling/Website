const Hero = () => {
  return (
    <div className="flex mt-32 items-center">
      <div className="w-[50%]">
        <p className="text-7xl">
          Wlokno
          <br />
          Merchandise
        </p>
        <p className="text-xl mt-6 leading-tight">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
        <div className="flex items-center justify-center space-x-4 mt-6 px-8 py-2 bg-[#326B82] rounded-lg w-[175px]">
          <p className="text-white">Kontakt</p>
          <div className="relative w-[14px] h-[14px]">
            <img src="/images/arrow_right.png" alt="arrow" />
          </div>
        </div>
      </div>
      <div className="w-[50%] flex justify-end">
        <div className="relative">
          <img src="/images/hero.png" alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

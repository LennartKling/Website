const Hero = () => {
  return (
    <div className="px-6 2xl:px-0 sm:flex mt-14 sm:mt-32 items-center">
      <div className="sm:w-[60%]">
        <p className="text-3xl lg:text-7xl">
          Willkommen bei
          <br />
          Wlokno Merchandise
        </p>
        <p className="text-xl mt-6 leading-tight">
          Ihr Partner für hochwertige Textilveredelung in Deutschland.
          <br />
          <br /> Wlokno bringt Ihre Designs auf Textilien aller Art. Ob
          T-Shirts, Hoodies, Sweatpants oder Polo Shirts - wir veredeln Ihre
          Lieblingsstücke mit Ihren Wunschlogos.
        </p>
        <div className="flex items-center justify-center space-x-4 mt-6 px-8 py-2 bg-[#326B82] rounded-lg w-[175px]">
          <p className="text-white">Kontakt</p>
          <div className="relative w-[14px] h-[14px]">
            <img src="/images/arrow_right.png" alt="arrow" />
          </div>
        </div>
      </div>
      <div className="hidden sm:flex w-[50%] justify-end">
        <div className="relative">
          <img src="/images/hero.png" alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

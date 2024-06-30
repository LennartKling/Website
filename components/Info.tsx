const Info = () => {
  return (
    <div
      id="about"
      className='mt-40 w-full bg-[url("/images/wool.jpg")] rounded-xl py-20 px-8 sm:px-32'
    >
      <div className="lg:flex items-center justify-between">
        <div className="text-white">
          <p className="text-3xl sm:text-5xl">Hochwertige Materialien</p>
          <p className="text-xl mt-8 sm:w-[500px]">
            Sie legen Wert auf 100% Baumwolle? Unsere bequemen und
            hautfreundlichen Stoffe werden Sie begeistern. Wählen Sie den zu
            Ihnen passenden Schnitt - von klassisch bis oversize.
          </p>
          <p className="text-3xl sm:text-5xl mt-20">
            Faire Preise, beste Qualität
          </p>
          <p className="text-xl mt-8 sm:w-[500px]">
            Auch bei regelmäßigem Tragen und Waschen bleibt Ihr Design langlebig
            auf dem Stoff erhalten - zu einem ausgezeichneten
            Preis-Leistungs-Verhältnis.
          </p>
        </div>
        <div className="mt-10 lg:ml-8 xl:ml-0 lg::mt-0 max-w-[250px] lg:max-w-none xl:w-[400px] xl:h-[600px]">
          <img alt="Bunte Stoffe" src="/images/colors.jpg"></img>
        </div>
      </div>
      <div className="lg:flex items-center justify-between mt-40">
        <div className="hidden lg:block lg:mr-8 xl:mr-0 xl:w-[460px] xl:h-[320px]">
          <img alt="Hemden" src="/images/shirts.jpg"></img>
        </div>
        <div className="text-white">
          <p className="text-3xl sm:text-5xl">Persönlicher Service</p>
          <p className="text-xl mt-8 sm:w-[500px]">
            Wir gehen mit Hingabe auf all Ihre Bedürfnisse ein und stehen Ihnen
            als verlässlicher Partner zur Seite.
          </p>
          <p className="text-3xl sm:text-5xl mt-20">Vielfältige Auswahl</p>
          <p className="text-xl mt-8 sm:w-[500px]">
            Egal, welche Textilien Sie veredeln möchten, wir haben die passende
            Lösung für Sie.
          </p>
        </div>
        <div className="mt-10 lg:hidden">
          <img alt="Hemden" src="/images/shirts.jpg"></img>
        </div>
      </div>
    </div>
  );
};

export default Info;

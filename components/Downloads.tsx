const Downloads = () => {
    return (
      <div id="downloads" className="mt-40 px-6 2xl:px-0">
        <p className="text-5xl">Downloads</p>
        <div className="mt-10">
          <p className="mt-8 text-2xl font-semibold">
            Übersicht Klassiker - Hoodies, Zipper, Shirts
          </p>
          <div className="mt-4">
            <a
              className="underline block text-xl"
              href="/files/KLASSIKER-Hoodies,Zipper,Shirts.pdf"
              download
            >
              Herunterladen
            </a>
          </div>
            <p className="mt-8 text-2xl font-semibold">
            Übersicht Alltagskleidung - Jacken, Jogger & co.
          </p>
          <div className="mt-4">
            <a
              className="underline block text-xl"
              href="/files/Alltagskleidung-Jacken,Jogger&co.pdf"
              download
            >
              Herunterladen
            </a>
          </div>
          <p className="mt-8 text-2xl font-semibold">
            Übersicht Poloshirts, Gastronomie, Medizin
          </p>
          <div className="mt-4">
            <a
              className="underline block text-xl"
              href="/files/Poloshirts,Gastronomie,Medizin.pdf"
              download
            >
              Herunterladen
            </a>
          </div>
          <p className="mt-8 text-2xl font-semibold">
            Übersicht Softshell- & Sicherheitskleidung
          </p>
          <div className="mt-4">
            <a
              className="underline block text-xl"
              href="/files/Softshell-&Sicherheitskleidung.pdf"
              download
            >
              Herunterladen
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Downloads;

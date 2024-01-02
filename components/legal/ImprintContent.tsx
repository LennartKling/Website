"use client";

import React from "react";

const ImprintContent = () => {
  return (
    <div className="relative max-w-[800px] mx-auto py-20 px-8 text-base lg:text-2xl">
      <div className="w-full h-[100px]"></div>
      <p className="text-4xl">
        <strong>Impressum</strong>
        <br />
        <br />
      </p>
      <p>
        Luis Kameter <br />
        Schrenckstraße 24
        <br />
        85635 Höhenkirchen <br />
      </p>
      <br />
      <br />
      <p>
        <strong>Kontakt:</strong> <br />
        Telefon: +49 176 429 431 48
        <br />
        E-Mail:
        <a href="mailto:contact@luiskameter.com"> contact@luiskameter.com</a>
        <br />
      </p>
      <br />
      <p>
        Plattform der EU-Kommission zur Online-Streitbeilegung:
        <a
          target="_blank"
          href="https://ec.europa.eu/odr"
          rel="noopener noreferrer"
        >
          {" "}
          https://ec.europa.eu/odr
        </a>
      </p>
      <br />
      <p>
        Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle weder verpflichtet noch bereit.
      </p>
    </div>
  );
};

export default ImprintContent;

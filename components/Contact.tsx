"use client";

import React from "react";
import Together from "./images/contact/Together";
import { useEffect } from "react";
import ScrollPosition from "../pages/api/ScrollPosition";

const map = (
  in_start: number,
  in_end: number,
  out_start: number,
  out_end: number,
  input: number
) => {
  let slope = (out_end - out_start) / (in_end - in_start);
  return out_start + slope * (input - in_start);
};

const Contact = () => {
  const scroll = ScrollPosition().y;

  const scrollTo = (section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };
  const animZoom = (node: any, height: number) => {
    let top = node.getBoundingClientRect().top;
    let bottom = node.getBoundingClientRect().bottom;
    let in_range_start = top - bottom + height * 0.7;
    let in_range_end = height;
    let out_range_start = 1;
    let out_range_end = 0.4;
    let anim = map(
      in_range_start,
      in_range_end,
      out_range_start,
      out_range_end,
      top
    );
    if (anim < out_range_end) anim = out_range_end;
    if (anim > out_range_start) anim = out_range_start;
    node.children[0].style.transform = `scale(${anim})`;
  };
  return (
    <div>
      <div
        className="md:flex mt-32 lg:mt-64 w-[100vw] overflow-hidden"
        id="contact"
      >
        <div
          ref={(node) => {
            if (!node) return;
            animZoom(node, window.innerHeight);
          }}
          className="flex justify-center items-center py-12 md:py-0 w-full md:w-[50vw] bg-black"
        >
          <div className="text-white max-w-[500px]">
            <p className="w-full text-center text-4xl md:text-6xl lg:text-7xl font-bold">
              LET&apos;S WORK TOGETHER
            </p>
            <div className="flex justify-center w-full mt-20">
              <a
                className="hover:text-black hover:bg-white duration-300 ease-in font-bold text-2xl md:text-4xl py-4 px-12 border-white border-[3px] md:border-4"
                href="mailto:contact@luiskameter.com"
              >
                contact
              </a>
            </div>
          </div>
        </div>
        <div
          ref={(node) => {
            if (!node) return;
            animZoom(node, window.innerHeight);
          }}
          className="flex justify-center items-center w-full md:w-[50vw] bg-white"
        >
          <div className="relative">
            <Together />
          </div>
        </div>
      </div>
      <div className="flex w-[100vw]">
        <div className="flex justify-start items-center w-full bg-black pl-4 py-8 md:pl-10 md:pb-10">
          <div className="text-white font-black text-2xl md:text-4xl">
            <div className="cursor-pointer group">
              <a
                className="group-hover:text-[#1FD0FD] duration-200 ease-in"
                onClick={() => scrollTo("work")}
                onKeyDown={() => scrollTo("work")}
              >
                work
              </a>
            </div>
            <div className="cursor-pointer group">
              <a
                className="group-hover:text-[#1FD0FD] duration-200 ease-in"
                onClick={() => scrollTo("services")}
                onKeyDown={() => scrollTo("services")}
              >
                services
              </a>
            </div>
            <div className="cursor-pointer group">
              <a
                className="group-hover:text-[#1FD0FD] duration-200 ease-in"
                onClick={() => scrollTo("about")}
                onKeyDown={() => scrollTo("about")}
              >
                about
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-start items-center w-full bg-white pl-4 py-8 md:pl-10 md:pb-10">
          <div className="text-black font-black text-2xl md:text-4xl">
            <div
              className="cursor-pointer group relative"
              ref={(node) => {
                if (!node) return;
                node.addEventListener("click", (e) => {
                  console.log(e);
                  let style = Array.from(
                    node.children as HTMLCollectionOf<HTMLElement>
                  )[1].style;
                  if (
                    (style.display == "" || style.display == "none") &&
                    e.screenY > 400
                  )
                    style.display = "block";
                });
              }}
            >
              <a className="group-hover:text-[#5A70E0] duration-200 ease-in">
                imprint
              </a>

              <div
                className="fixed top-0 left-0 overflow-scroll w-full h-full z-50 bg-white hidden"
                ref={(node) => {
                  if (!node) return;
                  node.addEventListener("click", (e) => {
                    node.style.display = "none";
                  });
                }}
              >
                <h1>Impressum</h1>
                <p>Angaben gemäß § 5 TMG</p>
                <p>
                  Luis Kameter <br />
                  Schrenckstraße 24
                  <br />
                  85635 Höhenkirchen <br />
                </p>
                <p>
                  <strong>Vertreten durch: </strong>
                  <br />
                  Luis Kameter
                  <br />
                </p>
                <p>
                  <strong>Kontakt:</strong> <br />
                  Telefon: +49 176 429 431 48
                  <br />
                  E-Mail:
                  <a href="mailto:contact@luiskameter.com">
                    contact@luiskameter.com
                  </a>
                  <br />
                </p>
                <p>
                  <strong>Haftungsausschluss: </strong>
                  <br />
                  <br />
                  <strong>Haftung für Links</strong>
                  <br />
                  <br />
                  Unser Angebot enthält Links zu externen Webseiten Dritter, auf
                  deren Inhalte wir keinen Einfluss haben. Deshalb können wir
                  für diese fremden Inhalte auch keine Gewähr übernehmen. Für
                  die Inhalte der verlinkten Seiten ist stets der jeweilige
                  Anbieter oder Betreiber der Seiten verantwortlich. Die
                  verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
                  mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren
                  zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
                  inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
                  konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
                  Bei Bekanntwerden von Rechtsverletzungen werden wir derartige
                  Links umgehend entfernen.
                  <br />
                  <br />
                  <strong>Urheberrecht</strong>
                  <br />
                  <br />
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                  diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                  Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                  Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen
                  der schriftlichen Zustimmung des jeweiligen Autors bzw.
                  Erstellers. Downloads und Kopien dieser Seite sind nur für den
                  privaten, nicht kommerziellen Gebrauch gestattet. Soweit die
                  Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden,
                  werden die Urheberrechte Dritter beachtet. Insbesondere werden
                  Inhalte Dritter als solche gekennzeichnet. Sollten Sie
                  trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
                  bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
                  von Rechtsverletzungen werden wir derartige Inhalte umgehend
                  entfernen.
                  <br />
                  <br />
                  <strong>Datenschutz</strong>
                  <br />
                  <br />
                  Die Nutzung unserer Webseite ist in der Regel ohne Angabe
                  personenbezogener Daten möglich. Soweit auf unseren Seiten
                  personenbezogene Daten (beispielsweise Name, Anschrift oder
                  eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich,
                  stets auf freiwilliger Basis. Diese Daten werden ohne Ihre
                  ausdrückliche Zustimmung nicht an Dritte weitergegeben. <br />
                  Wir weisen darauf hin, dass die Datenübertragung im Internet
                  (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken
                  aufweisen kann. Ein lückenloser Schutz der Daten vor dem
                  Zugriff durch Dritte ist nicht möglich. <br />
                  Der Nutzung von im Rahmen der Impressumspflicht
                  veröffentlichten Kontaktdaten durch Dritte zur Übersendung von
                  nicht ausdrücklich angeforderter Werbung und
                  Informationsmaterialien wird hiermit ausdrücklich
                  widersprochen. Die Betreiber der Seiten behalten sich
                  ausdrücklich rechtliche Schritte im Falle der unverlangten
                  Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.
                </p>
              </div>
            </div>
            <div className="cursor-pointer group">
              <a className="group-hover:text-[#5A70E0] duration-200 ease-in">
                privacy
                <br />
                policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

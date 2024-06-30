import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full text-center mt-40 flex justify-center px-6 2xl:px-0"
    >
      <div className="w-full max-w-[1000px]">
        <p className="text-5xl">Kontakt</p>
        <p className="text-2xl mt-8">
          Entdecken Sie die Möglichkeiten der Textilveredelung und lassen Sie
          sich von unseren vielfältigen Angeboten inspirieren. Bei Wlokno steht
          Ihre Zufriedenheit an erster Stelle - gemeinsam setzen wir Ihre Vision
          in die Realität um.
        </p>
        <form className="mt-20" action="mailto:merch@wlokno.com" method="GET">
          <input
            className="block placeholder:text-black placeholder:text-xl w-full py-4 px-6 border-2 rounded-lg border-[#326B82]"
            name="subject"
            placeholder="Name"
            type="text"
            required
          />
          <textarea
            className="block placeholder:text-black min-h-[200px] resize-none mt-8 placeholder:text-xl w-full py-4 px-6 border-2 rounded-lg border-[#326B82]"
            name="body"
            placeholder="Nachricht"
            required
          ></textarea>
          <input
            className="mx-auto block text-xl mt-8 bg-[#326B82] border-[#326B82] border-2 text-white rounded-lg px-14 py-3 duration-300 ease-in hover:bg-white hover:text-black"
            type="submit"
            value="Absenden"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;

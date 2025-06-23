import React from "react";
import img_1 from "../../assets/google.svg";

function Footer() {
  return (
    <div className="bg-Alice-Blue text-russian-Violet font-primary">
      <section className="flex bg-transparent sm:m-8 ">

        <div className=" max-w-screen mx-auto flex flex-col items-center gap-4 shadow-md p-4 justify-center sm:flex-row  rounded-sm">
          <img src={img_1} alt="Google Quiz" className="w-14 h-14" />
        <a 
        href="https://phishingquiz.withgoogle.com/" 
        target="_blank"
        rel="noopener noreferrer"
        className="button py-2 px-4 sm:py-3 sm:px-6 "
        title="Phishing Quiz by Google"
        >
          Take a Phishing Quiz by Google
        </a>
        </div>
      </section>

      <footer className="bg-transparent  justify-center items-center">
        <div className="bg-Alice-Blue text-center py-4">
          <p className="text-lg font-semibold text-auzure">
            <strong> © 2025 PhishVanGuard. All rights reserved.</strong>
          </p>
          <p className="text-sm text-russian-Violet p-4 ">
            Made with ❤️ by the PhishVanGuard Team
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;



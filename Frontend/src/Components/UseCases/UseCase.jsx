import { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  ChevronUp,
  CircleHelp,
  CircleChevronRight,
} from "lucide-react";
import img_1 from "../../assets/pic1_zoom.png";
import img_2 from "../../assets/pic2_information-stealer.png";
import img_3 from "../../assets/pic3_credential.png";
import img_4 from "../../assets/pic4_purelog-stealer.png";
import img_5 from "../../assets/pic5_vip_keylogger.png";
import img_6 from "../../assets/pic6_credenial_fiance_theme.png";
import Up from './../Home/Scroller';


const images = [
  {
    src: img_1,
    desc: (
      <p>
        <b>Description: </b>Zoom-spoofing emails found in environments protected
        by Mimecast deliver ConnectWise RAT for either Mac or Windows via an
        embedded URL. (image Source: cofense.com, June 2, 2025)
      </p>
    ),
  },
  {
    src: img_2,
    desc: (
      <p>
        <b>Description: </b>Travel Assistance-themed emails found in
        environments protected by Cisco IronPort and Microsoft ATP deliver an
        embedded link to a fake CAPTCHA that prompts the victim to run a
        malicious PowerShell script from the clipboard. The malicious script
        delivers a DotNETLoader that runs a custom Information Stealer in
        memory. (image Source: cofense.com, May 18, 2025)
      </p>
    ),
  },
  {
    src: img_3,
    desc: (
      <p>
        <b>Description: </b>KMED Europa-spoofing campaign found in environments
        protected by Microsoft ATP, Proofpoint, and Abnormal Security delivers
        an attached, password protected, PDF. The PDF contains a link to a
        Credential Phishing page. (image Source: cofense.com, May 15, 2025)
      </p>
    ),
  },
  {
    src: img_4,
    desc: (
      <p>
        <b>Description: </b>Copyright-themed emails found in environments
        protected by Microsoft ATP and Cisco IronPort deliver a link to download
        an archive file with a Python Installer that reaches out to a Telegram
        address to obtain a payload location. It then delivers a series of
        Python scripts that run PureLogs Stealer in memory. (image Source:
        cofense.com, May 22, 2025)
      </p>
    ),
  },
  {
    src: img_5,
    desc: (
      <p>
        <b>Description: </b>Caixadirecta-spoofing emails found in environments
        protected by Microsoft ATP and Cisco IronPort deliver a Malicious Batch
        Script via an embedded URL. The Malicious Batch Script delivers a
        DotNETLoader and VIP Keylogger. (image Source: cofense.com, April 25,
        2025)
      </p>
    ),
  },
  {
    src: img_6,
    desc: (
      <p>
        <b>Description: </b>Finance-themed emails found in environments
        protected by Microsoft ATP, Proofpoint, and Abnormal Security deliver
        Credential Phishing via an embedded URL. (image Source: cofense.com, May
        28, 2025)
      </p>
    ),
  },
];

const useCases = [
  {
    useCase: "Use Case Scenarios #1",
    example: (
      <div>
        <h1 className="mb-4 font-primary font-bold ml-1">
          Real-Life Phishing Attack Examples
        </h1>
        <ul className="text-md font-sans">
          <span className="flex mt-2">
            <li className="items-start space-x-2">
              <CircleChevronRight className="text-azure mr-2 flex-shrink-0" />
            </li>
            <p>
              <u>John Podesta’s Email Hack (2016)</u>: There was significant
              controversy surrounding the November 2016 U.S. election, with the
              hack of John Podesta’s Gmail account being a notable incident. As
              chairman of Hillary Clinton’s campaign, Podesta was targeted by
              the Russian hacker group Fancy Bear. The phishers sent a fake
              Google email warning of an attempted hack, linking to a malicious
              website. When the compromised link was clicked, hackers gained
              access, leading to the release of thousands of emails via
              WikiLeaks weeks before the election.
            </p>
          </span>
          <span className="flex mt-2">
            <li className="flex items-start space-x-2">
              <CircleChevronRight className="text-azure mr-2 flex-shrink-0" />
            </li>
            <p>
              <u>Sony Pictures Attack (2014)</u>: North Korean hackers launched
              a phishing campaign targeting Sony Pictures employees with
              spear-phishing emails. This led to a massive data leak, including
              unreleased films and employee records, with damages exceeding $100
              million. The attack coincided with the release of "The Interview,"
              a film critical of North Korea.
            </p>
          </span>
          <span className="flex mt-2">
            <li className="flex items-start space-x-2">
              <CircleChevronRight className="text-azure mr-2 flex-shrink-0" />
            </li>
            <p>
              <u>Mattel’s $3 Million Loss (Whaling Attack)</u>: A finance
              executive at Mattel fell victim to a whaling email mimicking a
              legitimate vendor, tricking them into authorizing a $3 million
              offshore payment. The scam involved forged invoices and urgent
              payment requests, occurring over several weeks in 2015,
              highlighting the sophistication of targeted attacks.
            </p>
          </span>
        </ul>
      </div>
    ),
  },
  {
    useCase: "Use Case Scenarios #2",
    example: (
      <div>
        <h1 className="mb-4 font-bold font-primary ml-1">
          Common Phishing Scenarios
        </h1>
        <ul className="text-md font-sans">
          <span className="flex mt-2">
            <li className="items-start space-x-2">
              <CircleChevronRight className="text-azure mr-2 flex-shrink-0" />
            </li>
            <p>
              <u>Credential Theft via Fake Login Pages</u>: Cybercriminals
              create fake login pages (e.g., mimicking PayPal, Google, or
              Microsoft) to steal usernames and passwords.
            </p>
          </span>
          <span className="flex mt-2">
            <li className="flex items-start space-x-2">
              <CircleChevronRight className="text-azure mr-2 flex-shrink-0" />
            </li>
            <p>
              <u>Malware Delivery through Attachments</u>: A phishing email with
              a malicious .HTML or .DOC attachment delivers ransomware.
            </p>
          </span>
          <span className="flex mt-2">
            <li className="flex items-start space-x-2">
              <CircleChevronRight className="text-azure mr-2 flex-shrink-0" />
            </li>
            <p>
              <u>Spear Phishing Against Employees</u>: A targeted attack on a
              specific employee uses LinkedIn data to craft a personalized
              email.
            </p>
          </span>
        </ul>
      </div>
    ),
  },
  {
    useCase: "Use Case Scenarios #3",
    example: (
      <div>
        <h1 className="mb-4 font-bold font-primary ml-1">
          Industry-Specific Use Cases
        </h1>
        <ul className="text-md font-sans">
          <span className="flex mt-2">
            <li className="flex items-start space-x-2">
              <CircleChevronRight className="text-azure mr-2 flex-shrink-0" />
            </li>
            <p>
              <u>Financial Sector</u>: Banks and payment platforms (e.g.,
              PayPal, HSBC) face risks from fraudulent transaction emails or
              fake banking sites.
            </p>
          </span>
          <span className="flex mt-2">
            <li className="flex items-start space-x-2">
              <CircleChevronRight className="text-azure mr-2 flex-shrink-0" />
            </li>
            <p>
              <u>Corporate Environments</u>: Businesses are vulnerable to
              business email compromise (BEC) attacks, such as fake CEO requests
              for wire transfers.
            </p>
          </span>
          <span className="flex mt-2">
            <li className="flex items-start space-x-2">
              <CircleChevronRight className="text-azure mr-2 flex-shrink-0" />
            </li>
            <p>
              <u>E-Commerce</u>: Online retailers encounter fake checkout pages
              or phishing ads, such as the Booking.com scam with 25 billion spam
              pages daily.
            </p>
          </span>
        </ul>
      </div>
    ),
  },
  {
    useCase: "Use Case Scenarios #4",
    example: (
      <div>
        <h1 className="mb-4 font-bold font-primary ml-1">
          User Awareness and Training
        </h1>
        <ul className="text-md font-sans">
          <span className="flex mt-2">
            <li className="flex items-start space-x-2">
              <CircleChevronRight className="text-azure mr-2 flex-shrink-0" />
            </li>
            <p>
              <u>Simulated Phishing Campaigns</u>: Organizations run simulated
              attacks to train employees, tracking who clicks links or enters
              credentials.
            </p>
          </span>
          <span className="flex mt-2">
            <li className="flex items-start space-x-2">
              <CircleChevronRight className="text-azure mr-2 flex-shrink-0" />
            </li>
            <p>
              <u>Educational Alerts</u>: Real-time warnings help users spot
              urgent calls to action or suspicious URLs, boosting security
              awareness.
            </p>
          </span>
        </ul>
      </div>
    ),
  },
  {
    useCase: "Use Case Scenarios #5",
    example: (
      <div>
        <h1 className="mb-4 font-bold font-primary ml-1">
          Technical Detection Features
        </h1>
        <ul className="text-md font-sans">
          <span className="flex mt-2">
            <li className="flex items-start space-x-2">
              <CircleChevronRight className="text-azure mr-2 flex-shrink-0" />
            </li>
            <p>
              <u>URL and HTML Analysis</u>: Techniques like character-level
              embeddings or TF-IDF detect phishing URLs and webpage content with
              high accuracy.
            </p>
          </span>
          <span className="flex mt-2">
            <li className="flex items-start space-x-2">
              <CircleChevronRight className="text-azure mr-2 flex-shrink-0" />
            </li>
            <p>
              <u>Behavioral Monitoring</u>: Unusual user actions, like large
              data queries, can flag compromised accounts.
            </p>
          </span>
          <span className="flex mt-2">
            <li className="flex items-start space-x-2">
              <CircleChevronRight className="text-azure mr-2 flex-shrink-0" />
            </li>
            <p>
              <u>Zero-Hour Attack Detection</u>: New phishing attacks are
              detected using hyperlink information, without third-party
              services.
            </p>
          </span>
        </ul>
      </div>
    ),
  },
  {
    useCase: "Use Case Scenarios #6",
    example: (
      <div>
        <h1 className="font-bold font-primary text-xl">Protective Measures</h1>
        <ul className="text-lg font-sans">
          <span className="flex mt-2">
            <li className="flex items-start space-x-2">
              <CircleChevronRight className="text-azure mr-2 flex-shrink-0" />
            </li>
            <p>
              <u>Email and Web Protection</u>: Advanced filtering blocks
              phishing emails, while link rewriting prevents access to malicious
              websites.
            </p>
          </span>
          <span className="flex mt-2">
            <li className="flex items-start space-x-2">
              <CircleChevronRight className="text-azure mr-2 flex-shrink-0" />
            </li>
            <p>
              <u>Multi-Factor Authentication (MFA) Support</u>: MFA adds an
              extra security layer after detecting a phishing attempt.
            </p>
          </span>
          <span className="flex mt-2">
            <li className="flex items-start space-x-2">
              <CircleChevronRight className="text-azure mr-2 flex-shrink-0" />
            </li>
            <p>
              <u>Incident Response</u>: A Phish Alert Button allows users to
              report phishing, enabling updates to security rules.
            </p>
          </span>
        </ul>
      </div>
    ),
  },
];

const ToggleQuestion = ({ useCase, example, isOpen, onClick }) => {
  const contentRef = useRef(null);

  // Dynamically set max-height based on content
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current && isOpen) {
      setContentHeight(contentRef.current.scrollHeight);
    } else {
      setContentHeight(0);
    }
  }, [isOpen]);

  return (
    <div
      onClick={onClick}
      className="cursor-pointer FAQ bg-transparent rounded-lg shadow-md p-6 mb-4 transition-all duration-300 ease-in-out"
    >
      <div className="flex justify-between items-center">
        <div>
          <h3 className="flex flex-row justify-start sm:text-xl">
            <CircleHelp className="mr-2 flex-shrink-0" />
            <strong className="text-xl">{useCase}</strong>
          </h3>
        </div>
        {isOpen ? (
          <ChevronUp className="text-cornflower-blue" />
        ) : (
          <ChevronDown className="text-cornflower-blue" />
        )}
      </div>

      <div
        ref={contentRef}
        className="overflow-hidden transition-max-height duration-500 ease-in-out"
        style={{ maxHeight: `${contentHeight}px` }}
      >
        <p className="FAQA text-lg text-justify text-Ghost-white whitespace-pre-line mt-4">
          {example}
        </p>
      </div>
    </div>
  );
};

const UseCase = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="main">
      <section className="max-w-5xl mx-auto mt-5 px-4 sm:px-8 py-16">
        <h2 className="text-2xl flex w-cover h-20 bg-transparent rounded-lg shadow-md font-primary items-center justify-center text-russian-Violet mb-10">
          <strong>
            Use case Scenarios for Phishing attack OR Data Breach due to
            Phishing Attack
          </strong>
        </h2>
        {useCases.map((item, index) => (
          <ToggleQuestion
            key={index}
            useCase={item.useCase}
            example={item.example}
            isOpen={activeIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
        <Up />
      </section>
       

      <section className="py-12 bg-transparent" title="testimonial">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Scrollable Card Container */}
          <div className="overflow-x-auto">
            <div
              className="flex space-x-6 snap-x snap-mandatory scroll-smooth pb-2"
              style={{ width: "100%" }}
            >
              {images.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleImageClick(item.src)}
                  className="snap-start flex-shrink-0 sm:w-[80%] w-[100%] md:w-[calc(50%-0.75rem)] bg-Ghost-white rounded-xl shadow-md hover:shadow-xl cursor-pointer transition-shadow duration-300"
                >
                  {/* Image Area */}
                  <div className="w-full h-[440px] overflow-hidden rounded-t-xl">
                    <img
                      src={item.src}
                      alt={`Example ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Description Area */}
                  <div className="p-4">
                    <p className="text-justify italic text-russian-Violet">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Image View */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-Ghost-white bg-opacity-70 flex justify-center items-center z-50"
            onClick={closeModal}
          >
            <img
              src={selectedImage}
              alt="Full preview"
              className="max-w-[90%] max-h-[80%] rounded-lg shadow-2xl border-4 border-white"
            />
          </div>
        )}
      </section>
    </div>
  );
};

export default UseCase;

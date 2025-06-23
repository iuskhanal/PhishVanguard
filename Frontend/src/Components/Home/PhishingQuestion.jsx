import { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  ChevronUp,
  CircleHelp,
  ArrowBigRight,
  ArrowRight,
  CircleChevronRight,
} from "lucide-react";

const questions = [
  {
    question: "What is phishing?",
    answer:
      "Phishing is a cybercrime in which a target or targets are contacted by email, telephone, or text message by someone posing as a legitimate institution to lure individuals into providing sensitive data such as personally identifiable information, banking and credit card details, and passwords. OR Phishing is a cyber attack where the attacker tricks the target into disclosing personal information, revealing login credentials, or transferring money.",
  },

  {
    question: "Why is phishing dangerous ?",
    answer:
      "Phishers can gain unauthorized access to sensitive data, systems, and financial accounts. These attacks rely on building false trust with victims.",
  },

  {
    question: "Why is phishing dangerous ?",
    answer:
      "Phishers can gain unauthorized access to sensitive data, systems, and financial accounts. These attacks rely on building false trust with victims.",
  },

  {
    question: "How can I identify a phishing attempt?",
    answer:
      "Look for suspicious emails or messages that ask for personal information, contain unexpected attachments, or have links to unfamiliar websites.",
  },

  {
    question: "What should I do if I receive a phishing email?",
    answer:
      "Do not click on any links or download attachments. Report the email to your IT department or email provider and delete it immediately.",
  },

  {
    question: "Why should I bother Knowing what Phishing is all about",
    answer: (
      <div>
        <p>
          The purpose of phishing is to collect sensitive information with the
          intention of using that information to gain access to otherwise
          protected data, networks, etc. A phisher's success is contingent upon
          establishing trust with its victims.
        </p>
        <br />
        <p>Successful Phishing attacks can:</p>
        <ul className="list-none mt-2 space-y-2">
          <li className="flex items-start space-x-2">
            <ArrowBigRight className="text-azure mt-1 w-5 h-5" />
            <span>Cause financial loss for victims</span>
          </li>
          <li className="flex items-start space-x-2">
            <ArrowBigRight className="text-azure mt-1 w-5 h-5" />
            <span>Put their personal information at risk</span>
          </li>
          <li className="flex items-start space-x-2">
            <ArrowBigRight className="text-azure mr-2" />
            <span>Put data and systems at risk</span>
          </li>
        </ul>
      </div>
    ),
  },

  {
    question: "Two Major Types of Phishing Attack",
    answer: (
      <div>
        <ul>
          <li className="flex items-start space-x-2">
            <ArrowBigRight size={24} className="text-azure mt-0.5 mr-2" />
            <strong>Deceptive Phishing </strong>
          </li>
          <p className="ml-8">
            Deceptive phishing is by far the most common type of phishing scam.
            In this ploy, fraudsters impersonate a legitimate company to steal
            people’s personal data or login credentials. Those emails frequently
            use threats and a sense of urgency to scare users into doing what
            the attackers want.
          </p>
          <div className="mt-3">
            <li className="flex items-start space-x-2">
              <ArrowBigRight size={24} className="text-azure mt-0.5 mr-2" />
              <strong>Spear Phishing</strong>
            </li>
            <p className="ml-8">
              Spear Phishing targets specific individuals instead of a wide
              group of people. Attackers often research their victims on social
              media and other sites. That way, they can customize their
              communications and appear more authentic.
            </p>
          </div>
          <div className="mt-3">
            <li className="flex items-start space-x-2">
              <ArrowBigRight size={24} className="text-azure mt-0.5 mr-2" />
              <strong>Other phishing Technique</strong>
            </li>
            <ul>
              <li className="flex items-start space-x-2 text-lg mt-3">
                <CircleChevronRight className="text-azure mt-0.5 flex-shrink-0" />
                <span className="text-lg text-justify">
                  <b>Angular Phishing</b> - This cyberattack comes by way of
                  social media. It may involve fake URLs, instant messages or
                  profiles used to obtain sensitive data. Attackers also peruse
                  social profiles to glean any personal information they can use
                  for social engineering.
                </span>
              </li>
              <li className="flex items-start space-x-2 text-lg mt-3">
                <CircleChevronRight className="text-azure mt-0.5 flex-shrink-0" />
                <span className="text-lg text-justify">
                  <b>Clone Phishing</b> - Clone phishing involves exact
                  duplication of an email to make it appear as legitimate as
                  possible.
                </span>
              </li>
              <li className="flex items-start space-x-2 text-lg mt-3">
                <CircleChevronRight className="text-azure mt-0.5 flex-shrink-0" />
                <span className="text-lg text-justify">
                  <b>Domain Spoofing</b> - In this category of phishing, the
                  attacker forges a company domain, which makes the email appear
                  to be from that company.
                </span>
              </li>
              <li className="flex items-start space-x-2 text-lg mt-3">
                <CircleChevronRight className="text-azure mt-0.5 flex-shrink-0" />
                <span className="text-lg text-justify">
                  <b>Email Phishing</b> - Phishing emails are often the first to
                  come to mind when people hear the term phishing. Attackers
                  send an illegitimate email asking for personal information or
                  login credentials.
                </span>
              </li>
              <li className="flex items-start space-x-2 text-lg mt-3">
                <CircleChevronRight className="text-azure mt-0.5 flex-shrink-0" />
                <span className="text-lg text-justify">
                  <b>Search Engine Phishing</b> - Rather than sending
                  correspondence to you to gain information, search engine
                  fishing involves creating a website that mimics a legitimate
                  site. Site visitors are asked to download products that are
                  infected with malware or provide personal information in forms
                  that go to the attacker.
                </span>
              </li>
              <li className="flex items-start space-x-2 text-lg mt-3">
                <CircleChevronRight className="text-azure mt-0.5 flex-shrink-0" />
                <span className="text-lg text-justify">
                  <b>Smishing</b> - Combine SMS with phishing and you have the
                  technique called smishing. With smishing, attackers send
                  fraudulent text messages in an attempt to gather information
                  like credit card numbers or passwords.
                </span>
              </li>
              <li className="flex items-start space-x-2 text-lg mt-3">
                <CircleChevronRight className="text-azure mt-0.5 flex-shrink-0" />
                <span className="text-lg text-justify">
                  <b>Whaling</b> - A whaling attack targets the big fish, or
                  executive-level employees. An attack of this sort often
                  involves more sophisticated social engineering tactics and
                  intelligence gathering to better sell the fake.
                </span>
              </li>
              <li className="flex items-start space-x-2 text-lg mt-3">
                <CircleChevronRight className="text-azure mt-0.5 flex-shrink-0" />
                <p className="text-lg text-justify">
                  <b>Vishing</b> - Combine VoIP with phishing and you get
                  vishing. This type of phishing involves calls from a
                  fraudulent person attempting to obtain sensitive information.
                </p>
              </li>
              <li className="flex items-start justify-center space-x-2 text-lg mt-3">
                <CircleChevronRight className="text-azure mt-0.5 flex-shrink-0" />
                <p className="text-lg text-justify">
                  <b>Malvertising</b> - Malvertising is malicious advertising
                  that contains active scripts designed to download malware or
                  force unwanted content onto your computer. Exploits in Adobe
                  PDF and Flash are the most common methods used in
                  malvertisements.
                </p>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    ),
  },

  {
    question: "How to Prevent and Protect Against Phishing As An End-user ?",
    answer: (
      <div>
        <ul>
          <p>
            To help prevent phishing attacks, you should observe general best
            practices, similar to those you might undertake to avoid viruses and
            other malware. First, make sure your systems are updated to help
            protect against known vulnerabilities. Protect devices and systems
            with reputable security software and firewall protection. You can
            also add software that watches for PII being sent over email or
            other insecure methods. Since the weak link in phishing attacks is
            the end user, you should provide proper end-user security awareness
            training and educate your team on how to recognize a phishing scam.
            The key to protecting against phishing lies in the ability to
            recognize the cyberattack as illegitimate. Following are some key
            concepts to include in end-user training:
          </p>
          <ul className="text-lg">
            <li className="flex items-start space-x-2 mt-3">
              <CircleChevronRight className="w-6 h-6 text-azure mt-1 flex-shrink-0" />
              <span>
                Users are to choose strong passwords and be wary of posting your
                personal details on social media. Information like birthdates,
                addresses and phone numbers are valuable to an attacker.
              </span>
            </li>
            <li className="flex items-start space-x-2 text-lg mt-3">
              <CircleChevronRight className="text-azure mr-2 text-sm" />
              <span>
                If there are any suspicions about an email or social post,
                contact the IT team to have them examine the situation.
              </span>
            </li>
            <li className="flex items-start space-x-2 text-lg mt-3">
              <CircleChevronRight className="text-azure mr-2 text-sm" />
              <span>
                Only open attachments from a trusted source. When in doubt,
                check with the alleged sender directly.
              </span>
            </li>
            <li className="flex items-start space-x-2 text-lg mt-3">
              <CircleChevronRight className="text-azure mr-2 text-sm" />
              <span>
                Note any language differences in messaging or emails that vary
                from legitimate organizational communications.
              </span>
            </li>
            <li className="flex items-start space-x-2 text-lg mt-3">
              <CircleChevronRight className="w-6 h-6 text-azure mt-1 flex-shrink-0" />
              <span>
                Never give away personal information in an email or unsolicited
                call. For instance, financial institutions will never call and
                ask for login credentials or account info because they already
                have it.
              </span>
            </li>
            <li className="flex items-start space-x-2 text-lg mt-3">
              <CircleChevronRight className="text-azure mr-2 text-sm" />
              <span>
                Inspect emails for typos and inaccurate grammar. This is usually
                a dead giveaway of less-sophisticated phishing scams.
              </span>
            </li>
            <li className="flex items-start space-x-2 text-lg mt-3">
              <CircleChevronRight className="text-azure mr-2 text-sm" />
              <span>Don’t supply personal information via email or text.</span>
            </li>
            <li className="flex items-start space-x-2 text-lg mt-3">
              <CircleChevronRight className="text-azure mr-2 text-sm" />
              <span>
                Beware of urgent or time-sensitive warnings. Phishing attacks
                often prompt action by pretending to be urgent.
              </span>
            </li>
            <li className="flex items-start space-x-2 text-lg mt-3">
              <CircleChevronRight className="w-6 h-6 text-azure mt-1 flex-shrink-0" />
              <span>
                Verify emails and other correspondence by contacting the
                organization directly. If you think something is fishy (okay,
                bad pun), a phone call can quickly identify a legitimate call
                from a fake one.
              </span>
            </li>
          </ul>
        </ul>
      </div>
    ),
  },

  {
    question: "How to Prevent and Protect Against Phishing As A Company ?",
    answer: (
      <div>
        Since we can’t control the criminals, let’s take a look at how you can
        prevent phishing attacks.
        <ul>
          <li className="flex items-start space-x-2 text-lg mt-3">
            <CircleChevronRight className="w-6 h-6 text-azure mt-1 flex-shrink-0" />
            <span>
              <b>Train Your Employees: </b> Unsuspecting employees who are not
              trained to identify phishing emails are easily tricked. If they
              click on a link, open an attachment, or respond to the email, they
              could be giving the attacker exactly what they need to break into
              your system. Training is by far the most crucial action you can
              take to avoid phishing attacks. By investing in your employees’
              security education, you empower them to take ownership of security
              best practices. With training, your employees can identify a
              phishing email and report suspicious activity before any
              information is compromised.
            </span>
          </li>
          <li className="flex items-start space-x-2 text-lg mt-3">
            <CircleChevronRight className="w-6 h-6 text-azure mt-1 flex-shrink-0" />
            <span>
              <b>Update Your Antivirus Software: </b> Keeping your antivirus
              software updated adds a layer of security. The software will scan
              files coming into your computer, preventing possible damage.
              Ensure that your anti-spyware and firewall settings are active.
            </span>
          </li>
          <li className="flex items-start space-x-2 text-lg mt-3">
            <CircleChevronRight className="w-6 h-6 text-azure mt-1 flex-shrink-0" />
            <span>
              <b>Stay Up-to-Date: </b> By staying in-the-know, you remain
              vigilant to phishing attempts. Research common phishing scams so
              that you’re aware of what security professionals see as the main
              threats. The more aware you are of what’s out there, the more
              likely you are to identify a possible attack.
            </span>
          </li>
        </ul>
      </div>
    ),
  },

  {
    question: "Refrences",
    answer: (
      <div className="mt-6 text-lg">
        <p>
          It's a good thing to give credit. We learned from these websites — you
          can check them out:
        </p>

        <ul className="mt-4 space-y-3">
          <li className="flex items-start space-x-2 p-6">
            <CircleChevronRight className="w-6 h-6 text-azure mt-1 flex-shrink-0" />
            <span>
              KnowBe4 (2021). Phishing Techniques.
              <a
                href="https://www.phishing.org/phishing-techniques"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-azure underline hover:text-azure transition mt-1"
              >
                <b>Click here for more</b>
              </a>
            </span>
          </li>

          <li className="flex items-start space-x-2 p-6">
            <CircleChevronRight className="w-6 h-6 text-azure mt-1 flex-shrink-0" />
            <span>
              KnowBe4 (2021). Phishing Examples.
              <a
                href="https://www.phishing.org/phishing-examples"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-azure underline hover:text-azure transition mt-1"
              >
                <b>Click here for more</b>
              </a>
            </span>
          </li>
          <li className="flex items-start space-x-2 p-6">
            <CircleChevronRight className="w-6 h-6 text-azure mt-1 flex-shrink-0" />
            <span>
              Clearedin. (2021). The Biggest Phishing Attack Examples to Make
              Headlines. Retrieved June 9, 2025, from
              <a
                href="https://www.technologylab.com/blog/5-security-breaches-caused-by-phishing-attacks/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-azure underline hover:text-azure transition mt-1"
              >
                <b>Click here for more</b>
              </a>
            </span>
          </li>
          <li className="flex items-start space-x-2 p-6">
            <CircleChevronRight className="w-6 h-6 text-azure mt-1 flex-shrink-0" />
            <span>
              No Go Fall Maga. (2021). Africa’s First Storified Cyber Security
              Awareness Book. Retrieved June 9, 2025, from
              <a
                href="https://nogofallmaga.org/book/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-azure underline hover:text-azure transition mt-1"
              >
                <b>Click here for more</b>
              </a>
            </span>
          </li>
          <li className="flex items-start space-x-2 p-6">
            <CircleChevronRight className="w-6 h-6 text-azure mt-1 flex-shrink-0" />
            <span>
              CNN Business. (2016). Watch this hacker break into a company.
              Retrieved June 9, 2025, from
              <a
                href="https://www.youtube.com/watch?v=PWVN3Rq4gzw&ab_channel=CNNBusiness"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-azure underline hover:text-azure transition mt-1"
              >
                <b>Click here for more</b>
              </a>
            </span>
          </li>
          <li className="flex items-start space-x-2 p-6">
            <CircleChevronRight className="w-6 h-6 text-azure mt-1 flex-shrink-0" />
            <span>
              Garrett Myler. (2018). Social Engineering: Vishing Example.
              Retrieved June 9, 2025, from
              <a
                href="https://www.youtube.com/watch?v=xuYoMs6CLEw&ab_channel=GarrettMyler"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-azure underline hover:text-azure transition mt-1"
              >
                <b>Click here for more</b>
              </a>
            </span>
          </li>
        </ul>
      </div>
    ),
  },
];

const ToggleQuestion = ({ question, answer, isOpen, onClick }) => {
  const contentRef = useRef(null);
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
          <h3 className="flex flex-row hover:text-cornflower-blue justify-start sm:text-xl">
            <CircleHelp className="mr-2 flex-shrink-0" />
            <b className="text-xl">{question}</b>
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
        <div className="FAQA text-lg text-justify whitespace-pre-line mt-4">
          {typeof answer === "string" ? <p>{answer}</p> : answer}
        </div>
      </div>
    </div>
  );
};

const PhishingFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-8 py-16">
      <h2 className="text-3xl w-contain bg-transparent rounded-lg shadow-md font-secondary text-center text-russian-Violet mb-10">
        <strong>Learn About Phishing</strong>
      </h2>
      {questions.map((item, index) => (
        <ToggleQuestion
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={activeIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </section>
  );
};

export default PhishingFAQ;

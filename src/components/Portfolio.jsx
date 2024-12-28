const Header = () => (
  <header className="flex items-center text-center p-6 bg-blue-100 h-full">
    <img
      id="profile-photo"
      className="w-32 h-32 rounded-full mb-4"
      src="../assets/Linkedin_profile_1@2x.jpg"
      alt="profile-photo"
    />
    <div>
      <h1 className="text-lg font-medium mb-2">
        Hello, I am
        <h1 className="text-2xl font-bold">Charity Rymbai,</h1>
        <span className="block text-gray-600 mt-2">
          a driven mechanical engineering student. While my academic focus lies
          in mechanical engineering, my passion for technology extends beyond
          traditional boundaries.
        </span>
      </h1>
    </div>
  </header>
);

const EducationItem = ({ logo, school, details }) => (
  <li className="flex items-start mb-4">
    <img className="w-16 h-16 mr-4" src={logo} alt="logo" />
    <div>
      <h3 className="font-semibold">{school}</h3>
      <p className="text-gray-600 mt-1">{details}</p>
    </div>
  </li>
);

const Education = () => (
  <div className="education p-6 bg-white">
    <h1 className="text-xl font-bold mb-4">Education:</h1>
    <ul>
      <EducationItem
        logo="Photos/NITM logo.jpeg"
        school="National Institute of Technology, Meghalaya"
        details={
          <>
            B.Tech in Mechanical Engineering <br /> 2023-2027
          </>
        }
      />
      <EducationItem
        logo="Photos/st edmunds school logo.png"
        school="St. Edmunds Higher Secondary School, Shillong, Meghalaya"
        details={
          <>
            Science Stream, Higher Secondary School Leaving Certificate (MBOSE) <br />
            2020-2022
          </>
        }
      />
      <EducationItem
        logo="Photos/school_logo.png"
        school="St. Francis D'Assisi Higher Secondary School, Umbir, Meghalaya"
        details={
          <>
            Secondary School Leaving Certificate (MBOSE) <br /> 2020
          </>
        }
      />
    </ul>
  </div>
);

const CertificationItem = ({ logos, link, title, details }) => (
  <li className="flex items-start mb-4">
    <div className="flex items-center space-x-2 mr-4">
      {logos.map((logo, index) => (
        <img key={index} className="w-12 h-12" src={logo} alt="logo" />
      ))}
    </div>
    <div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        <h3 className="font-semibold">{title}</h3>
        <p className="text-gray-600 mt-1">{details}</p>
      </a>
    </div>
  </li>
);

const Certifications = () => (
  <div className="certification p-6 bg-gray-50">
    <h1 className="text-xl font-bold mb-4">Certifications:</h1>
    <ul>
      <CertificationItem
        logos={["Photos/anthonys logo rbg.png", "Photos/iitb.png"]}
        link="https://drive.google.com/file/d/1lG_C4uUg0yFaCZ2WzI7Jmqk3KHnzIY0t/view"
        title={
          <>
            Attended Lecture Series on <br /> The Wonderful World of AI
          </>
        }
        details={
          <>
            By Prof. Pushpak Bhattacharyya, IIT Bombay <br /> 20th April 2023
          </>
        }
      />
      <CertificationItem
        logos={["Photos/hackerrank.png"]}
        link="https://drive.google.com/file/d/1UzrjGII-w7BsVYXiKp8H6HA14bTQjX0w/view"
        title="Hackerrank JavaScript Basic Certificate"
        details="Certified on 31st December 2023"
      />
      <CertificationItem
        logos={["Photos/isro_logo.png"]}
        link="https://drive.google.com/file/d/1uLULYWhrdRh3la-L_IryXA_RJgHWrJ-N/view"
        title="Course Participation: Remote Sensing & GIS for Environmental Studies"
        details={
          <>
            Conducted by ISRO <br /> 26th-30th July 2021
          </>
        }
      />
    </ul>
  </div>
);

const ContactLink = ({ icon, link, text }) => (
  <div className="contact-links flex items-center mb-2">
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center text-gray-600 hover:text-blue-500"
    >
      <i className={`${icon} text-xl mr-2`}></i>
      <h5 className="font-medium">{text}</h5>
    </a>
  </div>
);

const Footer = () => (
  <footer className="p-6 bg-gray-100 text-center">
    <ContactLink
      icon="fa-solid fa-envelope"
      link="mailto:charityrymbai@hotmail.com"
      text="charityrymbai@hotmail.com"
    />
    <ContactLink
      icon="fa-brands fa-github"
      link="https://github.com/charityrymbai"
      text="charityrymbai"
    />
    <ContactLink
      icon="fa-brands fa-linkedin"
      link="https://www.linkedin.com/in/charity-rymbai-600552278/"
      text="charityrymbai"
    />
  </footer>
);

const Portfolio = () => (
  <div className="font-sans">
    <Header />
    <Education />
    <Certifications />
    <Footer />
  </div>
);

export default Portfolio;

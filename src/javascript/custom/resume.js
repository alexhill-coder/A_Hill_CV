// As providing the image source directly causes it to fail the only way to provide any local picture is to import them. 
// They are imported here as they can be inserted into the details object and called without any problems when needed.

import certificate17 from '../../images/Learn_Intermediate_PHP.jpeg';
import certificate16 from '../../images/Learn_Node-SQLite.jpeg';
import certificate15 from '../../images/Learn_SQL_Certificate.jpeg';
import certificate14 from '../../images/Learn_PHP_Multi_Course.jpeg';
import certificate13 from '../../images/Learn_PHP_Form_Handling.jpeg';
import certificate12 from '../../images/Learn_PHP_Objects_&_Classes.jpeg';
import certificate11 from '../../images/Learn_PHP_Arrays_&_Loops.jpeg';
import certificate10 from '../../images/Learn_PHP_Conditionals_&_Logic.jpeg';
import certificate9 from '../../images/Learn_PHP_Functions.jpeg';
import certificate8 from '../../images/Learn_PHP_Introduction.jpeg';
import certificate7 from '../../images/HyperionDev_Endorsed_DFE_Web_Development.jpeg';
import certificate6 from '../../images/first_responsive_website.jpeg';
import certificate5 from '../../images/kivy_app.jpeg';
import certificate4 from '../../images/reading_data_from_apis.jpeg';
import certificate3 from '../../images/web_scraping.jpeg';
import certificate2 from '../../images/python_programming.jpg';
import certificate1 from '../../images/intro_to_object_python.jpeg';
import phpLogo from '../../images/php-logo-transparent-3.png';

// This object provides the full details of my resume allowing for each item to be used when and as needed. 
const resumeDetails = {
    "basics": {
      "name": "A R Hill",
      "label": "Web Developer",
      "email": "atuj2017@gmail.com",
      "summary": "A Web Developer equipped with a knowledgeable skill-set in multiple programming languages, " + 
      "hosting, user interfaces, testing and debugging processes. Able to effectively self-manage during independent" + 
      " projects as well as collaborate in a team setting while striving to continuously develop new skills and knowledge" + 
      " in the tech industry.",
      "location": {
        "city": "Stockton-On-Tees",
        "countryCode": "UK",
        "region": "England"
      },
      "profiles": [{
        "id": "P1",
        "network": "Linkedin",
        "class": "fa fa-linkedin",
        "username": "alex-hill-webdeveloper",
        "url": "https://www.linkedin.com/in/alex-hill-webdeveloper/"
      },
      {
        "id": "P2",
        "network": "Github",
        "class": "fa fa-github ms-3",
        "username": "alexhill-coder",
        "url": "https://github.com/alexhill-coder"
      }],
      "contactinfo": "Please feel free to contact me using the links above."
    },
    "work": [
      {
      "id": "W1",
      "name": "HyperionDev",
      "position": "Web Development Bootcamp",
      "url": "https://imgs.search.brave.com/IAEszqOaITB8rHfT-56vHjoEmS1jrUwTMdjQEvVekus/rs:fit:900:900:1/g:ce/aHR0cHM6Ly95dDMu/Z2dwaHQuY29tL2Ev/QUFUWEFKeTZpX2Vz/RjlyRklaQkptaDVE/QXVPR3Y2bzBWTUw5/eE9FNGJRPXM5MDAt/Yy1rLWMweGZmZmZm/ZmZmLW5vLXJqLW1v",
      "alt": "HyperionDev Logo",
      "startDate": "November 2022",
      "endDate": "February 2023",
      "summary": "The Web Development Bootcamp teaches the skills that allow " + 
        "you to create and manage the front-end of any website.",
      "highlights": [{
        "id": "WH11",
        "content": "HTML5"
      },
      {
        "id": "WH12",
        "content": "CSS3"
      },
      {
        "id": "WH13",
        "content": "JavaScript"
      },
      {
        "id": "WH14",
        "content": "Node.js"
      },
      {
        "id": "WH15",
        "content": "React.js"
      },
      {
        "id": "WH16",
        "content": "React Redux"
      }],
      },
      {
      "id": "W2",
      "name": "Cryptogem Partworks Ltd",
      "position": "Company Owner",
      "url": "",
      "alt": "",
      "startDate": "April 2013",
      "endDate": "Auguest 2022",
      "summary": "Purchased and ran an online business for nearly 10 years, " +
        "where I learned a number of valuable skills in the business management of an online business.",
      "highlights": [{
        "id": "WH21",
        "content": "Hosting and manipulation of an existing website."
      },
      {
        "id": "WH22",
        "content": "The process of redesigning and transferring of website credentials."
      },
      {
        "id": "WH23",
        "content": "Bookkeeping and dealing with the HMRC."
      },
      {
        "id": "WH24",
        "content": "Effective communication between customers and host services."
      },
      {
        "id": "WH25",
        "content": "Analyzing competition and market trends."
      },
      {
        "id": "WH26",
        "content": "The use of SEO and it's relevancy with websites."
      }],
      }
    ],
    "education": [
    //   {
    //   "id": "E1",
    //   "institution": "HyperionDev",
    //   "url": "https://imgs.search.brave.com/IAEszqOaITB8rHfT-56vHjoEmS1jrUwTMdjQEvVekus/rs:fit:900:900:1/g:ce/aHR0cHM6Ly95dDMu/Z2dwaHQuY29tL2Ev/QUFUWEFKeTZpX2Vz/RjlyRklaQkptaDVE/QXVPR3Y2bzBWTUw5/eE9FNGJRPXM5MDAt/Yy1rLWMweGZmZmZm/ZmZmLW5vLXJqLW1v",
    //   "alt": "HyperionDev Logo",
    //   "area": "Web Development Bootcamp",
    //   "studyType": "Web Development",
    //   "startDate": "November 2022",
    //   "endDate": "February 2023",
    //   "score": "100%",
    //   "details": "The Web Development Bootcamp teaches the skills that allow you to create and manage the front-end of any website.",
    //   "highlights": [{
    //     "id": "E11",
    //     "content": "HTML5"
    //   },
    //   {
    //     "id": "E12",
    //     "content": "CSS3"
    //   },
    //   {
    //     "id": "E13",
    //     "content": "JavaScript"
    //   },
    //   {
    //     "id": "E14",
    //     "content": "Node.js"
    //   },
    //   {
    //     "id": "E15",
    //     "content": "React.js"
    //   }]
    // },
    {
      "id": "E2",
      "institution": "University Of Lincoln",
      "url": "https://imgs.search.brave.com/GA393YFIE9Wbe4gp4s2aZiL-JGzf5EUAOYChzYxetko/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly9pLnl0/aW1nLmNvbS92aS9R/NFduWk1ZQXVIOC9t/YXhyZXNkZWZhdWx0/LmpwZw",
      "alt": "University Of Lincoln Logo",
      "area": "MComp Computer Games Production",
      "studyType": "Master Of Computing",
      "startDate": "September 2008",
      "endDate": "September 2012",
      "score": "2:1",
      "details": "A degree that covers all aspects required in producing a video game.",
      "highlights": [{
        "id": "E21",
        "content": "How to create & manipulate audio/video using industry programs such as Adobe Premiere and After Effects."
      },
      {
        "id": "E22",
        "content": "The introduction and use of industry development engines for game design such as Unity & Unreal."
      },
      {
        "id": "E23",
        "content": "The creation of 2D/3D graphics and models for use in animation."
      },
      {
        "id": "E24",
        "content": "Designing, creating, analyzing and testing of GUI's on users."
      },
      {
        "id": "E25",
        "content": "Create basic websites using web development languages such as HTML, CSS and PHP."
      }]   
    }],
      "certificates": [{
        "id": "C17",
        "name": "Learn Intermediate PHP Course",
        "date": "March 2023",
        "issuer": "Codecademy",
        "url": certificate17,
        "webAddress": "https://www.codecademy.com/profiles/alexhill-coder/certificates/265bef867da9492fb4bb193cc0841f99"
      },
      {
        "id": "C16",
        "name": "Learn Node-SQLite Course",
        "date": "March 2023",
        "issuer": "Codecademy",
        "url": certificate16,
        "webAddress": "https://www.codecademy.com/profiles/alexhill-coder/certificates/f0257b235b081aca2766010aad2df800"
      },
      {
        "id": "C15",
        "name": "Learn SQL Course",
        "date": "March 2023",
        "issuer": "Codecademy",
        "url": certificate15,
        "webAddress": "https://www.codecademy.com/profiles/alexhill-coder/certificates/042a4e5884e3eb6ea1f2a12be6abb851"
      },
      {
        "id": "C14",
        "name": "Learn PHP Course",
        "date": "March 2023",
        "issuer": "Codecademy",
        "url": certificate14,
        "webAddress": "https://www.codecademy.com/profiles/alexhill-coder/certificates/d24ce3aa4ed99ac04afffec4a78e2e44"
      },
      {
        "id": "C13",
        "name": "Learn PHP: Form Handling and Validation Course",
        "date": "March 2023",
        "issuer": "Codecademy",
        "url": certificate13,
        "webAddress": "https://www.codecademy.com/profiles/alexhill-coder/certificates/df254d87a49d4b359764937e065e6fcc"
      },
      {
        "id": "C12",
        "name": "Learn PHP: Objects and Classes Course",
        "date": "March 2023",
        "issuer": "Codecademy",
        "url": certificate12,
        "webAddress": "https://www.codecademy.com/profiles/alexhill-coder/certificates/549326eb43224f97af6886080354a5d9"
      },
      {
        "id": "C11",
        "name": "Learn PHP: Arrays and Loops Course",
        "date": "March 2023",
        "issuer": "Codecademy",
        "url": certificate11,
        "webAddress": "https://www.codecademy.com/profiles/alexhill-coder/certificates/798f0287cb44476db8e2a21b635cac92"
      },
      {
        "id": "C10",
        "name": "Learn PHP: Conditionals and Logic Course",
        "date": "March 2023",
        "issuer": "Codecademy",
        "url": certificate10,
        "webAddress": "https://www.codecademy.com/profiles/alexhill-coder/certificates/62f12d63d6b44044aab18555ddf3022a"
      },
      {
        "id": "C9",
        "name": "Learn PHP: Functions Course",
        "date": "March 2023",
        "issuer": "Codecademy",
        "url": certificate9,
        "webAddress": "https://www.codecademy.com/profiles/alexhill-coder/certificates/dc28cb2f4158446e9db7ec820a3dd839"
      },
      {
        "id": "C8",
        "name": "Learn PHP: Introduction Course",
        "date": "March 2023",
        "issuer": "Codecademy",
        "url": certificate8,
        "webAddress": "https://www.codecademy.com/profiles/alexhill-coder/certificates/167925f179f648e8abbaedbdf5b43091"
      },
      {
        "id": "C7",
        "name": "DFE Web Development Bootcamp",
        "date": "February 2023",
        "issuer": "HyperionDev",
        "url": certificate7,
        "webAddress": "https://www.hyperiondev.com/certificate/1321/certificate-of-completion?intent=view"
      },
      {
        "id": "C6",
        "name": "Create Your First Responsive Website",
        "date": "October 2022",
        "issuer": "Zenva",
        "url": certificate6,
        "webAddress": "https://academy.zenva.com/certificate/277e5272438a"
      },
      {
        "id": "C5",
        "name": "The Complete Kivy App Development Course",
        "date": "October 2022",
        "issuer": "Zenva",
        "url": certificate5,
        "webAddress": "https://academy.zenva.com/certificate/c739545a01c7"
      },
      {
        "id": "C4",
        "name": "Reading Data from APIs with Python",
        "date": "August 2022",
        "issuer": "Zenva",
        "url": certificate4,
        "webAddress": "https://academy.zenva.com/certificate/1b417058856c"
      },
      {
        "id": "C3",
        "name": "Web Scraping with Python and BeautifulSoup",
        "date": "August 2022",
        "issuer": "Zenva",
        "url": certificate3,
        "webAddress": "https://academy.zenva.com/certificate/e236057da86b"
      },
      {
        "id": "C2",
        "name": "PYTHON PROGRAMMING: BEGINNER TO EXPERT",
        "date": "July 2022",
        "issuer": "One Education",
        "url": certificate2,
        "webAddress": "https://www.oneeducation.org.uk/certificates/certificate-2-2/?c=406780&u=238360"
      },
      {
        "id": "C1",
        "name": "Intro to Object-Oriented Programming with Python",
        "date": "May 2022",
        "issuer": "Zenva",
        "url": certificate1,
        "webAddress": "https://academy.zenva.com/certificate/400e851cd8e0"
      }],
    "skills": [
      {
        "id": "S1",
        "source": "https://logospng.org/download/html-5/logo-html-5-256.png",
        "alt": "html logo",
        "name": "HTML5"
      },
      {
        "id": "S2",
        "source": "https://logospng.org/download/css-3/logo-css-3-256.png",
        "alt": "css logo",
        "name": "CSS3"
      },
      {
        "id": "S3",
        "source": "https://logospng.org/download/javascript/logo-javascript-icon-256.png",
        "alt": "javascript logo",
        "name": "JavaScript"
      },
      {
        "id": "S4",
        "source": "https://logospng.org/download/bootstrap/bootstrap-256.png",
        "alt": "bootstrap logo",
        "name": "Bootstrap 5"
      },
      {
        "id": "S5",
        "source": "https://logospng.org/download/node-js/logo-node-js-256.png",
        "alt": "node.js logo",
        "name": "Node.js"
      },
      {
        "id": "S6",
        "source": "https://logospng.org/download/react/logo-react-256.png",
        "alt": "react logo",
        "name": "React.js"
      },
      {
        "id": "S7",
        "source": "https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png",
        "alt": "redux logo",
        "name": "Redux"
      },
      {
        "id": "S16",
        "source": phpLogo,
        "alt": "php logo",
        "name": "PHP"
      },
      {
        "id": "S8",
        "source": "https://logos-download.com/wp-content/uploads/2016/10/Python_logo_icon.png",
        "alt": "python logo",
        "name": "Python"
      },
      {
        "id": "S9",
        "source": "https://logos-download.com/wp-content/uploads/2021/01/Git_Logo-420x420.png",
        "alt": "git logo",
        "name": "Git"
      },
      {
        "id": "S10",
        "source": "https://pics.computerbase.de/9/5/7/9/6-208dbee0fac09c86/logo-256.png",
        "alt": "vs code logo",
        "name": "VS Code"
      },
      {
        "id": "S11",
        "source": "https://raw.githubusercontent.com/bnb/awesome-hyper/master/hyper-3-color-logo.svg",
        "alt": "hyper terminal logo",
        "name": "Hyper Terminal"
      },
      {
        "id": "S12",
        "source": "https://mryslab.github.io/pseudo-microbit/images/pycharm_logo_300x300.png",
        "alt": "pycharm logo",
        "name": "Pycharm"
      },
      {
        "id": "S13",
        "source": "https://raw.githubusercontent.com/github/explore/a4691f04ff219c1c2aa02fc61fda41aa43f1459a/topics/jupyter-notebook/jupyter-notebook.png",
        "alt": "jupyter notebook logo",
        "name": "Jupyter Notebook"
      },
      {
        "id": "S14",
        "source": "https://cienciaprogramada.com.br/wp-content/uploads/2020/08/Anaconda_Logo.png",
        "alt": "anaconda logo",
        "name": "Anaconda"
      },
      {
        "id": "S15",
        "source": "https://s3.amazonaws.com/media-p.slid.es/uploads/kouceylahadji-1/images/174949/json_logo-555px__1_.png",
        "alt": "json logo",
        "name": "JSON"
      }]
    }

// This is then exported to most of the other componant files.
export default resumeDetails;

// This is based off a JSON resume schema
// https://jsonresume.org/schema/
// As providing the image source directly causes it to fail the only way to provide any local picture is to import them. 
// They are imported here as they can be inserted into the details object and called without any problems when needed.
import certificate6 from '../../images/first_responsive_website.jpeg';
import certificate5 from '../../images/kivy_app.jpeg';
import certificate4 from '../../images/reading_data_from_apis.jpeg';
import certificate3 from '../../images/web_scraping.jpeg';
import certificate2 from '../../images/python_programming.jpg';
import certificate1 from '../../images/intro_to_object_python.jpeg';

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
    "work": [{
      "id": "W1",
      "name": "Cryptogem Partworks Ltd",
      "position": "Company Owner",
      "startDate": "April 2013",
      "endDate": "Auguest 2022",
      "summary": "Purchased and ran an online business for nearly 10 years, " +
        "where I learned a number of valuable skills in the business management of an online business.",
      "highlights": [
        "Hosting and manipulation of an existing website.", "The process of redesigning and transferring of website credentials.",
        "Bookkeeping and dealing with the HMRC.", "Effective communication between customers and host services.", 
        "Analyzing competition and market trends.", "The use of SEO and it's relevancy with websites."
      ]
    }],
    "education": [{
      "id": "E1",
      "institution": "HyperionDev",
      "url": "https://imgs.search.brave.com/IAEszqOaITB8rHfT-56vHjoEmS1jrUwTMdjQEvVekus/rs:fit:900:900:1/g:ce/aHR0cHM6Ly95dDMu/Z2dwaHQuY29tL2Ev/QUFUWEFKeTZpX2Vz/RjlyRklaQkptaDVE/QXVPR3Y2bzBWTUw5/eE9FNGJRPXM5MDAt/Yy1rLWMweGZmZmZm/ZmZmLW5vLXJqLW1v",
      "area": "Web Development Bootcamp",
      "studyType": "Web Development",
      "startDate": "November 2022",
      "endDate": "February 2023",
      "score": "100%",
      "details": "The Web Development Bootcamp teaches the skills that allow you to create and manage the front-end of any website.",
      "highlights": [
        "HTML5", "CSS3", "JavaScript", "Node.js", "React.js"
      ]
    },
    {
      "id": "E2",
      "institution": "University Of Lincoln",
      "url": "https://imgs.search.brave.com/GA393YFIE9Wbe4gp4s2aZiL-JGzf5EUAOYChzYxetko/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly9pLnl0/aW1nLmNvbS92aS9R/NFduWk1ZQXVIOC9t/YXhyZXNkZWZhdWx0/LmpwZw",
      "area": "MComp Computer Games Production",
      "studyType": "Master Of Computing",
      "startDate": "September 2008",
      "endDate": "September 2012",
      "score": "2:1",
      "details": "A degree that covers all aspects required in producing a video game.",
      "highlights": [
        "How to create & manipulate audio/video using industry programs such as Adobe Premiere and After Effects.",
        "The introduction and use of industry development engines for game design such as Unity & Unreal.",
        "The creation of 2D/3D graphics and models for use in animation.",
        "Designing, creating, analyzing and testing of GUI's on users.",
        "Create basic websites using web development languages such as HTML, CSS and PHP."
      ]
    }],
    "certificates": [{
        "name": "Create Your First Responsive Website",
        "date": "October 2022",
        "issuer": "Zenva",
        "url": certificate6,
        "webAddress": "https://academy.zenva.com/certificate/277e5272438a"
      },
      {
        "name": "The Complete Kivy App Development Course",
        "date": "October 2022",
        "issuer": "Zenva",
        "url": certificate5,
        "webAddress": "https://academy.zenva.com/certificate/c739545a01c7"
      },
      {
        "name": "Reading Data from APIs with Python",
        "date": "August 2022",
        "issuer": "Zenva",
        "url": certificate4,
        "webAddress": "https://academy.zenva.com/certificate/1b417058856c"
      },
      {
        "name": "Web Scraping with Python and BeautifulSoup",
        "date": "August 2022",
        "issuer": "Zenva",
        "url": certificate3,
        "webAddress": "https://academy.zenva.com/certificate/e236057da86b"
      },
      {
        "name": "PYTHON PROGRAMMING: BEGINNER TO EXPERT",
        "date": "July 2022",
        "issuer": "One Education",
        "url": certificate2,
        "webAddress": "https://www.oneeducation.org.uk/certificates/certificate-2-2/?c=406780&u=238360"
      },
      {
        "name": "Intro to Object-Oriented Programming with Python",
        "date": "May 2022",
        "issuer": "Zenva",
        "url": certificate1,
        "webAddress": "Intro to Object-Oriented Programming with Python"
      }],
    "skills": [
      {
        "id": "S1",
        "source": "https://logospng.org/download/html-5/logo-html-5-256.png",
        "alt": "html logo",
        "name": "HTML"
      },
      {
        "id": "S2",
        "source": "https://logospng.org/download/css-3/logo-css-3-256.png",
        "alt": "css logo",
        "name": "CSS"
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
        "name": "Bootstrap"
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
        "source": "https://logos-download.com/wp-content/uploads/2016/10/Python_logo_icon.png",
        "alt": "python logo",
        "name": "Python"
      },
      {
        "id": "S8",
        "source": "https://logos-download.com/wp-content/uploads/2021/01/Git_Logo-420x420.png",
        "alt": "git logo",
        "name": "Git"
      },
      {
        "id": "S9",
        "source": "https://pics.computerbase.de/9/5/7/9/6-208dbee0fac09c86/logo-256.png",
        "alt": "vs code logo",
        "name": "Vs Code"
      },
      {
        "id": "S10",
        "source": "https://raw.githubusercontent.com/bnb/awesome-hyper/master/hyper-3-color-logo.svg",
        "alt": "hyper terminal logo",
        "name": "Hyper Terminal"
      },
      {
        "id": "S11",
        "source": "https://mryslab.github.io/pseudo-microbit/images/pycharm_logo_300x300.png",
        "alt": "pycharm logo",
        "name": "Pycharm"
      },
      {
        "id": "S12",
        "source": "https://raw.githubusercontent.com/github/explore/a4691f04ff219c1c2aa02fc61fda41aa43f1459a/topics/jupyter-notebook/jupyter-notebook.png",
        "alt": "jupyter notebook logo",
        "name": "Jupyter Notebook"
      },
      {
        "id": "S13",
        "source": "https://cienciaprogramada.com.br/wp-content/uploads/2020/08/Anaconda_Logo.png",
        "alt": "anaconda logo",
        "name": "Anaconda"
      },
      {
        "id": "S14",
        "source": "https://s3.amazonaws.com/media-p.slid.es/uploads/kouceylahadji-1/images/174949/json_logo-555px__1_.png",
        "alt": "json logo",
        "name": "JSON"
      }]
    }

// This is then exported to most of the other componant files.
export default resumeDetails;

// This is based off a JSON resume schema
// https://jsonresume.org/schema/
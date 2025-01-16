import React, { useState, useEffect, useRef } from 'react';
import './App.css'; // Import your CSS file
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';



const App = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [language, setLanguage] = useState('en');
    const [modalOpen, setModalOpen] = useState(false);
     const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const welcomeTextElement = useRef(null);
    const typingInterval = useRef(null);

      const titleTexts = ["Welcome to My Portfolio", "system developer", "Eduardo Da Silva"];

    useEffect(() => {
         typeTitle(titleTexts[currentTextIndex]);
         const interval =  setInterval(updateTitle, 5000);
          return () => clearInterval(interval);
    }, [currentTextIndex]);


    const texts = {
        en: {
            welcomeText: "Welcome to My Portfolio",
            welcomeSubtext: "Explore my projects, skills, and experience",
            aboutTitle: "About Me",
            aboutText: "I am Eduardo Da Silva, a final-year Computer Engineering student with experience in programming and networking. My skills include Spring, Angular, Android Studio, Bootstrap, and more. I love developing innovative solutions that solve real-world problems.",
            skillsTitle: "Skills",
            skillsText: "As a dedicated Computer Engineer, I bring a versatile skill set to the table. My expertise spans from software development to networking, making me well-equipped to handle diverse challenges. Below are some of my core abilities and technologies I am familiar with:",
            cvButton: "Download CV",
            galleryTitle: "Gallery",
            videoTitle: "Video Demonstration",
            projectsTitle: "Projects",
            project1Title: "Management and Billing System",
            project1Desc: "A management and billing system is a comprehensive software solution designed to streamline business operations and financial processes. It integrates functionalities such as inventory management, customer relationship management (CRM), invoicing, payment tracking, and financial reporting. This system ensures efficiency, accuracy, and transparency by automating tasks, providing real-time data insights, and enhancing decision-making for businesses of all sizes.",
            project1Button: "View Project",
            project2Title: "Management and Billing System for Bookstores",
            project2Desc: "A tailored management and billing system designed specifically for bookstores, integrating inventory control, sales tracking, customer management, and invoicing. This system simplifies daily operations, ensures accurate financial records, and enhances customer service by automating processes and providing real-time insights into stock and sales performance.",
            project2Button: "View Project",
            project3Title: "Real-Time Crane Monitoring System",
            project3Desc: "A cutting-edge system utilizing computer vision to monitor crane operations in ports. This solution tracks loading and unloading times from ships to funnels and from funnels to trucks in real time, records delays, and generates comprehensive reports with visual charts. Designed to enhance operational efficiency, transparency, and decision-making in the port logistics process",
            project3Button: "View Project",
            contactTitle: "Contact Me",
            contactNameLabel: "Name",
            contactEmailLabel: "Email",
            contactMessageLabel: "Message",
            contactButton: "Send Message",
            certificationsButton : "Certifications & Awards",
            modalTitle : "Certifications & Awards",
             memoriesTitle : "Professional Memories",
             learnMore:"Learn More"

        },
        pt: {
            welcomeText: "Bem-vindo ao Meu Portfólio",
            welcomeSubtext: "Explore meus projetos, habilidades e experiências",
            aboutTitle: "Sobre Mim",
            aboutText: "Sou Eduardo Da Silva, estudante finalista de Engenharia Informática com experiência em programação e redes. Minhas habilidades incluem Spring, Angular, Android Studio, Bootstrap e muito mais. Adoro desenvolver soluções inovadoras que resolvem problemas do mundo real.",
            skillsTitle: "Habilidades",
            skillsText: "Como um Engenheiro Informático dedicado, trago um conjunto de habilidades versátil. Minha experiência abrange desde o desenvolvimento de software até redes, tornando-me bem equipado para lidar com diversos desafios. Abaixo estão algumas das minhas principais habilidades e tecnologias com as quais estou familiarizado:",
            cvButton: "Baixar CV",
            galleryTitle: "Galeria",
            videoTitle: "Demonstração em Vídeo",
            projectsTitle: "Projetos",
            project1Title: "Sistema de Gestão e Faturação",
            project1Desc: "Um sistema de gestão e faturação é uma solução abrangente de software projetada para simplificar as operações comerciais e os processos financeiros. Integra funcionalidades como gestão de estoque, gestão de relacionamento com o cliente (CRM), emissão de faturas, rastreamento de pagamentos e relatórios financeiros. Este sistema garante eficiência, precisão e transparência, automatizando tarefas, fornecendo informações de dados em tempo real e aprimorando a tomada de decisões para empresas de todos os tamanhos.",
            project1Button: "Ver Projeto",
            project2Title: "Sistema de Gestão e Faturação para Livrarias",
            project2Desc: "Um sistema de gestão e faturação personalizado, projetado especificamente para livrarias, integrando controle de estoque, rastreamento de vendas, gestão de clientes e emissão de faturas. Este sistema simplifica as operações diárias, garante registros financeiros precisos e melhora o atendimento ao cliente, automatizando processos e fornecendo informações em tempo real sobre o estoque e o desempenho de vendas.",
            project2Button: "Ver Projeto",
            project3Title: "Sistema de Monitoramento de Guindastes em Tempo Real",
            project3Desc: "Um sistema de ponta que utiliza visão computacional para monitorar as operações de guindastes em portos. Esta solução rastreia os tempos de carga e descarga de navios para funis e de funis para caminhões em tempo real, regista atrasos e gera relatórios abrangentes com gráficos visuais. Projetado para aumentar a eficiência operacional, a transparência e a tomada de decisões no processo de logística portuária",
            project3Button: "Ver Projeto",
            contactTitle: "Contacte-me",
            contactNameLabel: "Nome",
            contactEmailLabel: "Email",
            contactMessageLabel: "Mensagem",
            contactButton: "Enviar Mensagem",
              certificationsButton : "Certificações e Premiações",
            modalTitle : "Certificações e Premiações",
              memoriesTitle : "Memórias Profissionais",
             learnMore:"Saber Mais"
        }
    };


    const switchLanguage = (lang) => {
        setLanguage(lang);
    };

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

     function typeTitle(text, index = 0) {
          if(welcomeTextElement.current)
             welcomeTextElement.current.innerText = text.substring(0, index);
        if (index < text.length) {
                typingInterval.current = setTimeout(() => {
                    typeTitle(text, index + 1);
               }, 50);
           }
     }
      function updateTitle() {
          clearTimeout(typingInterval.current);
            typeTitle(titleTexts[currentTextIndex]);
         setCurrentTextIndex((prevIndex) => (prevIndex + 1) % titleTexts.length);
    }


    useEffect(() => {
        document.body.classList.toggle('dark-mode', darkMode);
    }, [darkMode]);
     const certifications = [
         {
             image: 'fotos/CamScanner 16-01-2025 14.06.jpg',
             description: 'Certificate of Participation in CodeLabs 2nd Edition',
         },
         {
             image: 'fotos/CamScanner 16-01-2025 14.10.jpg',
             description: 'Certificate of Participation in the Development of a Bookstore Management and Billing System',
         },
         {
             image: 'fotos/IMG-20241101-WA0059.jpg',
             description: 'I was one of the grand winners, securing 1st place in the CodeLabs competition',
         },
         {
             image: 'fotos/IMG-20241101-WA0062.jpg',
             description: 'The grand winners holding the prize and celebrating with a victory shout',
         }
     ];


     const memories = [
          {
              image: '/fotos/IMG-20241101-WA0035.jpg',
            description: 'My experience as an intern at a renowned software company helped me learn industry standards.',
         },
          {
              image: '/fotos/IMG-20241101-WA0030.jpg',
              description: 'Participating in a coding competition was a great opportunity for teamwork.',
         },
          {
             image: 'fotos/IMG-20241101-WA0019.jpg',
             description: 'I developed and deployed a web application for an important university project.',
          },
         {
             image: 'fotos/IMG-20241101-WA0035.jpg',
             description: 'Our student team won first place in a tech innovation contest.',
          },
          {
              image: 'fotos/IMG-20241101-WA0033.jpg',
             description: 'Volunteering in a tech program helped to teach new skills to others.',
          }
     ];

    const slideshowImages = [
        "fotos/IMG-20240926-WA0018 - Cópia.jpg",
        "fotos/IMG-20240926-WA0032 - Cópia.jpg",
        "fotos/IMG-20241101-WA0030.jpg"
    ];

    const [currentMemoryIndex, setCurrentMemoryIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const memoryInterval = setInterval(() => {
            setCurrentMemoryIndex((prevIndex) => (prevIndex + 1) % memories.length);
        }, 5000);

        const slideshowInterval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slideshowImages.length);
        }, 5000);

        return () => {
            clearInterval(memoryInterval);
            clearInterval(slideshowInterval);
        };
    }, [memories.length, slideshowImages.length]);

    const handleScrollAnimations = () => {
        const sections = document.querySelectorAll('.animated-section');
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const windowHeight = window.innerHeight;
            const scrollPosition = window.scrollY;

            if (scrollPosition > sectionTop - windowHeight + 200) {
               setTimeout(() => {
                    section.classList.add('show');
               }, 1000);
            }
        });
    };


    useEffect(() => {
          handleScrollAnimations()
            window.addEventListener('scroll', handleScrollAnimations);
        return () => {
            window.removeEventListener('scroll', handleScrollAnimations);
        };
    }, []);




    return (
        <div >
             {/* Hero Section */}
            <header className="hero text-center">
                <div>
                   <h1 id="welcome-text" ref={welcomeTextElement}>
                         {texts[language].welcomeText}
                    </h1>
                    <p className="lead" id="welcome-subtext">{texts[language].welcomeSubtext}</p>
                    <a href="#about" className="btn btn-primary btn-lg animated-btn" id="learn-more-btn">{texts[language].learnMore}</a>
                </div>
                <div className="mode-switch">
                <button id="theme-toggle" className="btn btn-light" onClick={toggleTheme}>
        <i className={darkMode ? "fas fa-sun" : "fas fa-moon"}></i>
     </button>
                </div>
                <div className="language-switch">
                    <button className="btn btn-light" onClick={() => switchLanguage('en')}>
                        <img src="https://flagsapi.com/BE/flat/24.png" alt="English" className="flag-icon"/>
                         English
                    </button>
                    <button className="btn btn-light" onClick={() => switchLanguage('pt')}>
                        <img src="https://flagsapi.com/MZ/flat/24.png" alt="Português" className="flag-icon"/>
                         Português
                     </button>
                </div>
            </header>
            {/* About Section */}
            <section id="about" className="container py-5 animated-section from-left">
                <h2 className="text-center mb-4" id="about-title">{texts[language].aboutTitle}</h2>
                <p id="about-text" className="text-center">
                    {texts[language].aboutText}
                </p>
                <div className="skills-section">
                     <h3 className="text-center mb-3" id="skills-title">{texts[language].skillsTitle}</h3>
                      <p className="text-center" id="skills-text">{texts[language].skillsText}</p>
                     <div className="d-flex flex-wrap justify-content-center">
                           <div className="skill-item">
                               <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java"/>
                               <span>Java</span>
                           </div>
                         <div className="skill-item">
                           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring"/>
                           <span>Spring</span>
                        </div>
                        <div className="skill-item">
                             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="Angular"/>
                            <span>Angular</span>
                        </div>
                       <div className="skill-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" alt="Android"/>
                             <span>Android</span>
                       </div>
                         <div className="skill-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap"/>
                           <span>Bootstrap</span>
                         </div>
                        <div className="skill-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5"/>
                            <span>HTML5</span>
                        </div>
                        <div className="skill-item">
                           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3"/>
                          <span>CSS3</span>
                       </div>
                        <div className="skill-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript"/>
                             <span>JavaScript</span>
                         </div>
                         <div className="skill-item">
                           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git"/>
                           <span>Git</span>
                        </div>
                       <div className="skill-item">
                           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL"/>
                           <span>MySQL</span>
                       </div>
                        <div className="skill-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker"/>
                            <span>Docker</span>
                        </div>
                     </div>
                </div>
                <div className="text-center mt-4">
                    <button id="certifications-button" className="btn btn-info" onClick={() => setModalOpen(true)}>{texts[language].certificationsButton}</button>
                </div>
                <div className="download-cv">
                    <a href="cv/Eduardo (1).pdf" className="btn btn-success" download id="cv-button">
                         {texts[language].cvButton} <i className="fas fa-download"></i>
                    </a>
                </div>
            </section>
             {/* Modal para certificações e premiações */}
            {modalOpen && (
               <div id="certifications-modal" className="modal" style={{ display: 'block' }}>
                   <div className="modal-content">
                       <div className="modal-header">
                         <h2 id="modal-title">{texts[language].modalTitle}</h2>
                             <span className="close" onClick={() => setModalOpen(false)}>×</span>
                      </div>
                    <div id="certifications-container">
                        {certifications.map((certification, index) => (
                          <div key={index} className="certification-item">
                                <img src={certification.image} alt="Certification"/>
                                <p className="description">{certification.description}</p>
                           </div>
                       ))}
                     </div>
                  </div>
            </div>
            )}
             {/* Video Section */}
            <div className="video-gallery-container">
                 <section id="video" className="container py-5 video-section">
                      <h2 className="text-center mb-4" id="video-title">{texts[language].videoTitle}</h2>
                      <div className="video-container">
                         <iframe  src="/fotos/VID-20241030-WA0024.mp4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                     </div>
                 </section>
                  {/* Slideshow Section */}
                <section id="slideshow" className="container py-5">
                    <h2 className="text-center mb-4" id="gallery-title">{texts[language].galleryTitle}</h2>
                     <div className="slideshow-container">
                          {slideshowImages.map((image, index) => (
                            <div
                                key={index}
                                className={`slide ${index === currentImageIndex ? 'active' : ''}`}
                            >
                            <img src={image} alt={`Image ${index + 1}`} />
                        </div>
                    ))}
                    </div>
                </section>
          </div>
             {/* Memories Section */}
            <section id="memories" className="container py-5 memories-section">
                <h2 className="text-center mb-4" id="memories-title">{texts[language].memoriesTitle}</h2>
                    <div className="memory-slider">
                        {memories.map((memory, index) => (
                            <div
                                key={index}
                                className={`slide ${index === currentMemoryIndex ? 'active' : ''}`}
                            >
                                <img src={memory.image} alt={`Memory ${index + 1}`} />
                                <p className="description">{memory.description}</p>
                            </div>
                       ))}
                 </div>
            </section>
             {/* Projects Section */}
            <section id="projects" className="container py-5">
                <h2 className="text-center mb-4" id="projects-title">{texts[language].projectsTitle}</h2>
                 <div className="row">
                   <div className="col-md-4 mb-4 animated-section from-bottom">
                         <div className="card">
                             <img src="fotos/Sistema de faturacao.png" className="card-img-top" alt="Project 1"/>
                             <div className="card-body">
                                 <h5 className="card-title project-title" id="project1-title">{texts[language].project1Title}</h5>
                                <p className="card-text project-desc" id="project1-desc">{texts[language].project1Desc}</p>
                                 <a href="#" className="btn btn-primary" id="project1-button">{texts[language].project1Button}</a>
                             </div>
                         </div>
                   </div>
                   <div className="col-md-4 mb-4 animated-section from-bottom">
                        <div className="card">
                           <img src="fotos/Sistema de Gestao.jpg" className="card-img-top" alt="Project 2"/>
                            <div className="card-body">
                               <h5 className="card-title project-title" id="project2-title">{texts[language].project2Title}</h5>
                                 <p className="card-text project-desc" id="project2-desc">{texts[language].project2Desc}</p>
                                 <a href="#" className="btn btn-primary" id="project2-button">{texts[language].project2Button}</a>
                           </div>
                       </div>
                   </div>
                    <div className="col-md-4 mb-4 animated-section from-bottom">
                       <div className="card">
                             <img src="fotos/gruas.jpg" className="card-img-top" alt="Project 3"/>
                            <div className="card-body">
                               <h5 className="card-title project-title" id="project3-title">{texts[language].project3Title}</h5>
                                 <p className="card-text project-desc" id="project3-desc">{texts[language].project3Desc}</p>
                               <a href="#" className="btn btn-primary" id="project3-button">{texts[language].project3Button}</a>
                            </div>
                       </div>
                   </div>
                </div>
            </section>
             {/* Contact Section */}
            <section id="contact" className="container py-5 animated-section from-right">
                <h2 className="text-center mb-4" id="contact-title">{texts[language].contactTitle}</h2>
                 <form action="mailto:eduardosilvarui@gmail.com" method="post" encType="text/plain">
                      <div className="mb-3">
                         <label htmlFor="name" className="form-label" id="contact-name-label">{texts[language].contactNameLabel}</label>
                            <input type="text" className="form-control" id="name" placeholder="Your Name" name="Name"/>
                       </div>
                       <div className="mb-3">
                           <label htmlFor="email" className="form-label" id="contact-email-label">{texts[language].contactEmailLabel}</label>
                             <input type="email" className="form-control" id="email" placeholder="Your Email" name="Email"/>
                         </div>
                        <div className="mb-3">
                           <label htmlFor="message" className="form-label" id="contact-message-label">{texts[language].contactMessageLabel}</label>
                             <textarea className="form-control" id="message" rows="5" placeholder="Your Message" name="Message"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" id="contact-button">{texts[language].contactButton}</button>
                 </form>
                 <div className="mt-3 text-center">
                   <a href="https://wa.me/+258848757469" target="_blank" rel="noopener noreferrer" className="btn btn-success">
                      <i className="fab fa-whatsapp"></i> Contact me on WhatsApp
                  </a>
                </div>
            </section>
            {/* Footer */}
            <footer>
                 <p>© 2025 Eduardo Da Silva. All Rights Reserved.</p>
            </footer>
        </div>
    );
};
export default App;
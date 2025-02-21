// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-team",
          title: "team",
          description: "Meet the team",
          section: "Navigation",
          handler: () => {
            window.location.href = "/team/";
          },
        },{id: "nav-posts",
          title: "posts",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/posts/index.html";
          },
        },{id: "nav-documents",
          title: "documents",
          description: "Project documents, including the project application, reports, and publications. Datasets and media can be accessed via navigation bar.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/documents/";
          },
        },{id: "dropdown-dataset-1",
              title: "dataset 1",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-dataset-2",
              title: "dataset 2",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-dataset-3",
              title: "dataset 3",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "post-sample-ride-analyzing-an-urban-bike-ride",
      
        title: "sample ride – analyzing an urban bike ride",
      
      description: "an example of a typical bike ride in Karlsruhe and how it was analyzed",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/posts/2025/project-analysis-video/";
        
      },
    },{id: "post-12th-international-cycling-safety-conference",
      
        title: "12th International Cycling Safety Conference",
      
      description: "We presented some results at the International Cycling Safety Conference in Imabari, Japan, from Nov. 05-07, 2024.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/posts/2024/ICSC-redirect/";
        
      },
    },{id: "post-handbook-part-1-project-introduction",
      
        title: "handbook part 1: project introduction",
      
      description: "introduction to the research project (German)",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/posts/2024/Modelo1_Einleitung-(DE)/";
        
      },
    },{id: "post-handbook-part-2-simulation-model",
      
        title: "handbook part 2: simulation model",
      
      description: "information about and development of the simulation model (German)",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/posts/2024/Modelo2_Simulationsmodell-(DE)-copy/";
        
      },
    },{id: "post-handbook-part-3-technical-implementation-of-tool",
      
        title: "handbook part 3: technical implementation of tool",
      
      description: "technical implementation of the cycling simulation tool (German)",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/posts/2024/Modelo3_TechnischeRealisierung-(DE)/";
        
      },
    },{id: "post-project-gallery",
      
        title: "project gallery",
      
      description: "this is what included image galleries could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/posts/2023/gallery/";
        
      },
    },{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-final-report",
          title: 'final report',
          description: "German",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project_final/";
            },},{id: "projects-interim-report",
          title: 'interim report',
          description: "German",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project_interim/";
            },},{id: "projects-project-plan",
          title: 'project plan',
          description: "German",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project_plan/";
            },},{id: "projects-real-corp-2024",
          title: 'Real Corp 2024',
          description: "Proceedings (p. 733-746). English.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_RealCORP/";
            },},{id: "projects-simul-2023-article",
          title: 'Simul 2023 Article',
          description: "Approach to a Holistic Modelling of Cycling Dynamics",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_Simul_article/";
            },},{id: "projects-forschung-aktuell-2024",
          title: 'Forschung aktuell 2024',
          description: "Aktuelle Forschungsprojekte an der Hochschule Karlsruhe im Jahr 2024 (p. 82-85). German.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_Forsch_akt/";
            },},{id: "projects-sae-int-article",
          title: 'SAE Int. Article',
          description: "Investigation of the Performance of Electric Bicycles in Interaction with Cyclists’ Driving Behaviour in Driving Cycles on a Chassis Dynamometer. Note: Not open access.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_SAE_article/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

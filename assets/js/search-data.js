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
            },{id: "post-analysis-video",
      
        title: "analysis video",
      
      description: "Results and Analysis of Empirical Surveys",
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
    },{id: "post-introduction-to-project-part-1",
      
        title: "introduction to project (part 1)",
      
      description: "Introduction to the ModeloRad research project (German)",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/posts/2024/Modelo1_Einleitung-(DE)-copy/";
        
      },
    },{id: "post-simulation-model-part-2",
      
        title: "simulation model (part 2)",
      
      description: "Information about and development of the simulation model (German)",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/posts/2024/Modelo2_Simulationsmodell-(DE)-copy/";
        
      },
    },{id: "post-technical-development-of-tool-part-3",
      
        title: "technical development of tool (part 3)",
      
      description: "Technical development of the cycling simulation tool (German)",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/posts/2024/Modelo3_TechnischeRealisierung-(DE)/";
        
      },
    },{id: "post-a-post-with-echarts",
      
        title: "a post with echarts",
      
      description: "this is what included echarts code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/posts/2023/echarts/";
        
      },
    },{id: "post-a-post-with-chart-js",
      
        title: "a post with chart.js",
      
      description: "this is what included chart.js code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/posts/2023/chartjs/";
        
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
          section: "News",},{id: "projects-project-application",
          title: 'project application',
          description: "German",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project_appl/";
            },},{id: "projects-project-end-report",
          title: 'project end report',
          description: "German",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project_finalreport/";
            },},{id: "projects-real-corp-2024",
          title: 'Real Corp 2024',
          description: "Proceedings (p. 733-746). English.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_RealCORP/";
            },},{id: "projects-media-publications",
          title: 'media  /publications',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_mediapublications/";
            },},{id: "projects-forschung-aktuell-2024",
          title: 'Forschung aktuell 2024',
          description: "Aktuelle Forschungsprojekte an der Hochschule Karlsruhe im Jahr 2024 (p. 82-85). German.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_Forsch_akt/";
            },},{id: "projects-12th-international-cycling-safety-conference",
          title: '12th International Cycling Safety Conference',
          description: "Poster. English.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_ICSC/";
            },},{id: "projects-final-report",
          title: 'final report',
          description: "final report with redirect to website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
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

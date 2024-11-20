
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "Haijiang",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Links",
      link: "/links",
    },
    {
      title: "Blog",
      link: "https://medium.com/",
    }
  ],
}
export const intro = {
  title: "Hey, I'm Haijiang",
  description: "A third-year PhD student at the University of Warwick.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "https://drive.google.com/file/d/1PbCfOan4GACZHemWUQZ1PwE-jYdUY3vS/view?usp=sharing",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "Biography",
  description: [
    "I graduated from ...",
  ],
}

export const work = {
  title: "What I do",
  cards: [
    {
      title: "Mobile App Development",
      description: "I create pixel perfect iOS and Andriod apps using Flutter.",
      icons: null,
    },
    {
      title: "Web Development",
      description: "I create responsive static websites using Reactjs.",
      icons: null,
    }
  ],
}

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "StarBook",
      description: "A digital diary and mood tracking app that helps you in keeping track of your mood and productivity throughout the month/year.",
      icons: [
        {
          icon: faAppStore,
          link: "https://apps/id1552418289",
        },
        {
          icon: faGithub,
          link: "https://githr_book",
        },
      ]
    },
    {
      title: "QuranTalk",
      description: "An emotional well being and mental health app. The app helps people to navigate their emotions in the light of the Quran.",
      icons: [
        {
          icon: faAppStore,
          link: "https://apps.id1563425149",
        },
        {
          icon: faGooglePlay,
          link: "https://play.goquran_talk",
        },
      ]
    },
    {
      title: "Portfolio",
      description: "A portfolio website template that helps you showcase your work, projects and skills as a software developer or freelancer.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/haijiangyan/portfolio",
        },
      ]
    },
  ],
}

export const contact = {
  title: "Get in touch",
  description: "Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at hashirshoaeb@gmail.com.",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:haijiang.r.yan@gmail.com",
      isPrimary: true,
    },
    {
      title: "Schedule Meeting",
      link: "https://",
      isPrimary: false,
    },
  ]
}

// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "Haijiang Yan | PhD Student",
  description: "I create AIOM. I graduated from.",
  image: profile.src,
}

export const links = {
  image: profile.src,
  title: "@haijiangyan",
  description: "PhD | Cognitive Science | Artificial Intelligence",
  cards: [
    {
      title: "My website",
      link: "https:///",
    },
    {
      title: "QuranTalk App",
      link: "https:///",
    },
    {
      title: "StarBook App",
      link: "https:///",
    },
    {
      title: "My GitHub",
      link: "https:///",
    },
    {
      title: "My LinkedIn",
      link: "https:///",
    },
  ]
}
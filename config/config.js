
import profile from './profile.png';
import { faAppStore, faCss3, faDocker, faFirefoxBrowser, faGithub, faGitSquare, faGooglePlay, faHtml5, faLinux, faNode, faNodeJs, faPython, faRProject, faVuejs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faFlask, faR, faTruckFront } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "</Hai-Jiang>",
  links: [
    {
      title: "Biography",
      link: "#bio",
    },
    {
      title: "Interests",
      link: "#interests",
    },
    {
      title: "Publications",
      link: "#outputs",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Skills",
      link: "#skills",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    // {
    //   title: "Blog",
    //   link: "https://medium.com/",
    // }
  ],
}
export const intro = {
  title: "Hey, I'm Haijiang",
  description: "Currently a third-year PhD student at the University of Warwick (Psychology), fully funded by a Chancellor's International Scholarship.",
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

export const bio = {
  title: "Biography",
  description: [
    "I received my BSc degrees in Medical Technology and Psychology from Peking University in 2019, where I started to be interested in information processing in human brain (the most complex and fascinating machine created by nature), particularly on algorithmic level from a systematic perspective. After that, I began to study how human behavior and neural system are interacted with gaming addiction at Chinese Academy of Sciences, and received MSc there in 2022. Currently, I'm pursuing a PhD in Psychology at the University of Warwick, focusing on human behavior, cognitive science and artificial intelligence. My research explores the intersection of human cognition and AI, aiming to better understand and model how people process information, generate interpretations to the world and make decisions. On the other hand, how current AI can benefit from insights into human cognition. Outside of my main projects, I'm passionate about developing web applications that make a positive impact to scientific community. I value creativity, continuous learning, and using technology to solve real-world problems. My motto is 'Passion is all you need'.",
  ],
}

export const interests = {
  title: "Research Interests",
  cards: [
    {
      title: "Representation elicitation",
      description: "Combining MCMC and generative agents to quickly recover how agents mentally represent categorical concepts through inter-chained decision-making trials.",
      icons: null,
    },
    {
      title: "Human-AI alignment",
      description: "The central question is: How to properly force AI to learn from human behavior and mental representations?",
      icons: null,
    },
    {
      title: "LLM as cognitive model",
      description: "Using LLM to model human behavior falls into two pathways: learn from 1) massive human responses; 2) reasoning of computational models.",
      icons: null,
    }
  ],
}

export const outputs = {
  title: "Research Outputs",
  cards: [
    {
      title: "Articles",
      description: [
        {
          content: "Yan, H., Tsvetkov, C., Chater, N., Sanborn, AN. (2024). Quickly recovering comprehensive individual mental representations of facial affect. Submitted. Preprint at https://doi.org/10.31234/osf.io/5hm49",
        },
        {
          content: "Zhu, JQ., Yan, H., Griffith, TL. (2024). Language Models Trained to do Arithmetic Predict Human Risky and Intertemporal Choice. Under review. Preprint at https://doi.org/10.48550/arXiv.2405.19313",
        },
        {
          content: "Zhu, JQ., Yan, H., Griffith, TL. (2024). Recovering Mental Representations from Large Language Models with Markov Chain Monte Carlo. In Proceedings of the 46th Annual Meeting of the Cognitive Science Society.",
        },
        {
          content: "Sanborn, AN., Yan, H., Tsvetkov, C. (2024). Combining meta-learned models with process models of cognition. Behavioral and Brain Sciences, 47, 43–44.",
        },
        {
          content: "Yan, H., Li, Q., Yu, K., and Zhao, G. (2021). Large-scale network dysfunction in youths with Internet gaming disorder: a meta-analysis of resting-state functional connectivity studies. Progress in Neuro-Psychopharmacology and Biological Psychiatry, 109, 110242.",
        },
        {
          content: "Yan, H., Zhao, G., Yu, K., and Sun, X. (2021). What lead gaming problematically addictive for certain people instead of others? Correlates of personality, protective factors and biaxial structure of Internet Gaming Disorder. Preprint at https://doi.org/10.31234/osf.io/zdy9j.",
        },
      ],
      icons: null,
    },
    {
      title: "Conferences",
      description: [
        {
          content: "July, 2023. Exploring human representations of facial affect by integrating a deep generative model into Markov Chain Monte Carlo With People. Poster at the 56th Annual Meeting of the Society for Mathematical Psychology, Amsterdam, NL.",
        },
        {
          content: "July, 2024. Recovering individual mental representations of facial affect using Markov Chain Monte Carlo with People and Gatekeepers. Talk at the 57th Annual Meeting of the Society for Mathematical Psychology, Tilburg, NL.",
        },
        {
          content: "July, 2024. Recovering individual mental representations of facial affect using Markov Chain Monte Carlo with People and Gatekeepers. Poster at the 46th Annual Meeting of the Cognitive Science Society, Rotterdam, NL.",
        },
      ],
      icons: null,
    },
  ],
}

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "All-in-One MCMCP (AIOM)",
      description: "An integrated application mainly built by Nodejs for users to customize and deploy a Markov Chain Monte Carlo with People (MCMCP) study or other variants.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/HaijiangYan/AIOM",
        },
      ]
    },
    {
      title: "Arithmetic GPT",
      description: "A nanoGPT trained on human-aligned arithmetic data from scratch shows amazing ability in predicting human risky and intertemporal choice.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/HaijiangYan/arithmetic-nanoGPT",
        },
      ]
    },
  ],
}

export const skills = {
  title: "Skills",
  cards: [
    {
      icon: faPython,
      name: "Python",
    },
    {
      icon: faNode,
      name: "Nodejs",
    },
    {
      icon: faRProject,
      name: "R",
    },
    {
      icon: faLinux,
      name: "Linux",
    },
    {
      icon: faDocker,
      name: "Docker",
    },
    {
      icon: faGitSquare,
      name: "Git",
    },
    {
      icon: faDatabase,
      name: "PostgreSQL",
    },
    {
      icon: faFirefoxBrowser,
      name: "Web-dev",
    },
  ]
}

export const contact = {
  title: "Get in touch",
  description: "Feel free to reach out directly by email at haijiang.r.yan@gmail.com",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:haijiang.r.yan@gmail.com",
      isPrimary: true,
    },
  ]
}

// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "Haijiang-Yan",
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
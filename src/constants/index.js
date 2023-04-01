import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    filmpire,
    cryptoket,
    threeJS_index,
    threejs,
    live,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full-Stack Developer",
      icon: web,
    },
    {
      title: "AI Developer",
      icon: mobile,
    },
    {
      title: "Web3 Developer",
      icon: backend,
    },
    {
      title: "Creative Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Founder & Lead Developer",
      company_name: "Vertigo Labs",
      icon: starbucks,
      iconBg: "#383E56",
      date: "October 2022 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Founder & CEO",
      company_name: "AJH Enterprises",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Feb 2018 - Present",
      points: [
        "Working closely with wholesalers internationally and customers across multiple platforms. Juggling all the hats of a commercial small business",
        "Created ad campaigns across Amazon, Facebook, and Google platforms. Learned how to read analytics and respond appropriately.",
        "Managed relationships with overseas wholesalers, and customers",
        "Researched emerging commercial trends and developed strategies to capitalize on them.",
      ],
    },
    {
      title: "Systems and Network Administrator",
      company_name: "Campus Family Dental",
      icon: shopify,
      iconBg: "#383E56",
      date: "May 2020 - May 2022",
      points: [
        "Set up and configured new network infrastructure in combination with on-site SFTP Ubuntu server to keep daily operations functioning more efficiently and securely through internal or external access.",
        "Configured encryption levels and user access control within electronic health record system to keep patient information safe",
        "Complied with insurance company record requests by scanning and sending business/patient documents via secure web portals to show proper patient treatments and business practices.",
        "Integrated and set up new Windows 10 desktops and document scanners into the business network to solidify system consistency in the work environment.",
      ],
    },
    {
      title: "Co-Founder & CTO",
      company_name: "DEAA Properties",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Aug 2017 - Jun 2021",
      points: [
        "Focused on lead generation for real estate investment. These investments include residential and commercial properties. Our goal is breathing new life into undervalued properties.",
        "Created an in house tool (Using PYTHON) to help streamline the market research / lead generation process",
        "Provided ad campaigns for owned properties to help drive up traffic and increase value",
        "Managed relationships with real estate agents, investors, and customers",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Filmpire - AI",
      description:
        "An AI-Powered movie recommendation app that allows users to search for movies, view movie details, and receive personalized movie recommendations",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "vercel",
          color: "green-text-gradient",
        },
        {
          name: "material-ui",
          color: "pink-text-gradient",
        },
      ],
      image: filmpire,
      source_code_link: "https://github.com/Heinz157/filmpire_andrew",
      live_site_link: "https://filmpire-andrew.vercel.app/",
    },
    {
      name: "CryptoKet - Web3",
      description:
        "A Web3 powered NFT marketplace app that allows users to discover, buy, and sell NFTs. Users can also create their own NFTs and sell them on the marketplace.",
      tags: [
        {
          name: "Solidity",
          color: "blue-text-gradient",
        },
        {
          name: "Next.JS",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: cryptoket,
      source_code_link: "https://github.com/Heinz157",
      live_site_link: "https://filmpire-andrew.vercel.app/",
    },
    {
      name: "T-Shirt Creator - AI",
      description:
        "A T-Shirt Creator app that allows users to create their own custom t-shirts. Users can also make use of Dall-E's AI to generate custom t-shirt designs. ",
      tags: [
        {
          name: "Framer Motion",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "ThreeJS",
          color: "pink-text-gradient",
        },
      ],
      image: threeJS_index,
      source_code_link: "https://github.com/Heinz157/tshirt-creator",
      live_site_link: "https://tshirt-creator-6oos.vercel.app/",
    },
  ];
  
  export { services, technologies, experiences, projects };
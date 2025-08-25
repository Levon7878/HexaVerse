import { defineStore } from 'pinia'


export const useMyStore = defineStore('myStore', {
  state: () => ({
    block: [
      {
        text: "Narrow AI",
        content: "AI designed to complete very specific actions; unable to independently learn",
        image: "src/Img/blog1.jpg",
      },
      {
        text: "Artificial General Intelligence",
        content: "AI designed to learn, think and perform at similar levels to humans.",
        image: "src/Img/blog1.jpg",
      },
      {
        text: "Artificial Superintelligence",
        content: "AI able to surpass the knowledge and capabilities of humans.",
        image: "src/Img/blog1.jpg",
      },
      {
        text: "Reactive Machine AI",
        content: "AI capable of responding to external stimuli in real time; unable to build memory or store information for future.",
        image: "src/Img/blog1.jpg",
      },
      {
        text: "Limited Memory AI",
        content: "AI that can store knowledge and use it to learn and train for future tasks.",
        image: "src/Img/blog1.jpg",
      },
      {
        text: "Theory of Mind AI",
        content: "AI that can sense and respond to human emotions, plus perform the tasks of limited memory machines.",
        image: "src/Img/blog1.jpg",
      },
      {
        text: "Self-Aware AI",
        content: "AI that can recognize others’ emotions, plus has sense of self and human-level intelligence; the final stage of AI.",
        image: "src/Img/blog1.jpg",
      },

    ],
    items: [
      {
        id: 1,
        className: "Basic",
        Plan: "Basic Plan",
        work: "Work closely with clients to understand their business goals, target audience.",
        price: "$100",
        month: "/Month",
        button: "Get Started Now",
        texts: "What's Included in Plan:",
        digitalMarketing: "Basic social media management and SEO",
        digitalPr: "Press release creation and distribution",
        webDevelopment: "Basic website setup (up to 5 pages)",
        webDesign: "Template-based design",
        aiDevelopment: "Simple chatbot integration",
        cmsDevelopment: "Basic CMS setup (e.g., WordPress)",
        projectManagement: "Basic project planning and monitoring",
        graphicDesign: "Basic logo and branding materials",
        showMore: false,
      },
      {
        id: 2,
        className: "Business",
        Plan: "Business Plan",
        work: "Work closely with clients to understand their business goals, target audience.",
        price: "$300",
        month: "/Month",
        button: "Get Started Now",
        texts: "What's Included in Plan",
        digitalMarketing: "Comprehensive social media management, content creation, and SEO",
        digitalPr: "Press release creation, distribution, and media outreach",
        webDevelopment: "Custom website development (up to 10 pages) with advanced features",
        webDesign: "Custom design tailored to your brand’s identity",
        aiDevelopment: "Advanced chatbot integration and basic AI-driven analytics",
        cmsDevelopment: "Custom CMS setup with personalized plugins and themes",
        projectManagement: "Detailed project planning, tracking, and reporting",
        graphicDesign: "Full branding package including logo, business cards, and promotional materials",
        showMore: false,
      },
      {
        id: 3,
        className: "Premium",
        Plan: "Premium Plan",
        work: "Work closely with clients to understand their business goals, target audience.",
        price: "$500",
        month: "/Month",
        button: "Get Started Now",
        texts: "What's Included in Plan",
        digitalMarketing: "Full-service digital marketing strategy, including social media management, content creation, SEO, PPC, and email marketing.",
        digitalPr: "Comprehensive PR strategy, including press release creation, distribution, media outreach, and influencer marketing.",
        webDevelopment: "Advanced custom website development (unlimited pages), with e-commerce integration, custom functionalities, and ongoing support.",
        webDesign: "Premium, fully custom design with UX/UI optimization, mobile-first design, and regular updates.",
        aiDevelopment: "Full-scale AI solutions, including advanced chatbot integration, predictive analytics, and machine learning algorithms.",
        cmsDevelopment: "Tailored CMS setup with custom features, API integrations, and ongoing maintenance.",
        projectManagement: "End-to-end project management, including agile methodologies, detailed tracking, and regular reporting.",
        graphicDesign: "Comprehensive design services, including full brand identity, marketing materials, digital and print assets, and ongoing creative support.",
        showMore: false,
      },
    ],
    digitalItems: [
      {
        id: 1,
        title: "Search Engine Optimization (SEO)",
        image: "src/Img/DigitalMarketing/seo.svg",
        text: `Improve your website's visibility on search engines to attract more organic traffic.`,
      },
      {
        id: 2,
        title:
          "Search Engine Marketing (SEM) / Pay-Per-Click Advertising (PPC)",
        image: "src/Img/DigitalMarketing/sem.svg",
        text: `Targeted ad campaigns on platforms like Google Ads and social media to drive immediate traffic and conversions.`,
      },
      {
        id: 3,
        title: "Social Media Marketing (SMM)",
        image: "src/Img/DigitalMarketing/smm.svg",
        text: `Creation and distribution of valuable content to attract and engage your target audience.`,
      },
      {
        id: 4,
        title: "Content Marketing",
        image: "src/Img/DigitalMarketing/cm.svg",
        text: `Personalized email campaigns to nurture leads and maintain customer relationships.`,
      },
      {
        id: 5,
        title: "Email Marketing",
        image: "src/Img/DigitalMarketing/em.svg",
        text: `Strategic management of your social media profiles to increase engagement and brand loyalty.`,
      },
      {
        id: 6,
        title: "Affiliate Marketing",
        image: "src/Img/DigitalMarketing/am.jpg",
        text: `Strategic management of your social media profiles to increase engagement and brand loyalty.`,
      },
      {
        id: 7,
        title: "Influencer Marketing",
        image: "src/Img/DigitalMarketing/am.jpg",
        text: `Strategic management of your social media profiles to increase engagement and brand loyalty.`,
      },
      {
        id: 8,
        title: "Influencer Marketing",
        image: "src/Img/DigitalMarketing/am.jpg",
        text: `Strategic management of your social media profiles to increase engagement and brand loyalty.`,
      },
    ],
    frontItems: [
      { image: "src/Img/blog1.jpg", text: "React.js" },
      { image: "src/Img/blog2.jpg", text: "Next.js" },
      { image: "src/Img/blog3.jpg", text: "Vue.js" },
      { image: "src/Img/blog3.jpg", text: "Angular" },
    ],
    backItems: [
      { image: "src/Img/blog1.jpg", text: "PHP" },
      { image: "src/Img/blog1.jpg", text: "Laravel" },
      { image: "src/Img/blog1.jpg", text: "Python | Django" },
      { image: "src/Img/blog1.jpg", text: "Node.js | Express.js" },
    ],
    blogTextItems: [
      {
        imgSrc: new URL("../Img/blog1.jpg", import.meta.url),
        buttonText: "Customer feedback",
      },
      {
        imgSrc: new URL("../Img/blog2.jpg", import.meta.url),
        buttonText: "Product Management",
      },
      {
        imgSrc: new URL("../Img/blog3.jpg", import.meta.url),
        buttonText: "Roadmapping",
      },
    ],
    blogPostsItems: [
      {
        img: new URL("../Img/Blog/uservoice.jpg", import.meta.url),
        Profession: "Customer Feedback",
        date: "May 02, 2024",
        text1:
          "18 UserVoice Alternatives & Competitors For Managing Customer Feedback",
        text2:
          "Top 18 UserVoice Alternatives and Competitors are Supahub, Aha, Productboard, Pendo,",
      },
      {
        img: new URL("../Img/Blog/bug-.jpg", import.meta.url),
        Profession: "Product Management",
        date: "Apr 19, 2024",
        text1:
          "Bug vs Feature: Understanding the Difference and Prioritizing Effectively",
        text2:
          "Understand the difference between bugs and features in software development. Learn to",
      },
      {
        img: new URL("../Img/Blog/Upvoty.jpg", import.meta.url),
        Profession: "Customer Feedback",
        date: "Mar 14, 2024",
        text1: "15 Best Upvoty Alternatives: Top Tools for Feedback & Changelog",
        text2:
          "Discover 15 Upvoty alternatives for feedback & changelog management, including Supahub,",
      },

    ],
    strategyItems: [
      {
        id: 1,
        num: "01",
        str: "Discovery & Planning",
        txt: "We start by understanding your business needs and challenges. Through thorough analysis and strategic planning, we craft a roadmap tailored to your goals, whether it’s optimizing your digital infrastructure, developing a new software solution, or enhancing your online presence.",
      },
      {
        id: 2,
        num: "02",
        str: "Design & Development",
        txt: "Based on the insights gathered, our team designs and develops IT solutions that are customized to your business. From user-friendly interfaces to robust backend systems, we ensure that every aspect aligns with your objectives.",
      },
      {
        id: 3,
        num: "03",
        str: "Implementation & Optimization",
        txt: "After development, we implement the solutions and continuously optimize them to ensure peak performance. Our process doesn’t stop at launch—we provide ongoing support and enhancements to keep your business ahead of the curve.",
      },
    ],
    chooseItems1: [
      {
        id: 1,
        text1: "Why Choose Kulan",
        text2:
          "We Help Your Business Evolve with Advanced IT and Digital Solutions",
        text3: "Building tomorrow's success with today's technology.",
      },
    ],
    chooseItems2: [
      { id: 1, text4: "World IT Services Excellence Award 2024", img: 'src/Img/WhyChoose/award1.png' },
      {
        id: 2,
        text5: "Innovation in Digital Transformation Award 2024",
        img: 'src/Img/WhyChoose/award2.png'
      },
    ],
    chooseItems3: [
      {
        id: 1,
        text6:
          "Recognized for our excellence in delivering scalable and secure IT infrastructure solutions tailored to meet the unique needs of our clients.",
      },
      {
        id: 2,
        text7:
          "Honored for our groundbreaking work in implementing AI-driven customer engagement platforms that redefine client experiences.",
      },
    ],
    serviceItems: [
      {
        src: "src/Img/Services/DigitalMarketing.svg",
        id: 1,
        title: "Digital Marketing",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum culpa dolorum harum?",
        link: "More Details",
      },
      {
        src: "src/Img/Services/DigitalPr.svg",
        id: 2,
        title: "Digital PR",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum culpa dolorum harum?",
        link: "More Details",
      },
      {
        src: "src/Img/Services/ProjectManagment.svg",
        id: 3,
        title: "Project Managment",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum culpa dolorum harum?",
        link: "More Details",
      },
      {
        src: "src/Img/Services/WebDev.svg",
        id: 4,
        title: "Web Development",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum culpa dolorum harum?",
        link: "More Details",
      },
      {
        src: "src/Img/Services/WebDesign.svg",
        id: 5,
        title: "Web Design",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum culpa dolorum harum?",
        link: "More Details",
      },
      {
        src: "./src/Img/Services/GraphicDesign.svg",
        id: 6,
        title: "Graphic Design",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum culpa dolorum harum?",
        link: "More Details",
      },
    ],
    latestItems: [
      {
        id: 1,
        src: 1,
        us: "client",
        name: "John Deo",
        web: "Web Development",
        Dev: "Development",
      },
      {
        id: 2,
        src: 2,
        us: "client",
        name: "John Deo",
        web: "Web Development",
        Dev: "Development",
      },
      {
        id: 3,
        src: 3,
        us: "client",
        name: "John Deo",
        web: "Web Development",
        Dev: "Development",
      },
      {
        id: 4,
        src: 4,
        us: "client",
        name: "John Deo",
        web: "Web Development",
        Dev: "Development",
      },
    ],
    planItems: [
      {
        id: 1,
        src: 1,
        user: "Admin",
        date: "5 April, 2024",
        text: "Boost Your Business with Our Expertise",
        text2:
          "Digital marketing agencies run paid advertising campaigns for themselves.",
        links: "More Details",
      },
      {
        id: 2,
        src: 2,
        user: "Admin",
        date: "5 April, 2024",
        text: "Boost Your Business with Our Expertise",
        text2: "Graphic Design & Digital PR.",
        links: "More Details",
      },
      {
        id: 3,
        src: 3,
        user: "Admin",
        date: "5 April, 2024",
        text: "How can you start your business for your next generation",
        text2: "Project Management for Seamless Execution.",
        links: "More Details",
      },
    ],
    counterItems: [
      { id: 1, num: 2425, currentNum: 0, name: "Completed", targetNum: 2425, suffix: "+" },
      { id: 2, num: 98.09, currentNum: 0, name: "Customer Satisfied", targetNum: 98.09, suffix: '%' },
      { id: 3, num: 99, currentNum: 0, name: "Conversion Rate Increased", targetNum: 99, suffix: '%' },
      { id: 4, num: 67, currentNum: 0, name: "Global Awards", targetNum: 67, suffix: '+' },
      { id: 5, num: "23 million +", currentNum: 0, name: "Total Happy Customers", targetNum: 23000000, suffix: '+' }
    ],
    duration: 9000,
    usersItems: [
      {
        id: 1,
        name: 'Willam Smith',
        role: 'Web Designer',
        image: 'src/Img/Slider/user1.png',
        users: [
          'src/Img/Slider/user1.png',
          'src/Img/Slider/user2.png',
          'src/Img/Slider/user3.png',
          'src/Img/Slider/user-4.png'
        ],
        quote: 'src/Img/Slider/quote.png',
        rating: 4,
      },
      {
        id: 2,
        name: 'User 2',
        role: 'Role 2',
        image: 'src/Img/Slider/user2.png',
        users: [
          'src/Img/Slider/user1.png',
          'src/Img/Slider/user2.png',
          'src/Img/Slider/user3.png',
          'src/Img/Slider/user-4.png'

        ],
        quote: 'src/Img/Slider/quote.png',
        rating: 5,
      },
      {
        id: 3,
        name: 'User 3',
        role: 'Role 3',
        image: 'src/Img/Slider/user3.png',
        users: [
          'src/Img/Slider/user1.png',
          'src/Img/Slider/user2.png',
          'src/Img/Slider/user3.png',
          'src/Img/Slider/user-4.png'
        ],
        quote: 'src/Img/Slider/quote.png',
        rating: 3,
      },
      {
        id: 4,
        name: 'User 4',
        role: 'Role 4',
        image: 'src/Img/Slider/user-4.png',
        users: [
          'src/Img/Slider/user1.png',
          'src/Img/Slider/user2.png',
          'src/Img/Slider/user3.png',
          'src/Img/Slider/user-4.png'
        ],
        quote: 'src/Img/Slider/quote.png',
        rating: 2,
      },
    ],
    currentIndex: 0,
    teamMembers: [
      { name: "Thomas Eaton", position: "CEO", company: "Solvero", image: "src/Img/BusinessMW/staff1.jpg", imageLine: 'src/Img/BusinessMW/staff-line.png' },
      { name: "Thomas Eaton", position: "Manager Project", image: "src/Img/BusinessMW/staff2.jpg", imageLine: 'src/Img/BusinessMW/staff-line.png' },
      { name: "Thomas Eaton", position: "Marketing Manager", image: "src/Img/BusinessMW/staff3.jpg", imageLine: 'src/Img/BusinessMW/staff-line.png' },
      { name: "Thomas Eaton", position: "IT Manager", image: "src/Img/BusinessMW/staff4.jpg", imageLine: 'src/Img/BusinessMW/staff-line.png' },
      { name: "Thomas Eaton", position: "Software Engineer", image: "src/Img/BusinessMW/staff5.jpg", imageLine: 'src/Img/BusinessMW/staff-line.png' },
      { name: "Thomas Eaton", position: "Web Designer", image: "src/Img/BusinessMW/staff6.jpg", imageLine: 'src/Img/BusinessMW/staff-line.png' },
      { name: "Thomas Eaton", position: "XU/UI Developer", image: "src/Img/BusinessMW/staff7.jpg", imageLine: 'src/Img/BusinessMW/staff-line.png' },
      { name: "Thomas Eaton", position: "Web Developer", image: "src/Img/BusinessMW/staff8.jpg", imageLine: 'src/Img/BusinessMW/staff-line.png' },
    ],


    newsLetters: [
      {
        id: 1,
        title: "Litmus News",
        description: "Our monthly newsletter packed with all the email insights, tips, and trends you need to know.",
        subscribed: false
      },
      {
        id: 2,
        title: "Litmus Weekly",
        description: "The best content from the Litmus blog and around the community delivered to your inbox every Thursday.",
        subscribed: false
      },
      {
        id: 3,
        title: "Product Updates",
        description: "Get monthly tips, insights, and stories to help you get the most out of Litmus in the Product Pulse—plus be the first to know about what’s new in Litmus.",
        subscribed: false
      },
      {
        id: 4,
        title: "Reports & Ebooks",
        description: "Guides, ebooks, and research reports to help make your marketing more effective than ever.",
        subscribed: false
      },
      {
        id: 5,
        title: "Events",
        description: "Be the first to know about our upcoming virtual and in-person events.",
        subscribed: false
      },
      {
        id: 6,
        title: "Litmus Live",
        description: "Stay up-to-date with Litmus’ annual email conference, Litmus Live.",
        subscribed: false
      }
    ],
    email: "",

    digitaPrlItems: [
      {
        id: 1,
        title: "Search Engine Optimization (SEO)",
        image: "src/Img/DigitalMarketing/seo.svg",
        text: `Improve your website's visibility on search engines to attract more organic traffic.`,
        dialog: false,
      },
      {
        id: 2,
        title:
          "Search Engine Marketing (SEM) / Pay-Per-Click Advertising (PPC)",
        image: "src/Img/DigitalMarketing/seo.svg",
        text: `Targeted ad campaigns on platforms like Google Ads and social media to drive immediate traffic and conversions.`,
        dialog: false,
      },
      {
        id: 3,
        title: "Social Media Marketing (SMM)",
        image: "src/Img/DigitalMarketing/seo.svg",
        text: `Creation and distribution of valuable content to attract and engage your target audience.`,
        dialog: false,
      },
      {
        id: 4,
        title: "Content Marketing",
        image: "src/Img/DigitalMarketing/seo.svg",
        text: `Personalized email campaigns to nurture leads and maintain customer relationships.`,
        dialog: false,
      },
      {
        id: 5,
        title: "Email Marketing",
        image: "src/Img/DigitalMarketing/seo.svg",
        text: `Strategic management of your social media profiles to increase engagement and brand loyalty.`,
        dialog: false,
      },
      {
        id: 6,
        title: "Affiliate Marketing",
        image: "src/Img/DigitalMarketing/seo.svg",
        text: `Strategic management of your social media profiles to increase engagement and brand loyalty.`,
        dialog: false,
      },
      {
        id: 7,
        title: "Influencer Marketing",
        image: "src/Img/DigitalMarketing/seo.svg",
        text: `Strategic management of your social media profiles to increase engagement and brand loyalty.`,
        dialog: false,
      },
      {
        id: 8,
        title: "Influencer Marketing",
        image: "src/Img/DigitalMarketing/seo.svg",
        text: `Strategic management of your social media profiles to increase engagement and brand loyalty.`,
        dialog: false,
      },
    ],

    managment: [
      { image: '/src/Img/Managment/cms-1.jpg', text: 'Traditional Project Management' },
      { image: '/src/Img/Managment/cms-1.jpg', text: 'Agile Project Management' },
      { image: '/src/Img/Managment/cms-1.jpg', text: 'Scrum Project Management' },
      { image: '/src/Img/Managment/cms-1.jpg', text: 'Lean Project Management' },
      { image: '/src/Img/Managment/cms-1.jpg', text: 'Kanban Project Management' },
      { image: '/src/Img/Managment/cms-1.jpg', text: 'Waterfall Project Management' },
      { image: '/src/Img/Managment/cms-1.jpg', text: 'PRINCE2 Project Management' },
      { image: '/src/Img/Managment/cms-1.jpg', text: 'Six Sigma Project Management' },

    ],
    design: [
      { image: '/src/Img/WebDesign/web-Design-1.jpg', text: 'UX/UI Design' },
      { image: '/src/Img/WebDesign/web-Design-1.jpg', text: 'Responsive Design' },
      { image: '/src/Img/WebDesign/web-Design-1.jpg', text: 'E-commerce Design' },
      { image: '/src/Img/WebDesign/web-Design-1.jpg', text: 'Landing Page Design' },
      { image: '/src/Img/WebDesign/web-Design-1.jpg', text: 'Website Redesign' },
      { image: '/src/Img/WebDesign/web-Design-1.jpg', text: 'Mobile Design' },
      { image: '/src/Img/WebDesign/web-Design-1.jpg', text: 'Branding and Identity Design' },

    ],
    graphic: [
      {
        image: "/src/Img/GraphicDesign/graphic-1.jpg",
        text: "Branding and Identity Design",
      },
      { image: "/src/Img/GraphicDesign/graphic-1.jpg", text: "Logo Design" },
      {
        image: "/src/Img/GraphicDesign/graphic-1.jpg",
        text: "Website Graphics (Icons, Buttons, Banners)",
      },
      { image: "/src/Img/GraphicDesign/graphic-1.jpg", text: "Infographic Design" },
      {
        image: "/src/Img/GraphicDesign/graphic-1.jpg",
        text: "Social Media Graphics",
      },
      {
        image: "/src/Img/GraphicDesign/graphic-1.jpg",
        text: "Illustration for Websites",
      },
      {
        image: "/src/Img/GraphicDesign/graphic-1.jpg",
        text: "User Interface (UI) Design Elements",
      },
      {
        image: "/src/Img/GraphicDesign/graphic-1.jpg",
        text: "Typography Design for Web Content",
      },
    ],
  }),
  getters: {
    aiBlock: (state) => state.block,
    planBlock: (state) => state.items,
    digitalBlock: (state) => state.digitalItems,
    frontBlock: (state) => state.frontItems,
    backBlock: (state) => state.backItems,
    blogTextBlock: (state) => state.blogTextItems,
    blogPostsBlock: (state) => state.blogPostsItems,
    strategyBlock: (state) => state.strategyItems,
    chooseBlock1: (state) => state.chooseItems1,
    chooseBlock2: (state) => state.chooseItems2,
    chooseBlock3: (state) => state.chooseItems3,
    serviceBlock: (state) => state.serviceItems,
    latestBlock: (state) => state.latestItems,
    planBlockItem: (state) => state.planItems,
    counterBlock: (state) => state.counterItems,
    teamBlock: (state) => state.teamMembers,
    usersBlock: (state) => state.usersItems,
    newsBlock: (state) => state.newsLetters,
    digitaPrBlock: (state) => state.digitaPrlItems,
    managmentBlock: (state) => state.managment,
    designBlock: (state) => state.design,
    graphicBlock: (state) => state.graphic

  },
  actions: {
    startCounters() {
      this.counterItems.forEach(item => {
        const increment = item.targetNum / (this.duration / 50);
        let current = 0;

        const step = () => {
          current += increment;
          item.currentNum = Math.min(Math.ceil(current), item.targetNum);

          if (current < item.targetNum) {
            requestAnimationFrame(step);
          }
        };

        requestAnimationFrame(step);
      });
    },
    formattedNumber(num, suffix) {
      return `${num}${suffix}`;
    },
    setCurrentUserIndex(index) {
      this.currentIndex = index;
    },


  },

})

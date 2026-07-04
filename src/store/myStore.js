import { defineStore } from 'pinia'


export const useMyStore = defineStore('myStore', {
  state: () => ({
    block: [
      {
        text: "aiDevCards.narrowTitle",
        content: "aiDevCards.narrowDesc",
        image: "src/Img/blog1.jpg",
      },
      {
        text: "aiDevCards.generalTitle",
        content: "aiDevCards.generalDesc",
        image: "src/Img/blog1.jpg",
      },
      {
        text: "aiDevCards.superTitle",
        content: "aiDevCards.superDesc",
        image: "src/Img/blog1.jpg",
      },
      {
        text: "aiDevCards.reactiveTitle",
        content: "aiDevCards.reactiveDesc",
        image: "src/Img/blog1.jpg",
      },
      {
        text: "aiDevCards.limitedTitle",
        content: "aiDevCards.limitedDesc",
        image: "src/Img/blog1.jpg",
      },
      {
        text: "aiDevCards.theoryTitle",
        content: "aiDevCards.theoryDesc",
        image: "src/Img/blog1.jpg",
      },
      {
        text: "aiDevCards.selfAwareTitle",
        content: "aiDevCards.selfAwareDesc",
        image: "src/Img/blog1.jpg",
      },

    ],
    items: [
      {
        id: 1,
        className: "Basic",
        Plan: "planBlock.plans.basic",
        work: "planBlock.desc.work",
        price: "$100",
        month: "planBlock.month",
        button: "planBlock.button",
        texts: "planBlock.included",
        digitalMarketing: "planBlock.features.basicMarketing",
        digitalPr: "planBlock.features.basicPr",
        webDevelopment: "planBlock.features.basicWeb",
        webDesign: "planBlock.features.basicDesign",
        aiDevelopment: "planBlock.features.basicAi",
        cmsDevelopment: "planBlock.features.basicCms",
        projectManagement: "planBlock.features.basicProj",
        graphicDesign: "planBlock.features.basicGraph",
        showMore: false,
      },
      {
        id: 2,
        className: "Business",
        Plan: "planBlock.plans.business",
        work: "planBlock.desc.work",
        price: "$300",
        month: "planBlock.month",
        button: "planBlock.button",
        texts: "planBlock.included",
        digitalMarketing: "planBlock.features.bizMarketing",
        digitalPr: "planBlock.features.bizPr",
        webDevelopment: "planBlock.features.bizWeb",
        webDesign: "planBlock.features.bizDesign",
        aiDevelopment: "planBlock.features.bizAi",
        cmsDevelopment: "planBlock.features.bizCms",
        projectManagement: "planBlock.features.bizProj",
        graphicDesign: "planBlock.features.bizGraph",
        showMore: false,
      },
      {
        id: 3,
        className: "Premium",
        Plan: "planBlock.plans.premium",
        work: "planBlock.desc.work",
        price: "$500",
        month: "planBlock.month",
        button: "planBlock.button",
        texts: "planBlock.included",
        digitalMarketing: "planBlock.features.premMarketing",
        digitalPr: "planBlock.features.premPr",
        webDevelopment: "planBlock.features.premWeb",
        webDesign: "planBlock.features.premDesign",
        aiDevelopment: "planBlock.features.premAi",
        cmsDevelopment: "planBlock.features.premCms",
        projectManagement: "planBlock.features.premProj",
        graphicDesign: "planBlock.features.premGraph",
        showMore: false,
      },
    ],
    digitalItems: [
      {
        id: 1,
        title: "digitalCards.seo",
        image: "src/Img/DigitalMarketing/seo.svg",
        text: `Improve your website's visibility on search engines to attract more organic traffic.`,
      },
      {
        id: 2,
        title: "digitalCards.sem",
        image: "src/Img/DigitalMarketing/sem.svg",
        text: `Targeted ad campaigns on platforms like Google Ads and social media to drive immediate traffic and conversions.`,
      },
      {
        id: 3,
        title: "digitalCards.smm",
        image: "src/Img/DigitalMarketing/smm.svg",
        text: `Creation and distribution of valuable content to attract and engage your target audience.`,
      },
      {
        id: 4,
        title: "digitalCards.cm",
        image: "src/Img/DigitalMarketing/cm.svg",
        text: `Personalized email campaigns to nurture leads and maintain customer relationships.`,
      },
      {
        id: 5,
        title: "digitalCards.em",
        image: "src/Img/DigitalMarketing/em.svg",
        text: `Strategic management of your social media profiles to increase engagement and brand loyalty.`,
      },
      {
        id: 6,
        title: "digitalCards.am",
        image: "src/Img/DigitalMarketing/am.jpg",
        text: `Strategic management of your social media profiles to increase engagement and brand loyalty.`,
      },
      {
        id: 7,
        title: "digitalCards.im",
        image: "src/Img/DigitalMarketing/am.jpg",
        text: `Strategic management of your social media profiles to increase engagement and brand loyalty.`,
      },
      {
        id: 8,
        title: "digitalCards.im",
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
        buttonText: "blog.posts.customerFeedback",
      },
      {
        imgSrc: new URL("../Img/blog2.jpg", import.meta.url),
        buttonText: "blog.posts.productManagement",
      },
      {
        imgSrc: new URL("../Img/blog3.jpg", import.meta.url),
        buttonText: "blog.posts.roadmapping",
      },
    ],
    blogPostsItems: [
      {
        img: new URL("../Img/Blog/uservoice.jpg", import.meta.url),
        Profession: "blog.posts.customerFeedback",
        date: "May 02, 2024",
        text1: "blog.posts.post1Title",
        text2: "blog.posts.post1Desc",
      },
      {
        img: new URL("../Img/Blog/bug-.jpg", import.meta.url),
        Profession: "blog.posts.productManagement",
        date: "Apr 19, 2024",
        text1: "blog.posts.post2Title",
        text2: "blog.posts.post2Desc",
      },
      {
        img: new URL("../Img/Blog/Upvoty.jpg", import.meta.url),
        Profession: "blog.posts.customerFeedback",
        date: "Mar 14, 2024",
        text1: "blog.posts.post3Title",
        text2: "blog.posts.post3Desc",
      },
    ],
    strategyItems: [
      {
        id: 1,
        num: "01",
        str: "strategy.items.1.str",
        txt: "strategy.items.1.txt",
      },
      {
        id: 2,
        num: "02",
        str: "strategy.items.2.str",
        txt: "strategy.items.2.txt",
      },
      {
        id: 3,
        num: "03",
        str: "strategy.items.3.str",
        txt: "strategy.items.3.txt",
      },
    ],
    chooseItems1: [
      {
        id: 1,
        text1: "whyChoose.subtitle",
        text2: "whyChoose.title",
        text3: "whyChoose.desc",
      },
    ],
    chooseItems2: [
      { id: 1, text4: "whyChoose.award1", img: 'src/Img/WhyChoose/award1.png' },
      {
        id: 2,
        text5: "whyChoose.award2",
        img: 'src/Img/WhyChoose/award2.png'
      },
    ],
    chooseItems3: [
      {
        id: 1,
        text6: "whyChoose.benefit1",
      },
      {
        id: 2,
        text7: "whyChoose.benefit2",
      },
    ],
    serviceItems: [
      {
        src: "src/Img/Services/DigitalMarketing.svg",
        id: 1,
        title: "nav.digitalMarketing",
        description: "servicesBlock.items.marketingDesc",
        link: "servicesBlock.items.moreDetails",
      },
      {
        src: "src/Img/Services/DigitalPr.svg",
        id: 2,
        title: "nav.digitalPR",
        description: "servicesBlock.items.prDesc",
        link: "servicesBlock.items.moreDetails",
      },
      {
        src: "src/Img/Services/ProjectManagment.svg",
        id: 3,
        title: "nav.projectManagement",
        description: "servicesBlock.items.projectDesc",
        link: "servicesBlock.items.moreDetails",
      },
      {
        src: "src/Img/Services/WebDev.svg",
        id: 4,
        title: "nav.webDevelopment",
        description: "servicesBlock.items.webDevDesc",
        link: "servicesBlock.items.moreDetails",
      },
      {
        src: "src/Img/Services/WebDesign.svg",
        id: 5,
        title: "nav.webDesign",
        description: "servicesBlock.items.webDesignDesc",
        link: "servicesBlock.items.moreDetails",
      },
      {
        src: "./src/Img/Services/GraphicDesign.svg",
        id: 6,
        title: "nav.graphicDesign",
        description: "servicesBlock.items.graphicDesc",
        link: "servicesBlock.items.moreDetails",
      },
    ],
    latestItems: [
      {
        id: 1,
        src: 1,
        us: "latestProject.items.client",
        name: "John Deo",
        web: "latestProject.items.webDev",
        Dev: "latestProject.items.dev",
      },
      {
        id: 2,
        src: 2,
        us: "latestProject.items.client",
        name: "John Deo",
        web: "latestProject.items.webDev",
        Dev: "latestProject.items.dev",
      },
      {
        id: 3,
        src: 3,
        us: "latestProject.items.client",
        name: "John Deo",
        web: "latestProject.items.webDev",
        Dev: "latestProject.items.dev",
      },
      {
        id: 4,
        src: 4,
        us: "latestProject.items.client",
        name: "John Deo",
        web: "latestProject.items.webDev",
        Dev: "latestProject.items.dev",
      },
    ],
    planItems: [
      {
        id: 1,
        src: 1,
        user: "Admin",
        date: "5 April, 2024",
        text: "planBlock.articles.title1",
        text2: "planBlock.articles.desc1",
        links: "servicesBlock.items.moreDetails",
      },
      {
        id: 2,
        src: 2,
        user: "Admin",
        date: "5 April, 2024",
        text: "planBlock.articles.title1",
        text2: "planBlock.articles.desc2",
        links: "servicesBlock.items.moreDetails",
      },
      {
        id: 3,
        src: 3,
        user: "Admin",
        date: "5 April, 2024",
        text: "planBlock.articles.title3",
        text2: "planBlock.articles.desc3",
        links: "servicesBlock.items.moreDetails",
      },
    ],
    counterItems: [
      { id: 1, num: 2425, currentNum: 0, name: "counters.completed", targetNum: 2425, suffix: "+" },
      { id: 2, num: 98.09, currentNum: 0, name: "counters.satisfied", targetNum: 98.09, suffix: '%' },
      { id: 3, num: 99, currentNum: 0, name: "counters.conversion", targetNum: 99, suffix: '%' },
      { id: 4, num: 67, currentNum: 0, name: "counters.awards", targetNum: 67, suffix: '+' },
      { id: 5, num: "23 million +", currentNum: 0, name: "counters.happy", targetNum: 23000000, suffix: '+' }
    ],
    duration: 9000,
    usersItems: [
      {
        id: 1,
        name: 'Willam Smith',
        role: 'slider.roles.webDesigner',
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
        role: 'slider.roles.role2',
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
        role: 'slider.roles.role3',
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
        role: 'slider.roles.role4',
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
      { id: 1, name: "Thomas Eaton", position: "team.positions.ceo", company: "Solvero", image: "src/Img/BusinessMW/staff1.jpg", imageLine: 'src/Img/BusinessMW/staff-line.png' },
      { id: 2, name: "Thomas Eaton", position: "team.positions.managerProject", image: "src/Img/BusinessMW/staff2.jpg", imageLine: 'src/Img/BusinessMW/staff-line.png' },
      { id: 3, name: "Thomas Eaton", position: "team.positions.marketingManager", image: "src/Img/BusinessMW/staff3.jpg", imageLine: 'src/Img/BusinessMW/staff-line.png' },
      { id: 4, name: "Thomas Eaton", position: "team.positions.itManager", image: "src/Img/BusinessMW/staff4.jpg", imageLine: 'src/Img/BusinessMW/staff-line.png' },
      { id: 5, name: "Thomas Eaton", position: "team.positions.softwareEngineer", image: "src/Img/BusinessMW/staff5.jpg", imageLine: 'src/Img/BusinessMW/staff-line.png' },
      { id: 6, name: "Thomas Eaton", position: "team.positions.webDesigner", image: "src/Img/BusinessMW/staff6.jpg", imageLine: 'src/Img/BusinessMW/staff-line.png' },
      { id: 7, name: "Thomas Eaton", position: "team.positions.uiDeveloper", image: "src/Img/BusinessMW/staff7.jpg", imageLine: 'src/Img/BusinessMW/staff-line.png' },
      { id: 8, name: "Thomas Eaton", position: "team.positions.webDeveloper", image: "src/Img/BusinessMW/staff8.jpg", imageLine: 'src/Img/BusinessMW/staff-line.png' },
    ],


    newsLetters: [
      {
        id: 1,
        title: "newsLetters.newsTitle",
        description: "newsLetters.newsDesc",
        subscribed: false
      },
      {
        id: 2,
        title: "newsLetters.weeklyTitle",
        description: "newsLetters.weeklyDesc",
        subscribed: false
      },
      {
        id: 3,
        title: "newsLetters.updatesTitle",
        description: "newsLetters.updatesDesc",
        subscribed: false
      },
      {
        id: 4,
        title: "newsLetters.reportsTitle",
        description: "newsLetters.reportsDesc",
        subscribed: false
      },
      {
        id: 5,
        title: "newsLetters.eventsTitle",
        description: "newsLetters.eventsDesc",
        subscribed: false
      },
      {
        id: 6,
        title: "newsLetters.liveTitle",
        description: "newsLetters.liveDesc",
        subscribed: false
      }
    ],
    email: "",

    digitaPrlItems: [
      {
        id: 1,
        title: "digitalCards.seo",
        image: "src/Img/DigitalMarketing/seo.svg",
        text: "digitalCards.seo",
        dialog: false,
      },
      {
        id: 2,
        title: "digitalCards.sem",
        image: "src/Img/DigitalMarketing/seo.svg",
        text: "digitalCards.sem",
        dialog: false,
      },
      {
        id: 3,
        title: "digitalCards.smm",
        image: "src/Img/DigitalMarketing/seo.svg",
        text: "digitalCards.smm",
        dialog: false,
      },
      {
        id: 4,
        title: "digitalCards.cm",
        image: "src/Img/DigitalMarketing/seo.svg",
        text: "digitalCards.cm",
        dialog: false,
      },
      {
        id: 5,
        title: "digitalCards.em",
        image: "src/Img/DigitalMarketing/seo.svg",
        text: "digitalCards.em",
        dialog: false,
      },
      {
        id: 6,
        title: "digitalCards.am",
        image: "src/Img/DigitalMarketing/seo.svg",
        text: "digitalCards.am",
        dialog: false,
      },
      {
        id: 7,
        title: "digitalCards.im",
        image: "src/Img/DigitalMarketing/seo.svg",
        text: "digitalCards.im",
        dialog: false,
      },
      {
        id: 8,
        title: "digitalCards.im",
        image: "src/Img/DigitalMarketing/seo.svg",
        text: "digitalCards.im",
        dialog: false,
      },
    ],

    managment: [
      { image: '/src/Img/Managment/cms-1.jpg', text: 'projectManagementCards.traditional' },
      { image: '/src/Img/Managment/cms-1.jpg', text: 'projectManagementCards.agile' },
      { image: '/src/Img/Managment/cms-1.jpg', text: 'projectManagementCards.scrum' },
      { image: '/src/Img/Managment/cms-1.jpg', text: 'projectManagementCards.lean' },
      { image: '/src/Img/Managment/cms-1.jpg', text: 'projectManagementCards.kanban' },
      { image: '/src/Img/Managment/cms-1.jpg', text: 'projectManagementCards.waterfall' },
      { image: '/src/Img/Managment/cms-1.jpg', text: 'projectManagementCards.prince2' },
      { image: '/src/Img/Managment/cms-1.jpg', text: 'projectManagementCards.sixSigma' },

    ],
    design: [
      { image: '/src/Img/WebDesign/web-Design-1.jpg', text: 'webDesign.uxui' },
      { image: '/src/Img/WebDesign/web-Design-1.jpg', text: 'webDesign.responsive' },
      { image: '/src/Img/WebDesign/web-Design-1.jpg', text: 'webDesign.ecommerce' },
      { image: '/src/Img/WebDesign/web-Design-1.jpg', text: 'webDesign.landing' },
      { image: '/src/Img/WebDesign/web-Design-1.jpg', text: 'webDesign.redesign' },
      { image: '/src/Img/WebDesign/web-Design-1.jpg', text: 'webDesign.mobile' },
      { image: '/src/Img/WebDesign/web-Design-1.jpg', text: 'webDesign.branding' },

    ],
    graphic: [
      {
        image: "/src/Img/GraphicDesign/graphic-1.jpg",
        text: "graphicDesignCards.branding",
      },
      { image: "/src/Img/GraphicDesign/graphic-1.jpg", text: "graphicDesignCards.logo" },
      {
        image: "/src/Img/GraphicDesign/graphic-1.jpg",
        text: "graphicDesignCards.websiteGraphics",
      },
      { image: "/src/Img/GraphicDesign/graphic-1.jpg", text: "graphicDesignCards.infographic" },
      {
        image: "/src/Img/GraphicDesign/graphic-1.jpg",
        text: "graphicDesignCards.socialMedia",
      },
      {
        image: "/src/Img/GraphicDesign/graphic-1.jpg",
        text: "graphicDesignCards.illustration",
      },
      {
        image: "/src/Img/GraphicDesign/graphic-1.jpg",
        text: "graphicDesignCards.uiDesign",
      },
      {
        image: "/src/Img/GraphicDesign/graphic-1.jpg",
        text: "graphicDesignCards.typography",
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

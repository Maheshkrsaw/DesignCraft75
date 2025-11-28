const projectsData = [
    // React Projects
    {
        id: 1,
        title: "FilmyWorld Movie App",
        desc: "React movie app with Redux and infinite scrolling.",
        category: "react",
        link: "https://react-filmyworld.netlify.app/",
        image: "assets/s-images/filmyworld.png",
        video: "assets/s-video/sample-5s.mp4"
    },
    {
        id: 2,
        title: "React E-Commerce App",
        desc: "React e-commerce app with Context API and CRUD.",
        category: "react",
        link: "https://reactproject-with-api.netlify.app/",
        image: "assets/s-images/REACT-2.png",
        video: "assets/s-video/sample-5s.mp4"
    },

    // HTML/CSS Projects
    {
        id: 3,
        title: "Dribbble Clone",
        desc: "Dribbble-style grid portfolio layout.",
        category: "html-css",
        link: "https://maheshkrsaw.github.io/DesignCraft75/13-dribble-clone",
        image: "assets/s-images/DRIBBLE.png",
        video: "assets/s-video/sample-5s.mp4"
    },
    {
        id: 4,
        title: "Winter Icecream Page",
        desc: "Icecream-themed landing page with animations.",
        category: "html-css",
        link: "https://maheshkrsaw.github.io/DesignCraft75/05-WINTER-SPECIAL-ICECREAM",
        image: "assets/s-images/ICECREAM.png",
        video: "assets/s-video/sample-5s.mp4"
    },
    {
        id: 5,
        title: "E-Commerce Landing",
        desc: "Basic e-commerce homepage with responsive layout.",
        category: "html-css",
        link: "https://maheshkrsaw.github.io/DesignCraft75/03-Ecommerce",
        image: "assets/s-images/CARA ATTRASCTIVE.png",
        video: "assets/s-video/sample-5s.mp4"
    },
    {
        id: 6,
        title: "Blinkit UI Clone",
        desc: "Blinkit UI clone using grid & flexbox.",
        category: "html-css",
        link: "https://maheshkrsaw.github.io/DesignCraft75/02-blinkit-clone",
        image: "assets/s-images/BLINKIT.png",
        video: "assets/s-video/sample-5s.mp4"
    },
    {
        id: 7,
        title: "e_learning Landing Page",
        desc: "Clean modern landing page with hero section.",
        category: "html-css",
        link: "https://maheshkrsaw.github.io/DesignCraft75/04-Landing-page",
        image: "assets/s-images/E-LEARNING.png",
        video: "assets/s-video/sample-5s.mp4"
    },
    {
        id: 8,
        title: "Obys Agency Clone",
        desc: "Agency landing page with smooth sections.",
        category: "html-css",
        link: "https://maheshkrsaw.github.io/DesignCraft75/14-obys-agency-clone",
        image: "assets/s-images/OBYS.png",
        video: "assets/s-video/sample-5s.mp4"
    },
    {
        id: 9,
        title: "Product Designer Page",
        desc: "Portfolio-style page for designers.",
        category: "html-css",
        link: "https://maheshkrsaw.github.io/DesignCraft75/15-product-designer",
        image: "assets/s-images/producr-designere.png",
        video: "assets/s-video/sample-5s.mp4"
    },
    {
        id: 10,
        title: "Porsche Landing Page",
        desc: "Car landing page with carousel hero.",
        category: "html-css",
        link: "https://maheshkrsaw.github.io/DesignCraft75/07-Porsche",
        image: "assets/s-images/PORSCHE.png",
        video: "assets/s-video/sample-5s.mp4"
    },
    {
        id: 11,
        title: "Cotton Landing Page",
        desc: "Cotton product page with clean layout.",
        category: "html-css",
        link: "https://maheshkrsaw.github.io/DesignCraft75/10-cotton-landing-page",
        image: "assets/s-images/cotton ladning page.png",
        video: "assets/s-video/sample-5s.mp4"
    },
    {
        id: 12,
        title: "Hero Panther Page",
        desc: "Bold hero section inspired by Panther theme.",
        category: "html-css",
        link: "https://maheshkrsaw.github.io/DesignCraft75/20-Hero-Panther-landing-page",
        image: "assets/s-images/MARVEL.png",
        video: "assets/s-video/sample-5s.mp4"
    },
    {
        id: 13,
        title: "Sheriyans Landing Page",
        desc: "Clean landing page with good typography.",
        category: "html-css",
        link: "https://maheshkrsaw.github.io/DesignCraft75/18-sheriyans-landig-page",
        image: "assets/s-images/sheriyans .png",
        video: "assets/s-video/sample-5s.mp4"
    },
    {
        id: 14,
        title: "Play Landing Page",
        desc: "Colorful landing page with fun elements.",
        category: "html-css",
        link: "https://maheshkrsaw.github.io/DesignCraft75/19-PLAY-landing-pages/",
        image: "assets/s-images/PLAY-KLANDINMG.png",
        video: "assets/s-video/sample-5s.mp4"
    },
    {
        id: 15,
        title: "Starbucks Landing Page",
        desc: "Starbucks-themed page with product showcase.",
        category: "html-css",
        link: "https://maheshkrsaw.github.io/DesignCraft75/08-Starbucks",
        image: "assets/s-images/STARBUCKS.png",
        video: "assets/s-video/sample-5s.mp4"
    },
    {
        id: 16,
        title: "Premier Landing Page",
        desc: "Premium look landing page with hover effects.",
        category: "html-css",
        link: "https://maheshkrsaw.github.io/DesignCraft75/12-Premier landing-page",
        image: "assets/s-images/premier-lading-page.png",
        video: "assets/s-video/sample-5s.mp4"
    },
    {
        id: 17,
        title: "Modern Landing Page",
        desc: "Landing page with CTA & hero banner.",
        category: "html-css",
        link: "https://maheshkrsaw.github.io/DesignCraft75/09-Landing-page/PROJECT_1",
        image: "assets/s-images/modern landing page -lightly padded.png",
        video: "assets/s-video/sample-5s.mp4"
    },
    {
        id: 18,
        title: "Nature Landing Page",
        desc: "Nature-inspired responsive landing page.",
        category: "html-css",
        link: "https://maheshkrsaw.github.io/DesignCraft75/06-Nature-Landing-page",
        image: "assets/s-images/nATURE.png",
        video: "assets/s-video/sample-5s.mp4"
    },
    {
        id: 19,
        title: "Pinterest Clone",
        desc: "Pinterest-style masonry image grid.",
        category: "html-css",
        link: "https://maheshkrsaw.github.io/DesignCraft75/16-pintrest-clone",
        image: "assets/s-images/PINTREASDT.png",
        video: "assets/s-video/sample-5s.mp4"
    },
    {
        id: 20,
        title: "Attractive Landing Page",
        desc: "Landing page with appealing colors & spacing.",
        category: "html-css",
        link: "https://maheshkrsaw.github.io/DesignCraft75/11-attracive-landing-page",
        image: "assets/s-images/john walker.png",
        video: "assets/s-video/sample-5s.mp4"
    },
    {
        id: 21,
        title: "Sidebar Menu",
        desc: "Responsive sidebar with toggle animation.",
        category: "html-css",
        link: "https://maheshkrsaw.github.io/DesignCraft75/01-sidebar-menu",
        image: "assets/s-images/SIDERBAR.png",
        video: "assets/s-video/sample-5s.mp4"
    }
];
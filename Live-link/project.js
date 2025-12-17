const projectsData = [
  {
    id: 1,
    title: "FilmyWorld Movie App",
    desc: "React movie app with Redux and infinite scrolling.",
    category: "html-css",
    link: "https://react-filmyworld.netlify.app/",
    image: "assets/s-images/filmyworld.png",
    video:
      "https://res.cloudinary.com/dh78xlgfs/video/upload/v1765993254/Filmy-World-converted_b6s4pw.mp4",
  },
  {
    id: 2,
    title: "React E-Commerce App",
    desc: "React e-commerce app with Context API and CRUD.",
    category: "html-css",
    link: "https://reactproject-with-api.netlify.app/",
    image: "assets/s-images/REACT-2.png",
    video:
      "https://res.cloudinary.com/dh78xlgfs/video/upload/v1765993236/react-e-comerce-converted_evrjmu.mp4",
  },
  {
    id: 3,
    title: "Dribbble Clone",
    desc: "Dribbble-style grid portfolio layout.",
    category: "html-css",
    link: "https://maheshkrsaw.github.io/DesignCraft75/13-dribble-clone",
    image: "assets/s-images/DRIBBLE.png",
    video:
      "https://res.cloudinary.com/dh78xlgfs/video/upload/v1765993251/dribble-converted_mrf5bh.mp4",
  },
  {
    id: 4,
    title: "Winter Icecream Page",
    desc: "Icecream-themed landing page with animations.",
    category: "html-css",
    link: "https://maheshkrsaw.github.io/DesignCraft75/05-WINTER-SPECIAL-ICECREAM",
    image: "assets/s-images/ICECREAM.png",
    video:
      "https://res.cloudinary.com/dh78xlgfs/video/upload/v1765993256/icecream-converted_b0r4ce.mp4",
  },
  {
    id: 5,
    title: "E-Commerce Landing",
    desc: "Basic e-commerce homepage with responsive layout.",
    category: "html-css",
    link: "https://maheshkrsaw.github.io/DesignCraft75/03-Ecommerce",
    image: "assets/s-images/CARA ATTRASCTIVE.png",
    video:
      "https://res.cloudinary.com/dh78xlgfs/video/upload/v1765993249/cara-converted_fh13yo.mp4",
  },
  {
    id: 6,
    title: "Blinkit UI Clone",
    desc: "Blinkit UI clone using grid & flexbox.",
    category: "html-css",
    link: "https://maheshkrsaw.github.io/DesignCraft75/02-blinkit-clone",
    image: "assets/s-images/BLINKIT.png",
    video:
      "https://res.cloudinary.com/dh78xlgfs/video/upload/v1765993246/blinkit-converted_w44ecc.mp4",
  },
  {
    id: 7,
    title: "e_learning Landing Page",
    desc: "Clean modern landing page with hero section.",
    category: "html-css",
    link: "https://maheshkrsaw.github.io/DesignCraft75/04-Landing-page",
    image: "assets/s-images/E-LEARNING.png",
    video:
      "https://res.cloudinary.com/dh78xlgfs/video/upload/v1765993250/e-learning-converted_dx4dz1.mp4",
  },
  {
    id: 8,
    title: "Obys Agency Clone",
    desc: "Agency landing page with smooth sections.",
    category: "html-css",
    link: "https://maheshkrsaw.github.io/DesignCraft75/14-obys-agency-clone",
    image: "assets/s-images/OBYS.png",
    video:
      "https://res.cloudinary.com/dh78xlgfs/video/upload/v1765993234/obys-agency-converted_c3wb4j.mp4",
  },
  {
    id: 9,
    title: "Product Designer Page",
    desc: "Portfolio-style page for designers.",
    category: "html-css",
    link: "https://maheshkrsaw.github.io/DesignCraft75/15-product-designer",
    image: "assets/s-images/producr-designere.png",
    video:
      "https://res.cloudinary.com/dh78xlgfs/video/upload/v1765993235/product-designer-converted_nayqy5.mp4",
  },
  {
    id: 10,
    title: "Porsche Landing Page",
    desc: "Car landing page with carousel hero.",
    category: "html-css",
    link: "https://maheshkrsaw.github.io/DesignCraft75/07-Porsche",
    image: "assets/s-images/PORSCHE.png",
    video:
      "https://res.cloudinary.com/dh78xlgfs/video/upload/v1765993234/porshce-converted_v7ylkv.mp4",
  },
  {
    id: 11,
    title: "Cotton Landing Page",
    desc: "Cotton product page with clean layout.",
    category: "html-css",
    link: "https://maheshkrsaw.github.io/DesignCraft75/10-cotton-landing-page",
    image: "assets/s-images/cotton ladning page.png",
    video:
      "https://res.cloudinary.com/dh78xlgfs/video/upload/v1765993248/cotton-landing-page-converted_r7fruk.mp4",
  },
  {
    id: 12,
    title: "Hero Panther Page",
    desc: "Bold hero section inspired by Panther theme.",
    category: "html-css",
    link: "https://maheshkrsaw.github.io/DesignCraft75/20-Hero-Panther-landing-page",
    image: "assets/s-images/MARVEL.png",
    video:
      "https://res.cloudinary.com/dh78xlgfs/video/upload/v1765993245/black-panther-converted_kemlr5.mp4",
  },
  {
    id: 13,
    title: "Sheriyans Landing Page",
    desc: "Clean landing page with good typography.",
    category: "html-css",
    link: "https://maheshkrsaw.github.io/DesignCraft75/18-sheriyans-landig-page",
    image: "assets/s-images/sheriyans .png",
    video:
      "https://res.cloudinary.com/dh78xlgfs/video/upload/v1765993236/sheriyans-converted_j2g694.mp4",
  },
  {
    id: 14,
    title: "Play Landing Page",
    desc: "Colorful landing page with fun elements.",
    category: "html-css",
    link: "https://maheshkrsaw.github.io/DesignCraft75/19-PLAY-landing-pages/",
    image: "assets/s-images/PLAY-KLANDINMG.png",
    video:
      "https://res.cloudinary.com/dh78xlgfs/video/upload/v1765993233/play-converted_tzuful.mp4",
  },
  {
    id: 15,
    title: "Starbucks Landing Page",
    desc: "Starbucks-themed page with product showcase.",
    category: "html-css",
    link: "https://maheshkrsaw.github.io/DesignCraft75/08-Starbucks",
    image: "assets/s-images/STARBUCKS.png",
    video:
      "https://res.cloudinary.com/dh78xlgfs/video/upload/v1765993238/starbucks-converted_vfknkk.mp4",
  },
  {
    id: 16,
    title: "Premier Landing Page",
    desc: "Premium look landing page with hover effects.",
    category: "html-css",
    link: "https://maheshkrsaw.github.io/DesignCraft75/12-Premier landing-page",
    image: "assets/s-images/premier-lading-page.png",
    video:
      "https://res.cloudinary.com/dh78xlgfs/video/upload/v1765993238/premier-converted_kdmmgi.mp4",
  },
  {
    id: 17,
    title: "Modern Landing Page",
    desc: "Landing page with CTA & hero banner.",
    category: "html-css",
    link: "https://maheshkrsaw.github.io/DesignCraft75/09-Landing-page/PROJECT_1",
    image: "assets/s-images/modern landing page -lightly padded.png",
    video:
      "https://res.cloudinary.com/dh78xlgfs/video/upload/v1765993230/modern-landing-page-converted_fptycn.mp4",
  },
  {
    id: 18,
    title: "Nature Landing Page",
    desc: "Nature-inspired responsive landing page.",
    category: "html-css",
    link: "https://maheshkrsaw.github.io/DesignCraft75/06-Nature-Landing-page",
    image: "assets/s-images/nATURE.png",
    video:
      "https://res.cloudinary.com/dh78xlgfs/video/upload/v1765993231/nature-converted_xxkxj5.mp4",
  },
  {
    id: 19,
    title: "Pinterest Clone",
    desc: "Pinterest-style masonry image grid.",
    category: "html-css",
    link: "https://maheshkrsaw.github.io/DesignCraft75/16-pintrest-clone",
    image: "assets/s-images/PINTREASDT.png",
    video:
      "https://res.cloudinary.com/dh78xlgfs/video/upload/v1765993233/PINTREST-converted_asmiqa.mp4",
  },
  {
    id: 20,
    title: "Attractive Landing Page",
    desc: "Landing page with appealing colors & spacing.",
    category: "html-css",
    link: "https://maheshkrsaw.github.io/DesignCraft75/11-attracive-landing-page",
    image: "assets/s-images/john walker.png",
    video:
      "https://res.cloudinary.com/dh78xlgfs/video/upload/v1765993244/attractive-landing-page-converted_ibntyb.mp4",
  },
  {
    id: 21,
    title: "Sidebar Menu",
    desc: "Responsive sidebar with toggle animation.",
    category: "html-css",
    link: "https://maheshkrsaw.github.io/DesignCraft75/01-sidebar-menu",
    image: "assets/s-images/SIDERBAR.png",
    video:
      "https://res.cloudinary.com/dh78xlgfs/video/upload/v1765993242/sidebar-converted_lctby8.mp4",
  },
  {
    id: 22,
    title: "Age Calculator",
    desc: "Calculate age based on birth date.",
    category: "html-css",
    link: "https://maheshkrsaw.github.io/DesignCraft75/21-Age-calculator/",
    image: "assets/s-images/age-calculator.png",
    video:
      "https://res.cloudinary.com/dh78xlgfs/video/upload/v1765993244/age-calculator-converted_lpslio.mp4",
  },
  {
    id: 23,
    title: "Modern Calculator",
    desc: "Simple modern calculator app.",
    category: "html-css",
    link: "https://maheshkrsaw.github.io/DesignCraft75/22-Calculator/",
    image: "assets/s-images/modern-calculator.png",
    video:
      "https://res.cloudinary.com/dh78xlgfs/video/upload/v1765993231/modern-calculator-converted_wu1bt9.mp4",
  },
  {
    id: 24,
    title: "Notes App",
    desc: "Create, edit, and delete notes.",
    category: "html-css",
    link: "https://maheshkrsaw.github.io/DesignCraft75/23-Notes/",
    image: "assets/s-images/notes.png",
    video:
      "https://res.cloudinary.com/dh78xlgfs/video/upload/v1765993235/notes-converted_ahlkul.mp4",
  },
  {
    id: 25,
    title: "Stopwatch",
    desc: "Basic stopwatch with start, stop, and reset.",
    category: "html-css",
    link: "https://maheshkrsaw.github.io/DesignCraft75/24-stopwatch/",
    image: "assets/s-images/stopwatch.png",
    video:
      "https://res.cloudinary.com/dh78xlgfs/video/upload/v1765993238/stopwatch-converted_ctglz0.mp4",
  },
  {
    id: 26,
    title: "Digital Clock",
    desc: "Live digital clock with dynamic time display.",
    category: "html-css",
    link: "https://maheshkrsaw.github.io/DesignCraft75/25-Digital-Clock/",
    image: "assets/s-images/digital-clock.png",
    video:
      "https://res.cloudinary.com/dh78xlgfs/video/upload/v1765993249/digital-clock-converted_qb7kva.mp4",
  },
  {
    id: 27,
    title: "Image Crousers",
    desc: "Image carousel slider with navigation buttons.",
    category: "html-css",
    link: "https://maheshkrsaw.github.io/DesignCraft75/26-image-crousers/",
    image: "assets/s-images/image-crousels.png",
    video:
      "https://res.cloudinary.com/dh78xlgfs/video/upload/v1765993258/image-crousels-converted_lfad78.mp4",
  },
  {
    id: 28,
    title: "Mini Calendar",
    desc: "Small interactive calendar app.",
    category: "html-css",
    link: "https://maheshkrsaw.github.io/DesignCraft75/27-Mini-calendar/",
    image: "assets/s-images/mini-calendasr.png",
    video:
      "https://res.cloudinary.com/dh78xlgfs/video/upload/v1765993230/mini_calendar-converted_o7f1tc.mp4",
  },
  {
    id: 29,
    title: "Form Validation",
    desc: "Validate forms before submission using JS.",
    category: "html-css",
    link: "https://maheshkrsaw.github.io/DesignCraft75/28-Form-Validation/",
    image: "assets/s-images/form-validation.png",
    video:
      "https://res.cloudinary.com/dh78xlgfs/video/upload/v1765993254/form-validation-converted_erofoz.mp4",
  },
  {
    id: 30,
    title: "Instagram Clone",
    desc: "Frontend clone of Instagram UI.",
    category: "html-css",
    link: "https://maheshkrsaw.github.io/DesignCraft75/29-insta-clone/",
    image: "assets/s-images/insta-clone.png",
    video:
      "https://res.cloudinary.com/dh78xlgfs/video/upload/v1765993260/insta-clone-converted_o1shcu.mp4",
  },
  {
    id: 31,
    title: "Glitch Effect",
    desc: "Text and image glitch animation effect.",
    category: "html-css",
    link: "https://maheshkrsaw.github.io/DesignCraft75/30-Glitch-effect/",
    image: "assets/s-images/glitch.png",
    video:
      "https://res.cloudinary.com/dh78xlgfs/video/upload/v1765993262/glitch-effect-converted_kf4sdb.mp4",
  },
  {
    id: 32,
    title: "Job Dashboard",
    desc: "Dashboard UI for job applications.",
    category: "html-css",
    link: "https://maheshkrsaw.github.io/DesignCraft75/31-job%20dashboard/",
    image: "assets/s-images/job-dashboard.png",
    video:
      "https://res.cloudinary.com/dh78xlgfs/video/upload/v1765993262/glitch-effect-converted_kf4sdb.mp4",
  },
  {
    id: 33,
    title: "Vita Health Care",
    desc: "Health care landing page with services section.",
    category: "html-css",
    link: "https://maheshkrsaw.github.io/DesignCraft75/32-Health-care/",
    image: "assets/s-images/vita-health-care.png",
    video:
      "https://res.cloudinary.com/dh78xlgfs/video/upload/v1765993245/vita-health-care-converted_vbfgqn.mp4",
  },
  {
    id: 34,
    title: "Insta Reel Clone",
    desc: "Short video reel style UI inspired by Instagram Reels.",
    category: "html-css",
    link: "https://maheshkrsaw.github.io/DesignCraft75/33-insta-reel-clone/",
    image: "assets/s-images/insta-reel-clone.png",
    video:
      "https://res.cloudinary.com/dh78xlgfs/video/upload/v1765993261/insta-reel-clone-converted_l7she5.mp4",
  },
  {
    id: 35,
    title: "CineScope (Movie App)",
    desc: "Movie listing UI with search and filters.",
    category: "html-css",
    link: "https://maheshkrsaw.github.io/DesignCraft75/34-CineScope-Movie/",
    image: "assets/s-images/cinescope.png",
    video:
      "https://res.cloudinary.com/dh78xlgfs/video/upload/v1765993261/insta-reel-clone-converted_l7she5.mp4",
  },
  {
    id: 36,
    title: "CashFlow (Expense Tracker)",
    desc: "Expense tracker app to add and categorize expenses.",
    category: "js",
    link: "https://maheshkrsaw.github.io/DesignCraft75/35-CashFlow-expense-Tracker/",
    image: "assets/s-images/cashflow.png",
    video:
      "https://res.cloudinary.com/dh78xlgfs/video/upload/v1765993247/cashflow-converted_imfiso.mp4",
  },
  {
    id: 37,
    title: "TaskMaker (Trello-like App)",
    desc: "Project board with draggable cards and lists.",
    category: "js",
    link: "https://maheshkrsaw.github.io/DesignCraft75/36-TaskMaker-project/",
    image: "assets/s-images/taskmaker.png",
    video:
      "https://res.cloudinary.com/dh78xlgfs/video/upload/v1765993247/cashflow-converted_imfiso.mp4",
  },
  {
    id: 38,
    title: "TravelGo",
    desc: "Travel planning landing page with destinations showcase.",
    category: "html-css",
    link: "https://maheshkrsaw.github.io/DesignCraft75/37-TravelPlan",
    image: "assets/s-images/travelgo.png",
    video:
      "https://res.cloudinary.com/dh78xlgfs/video/upload/v1765993243/travelgo-converted_j1zpy3.mp4",
  },
  {
    id: 39,
    title: "API Master (Postman Clone)",
    desc: "API testing UI with request builder and response viewer.",
    category: "js",
    link: "https://maheshkrsaw.github.io/DesignCraft75/38-Postman",
    image: "assets/s-images/api-master.png",
    video:
      "https://res.cloudinary.com/dh78xlgfs/video/upload/v1765993243/travelgo-converted_j1zpy3.mp4",
  },
  {
    id: 40,
    title: "CodeCraft (Live Preview Editor)",
    desc: "Live code editor with HTML/CSS/JS preview pane.",
    category: "js",
    link: "https://maheshkrsaw.github.io/DesignCraft75/39-live-editor",
    image: "assets/s-images/codecraft.png",
    video:
      "https://res.cloudinary.com/dh78xlgfs/video/upload/v1765993246/codecraft-converted_rz1pso.mp4",
  },
  {
    id: 41,
    title: "WeatherNow",
    desc: "Weather app with API integration and search.",
    category: "js",
    link: "https://maheshkrsaw.github.io/DesignCraft75/40-weatherApp",
    image: "assets/s-images/weather.png",
    video:
      "https://res.cloudinary.com/dh78xlgfs/video/upload/v1765993248/weather-converted_cwtl3y.mp4",
  },
  {
    id: 42,
    title: "QuizMaster",
    desc: "Interactive quiz app with multiple-choice questions.",
    category: "js",
    link: "https://maheshkrsaw.github.io/DesignCraft75/41-QuizApp",
    image: "assets/s-images/quizmaster.png",
    video:
      "https://res.cloudinary.com/dh78xlgfs/video/upload/v1765993249/quizmaster-converted_rnvhpx.mp4",
  },
  {
    id: 43,
    title: "Portfolio Pro",
    desc: "Modern personal portfolio with project showcase.",
    category: "html-css",
    link: "https://maheshkrsaw.github.io/DesignCraft75/42-Portfolio",
    image: "assets/s-images/portfolio-pro.png",
    video:
      "https://res.cloudinary.com/dh78xlgfs/video/upload/v1765993250/portfolio-pro-converted_v2rbyx.mp4",
  },
  {
    id: 44,
    title: "Blogify",
    desc: "Blog platform UI with posts and comment section.",
    category: "js",
    link: "https://maheshkrsaw.github.io/DesignCraft75/43-Blogify",
    image: "assets/s-images/blogify.png",
    video:
      "https://res.cloudinary.com/dh78xlgfs/video/upload/v1765993251/blogify-converted_ykmyxv.mp4",
  },
  {
    id: 45,
    title: "Crypto Tracker",
    desc: "Track live cryptocurrency prices with API.",
    category: "js",
    link: "https://maheshkrsaw.github.io/DesignCraft75/44-CryptoTracker",
    image: "assets/s-images/crypto-tracker.png",
    video:
      "https://res.cloudinary.com/dh78xlgfs/video/upload/v1765993252/crypto-tracker-converted_wdq0cv.mp4",
  },
  {
    id: 46,
    title: "Todo List Pro",
    desc: "Advanced todo app with filters and local storage.",
    category: "js",
    link: "https://maheshkrsaw.github.io/DesignCraft75/45-TodoList",
    image: "assets/s-images/todo-list.png",
    video:
      "https://res.cloudinary.com/dh78xlgfs/video/upload/v1765993253/todolist-converted_yttqln.mp4",
  },
  {
    id: 47,
    title: "Calculator Pro",
    desc: "Enhanced calculator with multiple operations.",
    category: "js",
    link: "https://maheshkrsaw.github.io/DesignCraft75/46-CalculatorPro",
    image: "assets/s-images/calculator-pro.png",
    video:
      "https://res.cloudinary.com/dh78xlgfs/video/upload/v1765993254/calculator-pro-converted_c5lwtz.mp4",
  },
  {
    id: 48,
    title: "MovieDB",
    desc: "Search movies with API integration.",
    category: "js",
    link: "https://maheshkrsaw.github.io/DesignCraft75/47-MovieDB",
    image: "assets/s-images/moviedb.png",
    video:
      "https://res.cloudinary.com/dh78xlgfs/video/upload/v1765993255/moviedb-converted_w7sfr0.mp4",
  },
  {
    id: 49,
    title: "Music Player",
    desc: "Custom music player with playlist support.",
    category: "js",
    link: "https://maheshkrsaw.github.io/DesignCraft75/48-MusicPlayer",
    image: "assets/s-images/music-player.png",
    video:
      "https://res.cloudinary.com/dh78xlgfs/video/upload/v1765993256/music-player-converted_sap0rz.mp4",
  },
  {
    id: 50,
    title: "Chat App",
    desc: "Frontend UI of chat application.",
    category: "js",
    link: "https://maheshkrsaw.github.io/DesignCraft75/49-ChatApp",
    image: "assets/s-images/chat-app.png",
    video:
      "https://res.cloudinary.com/dh78xlgfs/video/upload/v1765993257/chat-app-converted_mqy1a5.mp4",
  },
  {
    id: 51,
    title: "Fitness Tracker",
    desc: "Track fitness activities and stats.",
    category: "js",
    link: "https://maheshkrsaw.github.io/DesignCraft75/50-FitnessTracker",
    image: "assets/s-images/fitness-tracker.png",
    video:
      "https://res.cloudinary.com/dh78xlgfs/video/upload/v1765993258/fitness-tracker-converted_bh6r3p.mp4",
  },
];

/* ==========================================================================
   BOOK NOOK & AI MATCHMAKER - DATASETS
   ========================================================================== */

const GENRES_DATA = [
  {
    id: "fantasy",
    name: "Fantasy",
    icon: "🪄",
    category: "fiction",
    summary: "Immerse yourself in magical worlds, epic quests, mythical creatures, and ancient magic systems.",
    subgenres: ["Epic Fantasy", "Urban Fantasy", "Cozy Fantasy", "Dark Fantasy", "Mythological Fiction"],
    tropes: ["Chosen One", "Enemies-to-Lovers", "Found Family", "Magic School", "Reluctant Hero"],
    benchmarks: [
      { title: "The Way of Kings", author: "Brandon Sanderson", cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=300&q=80" },
      { title: "A Court of Thorns and Roses", author: "Sarah J. Maas", cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=300&q=80" },
      { title: "Legends & Lattes", author: "Travis Baldree", cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=300&q=80" }
    ]
  },
  {
    id: "scifi",
    name: "Science Fiction",
    icon: "🚀",
    category: "fiction",
    summary: "Explore futuristic technologies, space travel, dystopian societies, AI revolutions, and alien encounters.",
    subgenres: ["Space Opera", "Cyberpunk", "Dystopian", "Time Travel", "Hard Sci-Fi"],
    tropes: ["AI Awakening", "First Contact", "Dystopian Resistance", "Multiverse Jump"],
    benchmarks: [
      { title: "Project Hail Mary", author: "Andy Weir", cover: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=300&q=80" },
      { title: "Dune", author: "Frank Herbert", cover: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=300&q=80" },
      { title: "Scythe", author: "Neal Shusterman", cover: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=300&q=80" }
    ]
  },
  {
    id: "mystery",
    name: "Mystery & Thriller",
    icon: "🔍",
    category: "fiction",
    summary: "Solve gripping whodunits, unmask psychological secrets, and navigate high-stakes suspense.",
    subgenres: ["Cozy Mystery", "Psychological Thriller", "Police Procedural", "Legal Thriller"],
    tropes: ["Unreliable Narrator", "Locked-Room Mystery", "Amateur Sleuth", "Plot Twist"],
    benchmarks: [
      { title: "The Silent Patient", author: "Alex Michaelides", cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=300&q=80" },
      { title: "A Good Girl's Guide to Murder", author: "Holly Jackson", cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=300&q=80" },
      { title: "The Thursday Murder Club", author: "Richard Osman", cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=300&q=80" }
    ]
  },
  {
    id: "romance",
    name: "Romance",
    icon: "💖",
    category: "fiction",
    summary: "Heartwarming, emotional, and passionate stories exploring love, relationships, and happy endings.",
    subgenres: ["Contemporary Romance", "Romantasy", "Historical Romance", "Sports Romance"],
    tropes: ["Enemies-to-Lovers", "Fake Dating", "Grumpy x Sunshine", "Second Chance", "Slow Burn"],
    benchmarks: [
      { title: "Book Lovers", author: "Emily Henry", cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=300&q=80" },
      { title: "The Love Hypothesis", author: "Ali Hazelwood", cover: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=300&q=80" },
      { title: "Fourth Wing", author: "Rebecca Yarros", cover: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=300&q=80" }
    ]
  },
  {
    id: "ya",
    name: "Young Adult (YA)",
    icon: "⚡",
    category: "age-group",
    summary: "Fast-paced coming-of-age journeys filled with high stakes, self-discovery, romance, and adventure.",
    subgenres: ["YA Fantasy", "YA Dystopian", "YA Contemporary", "YA Mystery"],
    tropes: ["Underdog Rebel", "First Love", "Secrets Revealed", "Boarding School"],
    benchmarks: [
      { title: "The Hunger Games", author: "Suzanne Collins", cover: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=300&q=80" },
      { title: "Six of Crows", author: "Leigh Bardugo", cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=300&q=80" },
      { title: "The Cruel Prince", author: "Holly Black", cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=300&q=80" }
    ]
  },
  {
    id: "middle-grade",
    name: "Middle Grade",
    icon: "🎒",
    category: "age-group",
    summary: "Enchanting adventures tailored for readers ages 8–12, focusing on friendship, courage, and family.",
    subgenres: ["Magical Realism", "Adventure", "Graphic Novels", "Mystery"],
    tropes: ["Hidden Magic", "Group of Friends", "Talking Animals", "Quest"],
    benchmarks: [
      { title: "Percy Jackson & The Olympians", author: "Rick Riordan", cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=300&q=80" },
      { title: "Keeper of the Lost Cities", author: "Shannon Messenger", cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=300&q=80" },
      { title: "Amari and the Night Brothers", author: "B.B. Alston", cover: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=300&q=80" }
    ]
  },
  {
    id: "non-fiction",
    name: "Non-Fiction & Memoir",
    icon: "🧠",
    category: "non-fiction",
    summary: "Inspiring real-life accounts, personal memoirs, science, psychology, history, and self-growth.",
    subgenres: ["Memoir", "Self-Improvement", "Popular Science", "History", "Psychology"],
    tropes: ["Real Transformation", "True Story", "Expert Insights"],
    benchmarks: [
      { title: "Atomic Habits", author: "James Clear", cover: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=300&q=80" },
      { title: "Educated", author: "Tara Westover", cover: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=300&q=80" },
      { title: "Becoming", author: "Michelle Obama", cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=300&q=80" }
    ]
  },
  {
    id: "historical-fiction",
    name: "Historical Fiction",
    icon: "⏳",
    category: "fiction",
    summary: "Travel back in time through richly detailed narratives set against real historical eras and events.",
    subgenres: ["WWII Fiction", "Regency", "Ancient Civilizations", "Biographical Fiction"],
    tropes: ["Dual Timelines", "Secret Letters", "Against All Odds"],
    benchmarks: [
      { title: "The Seven Husbands of Evelyn Hugo", author: "Taylor Jenkins Reid", cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=300&q=80" },
      { title: "All the Light We Cannot See", author: "Anthony Doerr", cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=300&q=80" },
      { title: "The Book Thief", author: "Markus Zusak", cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=300&q=80" }
    ]
  }
];

const BOOKS_DATABASE = [
  {
    id: "book-1",
    title: "Project Hail Mary",
    author: "Andy Weir",
    cover: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80",
    genres: ["scifi"],
    ageGroup: "adult",
    rating: 4.8,
    reviewsCount: "85,400",
    price: "$15.99",
    pageCount: 496,
    publishedYear: 2021,
    tone: "fast-paced",
    tropes: ["Space Survival", "Unlikely Alliance", "Sci-Fi Problem Solving"],
    buyLinks: {
      amazon: "https://www.amazon.com/dp/0593135202",
      barnes: "https://www.barnesandnoble.com/w/project-hail-mary-andy-weir/1137998638",
      bookshop: "https://bookshop.org/p/books/project-hail-mary-andy-weir/15445214"
    },
    synopsis: "Ryland Grace is the sole survivor on a desperate, last-chance mission to save humanity from extinction. The only problem? He just woke up from a coma, has amnesia, and has no idea who he is or what he's supposed to do. Aided by an unexpected alien ally, he must use science and ingenuity to solve a cosmic mystery.",
    matchReason: "Matches your love for fast-paced sci-fi with incredible humor, heart, and smart problem solving!"
  },
  {
    id: "book-2",
    title: "Fourth Wing",
    author: "Rebecca Yarros",
    cover: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=400&q=80",
    genres: ["fantasy", "romance"],
    ageGroup: "new-adult",
    rating: 4.7,
    reviewsCount: "142,000",
    price: "$17.49",
    pageCount: 528,
    publishedYear: 2023,
    tone: "exciting",
    tropes: ["Enemies-to-Lovers", "Dragon Riders", "Magic War College", "High Stakes"],
    buyLinks: {
      amazon: "https://www.amazon.com/dp/1649374046",
      barnes: "https://www.barnesandnoble.com/w/fourth-wing-rebecca-yarros/1142511475",
      bookshop: "https://bookshop.org/p/books/fourth-wing-rebecca-yarros/19324546"
    },
    synopsis: "Twenty-year-old Violet Sorrengail was supposed to enter the quiet Scribe Quadrant. Instead, her commanding general mother orders her to join the deadly Basgiath War College to become a dragon rider. With fewer riders than dragons willing to bond, survival is a daily battle.",
    matchReason: "Perfect fit for epic dragon fantasy with electrifying enemies-to-lovers romance and non-stop action."
  },
  {
    id: "book-3",
    title: "Amari and the Night Brothers",
    author: "B.B. Alston",
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80",
    genres: ["middle-grade", "fantasy", "mystery"],
    ageGroup: "middle-grade",
    rating: 4.8,
    reviewsCount: "18,200",
    price: "$9.99",
    pageCount: 416,
    publishedYear: 2021,
    tone: "uplifting",
    tropes: ["Secret Supernatural Agency", "Missing Sibling", "Underdog Magic"],
    buyLinks: {
      amazon: "https://www.amazon.com/dp/0062975179",
      barnes: "https://www.barnesandnoble.com/w/amari-and-the-night-brothers-b-b-alston/1136611425",
      bookshop: "https://bookshop.org/p/books/amari-and-the-night-brothers-b-b-alston/14603348"
    },
    synopsis: "Amari Peters believes her missing big brother Quinton is still alive. Her search leads her to a tryout at the secret Bureau of Supernatural Affairs, where magic is real, wands exist, and Amari discovers she possesses illegal, potent magic of her own.",
    matchReason: "An enchanting, high-energy adventure for Middle Grade readers who love Percy Jackson and Men in Black combined!"
  },
  {
    id: "book-4",
    title: "A Good Girl's Guide to Murder",
    author: "Holly Jackson",
    cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80",
    genres: ["ya", "mystery"],
    ageGroup: "ya",
    rating: 4.6,
    reviewsCount: "98,100",
    price: "$11.20",
    pageCount: 400,
    publishedYear: 2019,
    tone: "dark",
    tropes: ["Amateur Sleuth", "Small-Town Secrets", "True Crime Podcast Vibe", "Plot Twist"],
    buyLinks: {
      amazon: "https://www.amazon.com/dp/1984896393",
      barnes: "https://www.barnesandnoble.com/w/a-good-girls-guide-to-murder-holly-jackson/1131102928",
      bookshop: "https://bookshop.org/p/books/a-good-girl-s-guide-to-murder-holly-jackson/12762498"
    },
    synopsis: "Five years ago, schoolgirl Andie Bell was murdered by Sal Singh. Everyone in town knows he did it. But Pip Fitz-Amobi chooses the case for her senior capstone project to dig deeper and uncovers secrets that someone in town desperately wants to stay hidden.",
    matchReason: "Spot-on choice for Young Adult readers craving addictive, twisty murder mysteries with brilliant clue-finding!"
  },
  {
    id: "book-5",
    title: "Legends & Lattes",
    author: "Travis Baldree",
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=400&q=80",
    genres: ["fantasy"],
    ageGroup: "adult",
    rating: 4.6,
    reviewsCount: "45,000",
    price: "$13.99",
    pageCount: 304,
    publishedYear: 2022,
    tone: "cozy",
    tropes: ["Cozy Fantasy", "Retired Adventurer", "Coffee Shop Owner", "Found Family"],
    buyLinks: {
      amazon: "https://www.amazon.com/dp/1250886088",
      barnes: "https://www.barnesandnoble.com/w/legends-lattes-travis-baldree/1141369324",
      bookshop: "https://bookshop.org/p/books/legends-lattes-travis-baldree/18485290"
    },
    synopsis: "Tired of a lifetime of blood and violence, Viv, a battle-weary female orc barbarian, hangs up her sword to open the first-ever coffee shop in the fantasy city of Thune. Alongside new friends and a cozy cinnamon roll menu, she builds a warm life.",
    matchReason: "The ultimate cozy fantasy read! Heartwarming, comforting, and delicious low-stakes comfort reading."
  },
  {
    id: "book-6",
    title: "Percy Jackson: The Lightning Thief",
    author: "Rick Riordan",
    cover: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80",
    genres: ["middle-grade", "fantasy"],
    ageGroup: "middle-grade",
    rating: 4.9,
    reviewsCount: "210,000",
    price: "$7.99",
    pageCount: 375,
    publishedYear: 2005,
    tone: "exciting",
    tropes: ["Greek Mythology", "Demigod Hero", "Cross-Country Quest"],
    buyLinks: {
      amazon: "https://www.amazon.com/dp/0786838655",
      barnes: "https://www.barnesandnoble.com/w/lightning-thief-rick-riordan/1100052164",
      bookshop: "https://bookshop.org/p/books/the-lightning-thief-rick-riordan/6703551"
    },
    synopsis: "Percy Jackson is a 12-year-old boy who discovers he is actually a demigod, the son of Poseidon. Accused of stealing Zeus's master lightning bolt, Percy must embark on a quest across America to find the real thief and prevent a war among the gods.",
    matchReason: "Classic, hilarious, and action-packed mythic adventure loved by young readers and adults alike!"
  },
  {
    id: "book-7",
    title: "Atomic Habits",
    author: "James Clear",
    cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=400&q=80",
    genres: ["non-fiction"],
    ageGroup: "adult",
    rating: 4.8,
    reviewsCount: "135,000",
    price: "$14.79",
    pageCount: 320,
    publishedYear: 2018,
    tone: "uplifting",
    tropes: ["Self Improvement", "Habit Building", "Practical Wisdom"],
    buyLinks: {
      amazon: "https://www.amazon.com/dp/0735211299",
      barnes: "https://www.barnesandnoble.com/w/atomic-habits-james-clear/1129188094",
      bookshop: "https://bookshop.org/p/books/atomic-habits-james-clear/12185790"
    },
    synopsis: "No matter your goals, Atomic Habits offers a proven framework for improving every day. James Clear reveals practical strategies that will teach you how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.",
    matchReason: "Invaluable non-fiction recommendation for anyone seeking actionable self-growth and productivity wisdom."
  }
];

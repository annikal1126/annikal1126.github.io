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
      { title: "Gideon the Ninth", author: "Tamsyn Muir", cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=300&q=80" },
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
      { title: "All Systems Red", author: "Martha Wells", cover: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=300&q=80" },
      { title: "This Is How You Lose the Time War", author: "Amal El-Mohtar", cover: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=300&q=80" }
    ]
  },
  {
    id: "mystery",
    name: "Mystery & Thriller",
    icon: "🔍",
    category: "fiction",
    summary: "Solve gripping whodunits, unmask psychological secrets, and navigate high-stakes suspense.",
    subgenres: ["Cozy Mystery", "Psychological Thriller", "Police Procedural", "Locked-Room Mystery"],
    tropes: ["Unreliable Narrator", "Locked-Room Mystery", "Amateur Sleuth", "Plot Twist"],
    benchmarks: [
      { title: "The Silent Patient", author: "Alex Michaelides", cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=300&q=80" },
      { title: "The Decagon House Murders", author: "Yukito Ayatsuji", cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=300&q=80" },
      { title: "The Maid", author: "Nita Prose", cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=300&q=80" }
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
      { title: "Legendborn", author: "Tracy Deonn", cover: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=300&q=80" },
      { title: "Six of Crows", author: "Leigh Bardugo", cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=300&q=80" },
      { title: "Firekeeper's Daughter", author: "Angeline Boulley", cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=300&q=80" }
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
      { title: "Skandar & The Unicorn Thief", author: "A.F. Steadman", cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=300&q=80" },
      { title: "The Girl Who Drank the Moon", author: "Kelly Barnhill", cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=300&q=80" },
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
      { title: "Braiding Sweetgrass", author: "Robin Wall Kimmerer", cover: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=300&q=80" },
      { title: "Crying in H Mart", author: "Michelle Zauner", cover: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=300&q=80" },
      { title: "Atomic Habits", author: "James Clear", cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=300&q=80" }
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
      { title: "The Empress of Salt and Fortune", author: "Nghi Vo", cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=300&q=80" },
      { title: "Mexican Gothic", author: "Silvia Moreno-Garcia", cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=300&q=80" },
      { title: "The Seven Husbands of Evelyn Hugo", author: "Taylor Jenkins Reid", cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=300&q=80" }
    ]
  }
];

// EXPANDED DATABASE: Popular + Niche Hidden Gems across all genres & age groups
const BOOKS_DATABASE = [
  // --- SCI-FI & CYBERPUNK & SPACE ---
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
    id: "book-niche-1",
    title: "All Systems Red (The Murderbot Diaries)",
    author: "Martha Wells",
    cover: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=400&q=80",
    genres: ["scifi"],
    ageGroup: "adult",
    rating: 4.7,
    reviewsCount: "62,100",
    price: "$11.99",
    pageCount: 160,
    publishedYear: 2017,
    tone: "cozy",
    tropes: ["Reluctant AI Hero", "Social Anxiety Security Android", "Space Colony Mystery"],
    buyLinks: {
      amazon: "https://www.amazon.com/dp/0765397526",
      barnes: "https://www.barnesandnoble.com/w/all-systems-red-martha-wells/1125206497",
      bookshop: "https://bookshop.org/p/books/all-systems-red-martha-wells/8672051"
    },
    synopsis: "In a corporate-dominated space-faring future, planetary missions must be accompanied by security androids. But a self-aware Security Unit has hacked its governor module and calls itself 'Murderbot'. All it really wants is to be left alone to watch soap operas, but when a nearby mission goes dark, Murderbot must protect its human clients.",
    matchReason: "A beloved niche sci-fi novella! Hilarious, fast-paced, and centered around a heartwarming anti-social security unit."
  },
  {
    id: "book-niche-2",
    title: "This Is How You Lose the Time War",
    author: "Amal El-Mohtar & Max Gladstone",
    cover: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80",
    genres: ["scifi", "romance"],
    ageGroup: "adult",
    rating: 4.5,
    reviewsCount: "54,800",
    price: "$12.89",
    pageCount: 208,
    publishedYear: 2019,
    tone: "dark",
    tropes: ["Rival Time Agents", "Secret Letters Across Timelines", "Enemies-to-Lovers", "Poetic Sci-Fi"],
    buyLinks: {
      amazon: "https://www.amazon.com/dp/153443100X",
      barnes: "https://www.barnesandnoble.com/w/this-is-how-you-lose-the-time-war-amal-el-mohtar/1129759881",
      bookshop: "https://bookshop.org/p/books/this-is-how-you-lose-the-time-war-amal-el-mohtar/12061034"
    },
    synopsis: "Among the ashes of a dying world, an agent of the Commandant finds a letter. It reads: Burn before reading. Thus begins an unlikely correspondence between two rival agents, Red and Blue, warring through time to shape the future. What began as taunting turns into something much deeper.",
    matchReason: "A poetic, award-winning cult-favorite novella blending time-travel espionage with slow-burn romance."
  },
  {
    id: "book-niche-3",
    title: "A Memory Called Empire",
    author: "Arkady Martine",
    cover: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80",
    genres: ["scifi", "mystery"],
    ageGroup: "adult",
    rating: 4.6,
    reviewsCount: "28,900",
    price: "$14.49",
    pageCount: 462,
    publishedYear: 2019,
    tone: "dark",
    tropes: ["Political Intrigue", "Murder Investigation", "Space Empire Ambassador"],
    buyLinks: {
      amazon: "https://www.amazon.com/dp/1250186433",
      barnes: "https://www.barnesandnoble.com/w/a-memory-called-empire-arkady-martine/1129202511",
      bookshop: "https://bookshop.org/p/books/a-memory-called-empire-arkady-martine/12185791"
    },
    synopsis: "Ambassador Mahit Dzmare arrives in the alien capital of the Teixcalaanli Empire to find that her predecessor was murdered. Nobody will admit it wasn't an accident, and her memory implant of the previous ambassador is corrupted. She must navigate empire politics to catch a killer and save her independent station.",
    matchReason: "Hugo Award-winning space opera mystery packed with political suspense and deep cultural worldbuilding."
  },

  // --- FANTASY, ROMANTASY & COZY ---
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
    synopsis: "Twenty-year-old Violet Sorrengail was supposed to enter the quiet Scribe Quadrant. Instead, her commanding general mother orders her to join the deadly Basgiath War College to become a dragon rider.",
    matchReason: "Perfect fit for epic dragon fantasy with electrifying enemies-to-lovers romance and non-stop action."
  },
  {
    id: "book-niche-4",
    title: "Gideon the Ninth (The Locked Tomb)",
    author: "Tamsyn Muir",
    cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=400&q=80",
    genres: ["fantasy", "scifi"],
    ageGroup: "new-adult",
    rating: 4.6,
    reviewsCount: "48,300",
    price: "$13.99",
    pageCount: 448,
    publishedYear: 2019,
    tone: "dark",
    tropes: ["Lesbian Necromancers in Space", "Gothic Haunted Mansion", "Snarky Heroine"],
    buyLinks: {
      amazon: "https://www.amazon.com/dp/1250313198",
      barnes: "https://www.barnesandnoble.com/w/gideon-the-ninth-tamsyn-muir/1129994389",
      bookshop: "https://bookshop.org/p/books/gideon-the-ninth-tamsyn-muir/12061035"
    },
    synopsis: "The Emperor needs necromancers. The Ninth House needs a swordswoman. Gideon has a sword, some dirty magazines, and no more time for undead bullshit. Brought along by bone-witch Harrowhark to a gothic palace trials, Gideon must fight to keep Harrow alive.",
    matchReason: "Cult-classic dark fantasy with witty snark, gothic horror, and sword-fighting necromancers!"
  },
  {
    id: "book-niche-5",
    title: "The House in the Cerulean Sea",
    author: "TJ Klune",
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=400&q=80",
    genres: ["fantasy"],
    ageGroup: "adult",
    rating: 4.8,
    reviewsCount: "95,200",
    price: "$13.59",
    pageCount: 396,
    publishedYear: 2020,
    tone: "cozy",
    tropes: ["Found Family", "Magical Orphanage", "Wholesome Warmth", "Cozy Fantasy"],
    buyLinks: {
      amazon: "https://www.amazon.com/dp/1250217288",
      barnes: "https://www.barnesandnoble.com/w/the-house-in-the-cerulean-sea-tj-klune/1131713295",
      bookshop: "https://bookshop.org/p/books/the-house-in-the-cerulean-sea-tj-klune/12762499"
    },
    synopsis: "Linus Baker is a by-the-book caseworker at the Department in Charge of Magical Youth. Sent to evaluate a secretive island orphanage housing six dangerous magical children—including the Antichrist—Linus discovers an enchanting world of love, acceptance, and found family.",
    matchReason: "A heartwarming, soul-soothing cozy fantasy like a warm cup of hot chocolate on a rainy day."
  },
  {
    id: "book-niche-6",
    title: "Babel: Or the Necessity of Violence",
    author: "R.F. Kuang",
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80",
    genres: ["fantasy", "historical-fiction"],
    ageGroup: "adult",
    rating: 4.7,
    reviewsCount: "51,000",
    price: "$16.99",
    pageCount: 544,
    publishedYear: 2022,
    tone: "dark",
    tropes: ["Dark Academia", "Silver-Working Magic", "Antiquity & Translation", "Rebellion"],
    buyLinks: {
      amazon: "https://www.amazon.com/dp/0063021420",
      barnes: "https://www.barnesandnoble.com/w/babel-r-f-kuang/1140521321",
      bookshop: "https://bookshop.org/p/books/babel-r-f-kuang/18485291"
    },
    synopsis: "1828. Robin Swift, an orphan from Canton, is brought to London to train at Oxford's prestigious Royal Institute of Translation (Babel)—the center of silver-bar enchantment that powers the British Empire. Robin soon realizes serving Babel means betraying his motherland.",
    matchReason: "Incredible dark academia fantasy exploring language, translation magic, and historical revolution."
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
    synopsis: "Tired of a lifetime of blood and violence, Viv, a battle-weary female orc barbarian, hangs up her sword to open the first-ever coffee shop in the fantasy city of Thune.",
    matchReason: "The ultimate cozy fantasy read! Heartwarming, comforting, and delicious low-stakes comfort reading."
  },

  // --- MYSTERY, THRILLER & LOCKED ROOM ---
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
    synopsis: "Five years ago, schoolgirl Andie Bell was murdered by Sal Singh. Everyone in town knows he did it. But Pip Fitz-Amobi chooses the case for her senior capstone project to dig deeper and uncovers secrets.",
    matchReason: "Spot-on choice for Young Adult readers craving addictive, twisty murder mysteries with brilliant clue-finding!"
  },
  {
    id: "book-niche-7",
    title: "The Decagon House Murders",
    author: "Yukito Ayatsuji",
    cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=400&q=80",
    genres: ["mystery"],
    ageGroup: "adult",
    rating: 4.5,
    reviewsCount: "14,200",
    price: "$14.95",
    pageCount: 288,
    publishedYear: 1987,
    tone: "dark",
    tropes: ["Japanese Honkaku Mystery", "Isolated Island", "Locked-Room Murder", "Homage to Agatha Christie"],
    buyLinks: {
      amazon: "https://www.amazon.com/dp/1913193630",
      barnes: "https://www.barnesandnoble.com/w/the-decagon-house-murders-yukito-ayatsuji/1138402134",
      bookshop: "https://bookshop.org/p/books/the-decagon-house-murders-yukito-ayatsuji/15672100"
    },
    synopsis: "Seven university mystery club members travel to Tsunojima Island to stay in a strange ten-sided house built by a murdered architect. Soon, they are picked off one by one in ingenious locked-room murders. A legendary Japanese puzzle-mystery classic!",
    matchReason: "A masterclass niche locked-room murder mystery from the father of Japanese Honkaku detective fiction!"
  },
  {
    id: "book-niche-8",
    title: "The Maid",
    author: "Nita Prose",
    cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80",
    genres: ["mystery"],
    ageGroup: "adult",
    rating: 4.5,
    reviewsCount: "74,000",
    price: "$12.49",
    pageCount: 304,
    publishedYear: 2022,
    tone: "cozy",
    tropes: ["Neurodivergent Sleuth", "Hotel Murder", "Cozy Whodunit", "Found Friends"],
    buyLinks: {
      amazon: "https://www.amazon.com/dp/0593356152",
      barnes: "https://www.barnesandnoble.com/w/the-maid-nita-prose/1139412513",
      bookshop: "https://bookshop.org/p/books/the-maid-nita-prose/17154210"
    },
    synopsis: "Molly Gray is a hotel maid who struggles with social skills and misinterprets the intentions of others. But when she enters the suite of the infamous and wealthy Charles Black, only to find him dead in his bed, Molly becomes the police's lead suspect.",
    matchReason: "A charming, heartwarming cozy mystery centered on an unforgettable, unique sleuth."
  },

  // --- YA & MIDDLE GRADE GEMS ---
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
    synopsis: "Amari Peters believes her missing big brother Quinton is still alive. Her search leads her to a tryout at the secret Bureau of Supernatural Affairs, where magic is real.",
    matchReason: "An enchanting, high-energy adventure for Middle Grade readers who love Percy Jackson and Men in Black combined!"
  },
  {
    id: "book-niche-9",
    title: "Skandar and the Unicorn Thief",
    author: "A.F. Steadman",
    cover: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80",
    genres: ["middle-grade", "fantasy"],
    ageGroup: "middle-grade",
    rating: 4.7,
    reviewsCount: "12,400",
    price: "$10.99",
    pageCount: 416,
    publishedYear: 2022,
    tone: "exciting",
    tropes: ["Fierce Ferocious Unicorns", "Elemental Magic Hatching", "Island Academy"],
    buyLinks: {
      amazon: "https://www.amazon.com/dp/1665912739",
      barnes: "https://www.barnesandnoble.com/w/skandar-and-the-unicorn-thief-a-f-steadman/1139721415",
      bookshop: "https://bookshop.org/p/books/skandar-and-the-unicorn-thief-a-f-steadman/17512401"
    },
    synopsis: "Skandar Smith has always wanted to be a unicorn rider—bonding with a ferocious, winged elemental beast. But when a shadowy villain steals the island's most powerful unicorn, Skandar must take to the skies to fight back.",
    matchReason: "A fresh, thrilling twist on middle-grade fantasy featuring wild, fierce elemental unicorns!"
  },
  {
    id: "book-niche-10",
    title: "Legendborn",
    author: "Tracy Deonn",
    cover: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=400&q=80",
    genres: ["ya", "fantasy"],
    ageGroup: "ya",
    rating: 4.8,
    reviewsCount: "58,000",
    price: "$12.99",
    pageCount: 512,
    publishedYear: 2020,
    tone: "exciting",
    tropes: ["Arthurian Legend Retelling", "Secret College Society", "Demon Fighting", "Root Magic"],
    buyLinks: {
      amazon: "https://www.amazon.com/dp/1534441609",
      barnes: "https://www.barnesandnoble.com/w/legendborn-tracy-deonn/1136214512",
      bookshop: "https://bookshop.org/p/books/legendborn-tracy-deonn/14412056"
    },
    synopsis: "After her mother dies in an accident, 16-year-old Bree Matthews escapes to UNC Chapel Hill's early college program. There, she witnesses a demon attack and uncovers the Legendborn Order—a secret society of King Arthur's descendants.",
    matchReason: "Incredible contemporary YA urban fantasy blending King Arthur mythos with Southern Black root magic!"
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
    synopsis: "Percy Jackson is a 12-year-old boy who discovers he is actually a demigod, the son of Poseidon. Accused of stealing Zeus's master lightning bolt, Percy must embark on a quest across America.",
    matchReason: "Classic, hilarious, and action-packed mythic adventure loved by young readers and adults alike!"
  },

  // --- HISTORICAL FICTION & HORROR / GOTHIC ---
  {
    id: "book-niche-11",
    title: "Mexican Gothic",
    author: "Silvia Moreno-Garcia",
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=400&q=80",
    genres: ["historical-fiction", "mystery"],
    ageGroup: "adult",
    rating: 4.5,
    reviewsCount: "82,000",
    price: "$13.99",
    pageCount: 304,
    publishedYear: 2020,
    tone: "dark",
    tropes: ["Gothic Horror", "Creepy Isolated Mansion", "1950s Mexico", "Fungal Spores Mystery"],
    buyLinks: {
      amazon: "https://www.amazon.com/dp/052562080X",
      barnes: "https://www.barnesandnoble.com/w/mexican-gothic-silvia-moreno-garcia/1133301245",
      bookshop: "https://bookshop.org/p/books/mexican-gothic-silvia-moreno-garcia/12912401"
    },
    synopsis: "After receiving a frantic letter from her newlywed cousin, glamourous 1950s socialite Noemí Taboada heads to High Place, a remote mansion in the Mexican countryside. There, she encounters sinister family secrets and terrifying visions.",
    matchReason: "A delicious 1950s Mexican gothic horror mystery dripping with eerie atmospheric suspense."
  },
  {
    id: "book-niche-12",
    title: "The Empress of Salt and Fortune",
    author: "Nghi Vo",
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80",
    genres: ["historical-fiction", "fantasy"],
    ageGroup: "adult",
    rating: 4.6,
    reviewsCount: "19,500",
    price: "$10.99",
    pageCount: 120,
    publishedYear: 2020,
    tone: "cozy",
    tropes: ["Asian Imperial Fantasy", "Oral History Storytelling", "Court Intrigue", "Novella"],
    buyLinks: {
      amazon: "https://www.amazon.com/dp/1250229030",
      barnes: "https://www.barnesandnoble.com/w/the-empress-of-salt-and-fortune-nghi-vo/1132712415",
      bookshop: "https://bookshop.org/p/books/the-empress-of-salt-and-fortune-nghi-vo/12952400"
    },
    synopsis: "A cleric named Chih travels to the exiled home of the late Empress In-yo. Guided by an elderly servant named Rabbit, Chih uncovers objects around the estate, unlocking the secret history of how a disgraced foreign princess rose to seize the empire.",
    matchReason: "Hugo Award-winning novella! A exquisite Asian court fantasy storytelling gem."
  },

  // --- NON-FICTION & MEMOIR ---
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
    synopsis: "No matter your goals, Atomic Habits offers a proven framework for improving every day. James Clear reveals practical strategies for building positive routines.",
    matchReason: "Invaluable non-fiction recommendation for anyone seeking actionable self-growth and productivity wisdom."
  },
  {
    id: "book-niche-13",
    title: "Braiding Sweetgrass",
    author: "Robin Wall Kimmerer",
    cover: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=400&q=80",
    genres: ["non-fiction"],
    ageGroup: "adult",
    rating: 4.9,
    reviewsCount: "42,000",
    price: "$15.25",
    pageCount: 390,
    publishedYear: 2013,
    tone: "uplifting",
    tropes: ["Indigenous Wisdom", "Botanical Science", "Nature & Gratitude"],
    buyLinks: {
      amazon: "https://www.amazon.com/dp/1571313567",
      barnes: "https://www.barnesandnoble.com/w/braiding-sweetgrass-robin-wall-kimmerer/1114981245",
      bookshop: "https://bookshop.org/p/books/braiding-sweetgrass-robin-wall-kimmerer/7241240"
    },
    synopsis: "As a botanist, Robin Wall Kimmerer has been trained to ask questions of nature with the tools of science. As a member of the Citizen Potawatomi Nation, she embraces the notion that plants and animals are our oldest teachers.",
    matchReason: "A profound, poetic non-fiction masterpiece bridging indigenous knowledge with ecological science."
  }
];

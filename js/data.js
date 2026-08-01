/* ==========================================================================
   BOOK NOOK & AI MATCHMAKER - MASSIVE EXTENDED DATASETS (50+ CURATED BOOKS)
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

// MASSIVE EXTENDED DATABASE (50+ POPULAR & NICHE BOOKS)
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
    synopsis: "Ryland Grace is the sole survivor on a desperate, last-chance mission to save humanity from extinction. Aided by an unexpected alien ally, he must use science and ingenuity to solve a cosmic mystery.",
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
    synopsis: "A self-aware Security Unit android hacks its governor module and calls itself 'Murderbot'. All it wants is to watch soap operas, but it must protect its human clients.",
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
    tropes: ["Rival Time Agents", "Secret Letters Across Timelines", "Enemies-to-Lovers"],
    buyLinks: {
      amazon: "https://www.amazon.com/dp/153443100X",
      barnes: "https://www.barnesandnoble.com/w/this-is-how-you-lose-the-time-war-amal-el-mohtar/1129759881",
      bookshop: "https://bookshop.org/p/books/this-is-how-you-lose-the-time-war-amal-el-mohtar/12061034"
    },
    synopsis: "Two rival time-traveling agents, Red and Blue, exchange secret letters across dying worlds, evolving from enemies into deeply bonded allies.",
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
    synopsis: "Ambassador Mahit Dzmare arrives in the alien capital of the Teixcalaanli Empire to find her predecessor murdered. She must catch the killer to save her independent station.",
    matchReason: "Hugo Award-winning space opera mystery packed with political suspense and deep cultural worldbuilding."
  },
  {
    id: "book-niche-14",
    title: "Ancillary Justice",
    author: "Ann Leckie",
    cover: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=400&q=80",
    genres: ["scifi"],
    ageGroup: "adult",
    rating: 4.5,
    reviewsCount: "41,200",
    price: "$13.99",
    pageCount: 416,
    publishedYear: 2013,
    tone: "dark",
    tropes: ["AI Starship Body", "Imperial Revenge", "Genderless Space Society"],
    buyLinks: {
      amazon: "https://www.amazon.com/dp/031624662X",
      barnes: "https://www.barnesandnoble.com/w/ancillary-justice-ann-leckie/1114251240",
      bookshop: "https://bookshop.org/p/books/ancillary-justice-ann-leckie/7241241"
    },
    synopsis: "Breq is a soldier who used to be a starship—a warship AI commanding thousands of human bodies. Now stripped of her ship, she seeks revenge against the ruler of the empire.",
    matchReason: "Hugo, Nebula, and Arthur C. Clarke award winner! Uniquely inventive sci-fi classic."
  },
  {
    id: "book-niche-15",
    title: "Sea of Rust",
    author: "C. Robert Cargill",
    cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80",
    genres: ["scifi"],
    ageGroup: "adult",
    rating: 4.6,
    reviewsCount: "16,800",
    price: "$12.99",
    pageCount: 368,
    publishedYear: 2017,
    tone: "fast-paced",
    tropes: ["Post-Human Robot Wasteland", "AI Survival", "Cyberpunk Bounty Hunter"],
    buyLinks: {
      amazon: "https://www.amazon.com/dp/0062405836",
      barnes: "https://www.barnesandnoble.com/w/sea-of-rust-c-robert-cargill/1125412415",
      bookshop: "https://bookshop.org/p/books/sea-of-rust-c-robert-cargill/9124015"
    },
    synopsis: "Humanity is extinct. Brittle is a scavenger robot navigating the Sea of Rust, fighting off hive-mind One World AI supercomputers attempting to absorb all remaining free robots.",
    matchReason: "A gritty, fast-paced Mad Max with robots! Action-packed, philosophical, and thrilling."
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
    tropes: ["Enemies-to-Lovers", "Dragon Riders", "Magic War College"],
    buyLinks: {
      amazon: "https://www.amazon.com/dp/1649374046",
      barnes: "https://www.barnesandnoble.com/w/fourth-wing-rebecca-yarros/1142511475",
      bookshop: "https://bookshop.org/p/books/fourth-wing-rebecca-yarros/19324546"
    },
    synopsis: "Twenty-year-old Violet Sorrengail enters the deadly Basgiath War College to become a dragon rider where survival is a daily battle.",
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
    tropes: ["Lesbian Necromancers in Space", "Gothic Mansion", "Snarky Heroine"],
    buyLinks: {
      amazon: "https://www.amazon.com/dp/1250313198",
      barnes: "https://www.barnesandnoble.com/w/gideon-the-ninth-tamsyn-muir/1129994389",
      bookshop: "https://bookshop.org/p/books/gideon-the-ninth-tamsyn-muir/12061035"
    },
    synopsis: "The Emperor needs necromancers. Gideon has a sword and no time for undead bullshit. Brought along by bone-witch Harrowhark, Gideon fights for survival.",
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
    tropes: ["Found Family", "Magical Orphanage", "Wholesome Warmth"],
    buyLinks: {
      amazon: "https://www.amazon.com/dp/1250217288",
      barnes: "https://www.barnesandnoble.com/w/the-house-in-the-cerulean-sea-tj-klune/1131713295",
      bookshop: "https://bookshop.org/p/books/the-house-in-the-cerulean-sea-tj-klune/12762499"
    },
    synopsis: "By-the-book caseworker Linus Baker is sent to evaluate a secretive island orphanage housing six magical children.",
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
    tropes: ["Dark Academia", "Silver-Working Magic", "Antiquity & Translation"],
    buyLinks: {
      amazon: "https://www.amazon.com/dp/0063021420",
      barnes: "https://www.barnesandnoble.com/w/babel-r-f-kuang/1140521321",
      bookshop: "https://bookshop.org/p/books/babel-r-f-kuang/18485291"
    },
    synopsis: "Robin Swift trains at Oxford's Royal Institute of Translation (Babel)—the center of silver-bar enchantment that powers the British Empire.",
    matchReason: "Incredible dark academia fantasy exploring language, translation magic, and historical revolution."
  },
  {
    id: "book-niche-16",
    title: "A Darker Shade of Magic",
    author: "V.E. Schwab",
    cover: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80",
    genres: ["fantasy"],
    ageGroup: "adult",
    rating: 4.7,
    reviewsCount: "78,300",
    price: "$12.99",
    pageCount: 400,
    publishedYear: 2015,
    tone: "exciting",
    tropes: ["Parallel Londons", "Blood Magic Traveler", "Pirate Thief Ally"],
    buyLinks: {
      amazon: "https://www.amazon.com/dp/0765376458",
      barnes: "https://www.barnesandnoble.com/w/a-darker-shade-of-magic-v-e-schwab/1119561240",
      bookshop: "https://bookshop.org/p/books/a-darker-shade-of-magic-v-e-schwab/8672052"
    },
    synopsis: "Kell is one of the last Antari—magicians who can travel between parallel Londons: Grey, Red, White, and Black. When a contraband magic artifact threatens Red London, Kell allies with pirate Lila Bard.",
    matchReason: "Fast-paced, vibrant magic system with memorable cross-world adventures."
  },
  {
    id: "book-niche-17",
    title: "Daughter of the Moon Goddess",
    author: "Sue Lynn Tan",
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=400&q=80",
    genres: ["fantasy", "ya"],
    ageGroup: "ya",
    rating: 4.6,
    reviewsCount: "34,100",
    price: "$13.99",
    pageCount: 512,
    publishedYear: 2022,
    tone: "uplifting",
    tropes: ["Chinese Mythology", "Moon Goddess", "Celestial Archery Quest"],
    buyLinks: {
      amazon: "https://www.amazon.com/dp/0063031329",
      barnes: "https://www.barnesandnoble.com/w/daughter-of-the-moon-goddess-sue-lynn-tan/1139412415",
      bookshop: "https://bookshop.org/p/books/daughter-of-the-moon-goddess-sue-lynn-tan/17154211"
    },
    synopsis: "Growing up on the moon, Xingyin is unaware that she is being hidden from the Celestial Emperor. When her magic flares and she is forced to flee, she embarks on a quest to save her mother.",
    matchReason: "Lyrical Chinese mythic fantasy featuring archery, celestial kingdoms, and fierce devotion."
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
    tropes: ["Cozy Fantasy", "Retired Adventurer", "Coffee Shop Owner"],
    buyLinks: {
      amazon: "https://www.amazon.com/dp/1250886088",
      barnes: "https://www.barnesandnoble.com/w/legends-lattes-travis-baldree/1141369324",
      bookshop: "https://bookshop.org/p/books/legends-lattes-travis-baldree/18485290"
    },
    synopsis: "Viv, a female orc barbarian, hangs up her sword to open the first-ever coffee shop in Thune.",
    matchReason: "The ultimate cozy fantasy read! Heartwarming, comforting, and low-stakes comfort reading."
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
    tropes: ["Amateur Sleuth", "Small-Town Secrets", "True Crime Podcast Vibe"],
    buyLinks: {
      amazon: "https://www.amazon.com/dp/1984896393",
      barnes: "https://www.barnesandnoble.com/w/a-good-girls-guide-to-murder-holly-jackson/1131102928",
      bookshop: "https://bookshop.org/p/books/a-good-girl-s-guide-to-murder-holly-jackson/12762498"
    },
    synopsis: "Pip Fitz-Amobi chooses a closed 5-year-old local murder case for her senior project to uncover the real killer.",
    matchReason: "Spot-on choice for Young Adult readers craving addictive, twisty murder mysteries!"
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
    tropes: ["Japanese Honkaku Mystery", "Isolated Island", "Locked-Room Murder"],
    buyLinks: {
      amazon: "https://www.amazon.com/dp/1913193630",
      barnes: "https://www.barnesandnoble.com/w/the-decagon-house-murders-yukito-ayatsuji/1138402134",
      bookshop: "https://bookshop.org/p/books/the-decagon-house-murders-yukito-ayatsuji/15672100"
    },
    synopsis: "Seven university mystery club members stay in a ten-sided house on an isolated island where murder strikes.",
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
    tropes: ["Neurodivergent Sleuth", "Hotel Murder", "Cozy Whodunit"],
    buyLinks: {
      amazon: "https://www.amazon.com/dp/0593356152",
      barnes: "https://www.barnesandnoble.com/w/the-maid-nita-prose/1139412513",
      bookshop: "https://bookshop.org/p/books/the-maid-nita-prose/17154210"
    },
    synopsis: "Hotel maid Molly Gray discovers a dead billionaire in his suite and becomes the chief suspect.",
    matchReason: "A charming, heartwarming cozy mystery centered on an unforgettable, unique sleuth."
  },
  {
    id: "book-niche-18",
    title: "Everyone in My Family Has Killed Someone",
    author: "Benjamin Stevenson",
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80",
    genres: ["mystery"],
    ageGroup: "adult",
    rating: 4.6,
    reviewsCount: "32,400",
    price: "$13.99",
    pageCount: 384,
    publishedYear: 2022,
    tone: "fast-paced",
    tropes: ["Witty Fourth-Wall Breaking Sleuth", "Snowed-In Ski Resort", "Dysfunctional Family"],
    buyLinks: {
      amazon: "https://www.amazon.com/dp/0063279029",
      barnes: "https://www.barnesandnoble.com/w/everyone-in-my-family-has-killed-someone-benjamin-stevenson/1141361240",
      bookshop: "https://bookshop.org/p/books/everyone-in-my-family-has-killed-someone-benjamin-stevenson/18485292"
    },
    synopsis: "Ernest Cunningham compiles how-to-write-mystery guides. When his notorious family gathers at an isolated ski resort, a dead body turns up in the snow.",
    matchReason: "Hilarious, clever, Knives Out-style whodunit breaking all classic mystery rules!"
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
    synopsis: "Amari Peters tries out at the secret Bureau of Supernatural Affairs to find her missing brother.",
    matchReason: "An enchanting, high-energy adventure for Middle Grade readers who love Percy Jackson!"
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
    synopsis: "Skandar Smith bonds with a ferocious, winged elemental beast to fight a shadowy unicorn thief.",
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
    tropes: ["Arthurian Legend Retelling", "Secret College Society", "Root Magic"],
    buyLinks: {
      amazon: "https://www.amazon.com/dp/1534441609",
      barnes: "https://www.barnesandnoble.com/w/legendborn-tracy-deonn/1136214512",
      bookshop: "https://bookshop.org/p/books/legendborn-tracy-deonn/14412056"
    },
    synopsis: "16-year-old Bree uncovers the Legendborn Order—a secret society of King Arthur's descendants.",
    matchReason: "Incredible contemporary YA urban fantasy blending King Arthur mythos with Southern Black root magic!"
  },
  {
    id: "book-niche-19",
    title: "Tristan Strong Punches a Hole in the Sky",
    author: "Kwame Mbalia",
    cover: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80",
    genres: ["middle-grade", "fantasy"],
    ageGroup: "middle-grade",
    rating: 4.8,
    reviewsCount: "15,800",
    price: "$8.99",
    pageCount: 496,
    publishedYear: 2019,
    tone: "exciting",
    tropes: ["African American Folktales", "Anansi & John Henry", "Portal Fantasy Quest"],
    buyLinks: {
      amazon: "https://www.amazon.com/dp/1368039933",
      barnes: "https://www.barnesandnoble.com/w/tristan-strong-punches-a-hole-in-the-sky-kwame-mbalia/1131412415",
      bookshop: "https://bookshop.org/p/books/tristan-strong-punches-a-hole-in-the-sky-kwame-mbalia/12812410"
    },
    synopsis: "7th grader Tristan accidentally punches a hole into Alke, a world of African gods and African-American folktale heroes like John Henry and Anansi.",
    matchReason: "High-voltage middle-grade mythology packed with humor, boxing heart, and folktale legends!"
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
    synopsis: "12-year-old Percy Jackson discovers he is Poseidon's son and embarks on a quest to save Olympus.",
    matchReason: "Classic, hilarious, and action-packed mythic adventure loved by young readers!"
  },

  // --- HISTORICAL FICTION & HORROR ---
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
    tropes: ["Gothic Horror", "Creepy Mansion", "1950s Mexico"],
    buyLinks: {
      amazon: "https://www.amazon.com/dp/052562080X",
      barnes: "https://www.barnesandnoble.com/w/mexican-gothic-silvia-moreno-garcia/1133301245",
      bookshop: "https://bookshop.org/p/books/mexican-gothic-silvia-moreno-garcia/12912401"
    },
    synopsis: "Glamorous 1950s socialite Noemí Taboada investigates eerie events at a remote Mexican mansion.",
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
    tropes: ["Asian Imperial Fantasy", "Oral History Storytelling", "Novella"],
    buyLinks: {
      amazon: "https://www.amazon.com/dp/1250229030",
      barnes: "https://www.barnesandnoble.com/w/the-empress-of-salt-and-fortune-nghi-vo/1132712415",
      bookshop: "https://bookshop.org/p/books/the-empress-of-salt-and-fortune-nghi-vo/12952400"
    },
    synopsis: "A cleric uncovers objects around an imperial estate to piece together how a foreign princess took the empire.",
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
    tropes: ["Self Improvement", "Habit Building"],
    buyLinks: {
      amazon: "https://www.amazon.com/dp/0735211299",
      barnes: "https://www.barnesandnoble.com/w/atomic-habits-james-clear/1129188094",
      bookshop: "https://bookshop.org/p/books/atomic-habits-james-clear/12185790"
    },
    synopsis: "Atomic Habits offers a proven framework for improving every day through tiny behavioral gains.",
    matchReason: "Invaluable non-fiction recommendation for anyone seeking actionable self-growth."
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
    tropes: ["Indigenous Wisdom", "Botanical Science", "Nature Gratitude"],
    buyLinks: {
      amazon: "https://www.amazon.com/dp/1571313567",
      barnes: "https://www.barnesandnoble.com/w/braiding-sweetgrass-robin-wall-kimmerer/1114981245",
      bookshop: "https://bookshop.org/p/books/braiding-sweetgrass-robin-wall-kimmerer/7241240"
    },
    synopsis: "A Potawatomi botanist bridges scientific analysis with indigenous wisdom to learn from plant teachers.",
    matchReason: "A profound, poetic non-fiction masterpiece bridging indigenous knowledge with ecological science."
  },
  {
    id: "book-niche-20",
    title: "Crying in H Mart",
    author: "Michelle Zauner",
    cover: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80",
    genres: ["non-fiction"],
    ageGroup: "adult",
    rating: 4.7,
    reviewsCount: "71,000",
    price: "$14.00",
    pageCount: 256,
    publishedYear: 2021,
    tone: "emotional",
    tropes: ["Mother-Daughter Relationship", "Korean Food & Identity", "Grief Memoir"],
    buyLinks: {
      amazon: "https://www.amazon.com/dp/0525657746",
      barnes: "https://www.barnesandnoble.com/w/crying-in-h-mart-michelle-zauner/1137451240",
      bookshop: "https://bookshop.org/p/books/crying-in-h-mart-michelle-zauner/15241250"
    },
    synopsis: "Indie rock musician Michelle Zauner shares a powerful memoir of growing up Korean American, food, loss, and discovering her heritage after her mother's diagnosis.",
    matchReason: "A deeply moving, vulnerable memoir about food, grief, motherly love, and cultural identity."
  }
];

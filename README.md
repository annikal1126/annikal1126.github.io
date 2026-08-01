# 📚 Book Nook & AI Matchmaker

An interactive, AI-powered web application that helps readers discover their next favorite book! Explore rich genre guides or chat with an intelligent book recommendations assistant tailored to your preferred age range, genres, themes, and reading style.

---

## ✨ Features

### 1. 📖 Genre Explorer Tab
- **Comprehensive Catalog**: Browse popular and niche book genres (Fantasy, Sci-Fi, Mystery, Thriller, Romance, Non-Fiction, YA, Middle Grade, Historical Fiction, etc.).
- **Rich Descriptions**: Detailed summaries of what makes each genre unique, key sub-genres, tropes, and iconic benchmark books.
- **Visual Cards**: Dynamic visual cards featuring curated tags, top tropes, and sample book recommendations.

### 2. 💬 AI Recommendation Assistant (Chat Interface)
- **Interactive Preferences Setup**:
  - **Genre Selection**: Choose single or multiple preferred genres.
  - **Age Range Filter**: Children, Middle Grade, Young Adult (YA), New Adult, Adult.
  - **Custom Preferences**: Specific tropes (e.g., enemies-to-lovers, time travel, mystery solver), tone (cozy, dark, fast-paced), themes, or page length limits.
- **Smart Book Generation**: Outputs tailored recommendations containing:
  - 📖 **Book Title & Cover Art**
  - ✍️ **Author Name & Bio Snippet**
  - ⭐ **Ratings & Review Metrics** (e.g. Goodreads / Amazon ratings)
  - 💰 **Estimated Price**
  - 🛒 **Direct Buy Links** (Amazon, Bookshop.org, Barnes & Noble)
  - 📝 **Why You'll Love It**: Brief summary explaining why it fits the user's specific prompt.

---

## 🛠️ Tech Stack

- **Frontend**: HTML5, JavaScript (ES6+), Modern Responsive Layouts
- **Framework Option**: Next.js / React or Vite + React
- **Styling**: Vanilla CSS3 with Custom Properties (Glassmorphism, Dark/Light Mode, Animations)
- **AI / Recommendation Engine**: OpenAI API / Google Gemini API (or curated recommendation algorithms + Google Books API)
- **Data APIs**: Google Books API / Open Library API for book covers, metadata, and purchase links

---

## 📁 Project Structure

```text
.
├── index.html              # Main HTML entry point
├── styles/
│   ├── main.css            # Base design system & design tokens
│   ├── genres.css          # Styling for genre tab & cards
│   └── chat.css            # Styling for chat interface & recommendation cards
├── js/
│   ├── app.js              # Tab navigation & main app logic
│   ├── genres.js           # Genre catalog data & renderer
│   ├── chat.js             # Chat UI, user prompt parser, & message history
│   └── recommender.js      # Book recommendation generator & API integration
├── assets/
│   └── icons/              # SVG icons & images
├── README.md               # Project documentation
└── agent.md                # AI Agent workspace rules
```

---

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Edge, Firefox, Safari)
- Node.js (v18.0.0 or higher) *(if running dev server)*

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/book-matchmaker.git
   cd book-matchmaker
   ```

2. **Install Dependencies** *(if using Node/Vite/React)*
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the root directory and add your API keys:
   ```env
   VITE_AI_API_KEY=your_gemini_or_openai_api_key
   VITE_BOOKS_API_KEY=your_google_books_api_key
   ```

4. **Run the Application**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

---

## 💡 How It Works

1. **Explore Genres**: Click on the **Genres** tab to learn about different categories, tropes, and reading styles.
2. **Chat with AI Matchmaker**:
   - Switch to the **Chat** tab.
   - Enter your preferred genre(s), target age group, and any specific preferences (e.g., *"Fast-paced sci-fi for Young Adults with plot twists and under 300 pages"*).
3. **Receive Curated Recommendations**:
   - The AI processes your prompt and displays interactive book cards complete with cover artwork, star ratings, price details, and direct purchase links!

---

## 🔮 Future Roadmap

- 🔖 **Bookmark & Reading List**: Save recommended books to a personal reading wishlist.
- 🔄 **Filter by Price & Availability**: Filter recommendations based on budget or e-book vs. hardcover options.
- 🎧 **Audiobook Links**: Include links to Audible / Libby for audiobook listeners.
- 👥 **Community Reviews**: Allow users to leave their own ratings and thoughts.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

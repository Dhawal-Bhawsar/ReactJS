<div align="center">
  <img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/camera.svg" alt="LensFolio Logo" width="80" height="80">
  
  # 📸 LensFolio
  
  ### *A sleek, modern image gallery powered by React*
  
  [![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
  [![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
  [![Axios](https://img.shields.io/badge/Axios-1.18-5A29E4?style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/)
  
  <br/>
  
  **Live Demo** &nbsp;•&nbsp; [Report Bug](https://github.com/your-username/gallery-app/issues) &nbsp;•&nbsp; [Request Feature](https://github.com/your-username/gallery-app/issues)
  
  <br/>
  
  ![Preview](https://picsum.photos/1200/600?random=1)
  
</div>

---

## 🌟 Overview

**LensFolio** is a high-performance image gallery application that brings the beauty of Lorem Picsum's curated photography straight to your browser. Built with cutting-edge frontend technologies, it offers a seamless browsing experience with a dark, cinematic interface, real-time search, and elegant pagination.

Whether you're looking for design inspiration, building a portfolio, or just exploring stunning photography, LensFolio delivers a smooth, visually captivating experience.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎨 **Cinematic Dark UI** | Full dark theme with gradient accents — a Netflix-like browsing experience for images |
| 🔍 **Real-Time Search** | Filter images by author name instantly with zero delay |
| 📄 **Smart Pagination** | Browse 8 images per page with intuitive Previous / Next navigation |
| 🖼️ **Immersive Modal View** | Click any image for a full-detail view with resolution metadata and original source link |
| ⚡ **Smooth Loading States** | Elegant animated spinner while fetching data |
| 📱 **Fully Responsive** | Works flawlessly across mobile, tablet, and desktop devices |
| 🛡️ **Graceful Error Handling** | Placeholder fallback when images fail to load |
| 🧩 **Modular Architecture** | Clean, reusable React components with separation of concerns |

---

## 🛠️ Tech Stack

<div align="center">

| Technology | Badge | Purpose |
|---|---|---|
| **React 19** | ![React](https://img.shields.io/badge/React-19-61DAFB?logo=react) | UI component library |
| **Vite 8** | ![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite) | Build tool & dev server |
| **Tailwind CSS 4** | ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss) | Utility-first styling |
| **Axios** | ![Axios](https://img.shields.io/badge/Axios-1.18-5A29E4?logo=axios) | HTTP client |
| **Lucide React** | ![Lucide](https://img.shields.io/badge/Lucide-React-F56565?logo=lucide) | Icon library |

</div>

---

## 🚀 Installation

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x (or **pnpm** / **yarn**)

### Setup

```bash
# Clone the repository
git clone https://github.com/your-username/gallery-app.git

# Navigate into the project directory
cd gallery-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

Your app will be live at **http://localhost:5173** 🎉

---

## 📖 Usage

### 🖥️ Browsing the Gallery

1. **Explore** — On launch, the gallery automatically fetches and displays images from Lorem Picsum.
2. **Search** — Use the search bar in the top-right to filter images by the photographer's name.
3. **Navigate** — Use the "Prev" and "Next" buttons at the bottom to move through pages.
4. **Click to Enlarge** — Tap any image card to open the detail modal with full resolution and a link to the original.

### ⚙️ Customization

You can easily tweak the app's behavior:

```js
// In src/Pages/Home.jsx — Change images per page
const limit = 8; // Adjust this number

// In src/Data/galleryData.js — Change API fetch count
const response = await axios.get(
  `https://picsum.photos/v2/list?page=1&limit=${100}` // Change 100 to desired count
);
```

### 📦 Building for Production

```bash
npm run build
```

Output will be in the `dist/` folder — deployable to any static host (Vercel, Netlify, GitHub Pages, etc.).

```bash
npm run preview
```

Preview the production build locally before deploying.

---

## 🧬 Project Architecture

Below is the full project structure. All files listed here (except those in `.gitignore`) are tracked by git and will be pushed to your GitHub repository.

```
gallery-app/
├── .gitignore                  # ✅ Git — Specifies intentionally untracked files
├── .oxlintrc.json              # ✅ Git — Linter configuration
├── index.html                  # ✅ Git — HTML entry point
├── vite.config.js              # ✅ Git — Vite + React + Tailwind config
├── package.json                # ✅ Git — Dependencies & scripts
├── package-lock.json           # ✅ Git — Locked dependency versions
├── README.md                   # ✅ Git — Project documentation
├── public/
│   ├── favicon.svg             # ✅ Git — Favicon
│   └── icons.svg               # ✅ Git — Icons sprite
└── src/
    ├── main.jsx                # ✅ Git — React DOM root
    ├── index.css               # ✅ Git — Global Tailwind import
    ├── App.jsx                 # ✅ Git — Root component
    ├── assets/
    │   ├── hero.png            # ✅ Git — Hero image
    │   ├── react.svg           # ✅ Git — React logo
    │   └── vite.svg            # ✅ Git — Vite logo
    ├── Components/
    │   ├── Navbar.jsx          # ✅ Git — App navigation bar
    │   ├── SearchBar.jsx       # ✅ Git — Search input with icon
    │   ├── Gallery.jsx         # ✅ Git — Responsive image grid
    │   ├── ImageCard.jsx       # ✅ Git — Image card with hover overlay & error fallback
    │   ├── Modal.jsx           # ✅ Git — Full-screen detail modal
    │   ├── Pagination.jsx      # ✅ Git — Prev / Next page controls
    │   ├── CategoryFilter.jsx  # ✅ Git — Reserved for future enhancements
    │   └── Loader.jsx          # ✅ Git — Animated loading spinner
    ├── Context/
    │   └── ThemeContext.jsx     # ✅ Git — Dark mode context provider
    ├── Data/
    │   └── galleryData.js      # ✅ Git — Axios-based API fetching
    ├── Pages/
    │   └── Home.jsx            # ✅ Git — Main page (state, filtering, pagination logic)
    └── Styles/
        └── gallery.css         # ✅ Git — Custom CSS overrides
```

### ❌ Files NOT pushed to GitHub (excluded by `.gitignore`)

| Excluded Path | Reason |
|---|---|
| `node_modules/` | Installed dependencies (recreated via `npm install`) |
| `dist/` | Production build output (recreated via `npm run build`) |
| `*.log` (logs) | Auto-generated log files |
| `.vscode/` | Local editor settings |
| `.DS_Store` | macOS system file |
| `*.local` | Local environment configs |

---

## 🔌 API Reference

**LensFolio** uses the [Lorem Picsum](https://picsum.photos/) public API.

| Detail | Value |
|---|---|
| **Endpoint** | `https://picsum.photos/v2/list` |
| **Method** | `GET` |
| **Parameters** | `page` (number), `limit` (number) |
| **Response** | `Array<{ id, author, width, height, url, download_url }>` |

> **Note:** The app fetches the first 100 images by default. Adjust the limit in `src/Data/galleryData.js` to control how many images are loaded.

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. 🍴 Fork the repository
2. 🌿 Create a feature branch (`git checkout -b feature/amazing-feature`)
3. 💾 Commit your changes (`git commit -m 'Add amazing feature'`)
4. 🚀 Push to the branch (`git push origin feature/amazing-feature`)
5. 🔁 Open a Pull Request

Please ensure your code follows the existing style and passes linting (`npm run lint`).

---

## 📄 License

Distributed under the **MIT License**. See [LICENSE](LICENSE) for more information.

---

<div align="center">
  
  **Made with ❤️ using React & Vite**
  
  <br/>
  
  <a href="#-lensfolio">⬆️ Back to Top</a>
  
</div>


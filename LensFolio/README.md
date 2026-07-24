# 📸 LensFolio

A modern, responsive image gallery built with **React**, **Vite**, and **Tailwind CSS**. LensFolio provides a smooth browsing experience with powerful search, pagination, lazy loading, and an elegant modal image viewer.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-7-purple?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwind-css)
![Axios](https://img.shields.io/badge/Axios-API-orange)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Features

- 🔍 Search images by photographer/author name
- 🖼️ Responsive image gallery layout
- 📄 Pagination for seamless browsing
- 🔎 Full-screen modal image preview
- ⚡ Lazy loading for improved performance
- 🛡️ Placeholder image on load failure
- ⏳ Loading spinner while fetching images
- 🌙 Beautiful dark-themed user interface
- 📱 Fully responsive across all devices

---

## 📸 Preview


| Home Page | Image Preview |
|-----------|---------------|
| ![Home](screenshots/home.png) | ![Modal](screenshots/modal.png) |

---

## 🚀 Tech Stack

- **React**
- **Vite**
- **Tailwind CSS**
- **Axios**
- **Lucide React**

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── Gallery.jsx
│   ├── ImageCard.jsx
│   ├── Loader.jsx
│   ├── Modal.jsx
│   ├── Navbar.jsx
│   ├── Pagination.jsx
│   └── SearchBar.jsx
│
├── context/
│   └── ThemeContext.jsx
│
├── data/
│   └── galleryData.js
│
├── pages/
│   └── Home.jsx
│
├── styles/
│   └── gallery.css
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/Dhawal-Bhawsar/lensfolio.git
```

### Navigate to the project

```bash
cd lensfolio
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Visit:

```
http://localhost:5173
```

---

## 🎯 How It Works

1. Fetches images from the **Lorem Picsum API**.
2. Displays images in a responsive grid.
3. Filters images based on the author's name.
4. Splits results into paginated sections.
5. Opens a detailed modal when an image is clicked.
6. Gracefully handles loading and image errors.

---

## 📦 Dependencies

- React
- Axios
- Tailwind CSS
- Lucide React
- Vite

---

## 🔮 Future Improvements

- ❤️ Favorite Images
- 📥 Download Images
- 🏷️ Category Filters
- 🌗 Light/Dark Theme Toggle
- ♾️ Infinite Scrolling
- 📤 Share Images
- 🔀 Sorting Options
- 📱 Progressive Web App (PWA)

---

## 📈 Performance Features

- Lazy-loaded images
- Optimized rendering
- Responsive grid layout
- Lightweight UI components
- Fast development with Vite

---

## 🤝 Contributing

Contributions are always welcome!

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add feature"
```

4. Push to the branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Dhawal Bhawsar**

- GitHub: https://github.com/Dhawal-Bhawsar
- LinkedIn: https://www.linkedin.com/in/dhawal-bhawsar/

---

⭐ If you enjoyed this project, consider giving it a **star** on GitHub!

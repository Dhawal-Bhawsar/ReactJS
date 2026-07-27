# 🖥️ ReactOS — Windows Inspired Desktop Simulator

> A modern **Windows-inspired desktop experience** built with **React.js**, **Vite**, and **Tailwind CSS**. Launch applications, browse photos, manage contacts, and create sticky notes—all inside a beautiful desktop environment.

<p align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4-38BDF8?logo=tailwindcss)
![React Router](https://img.shields.io/badge/React_Router-DOM-CA4245?logo=reactrouter)
![Axios](https://img.shields.io/badge/Axios-5A29E4?logo=axios)

</p>

---

# 📸 Preview

## 🖥️ Desktop

<img width="1919" height="1033" alt="home" src="https://github.com/user-attachments/assets/cf282a57-fd5f-46a6-9dc8-2757b562fcc4" />



---

## 🌟 Features

### 🖥️ Desktop Environment

- Windows-inspired UI
- Dynamic wallpaper
- Floating application windows
- Persistent taskbar


### 📝 Sticky Notes

- Create notes
- Delete notes
- Persistent Local Storage
- Real-time updates

### 👥 Contacts

- Fetches contacts from JSONPlaceholder API
- Individual contact details
- Dynamic routing
- Loading states

### 🖼️ Gallery

- Images fetched from Picsum Photos
- Pagination
- Image preview
- Photo metadata

### 💀 BSOD Page

- Windows-inspired 404 page
- Handles invalid routes gracefully

---

# 📷 Screenshots

## 🏠 Home Screen

The main desktop environment featuring the wallpaper, taskbar, and application launcher.

<img width="1919" height="1033" alt="home" src="https://github.com/user-attachments/assets/cf282a57-fd5f-46a6-9dc8-2757b562fcc4" />

---
## 📝 Sticky Notes

<img width="1919" height="1035" alt="notes" src="https://github.com/user-attachments/assets/1f901404-56bc-41d1-bb6f-2718feeebe85" />

---

## 👥 Contacts

<img width="1919" height="1029" alt="contacts" src="https://github.com/user-attachments/assets/3ade2d9d-782f-4037-bafc-f2cebc9f69a0" />

---

## 👤 Contact Details

<img width="1918" height="1028" alt="Contact_details" src="https://github.com/user-attachments/assets/c13dd150-12b6-45bd-b9b8-e9f447451d50" />

---

## 🖼️ Gallery

<img width="1918" height="1029" alt="gallery" src="https://github.com/user-attachments/assets/6bb8f49b-2499-4c6c-8c5d-155530563a0d" />

---

## 🔍 Image Preview

<img width="1919" height="1034" alt="photo-detail" src="https://github.com/user-attachments/assets/bfda414b-289c-434b-9571-cb184a697383" />

---

## 💀 BSOD (404)

<img width="1919" height="1003" alt="bsod" src="https://github.com/user-attachments/assets/f5df8877-0cff-4c80-9199-7eff598f6ac9" />

---

# 🛠️ Tech Stack

| Category | Technologies |
|----------|--------------|
| Frontend | React.js |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Routing | React Router DOM |
| State Management | Context API |
| HTTP Client | Axios |
| Local Storage | Browser Storage API |
| APIs | JSONPlaceholder, Picsum Photos |

---

# 🚀 Getting Started

## Clone the repository

```bash
git clone https://github.com/yourusername/react-os.git
```

## Navigate to the project

```bash
cd react-os
```

## Install dependencies

```bash
npm install
```

## Start development server

```bash
npm run dev
```

Open

```
http://localhost:5173
```

---

# 📂 Folder Structure

```text
src
│
├── components
│   └── Taskbar.jsx
│
├── context
│   └── SystemContext.jsx
│
├── pages
│   ├── Desktop.jsx
│   ├── StickyNotes.jsx
│   ├── Contact.jsx
│   ├── ContactDetail.jsx
│   ├── Gallery.jsx
│   ├── PhotoDetail.jsx
│   └── BSOD.jsx
│
├── App.jsx
├── main.jsx
└── index.css

screenshots
│
├── desktop.png
├── notes.png
├── contacts.png
├── contact-detail.png
├── gallery.png
├── photo-detail.png
├── dark.png
├── light.png
└── bsod.png
```

---

# 🗺️ Routes

| Route | Description |
|--------|-------------|
| `/` | Desktop |
| `/notes` | Sticky Notes |
| `/contacts` | Contacts |
| `/contacts/:id` | Contact Details |
| `/gallery` | Gallery |
| `/gallery/:id` | Image Preview |
| `*` | BSOD (404) |

---

# 🌐 APIs Used

## JSONPlaceholder

```
https://jsonplaceholder.typicode.com/users
```

Used to fetch contact information.

---

## Picsum Photos

```
https://picsum.photos/v2/list
```

Used for the gallery images.

---

# 🎯 Learning Outcomes

This project demonstrates:

- React Hooks
- Component Architecture
- Context API
- Nested Routing
- Dynamic Routing
- REST API Integration
- Axios
- Local Storage
- Conditional Rendering
- Responsive Design
- Tailwind CSS
- Modern UI Design

---

# 🚀 Future Improvements

- Drag & Drop Windows
- Window Minimize / Maximize
- Desktop Icons
- Start Menu
- File Explorer
- Calculator
- Music Player
- Calendar
- Clock Widget
- Weather Widget
- Wallpaper Chooser
- Authentication
- Firebase Integration
- Progressive Web App (PWA)

---

# 🤝 Contributing

Contributions are welcome!

1. Fork this repository

2. Create your feature branch

```bash
git checkout -b feature/new-feature
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push to GitHub

```bash
git push origin feature/new-feature
```

5. Open a Pull Request

---

# ⭐ Support

If you found this project helpful, please consider giving it a ⭐ on GitHub.

It really helps and motivates me to build more open-source projects.

---

## 👨‍💻 Author

# Dhawal Bhawsar

Final-year B.Tech Computer Science Engineering (Data Science) student passionate about **Software Development, AI, Data Engineering, and Full-Stack Development**. I enjoy building scalable applications, solving real-world problems, and exploring modern web technologies.

### 📬 Connect with me

- 📧 Email: **dhawalbhawsar04@gmail.com**
- 💼 LinkedIn: https://www.linkedin.com/in/dhawal-bhawsar
- 🐙 GitHub: https://github.com/Dhawal-Bhawsar

---

<p align="center">

Built with ❤️ using React, Tailwind CSS & Vite

</p>

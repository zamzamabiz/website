# Chohan Commodities — Corporate Website

A full-stack MERN corporate website for **Chohan Commodities**, a global commodity trader specialising in rice, grains, spices, and lentils since 2009.

**Stack:** MongoDB · Express.js · React 18 · Node.js · Tailwind CSS · Vite

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero banner, highlights, CTA |
| `/about` | Company history, mission, vision, values |
| `/products` | Filterable product grid (Rice, Grains, Spices, Lentils) |
| `/logistics` | Global shipping, quality control, export process |
| `/contact` | Lead capture form + office details |
| `/news` | Dynamic articles fetched from MongoDB via REST API |

## API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/news` | Fetch all articles (sorted by date descending) |
| POST | `/api/news` | Create a new article (`{ title, content, date? }`) |

---

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB (local or [Atlas free tier](https://www.mongodb.com/atlas))

### Install & Run

```bash
# Install all dependencies (root, server, client)
npm run install:all

# Start both frontend (Vite dev) and backend (nodemon) concurrently
npm run dev
```

- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

### Environment Variables

Copy `server/.env.example` to `server/.env` and edit as needed:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/chohan_commodities
```

### Production Build

```bash
# Build React frontend
npm run build

# Start Express server (serves static build + API)
npm start
```

---

## Project Structure

```
├── client/                  # React + Vite + Tailwind frontend
│   ├── src/
│   │   ├── components/      # Navbar, Hero, Footer
│   │   ├── pages/           # Home, About, Products, Logistics, Contact, News
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── vite.config.js
│   └── tailwind.config.js
│
├── server/                  # Express + MongoDB backend
│   ├── models/News.js
│   ├── routes/news.js
│   └── server.js
│
└── package.json             # Root — concurrently dev script
```

---

## Deployment (VPS + Nginx)

1. Build the frontend: `npm run build`
2. Start the server: `npm start` (serves static files + API)
3. Configure Nginx to proxy to `http://localhost:5000`

```nginx
location / {
    proxy_pass http://localhost:5000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_cache_bypass $http_upgrade;
}
```
# E-Com 🛒

**Full-stack E-Commerce platform** with separate **Admin**, **Frontend (customer)**, and **Backend (API)** projects. Built with React + Vite on the client-side and Node/Express + MongoDB on the server-side. Designed for easy local development and Vercel deployment.

**Live Demo:**

- Frontend (customer): https://omen-frontend-gamma.vercel.app
- Admin: https://omen-admin.vercel.app

---

## 🚀 Quick Overview

- **Admin**: admin interface to manage products, orders and users (folder: `admin/`) 
- **Frontend**: customer facing storefront (folder: `frontend/`) 
- **Backend**: REST API, authentication, orders, payment integrations (folder: `backend/`)

---

## 🧰 Tech Stack

- Frontend: React, Vite, Tailwind CSS, React Router
- Backend: Node.js, Express, Mongoose (MongoDB)
- Storage & Media: Cloudinary
- Payments: Stripe and Razorpay (demo/test keys)
- Deployment: Vercel (configs included)

---

## ✅ Features

- User authentication (JWT)
- Product CRUD (Admin)
- Cart and Orders
- Stripe and Razorpay checkout integrations
- Cloudinary for image uploads

---

## 📁 Repo Structure (top-level)

- `admin/` — Admin UI (React + Vite)
- `frontend/` — Customer UI (React + Vite)
- `backend/` — API (Express + MongoDB)

---

## ⚙️ Setup & Run (Local)

Prerequisites: Node.js (v16+), npm, and a MongoDB instance (Atlas or local).

### Backend

1. Open a terminal and go to `backend/`:

```bash
cd backend
npm install
```

2. Create a `.env` file (see required variables below) and start the dev server:

```bash
npm run server  # nodemon
# or
npm start       # production style
```

Server will listen on `PORT` (fallback: `4000`).

### Frontend (customer)

```bash
cd frontend
npm install
npm run dev
```

Visit the URL printed by Vite (usually `http://localhost:5173`).

### Admin

```bash
cd admin
npm install
npm run dev
```

---

## 🔐 Environment Variables (Backend)

Place these in `backend/.env` (DO NOT commit secrets to git). Replace values with your credentials:

- `MONGODB_URI` — MongoDB connection string (example: `mongodb+srv://user:pass@cluster0...`)
- `JWT_SECRET` — JWT signing secret
- `CLOUDINARY_NAME` — Cloudinary cloud name
- `CLOUDINARY_API_KEY` — Cloudinary API key
- `CLOUDINARY_SECRET_KEY` — Cloudinary secret
- `ADMIN_EMAIL` — Admin identity (used in admin middleware)
- `ADMIN_PASSWORD` — Admin password (used in admin middleware)
- `STRIPE_SECRET_KEY` — (Optional) Stripe secret key for payments
- `RAZORPAY_KEY_ID` / `RAZORPAY_KEY_SECRET` — (Optional) Razorpay test keys
- `PORT` — (Optional) server port

> Tip: Use `.env.local` or your hosting provider's secret config for production.

---

## 🧭 API Endpoints (Overview)

Base URL: `http://localhost:<PORT>/api`

- `POST /api/user/register` — Create user
- `POST /api/user/login` — Login (returns JWT in `token` header)
- `GET /api/product` — List products
- `POST /api/product` — Create product (admin)
- `POST /api/cart` — Cart operations
- `POST /api/order/stripe` — Place order via Stripe
- `POST /api/order/razorpay` — Place order via Razorpay

> See `backend/routes/` for full route list.

---

## 💡 Development Tips

- Start backend first so frontend can connect to API.
- Use test keys for Stripe/Razorpay when developing.
- Use Postman or Insomnia to exercise endpoints quickly.

---

## 🧪 Tests

No automated tests are included currently. Adding unit and integration tests for the backend and component tests for the frontend is recommended.

---

## 📦 Deployment

- `admin/` and `frontend/` are Vite apps and include `vercel.json` — can be deployed to Vercel easily.
- `backend/` contains a `vercel.json` too (serverless deployment) — set environment variables in Vercel dashboard.


## 🤝 Contributing

- Fork the repo, create a branch per issue/feature, open a PR with a clear description.
- Keep commits small and include tests where applicable.

---

## 📄 License

Add a `LICENSE` file (MIT recommended) and include license badge here.

---

## ✉️ Contact & Acknowledgements

Built with ❤️ — feel free to open issues or PRs.

---

Happy coding! 🎉

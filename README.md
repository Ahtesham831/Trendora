# 🛍️ Trendora - Modern E-Commerce Platform

Trendora is a premium, fully-responsive e-commerce platform built to deliver a seamless shopping experience for users, along with a powerful dashboard for administrators to manage products, orders, and sales.

---

## 🔗 Deployed Links

* **Frontend User Portal:** [https://trendora-frontend-lyart.vercel.app/](https://trendora-frontend-lyart.vercel.app/)
* **Admin Management Panel:** [https://trendora-admin-zeta.vercel.app/](https://trendora-admin-zeta.vercel.app/)

---

## 🛠️ Tech Stack Used

### Frontend & Admin Panel
* **Library:** React (v18.3.1)
* **Build Tool:** Vite (v6.3.5)
* **Routing:** React Router DOM (v6.26.1)
* **Styling:** Tailwind CSS (v3.4.10) & PostCSS
* **HTTP Client:** Axios (for API communication)
* **Notifications:** React Toastify (for beautiful toast alerts)

### Backend Services
* **Runtime:** Node.js
* **Framework:** Express.js (v4.19.2)
* **Database:** MongoDB (with Mongoose ODM)
* **Authentication:** JSON Web Tokens (JWT) & bcrypt for secure password hashing
* **File Handling:** Multer (multipart form handling) & Cloudinary SDK (image hosting)
* **Payment Integration:** Razorpay (v2.9.4)
* **Utilities:** CORS, dotenv, validator (data validation), nodemon (development server)

---

## 📂 Project Structure

```text
Ecommerce/
├── admin/                      # React-based Admin Dashboard
│   ├── src/
│   │   ├── assets/             # Brand logos, icons, and static images
│   │   ├── components/         # Reusable UI components (Sidebar, Navbar, etc.)
│   │   ├── pages/              # Main view screens (Add Product, List Products, Orders)
│   │   ├── App.jsx             # Main Application Routing
│   │   ├── index.css           # Global Styles & Tailwind Directives
│   │   └── main.jsx            # Application Entry Point
│   ├── index.html              # HTML Root
│   ├── package.json            # Admin dependencies & scripts
│   ├── tailwind.config.js      # Tailwind styling configurations
│   └── vercel.json             # Vercel SPA routing configurations
│
├── backend/                    # Express & Node.js Restful API
│   ├── config/                 # Configurations (MongoDB connection, Cloudinary setup)
│   ├── controllers/            # Request handlers (User, Product, Cart, Order controllers)
│   ├── middleware/             # Middlewares (Auth check, admin check, error handlers)
│   ├── models/                 # Database Schemas (User, Product, Order models)
│   ├── routes/                 # Express API Endpoint Routers
│   ├── server.js               # Primary Server entry point
│   ├── package.json            # Backend dependencies & scripts
│   └── vercel.json             # Vercel serverless functions routing
│
└── frontend/                   # React-based Consumer Storefront
    ├── src/
    │   ├── assets/             # Storefront images, icons, and static media
    │   ├── components/         # Reusable UI elements (ProductItem, Navbar, Footer)
    │   ├── context/            # React Context API (ShopContext for cart/state management)
    │   ├── pages/              # Customer pages (Home, Collection, Cart, Product, Checkout)
    │   ├── App.jsx             # Main Storefront Routing
    │   ├── index.css           # Global Styles & Tailwind Directives
    │   └── main.jsx            # Storefront Entry Point
    ├── index.html              # HTML Root
    ├── package.json            # Storefront dependencies & scripts
    ├── tailwind.config.js      # Tailwind styling configurations
    └── vercel.json             # Vercel SPA routing configurations
```

---

## 🚀 Key Features

* **Complete Customer Journey:** Browse collections, filter products, view details, manage shopping cart, and complete checkouts.
* **Order Management System:** Seamless checkout integration with Razorpay and Cash on Delivery (COD).
* **Robust Admin Panel:** Manage products (add, edit, list, delete), monitor active orders, and update order statuses dynamically.
* **Secure Authentication:** User and Admin JWT-based authorization and session security.
* **Optimized Image Storage:** High-performance, fast-loading images processed via Multer and hosted securely on Cloudinary.
* **Fault-tolerant Connection:** Built-in public DNS fallback to guarantee connection stability with MongoDB Atlas database servers.

---

## ⚙️ Local Development Setup

To run this project locally, follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/Ahtesham831/Trendora.git
cd Ecommerce
```

### 2. Configure Environment Variables
You will need to create a `.env` file in the **backend**, **frontend**, and **admin** folders before running the app. Refer to the templates below:

#### **Backend (`backend/.env`)**
```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_token
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password
CLOUDINARY_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

#### **Frontend (`frontend/.env`)**
```env
VITE_BACKEND_URL=http://localhost:4000
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

#### **Admin Panel (`admin/.env`)**
```env
VITE_BACKEND_URL=http://localhost:4000
```

---

## 🏃 Running the Project

### Start the Backend Server
```bash
cd backend
npm install
npm run server  # Runs backend on http://localhost:4000 with nodemon
```

### Start the Frontend Storefront
```bash
cd frontend
npm install
npm run dev     # Runs client on http://localhost:5173
```

### Start the Admin Dashboard
```bash
cd admin
npm install
npm run dev     # Runs admin dashboard on http://localhost:5174 or next available port
```

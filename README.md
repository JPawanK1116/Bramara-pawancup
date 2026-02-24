# Bramara Sarees – Digital Boutique Engine

Welcome to the **Bramara Sarees** digital boutique platform (Phase 1). This is a highly premium, custom-built e-commerce foundation for Macherla's finest silk boutique, offering an immersive UI/UX designed specifically to elevate the online saree shopping experience.

## ✨ Features Built in Phase-1

This initial phase focuses heavily on **Premium Aesthetics, Mobile-First User Experience, and WhatsApp Checkout Integration.**

*   **📱 Mobile-First Layout**: Custom sticky bottom navigation bar designed for extremely high engagement.
*   **🎬 Reel Shopping Experience**: An Instagram-style vertical scrolling carousel for discovering new arrivals (currently uses high-resolution images, pre-configured to handle video).
*   **💍 Bridal Box Builder**: An interactive bundle generator letting brides estimate costs across Wedding, Reception, Mehendi, and Return Gifts. 
*   **🤝 Trust Block**: Hand-crafted trust sections establishing the local Macherla legacy, 100% Originality, and Easy Returns.
*   **⚖️ Saree Comparison Tool**: A dedicated interface allowing users to compare up to 3 sarees side-by-side based on weight, washing instructions, and fabric type.
*   **📞 Smart Video Call Scheduling**: A rich funnel allowing users to submit preferences (budget, occasion) and directly book a personalized live draping/demo over WhatsApp/Video Call.
*   **💬 Direct WhatsApp Checkout**: Instead of a traditional complex payment gateway (planned for Phase 2), the current cart automatically computes totals and generates a pre-filled, highly detailed WhatsApp message sent straight to the store owner.
*   **📖 Fabric Education**: Built-in elegantly designed accordions explaining Kanjivaram vs Banarasi fabrics and care tips.

## 🛠 Tech Stack (Performance First)

### Frontend
*   **Framework**: Next.js 14 (App Router)
*   **Language**: TypeScript
*   **Styling**: Tailwind CSS
*   **Animations**: Framer Motion
*   **Carousels**: Swiper.js
*   **Icons**: Lucide React

### Backend (Prepared for Phase 2)
*   **Runtime**: Node.js
*   **Framework**: Express.js
*   **Database Setup**: MongoDB & Mongoose (Schemas initialized)

---

## 🚀 How to Run the Project Locally

To run the full application (Frontend & Backend) on your local machine, follow these simple steps.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.
Ensure you have MongoDB running locally if you wish to start the backend (Backend running is optional for Phase 1 frontend evaluation).

### 1. Clone the Repository
```bash
git clone https://github.com/Jpawancup/bramara-pawancup.git
cd bramara-pawancup
```

### 2. Setup and Run the Frontend (UI/UX)
The frontend contains the entirety of the Phase-1 visual experience.

```bash
cd frontend
npm install
npm run dev
```

The application will now be running at **http://localhost:3000**. Open that in your browser to experience the premium boutique design!

### 3. Setup and Run the Backend (Optional for Phase 1 API setups)
The backend folder contains the basic Express server and MongoDB models ready for future CMS/Dashboard integration.

```bash
cd ../backend
npm install
npm start
```

The API will run on **http://localhost:5000**.

---

## 📁 Directory Structure Overview

```text
bramara-sarees/
│
├── frontend/             # Next.js 14 App Router
│   ├── app/              # Core routing (shop, compare, bridal-box, etc.)
│   ├── components/       # Reusable UI components (ProductCard, ReelCarousel)
│   ├── public/assets/    # Categorized placeholder images (hero, products, etc.)
│   └── tailwind.config.ts
│
├── backend/              # Node.js/Express Setup
│   ├── models/           # Mongoose schemas (Product.js)
│   ├── routes/           # API routes
│   ├── controllers/      # API logic
│   └── server.js         # Entry point
│
└── README.md
```

## 🔮 Roadmap (Phase 2 & Beyond)
*   Integrate highly secure Razorpay Payment Gateway.
*   Develop a full internal Admin dashboard for product/inventory management.
*   Convert Phase-1 Placeholder images to dynamic Cloudinary endpoints.
*   Replace Reel placeholder images with actual `.mp4` video looping sources.

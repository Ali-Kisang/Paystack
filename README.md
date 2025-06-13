# 💳 Paystack Full-Stack Payment Integration

This repository demonstrates a full-stack integration of the **Paystack** payment gateway using:

- **Frontend**: React (`/client`)
- **Backend**: Node.js + Express (`/server`)

The app allows users to initiate and verify payments securely via Paystack.

---

## 📁 Project Structure

Paystack/
├── client/ # React app (frontend)
└── server/ # Express API (backend)


---

## 🧱 Prerequisites

Make sure the following are installed before getting started:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- A [Paystack account](https://paystack.com) with access to your **test/public** and **secret** keys

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Ali-Kisang/Paystack.git
cd Paystack
---
### 2. Install dependencies
Client

```bash
cd client
npm install

---
Server
```bash
cd ../server
npm install
---

```bash
PORT=5000
PAYSTACK_SECRET_KEY=sk_test_your_secret_key
WEBHOOK_SECRET=your_webhook_secret  # optional
---

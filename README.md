# PrimeCode - Premium Coding Platform

An interactive coding platform similar to LeetCode, featuring real-time code execution, problem-solving, user profiles, and an AI-powered coding assistant chatbot.

## Tech Stack
- **Frontend**: React (Vite), TailwindCSS
- **Backend**: Node.js, Express, MongoDB
- **Code Execution**: Judge0 API
- **AI Chatbot**: Gemini API

---

## Getting Started

### 📋 Prerequisites
Make sure you have the following installed on your machine:
- **Node.js** (v16 or higher)
- **npm** (comes with Node.js)
- **MongoDB** (Local instance or MongoDB Atlas URI)
- **Docker** (Optional, if you want to run Judge0 locally)

---

### 🚀 Setup Instructions

#### 1. Clone the Repository
```bash
git clone https://github.com/KAPIL-MALI/Minor_Project.git
cd Minor_Project
```

#### 2. Install Dependencies
You can install dependencies for the root, frontend, and backend with a single command:
```bash
npm run install-all
```

#### 3. Setup Environment Variables
1. Go into the `server/` directory.
2. Duplicate the `.env.example` file and rename it to `.env`:
   ```bash
   cp server/.env.example server/.env
   ```
3. Open `server/.env` and fill in your configuration:
   - Provide your **MongoDB connection string**.
   - Add your **Gemini API Key** for the AI chatbot.
   - Configure **Judge0 API** URL (defaults to `http://localhost:2358` for local runs).

#### 4. Run the Project
Start both the client (frontend) and server (backend) concurrently with one command from the project root:
```bash
npm start
```
- Frontend will run at: `http://localhost:5173`
- Backend will run at: `http://localhost:5000`

#### 5. Seed Database (Optional)
If you want to seed the database with initial problem data:
```bash
npm run seed
```

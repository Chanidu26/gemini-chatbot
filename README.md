# Gemini Q&A Web Application

A full-stack Question & Answer web application powered by the Gemini API, built using **Spring Boot** for the backend and **React (Vite)** for the frontend.

## ✨ Features

- Accepts user questions and fetches AI-generated answers via Gemini API
- Full-stack implementation with React UI and Spring Boot backend
- Securely manages API keys via environment variables
- Clean separation between client and server logic
- Supports modern tooling (Vite, RESTful API, WebClient)

## 🛠️ Tech Stack

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Spring Boot, WebClient, Java
- **AI Integration**: Gemini API (Google's AI model)
- **Build Tools**: Maven, Node.js

## 🔐 Environment Variables

Set the following environment variables before running the backend:

```
GEMINI_API_URL=your_gemini_api_url
GEMINI_API_KEY=your_gemini_api_key
```

## 📦 Project Structure

```
gemini-chatbot/
├── backend/             # Spring Boot backend
│   ├── src/main/java/... 
│   └── application.properties
├── frontend/            # React frontend using Vite
│   ├── src/
│   └── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Backend

```bash
cd backend
./mvnw spring-boot:run
```

Make sure you have Java and Maven installed. Environment variables should be set in your IDE or terminal.

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend will start at `http://localhost:5173/` by default.

## 📬 API Communication

The frontend sends a question to the backend, which then calls Gemini API to generate an answer and returns it to the user interface.


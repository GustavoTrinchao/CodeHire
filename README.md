# CodeHire

> Technical interviews, done right.

CodeHire is a full-stack web application designed to simplify the technical interview process for recruiters and candidates.

The platform allows recruiters to create coding challenges, open-ended questions, and multiple-choice questions, organize them into interview templates, and evaluate candidates in a modern and structured environment.

---

## Features

- 🔐 JWT authentication
- 👥 Recruiter and candidate accounts
- 📝 Create and manage technical questions
- 💻 Coding challenges
- 📄 Open-text questions
- ✅ Multiple-choice questions
- 📋 Interview templates
- 📨 Candidate submissions
- 📊 Recruiter dashboard
- 🐳 Dockerized development environment

---

## Tech Stack

### Backend

- Java 21
- Spring Boot
- Spring Security
- Spring Data JPA
- PostgreSQL
- Maven

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui

### DevOps

- Docker
- Docker Compose

---

## Project Structure

```text
codehire/
├── backend/
├── frontend/
├── docker-compose.yml
├── README.md
└── TODO.md
```

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/your-username/codehire.git
cd codehire
```

### Run with Docker (Recommended)

```bash
docker compose up --build
```

This command will:

- Build the backend image
- Build the frontend image
- Start a PostgreSQL database
- Create the required Docker network
- Launch the entire application

Once everything is running:

- Frontend → `http://localhost:5173`
- Backend → `http://localhost:8080`

---

## Roadmap

CodeHire is under active development.

The complete development roadmap is available in [TODO.md](TODO.md).

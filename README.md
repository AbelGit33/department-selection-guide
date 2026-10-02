# Department Selection Guide (DSG)

A full-stack AI-powered web platform for Ethiopian students to receive personalized department recommendations based on academic performance, interests, and aptitude.

## Overview

This project implements the functional requirements described in the SRS for the Department Selection Guide. The system supports:

- Student registration and profile management
- Academic record entry by stream and grade level
- RIASEC-based interest assessment
- AI-powered department recommendations with explanations
- Counselor and admin dashboards
- Bilingual UX (English / Amharic)
- Responsive low-bandwidth friendly web experience

## Tech Stack

- Frontend: Next.js 14 + TypeScript + Tailwind CSS
- Backend: FastAPI + Python
- Database: PostgreSQL
- Cache/Queue: Redis
- AI/ML: Scikit-learn / XGBoost / SHAP-ready architecture

## Project Structure

```text
.
├── apps/
│   ├── api/
│   │   ├── app/
│   │   │   ├── api/
│   │   │   ├── core/
│   │   │   ├── models/
│   │   │   ├── schemas/
│   │   │   ├── services/
│   │   │   ├── config.py
│   │   │   └── main.py
│   │   ├── requirements.txt
│   │   └── Dockerfile
│   └── web/
│       ├── app/
│       ├── components/
│       ├── lib/
│       ├── public/
│       ├── package.json
│       ├── next.config.mjs
│       ├── tsconfig.json
│       └── tailwind.config.ts
├── packages/
│   └── shared/
│       └── src/
├── docker-compose.yml
├── package.json
├── .gitignore
├── .env.example
└── README.md
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start infrastructure

```bash
docker compose up -d postgres redis
```

### 3. Start backend

```bash
cd apps/api
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

### 4. Start frontend

```bash
cd apps/web
npm install
npm run dev
```

Then open:

- Frontend: http://localhost:3000
- API docs: http://localhost:8000/docs

## Core Features

- Student onboarding flow
- Department recommendation engine skeleton
- Explainability support with explanation factors
- Counselor dashboard shell
- Admin management placeholders
- Responsive bilingual layout

## Notes

This is a structured starter implementation built according to the SRS. It is intentionally modular so the team can extend it with database models, real ML pipelines, role-based access, and deployment automation.

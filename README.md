# ✅ Fullstack To-Do App

A full-stack to-do application built as a portfolio project to showcase my skills while I'm looking for a position as a front-end developer. App demonstrates a complete, working full-stack flow — authentication, a database, and per-user task management — built and deployed end to end.

🔗 **Live demo:** https://todo-app-rafalski.vercel.app/

https://github.com/user-attachments/assets/2cd8453d-ce8f-42ac-aafc-690279f5b62d

## 🛠️ Tech Stack

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

| Layer                  | Tech                                            |
| ---------------------- | ----------------------------------------------- |
| **Frontend**           | React, TypeScript, Vite, CSS Modules            |
| **Routing**            | React Router                                    |
| **Forms & validation** | React Hook Form + Zod                           |
| **Backend & database** | Supabase — PostgreSQL, Auth, Row Level Security |
| **Icons**              | Tabler Icons                                    |
| **Hosting**            | Vercel                                          |

## ✨ Features

- 🔐 **Authentication** — sign up and log in with Supabase Auth; protected routes keep the app available only to signed-in users
- 📝 **Full task management** — create, edit, complete, and delete tasks, with every change persisted to a PostgreSQL database
- 🛡️ **Row Level Security** — data is isolated at the database level, so each user can only ever access their own tasks
- 🔎 **Filtering** — switch between All, Active, and Done to focus on what matters
- ✅ **Form validation** — client-side validation with React Hook Form + Zod and clear inline error messages
- 📱 **Responsive design** — works smoothly on mobile and desktop, with a subtle animated background

## 🧠 Case Study

This is a portfolio project built to demonstrate not just _that_ I can build a working full-stack app, but _how_ I approach technical decisions. Below are the key choices and the reasoning behind them.

### Why a to-do app?

A to-do list is a familiar, well-scoped concept — which let me showcase a complete set of skills (authentication, full CRUD, filtering, validation, responsive design) without domain complexity getting in the way of the engineering.

### Frontend — React + TypeScript

React is the industry standard for building modern, component-based interfaces, with the largest ecosystem and the strongest demand in front-end roles. TypeScript adds type safety that catches bugs before runtime and makes the code easier to read and refactor.

### Forms & validation — React Hook Form + Zod

Forms are where a lot of front-end complexity lives. I paired React Hook Form with Zod (via `zodResolver`) because together they keep the code clean and declarative: validation rules live in a single schema, types are inferred from it, and error handling stays consistent — professional, type-safe validation with minimal boilerplate.

### Backend — Supabase (a deliberate scoping decision)

My focus here was front-end craft, so instead of building a backend from scratch I used Supabase as a Backend-as-a-Service. This let me ship a _real_ full-stack app — authentication, a PostgreSQL database, and Row Level Security enforcing per-user data isolation — while keeping the project focused on what I set out to demonstrate. It also reflects a practical skill: picking the right tool to deliver value efficiently.

### Design — modern, clean, and calm

I wanted an interface that feels modern and pleasant to look at, but never competes with the task itself. The result is a focused dark UI with a subtle animated background — polished, but quiet.

## ⚙️ Running the project locally

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ and npm
- A free [Supabase](https://supabase.com/) project (database + auth)

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/rafalski-dev/fullstack-todo-app.git
cd fullstack-todo-app
```

**2. Install dependencies**

```bash
npm install
```

**3. Set up environment variables**

Create a `.env.local` file in the project root:

```bash
cp .env.example .env.local
```

Then fill in your Supabase credentials:

```env
VITE_SUPABASE_URL=your-project-url
VITE_SUPABASE_ANON_KEY=your-anon-key
```

> You'll find both in your Supabase dashboard under **Project Settings → API**.

**4. Start the dev server**

```bash
npm run dev
```

The app runs at **http://localhost:5173**.

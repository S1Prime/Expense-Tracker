# 💳 Expense Tracker

A modern full-stack Expense and Budget Management application built with Next.js 16 (App Router), TypeScript, Tailwind CSS, and Prisma ORM.

---

## 📁 Project Architecture & Directory Structure

```
Expense-Tracker/
├── .env.example                     # Root environment template (Docker / PostgreSQL)
├── .gitignore                       # Multi-stack gitignore (Next.js, Node, DBs, Python, OS)
├── docker-compose.yml               # Container definition for PostgreSQL 16 & pgAdmin
├── push.ps1                         # One-click manual Git commit & push helper
├── auto_push_watcher.ps1            # Auto-watch and auto-push daemon
├── README.md                        # Project documentation
│
└── frontend/                        # Next.js Full-Stack Application
    ├── .env                         # Active local environment variables (ignored by git)
    ├── .env.example                 # Example environment variables template
    ├── package.json                 # Project dependencies & operational scripts
    ├── tsconfig.json                # TypeScript compiler config with `@/*` path aliases
    ├── next.config.ts               # Next.js configuration
    │
    ├── prisma/                      # Database Schema & Migrations
    │   ├── schema.prisma            # Prisma schema (SQLite / PostgreSQL models)
    │   ├── seed.ts                  # Seed script for initial categories & data
    │   └── dev.db                   # Local SQLite database (git-ignored)
    │
    ├── app/                         # Next.js App Router (Pages & API Handlers)
    │   ├── layout.tsx               # Root layout (Sidebar + Header + Main shell)
    │   ├── page.tsx                 # Dashboard home (Metrics & recent activities)
    │   ├── globals.css              # Global styles & Tailwind directives
    │   ├── expenses/page.tsx        # Expense transactions management view
    │   ├── analytics/page.tsx       # Spending charts & financial reports view
    │   ├── budgets/page.tsx         # Monthly budget limits per category
    │   ├── settings/page.tsx        # Currency, profile, and theme preferences
    │   └── api/                     # Backend REST API Handlers
    │       ├── expenses/route.ts    # GET (list/filter) & POST (create expense)
    │       ├── categories/route.ts  # GET & POST categories
    │       └── analytics/route.ts   # GET spending summary metrics
    │
    ├── components/                  # Reusable UI & Feature Components
    │   ├── ui/                      # Base primitives (Button, Card, Input, Modal, Badge)
    │   ├── layout/                  # Navigation components (Sidebar, Header)
    │   ├── expenses/                # Forms, transaction lists, and filter bars
    │   └── analytics/               # Metric summary cards and charts
    │
    ├── lib/                         # Shared Utilities & Business Rules
    │   ├── prisma.ts                # PrismaClient singleton for Next.js
    │   ├── utils.ts                 # Formatting (currency, dates, classNames)
    │   ├── constants.ts             # Default categories, currencies, payment methods
    │   └── validations/             # Zod validation schemas (Expense, Filter, Category)
    │
    ├── types/                       # TypeScript Type Definitions
    │   ├── expense.ts               # Interfaces for Expense, Category, Budget, Analytics
    │   └── index.ts                 # Central type barrel export
    │
    └── hooks/                       # Custom React Hooks
        ├── use-expenses.ts          # Expense state, filters, and operations
        ├── use-debounce.ts          # Input debouncing
        └── use-local-storage.ts     # LocalStorage state synchronization
```

---

## ⚙️ Environment Variables

The project uses `.env` files for configuration. A pre-configured `frontend/.env` is initialized for development.

### `frontend/.env.example`
```env
# Database Connection (Default: SQLite file)
DATABASE_URL="file:./dev.db"

# To switch to PostgreSQL (e.g., via Docker):
# DATABASE_URL="postgresql://postgres:postgres@localhost:5432/expense_tracker?schema=public"

# Application Settings
NEXT_PUBLIC_APP_NAME="Expense Tracker"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXT_PUBLIC_DEFAULT_CURRENCY="USD"
NEXT_PUBLIC_ENABLE_ANALYTICS="true"

# Authentication (Placeholder for NextAuth)
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="change-this-to-a-secure-random-32-byte-secret"
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
cd frontend
npm install
```

### 2. Initialize the Database
```bash
# Push schema to SQLite database
npm run db:push

# Optional: Open Prisma Studio (visual database viewer)
npm run db:studio
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🗄️ Optional: Running with PostgreSQL via Docker

If you want to use PostgreSQL instead of SQLite:
```bash
# Start PostgreSQL container
docker compose up -d

# Update frontend/.env with:
# DATABASE_URL="postgresql://postgres:postgres@localhost:5432/expense_tracker?schema=public"

# Sync schema to PostgreSQL
cd frontend
npm run db:push
```

---

## 🔄 Automatic Git Watcher

To automatically commit and push any changes as you save files:
```powershell
# From the project root:
.\auto_push_watcher.ps1
```
Or push manually with:
```powershell
.\push.ps1 -Message "Your commit message"
```

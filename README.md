# 💳 Expense Tracker

A modern full-stack Expense and Personal Finance Management system built with Next.js 16 (App Router), TypeScript, Tailwind CSS, and Prisma ORM.

---

## 📁 Complete Project Directory Structure

```
Expense-Tracker/
├── .github/
│   └── workflows/
│       └── ci.yml                   # GitHub Actions Continuous Integration pipeline
├── .env.example                     # Root environment template (Docker / PostgreSQL)
├── .gitignore                       # Multi-stack gitignore (Next.js, Node, DBs, Python, OS)
├── docker-compose.yml               # Container definition for PostgreSQL 16 & pgAdmin
├── push.ps1                         # One-click manual Git commit & push helper
├── auto_push_watcher.ps1            # Auto-watch and auto-push background daemon
├── README.md                        # Project documentation & structure guide
├── scripts/                         # Maintenance & automation scripts
│   ├── backup-db.ps1                # PowerShell script for SQLite DB backups
│   └── reset-db.bat                 # One-click SQLite reset & migration script
│
└── frontend/                        # Next.js Full-Stack Application
    ├── .env                         # Active local environment variables (SQLite configured)
    ├── .env.example                 # Example environment variables template
    ├── package.json                 # Project dependencies & operational scripts
    ├── tsconfig.json                # TypeScript compiler config with `@/*` aliases
    ├── next.config.ts               # Next.js configuration (Turbopack, Cache Components)
    │
    ├── prisma/                      # Database Schema & Migrations
    │   ├── schema.prisma            # Prisma schema (User, Expense, Category, Budget)
    │   ├── seed.ts                  # Seed script for initial categories & data
    │   └── dev.db                   # Local SQLite database (git-ignored)
    │
    ├── app/                         # Next.js App Router (Pages & API Handlers)
    │   ├── layout.tsx               # Root layout (Sidebar + Header + Main shell)
    │   ├── page.tsx                 # Dashboard home (Overview metrics & activities)
    │   ├── globals.css              # Global styles & Tailwind CSS directives
    │   │
    │   ├── (auth)/                  # Authentication Pages
    │   │   ├── login/page.tsx       # Sign in
    │   │   ├── register/page.tsx    # Sign up
    │   │   └── forgot-password/     # Password recovery
    │   │
    │   ├── expenses/                # Expenses Domain
    │   │   ├── page.tsx             # All expenses table & filter view
    │   │   ├── new/page.tsx         # Add expense page
    │   │   └── [id]/page.tsx        # View & edit single expense
    │   │
    │   ├── income/page.tsx          # Income & earnings tracking
    │   ├── categories/page.tsx      # Category management view
    │   ├── budgets/                 # Budgets Domain
    │   │   ├── page.tsx             # Monthly budget limits per category
    │   │   └── new/page.tsx         # Create budget page
    │   ├── goals/page.tsx           # Savings goals & progress milestones
    │   ├── recurring/page.tsx       # Subscriptions & recurring bills manager
    │   ├── reports/page.tsx         # Financial reports & statement exports
    │   ├── analytics/page.tsx       # Interactive charts & spending insights
    │   │
    │   ├── settings/                # User & System Preferences
    │   │   ├── page.tsx             # General preferences & currency selector
    │   │   ├── profile/page.tsx     # User profile settings
    │   │   └── security/page.tsx    # Password & session security
    │   │
    │   └── api/                     # Backend REST API Handlers
    │       ├── expenses/            # /api/expenses (GET/POST), /[id] (PUT/DELETE)
    │       │   ├── route.ts
    │       │   ├── [id]/route.ts
    │       │   ├── export/route.ts  # CSV / JSON export endpoint
    │       │   └── import/route.ts  # Bulk transaction import endpoint
    │       ├── income/              # /api/income (GET/POST), /[id] (PUT/DELETE)
    │       ├── categories/          # /api/categories (GET/POST), /[id] (PUT/DELETE)
    │       ├── budgets/             # /api/budgets (GET/POST), /[id] (PUT/DELETE)
    │       ├── goals/route.ts       # /api/goals (GET/POST)
    │       ├── recurring/route.ts   # /api/recurring (GET/POST)
    │       ├── analytics/route.ts   # /api/analytics (Summary metrics)
    │       ├── reports/route.ts     # /api/reports (Statements)
    │       └── upload/route.ts      # /api/upload (Receipt file uploads)
    │
    ├── actions/                     # Next.js Server Actions (Mutation Handlers)
    │   ├── expense.actions.ts       # createExpenseAction, deleteExpenseAction
    │   ├── income.actions.ts        # createIncomeAction
    │   ├── category.actions.ts      # createCategoryAction
    │   └── budget.actions.ts        # setBudgetAction
    │
    ├── services/                    # Business Logic & Data Access Layer
    │   ├── expense.service.ts       # ExpenseService (Prisma queries)
    │   ├── income.service.ts        # IncomeService
    │   ├── category.service.ts      # CategoryService
    │   ├── budget.service.ts        # BudgetService
    │   └── analytics.service.ts     # AnalyticsService
    │
    ├── components/                  # Reusable UI & Feature Components
    │   ├── ui/                      # Base primitives (Button, Card, Input, Modal, Table, Badge)
    │   ├── layout/                  # Shell components (Sidebar, Header)
    │   ├── auth/                    # LoginForm, RegisterForm
    │   ├── expenses/                # ExpenseForm, ExpenseList, ExpenseFilters
    │   ├── income/                  # IncomeList, IncomeForm
    │   ├── categories/              # CategoryList, CategoryForm
    │   ├── budgets/                 # BudgetCard, BudgetForm
    │   ├── goals/                   # GoalCard
    │   ├── recurring/               # RecurringList
    │   ├── receipts/                # ReceiptUpload
    │   ├── charts/                  # SpendingPieChart
    │   └── analytics/               # SummaryCards
    │
    ├── lib/                         # Shared Utilities & Business Rules
    │   ├── prisma.ts                # PrismaClient singleton for Next.js
    │   ├── utils.ts                 # Formatting (currency, dates, classNames `cn`)
    │   ├── constants.ts             # Default categories, currencies, payment methods
    │   └── validations/             # Zod validation schemas
    │       ├── expense.ts
    │       ├── income.ts
    │       ├── category.ts
    │       ├── budget.ts
    │       ├── goal.ts
    │       └── recurring.ts
    │
    ├── types/                       # TypeScript Type Definitions
    │   ├── expense.ts               # Expense, PaymentMethod, ExpenseFilterParams
    │   ├── income.ts                # Income, IncomeSource
    │   ├── category.ts              # Category, CategorySummary
    │   ├── budget.ts                # Budget, BudgetStatus
    │   ├── goal.ts                  # SavingsGoal
    │   ├── recurring.ts             # RecurringExpense, BillingCycle
    │   ├── user.ts                  # User profile types
    │   └── index.ts                 # Central barrel export
    │
    ├── hooks/                       # Custom React Hooks
    │   ├── use-expenses.ts          # Expense state & filter management
    │   ├── use-income.ts            # Income state management
    │   ├── use-budgets.ts           # Budgets state management
    │   ├── use-debounce.ts          # Input debouncing
    │   └── use-local-storage.ts     # LocalStorage state synchronization
    │
    └── providers/                   # Context & Theme Providers
        └── theme-provider.tsx       # Dark/Light theme provider
```

---

## ⚙️ Environment Variables

A pre-configured development environment file `frontend/.env` is initialized:

```env
# Database Connection (Default: SQLite for zero-config local dev)
DATABASE_URL="file:./dev.db"

# To switch to PostgreSQL (e.g. via Docker):
# DATABASE_URL="postgresql://postgres:postgres@localhost:5432/expense_tracker?schema=public"

# Application Settings
NEXT_PUBLIC_APP_NAME="Expense Tracker"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXT_PUBLIC_DEFAULT_CURRENCY="USD"
NEXT_PUBLIC_ENABLE_ANALYTICS="true"

# NextAuth Placeholder
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="local-dev-secret-key-32-characters-min"
```

---

## 🚀 Quick Commands

```bash
# Navigate to frontend
cd frontend

# Sync database schema with SQLite
npm run db:push

# Launch visual database editor
npm run db:studio

# Run development server
npm run dev
```

---

## 🔄 Automatic Git Watcher

```powershell
# From the project root:
.\auto_push_watcher.ps1
```
Or push manually:
```powershell
.\push.ps1 -Message "Your commit message"
```

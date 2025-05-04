# 🖤 FURIA Fan Platform - Complete Technical Overview

A robust full-stack application designed as a monorepo to power an interactive fan experience for the FURIA esports organization. Built with modern technologies across frontend and backend, it integrates live data, user authentication, social interaction, and ecommerce.

---

## 🔧 Project Overview

- **Frontend**: Next.js 15.3.1 with React 19
- **Backend**: Express.js with TypeScript
- **Database**: MySQL using Prisma ORM
- **Architecture**: Monorepo with Yarn Workspaces and Turborepo
- **Containerization**: Docker and docker-compose
- **External APIs**: HLTV (esports data) and Gemini (AI assistant)

---

## 📁 Project Structure

### Frontend (`apps/web`)
```
src/
├── app/           # Next.js App Router
├── components/    # UI components
├── providers/     # Context providers
├── lib/           # Utility libraries
├── utils/         # Helpers
├── types/         # TS types
├── styles/        # Global styles
├── hooks/         # Custom hooks
└── middleware.ts  # Middleware
```

### Backend (`apps/api`)
```
src/
├── routes/        # API endpoints
├── prisma/        # Prisma schema
└── docker-compose.yml  # Container setup
```

---

## 📚 Tech Stack

### Frontend
- Next.js 15.3.1
- React 19 + Context API
- styled-components, framer-motion, lucide-react
- react-hook-form + zod for forms/validation
- TypeScript strict mode

### Backend
- Express.js 4.18
- TypeScript + ts-node-dev
- Prisma ORM
- HLTV API, Gemini API
- dotenv, CORS, Middleware

---

## 🗄️ Data Models

- `User` / `UserSettings` / `Credential`
- `Document`, `SocialMedia`
- `Game`, `Event`, `Team`, `Player`, `Stat`
- `Shop`, `Purchase`
- `GamePreference`, `EventPreference`

---

## 🔌 API Endpoints

RESTful routes:
- `/user`, `/team`, `/shop`, `/event`, `/game`
- `/gemini`, `/hltv` (API integrations)

## 🔌 API Integration

### Base URL
```
http://localhost:3001/api
```

### HLTV Endpoints

#### 📥 GET /hltv/matches/stats/:startDate/:endDate
Fetches match statistics for a date range.

**Example usage:**
```typescript
const startDate = '2024-04-01';
const endDate = '2024-04-30';
const response = await apiService.getMatchesStats(startDate, endDate);
```

#### 📥 GET /hltv/matches/:id
Fetches detailed information about a specific match.

**Example usage:**
```typescript
const matchId = 12345;
const response = await apiService.getMatchById(matchId);
```

#### 📥 GET /hltv/teams/:id
Retrieves information about a specific team.

**Example usage:**
```typescript
const teamId = 789;
const response = await apiService.getTeamById(teamId);
```

#### 📥 GET /hltv/players/:id
Gets detailed information about a specific player.

**Example usage:**
```typescript
const playerId = 456;
const response = await apiService.getPlayerById(playerId);
```

### Gemini AI Endpoints

#### 📤 POST /gemini/analyze-document
Analyzes a document image using Gemini AI.

**Request body:**
```typescript
{
  "imageBase64": "base64_encoded_image_string"
}
```

**Example usage:**
```typescript
const response = await apiService.analyzeDocument(imageBase64);
```

#### 📤 POST /gemini/verify-identity
Verifies identity by comparing document and selfie images.

**Request body:**
```typescript
{
  "documentImageBase64": "base64_encoded_document_image",
  "selfieImageBase64": "base64_encoded_selfie_image"
}
```

**Example usage:**
```typescript
const response = await apiService.verifyIdentity(documentImageBase64, selfieImageBase64);
```

### User Management Endpoints

#### 📤 POST /user/register
Registers a new user.

**Request body:**
```typescript
{
  "cpf": "12345678900",
  "email": "user@example.com",
  "fullName": "John Doe",
  "username": "johndoe",
  "password": "securepassword",
  "address": "123 Main St",
  "city": "Example City",
  "state": "EX",
  "zipCode": "12345",
  "phoneNumber": "1234567890",
  "birthDate": "1990-01-01",
  "platform": "PC",
  "playFrequency": "daily"
}
```

#### 📤 POST /user/login
Authenticates a user.

**Request body:**
```typescript
{
  "cpf": "12345678900",
  "password": "securepassword"
}
```

#### 📥 GET /user/:cpf
Retrieves user profile information.

#### 📥 GET /user/:cpf/social
Gets user's social media connections.

#### 📥 GET /user/:cpf/profile-overview
Retrieves user profile overview.

#### 📥 GET /user/:cpf/settings
Gets user settings.

#### 📤 PUT /user/:cpf/settings
Updates user settings.

**Request body:**
```typescript
{
  "language": "en",
  "emailNotifications": true,
  "pushNotifications": true,
  "marketingEmails": false,
  "eventReminders": true
}
```

### Team Endpoints

#### 📥 GET /team
Retrieves all teams information.

**Example usage:**
```typescript
const response = await apiService.getAllTeams();
```

### Shop Endpoints

#### 📥 GET /shop
Retrieves all available products in the shop.

**Example usage:**
```typescript
const response = await apiService.getAllShopItems();
```

### Event Endpoints

#### 📥 GET /event
Retrieves all events.

**Example usage:**
```typescript
const response = await apiService.getAllEvents();
```

#### 📥 GET /event/event/:id
Retrieves a specific event by ID.

**Example usage:**
```typescript
const eventId = 123;
const response = await apiService.getEventById(eventId);
```

#### 📥 GET /event/next-events
Retrieves upcoming events.

**Example usage:**
```typescript
const response = await apiService.getNextEvents();
```

### Game Endpoints

#### 📥 GET /game
Retrieves all available games.

**Example usage:**
```typescript
const response = await apiService.getAllGames();
```

---

## 🔒 Authentication & Security

- CPF + email login
- Document verification
- Social media linking
- CORS + .env configurations

---

## 🚀 Development & Deployment

- Concurrent frontend/backend development
- Hot reload (ts-node-dev, nodemon)
- `pnpm`, `docker`, `turborepo`
- Recommended deploy: Vercel (FE) + Render/Railway (BE)

---

## 🛠️ Dev Tools

- ESLint + Prettier
- Dockerized services
- Prisma migrations
- TypeScript-first architecture

---

## 🔍 Notable Features

- 📋 Full user profile system
- 🧾 Document validation
- 🌐 Social media integration
- 🎮 Match, team and player data (HLTV)
- 🛒 Ecommerce with product and order tracking
- 🤖 Gemini-based AI features

---

## 🔐 Environment Requirements

- Node.js ≥ 18
- MySQL
- `.env` with DB, API keys, and app secrets

## 📦 Example Environment Variables

### 🔹 Web (.env.local)

```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
NEXT_PUBLIC_REDI_URL=http://localhost:3000
NEXT_PUBLIC_TWITCH_CLIENT_ID=SEU-TWITCH-CLIENT-ID
NEXT_PUBLIC_DISCORD_CLIENT_ID=SEU-DISCORD-CLIENT-ID
NEXT_PUBLIC_INSTAGRAM_CLIENT_ID=SEU-INSTAGRAM-CLIENT-ID
```

### 🔹 API (.env)

```env
PORT=3001
GEMINI_API_KEY=SUA-GEMINI-API-KEY
DATABASE_URL="mysql://furia:furia123@localhost:3306/furia_fan"
DISCORD_CLIENT_ID=SEU-DISCORD-CLIENT-ID
DISCORD_CLIENT_SECRET=SEU-DISCORD-SECRET
DISCORD_REDIRECT_URI=http://localhost:3000/discord/callback
```

---

## 📝 License

Licensed under the MIT License.
---
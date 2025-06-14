# Nomad-s-Notebook
A comprehensive travel information system providing detailed insights about Indian cities and international destinations including attractions, cuisine, culture, and practical travel planning tips.
Nomad-s-Notebook is a modern, responsive web application designed to provide users with comprehensive information about travel destinations worldwide. Users can search for destinations and get details on attractions, local culture, budget estimates, and travel tips. The application is built as a single-page application (SPA) with a focus on a clean user interface and a smooth user experience.

## Features

*   **Destination Search:** Search for destinations worldwide with an autocomplete suggestion feature.
*   **Detailed Destination Information:** View information for selected destinations, including:
    *   Population and general facts (currently mocked, planned via API)
    *   Key tourist attractions (currently mocked, planned via API)
    *   Local languages spoken (currently mocked, planned via API)
    *   Local currency (currently mocked, planned via API)
    *   Best time to visit (based on mocked data, planned via weather API)
    *   Famous local eateries (currently mocked, planned via API)
    *   Helpful local phrases (mocked)
*   **Budget Calculator:** Estimate trip costs based on the number of days, people, and travel style (budget/luxury).
*   **Travel Tips:** General travel advice (currently static).
*   **Responsive Design:** Adapts to various screen sizes (desktop, tablet, mobile).
*   **Theme Toggle:** Switch between light and dark mode for user preference.

## Technologies Used

### Frontend

*   **React.js (v18.3.1):** Core JavaScript library for building the UI with a component-based architecture.
*   **TypeScript:** Superset of JavaScript for static typing, enhancing code quality and maintainability.
*   **Vite:** Fast frontend build tool and development server.
*   **Tailwind CSS:** Utility-first CSS framework for rapid UI development and styling.
*   **shadcn/ui:** Collection of accessible and customizable UI components.
*   **Lucide React:** Library for SVG icons.
*   **React Router DOM (v6.26.2):** For client-side routing (primarily single-page experience currently).

### Data Handling & State Management

*   **React State & Props:** For managing component-level state and data flow.
*   **Mock Data:** Currently uses hardcoded mock data for destination details and suggestions.
*   **@tanstack/react-query (v5.56.2):** Installed and available for future integration with real APIs for robust data fetching, caching, and server state management.
*   **Planned API Integrations:**
    *   GeoDB Cities API / Wikipedia API (Population, general info)
    *   Google Places API / Triposo API (Attractions, Eateries)
    *   REST Countries API (Languages)
    *   ExchangeRate-API / CurrencyFreaks (Currency conversion)
    *   OpenWeatherMap API (Weather data)

### Backend & Database (Potential Future)

*   **Current:** Frontend-only application.
*   **Planned:** Integration with **Supabase** for:
    *   PostgreSQL Database (persistent data storage)
    *   Authentication (user accounts)
    *   Storage (file uploads)
    *   Edge Functions (serverless backend logic)

## Getting Started

This project was bootstrapped with Lovable.

To run the project locally:

1.  **Clone the repository:**
    ```sh
    git clone <YOUR_GIT_URL>
    cd <YOUR_PROJECT_NAME>
    ```
2.  **Install dependencies:**
    ```sh
    npm install
    # or
    # yarn install
    # or
    # pnpm install
    # or
    # bun install
    ```
3.  **Start the development server:**
    ```sh
    npm run dev
    # or
    # yarn dev
    # or
    # pnpm dev
    # or
    # bun run dev
    ```
    This will start the Vite development server, typically on `http://localhost:8080`.

## Project Structure (Illustrative)

```
/
├── public/                   # Static assets
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── ui/               # shadcn/ui components
│   │   ├── BudgetCalculator.tsx
│   │   ├── DestinationInfo.tsx
│   │   ├── Footer.tsx
│   │   ├── SearchSection.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── TravelTips.tsx
│   ├── pages/                # Page-level components (e.g., Index.tsx)
│   ├── lib/                  # Utility functions (e.g., utils.ts)
│   ├── hooks/                # Custom React hooks
│   ├── App.tsx               # Main application component, routing setup
│   ├── main.tsx              # Entry point of the application
│   └── index.css             # Global styles and Tailwind CSS setup
├── .gitignore
├── README.md
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

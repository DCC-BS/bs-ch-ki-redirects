# BS-CH-KI Redirects

A smart redirect application for Basel-Stadt AI applications that provides intelligent routing with health checks and user-friendly error handling. Built with Vue.js and TypeScript, it ensures seamless access to various AI services while handling unavailable services gracefully.

![GitHub License](https://img.shields.io/github/license/DCC-BS/bs-ch-ki-redirects) [![Checked with Biome](https://img.shields.io/badge/Checked_with-Biome-60a5fa?style=flat&logo=biome)](https://biomejs.dev)

## Features

- **Smart Redirects**: Automatically routes users to appropriate AI applications based on URL paths
- **Health Checks**: Verifies service availability before redirecting users
- **Error Handling**: Provides user-friendly pages for unavailable services and 404 errors
- **Configurable Routes**: Easy-to-maintain redirect configuration
- **Responsive Design**: Works seamlessly across all device types
- **TypeScript Support**: Full type safety and enhanced developer experience

## Supported Applications

Currently configured to redirect to the following AI applications:

- **TextMate**: Advanced text editing and correction tool
- **Transcribo**: Audio transcription service
- **BS-Übersetzer**: Translation service for Basel-Stadt

## Technology Stack

- **Frontend**: [Vue.js 3](https://vuejs.org/) with TypeScript and Composition API
- **Build Tool**: [Vite](https://vite.dev/)
- **Type Checking**: Vue TypeScript Compiler (vue-tsc)
- **Code Quality**: [Biome](https://biomejs.dev/) for linting and formatting
- **Package Manager**: npm

## Setup

### Install Dependencies

Make sure to install dependencies:

```bash
npm install
```

## Development

Start the development server on `http://localhost:5173`:

```bash
npm run dev
```

The application will automatically redirect to configured services or show appropriate error pages.

### Configuration

Edit `src/config.ts` to add or modify redirect configurations:

```typescript
export const config = {
  homepageUrl: "https://www.bs.ch/ki",
  redirects: [
    {
      relativePath: "/textmate",
      to: "https://textmate.uvk8sbswc19.cmp.bs.ch",
      checkUrl: "https://textmate.uvk8sbswc19.cmp.bs.ch/api/ping",
      appName: "TextMate",
    },
    // Add more redirects here
  ],
};
```

### Configuration on the redireceted applications
In nuxt applications add the following to `nuxt.config.ts` to ensure there is no CORS issues:

```typescript
export default defineNuxtConfig({
    ...,
    routeRules: {
        "/api/ping": {
            cors: true,
            headers: {
                "Cache-Control": "no-store",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET",
                "Access-Control-Allow-Headers":
                    "Origin, Content-Type, Accept, Authorization, X-Requested-With",
                "Access-Control-Allow-Credentials": "true",
            },
        },
    },
});
```

An create an api route `/api/ping` that returns a simple response:

```typescript
export default defineEventHandler(() => {
    return "pong";
});
```

## Testing & Linting

Format and check code with Biome:

```bash
npm run check
```

Type check the application:

```bash
npm run type-check
```

## Production

Build the application for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

The production build includes:
- Optimized Vue.js bundle
- TypeScript compilation
- Automatic `.htaccess` file copying for proper routing

## Project Architecture

- `src/`: Source code directory
  - `App.vue`: Main application component with redirect logic
  - `config.ts`: Redirect configuration and types
  - `main.ts`: Application entry point
  - `components/`: Vue components
    - `Redirect.vue`: Loading page shown during redirect
    - `NoAccess.vue`: Error page for unavailable services
    - `PageNotFound.vue`: 404 error page
  - `assets/`: Static assets and styles

## How It Works

1. **Path Detection**: Extracts the application path from the current URL
2. **Configuration Lookup**: Finds matching redirect configuration
3. **Health Check**: Pings the target service to verify availability
4. **Smart Routing**: 
   - If service is available: Redirects user to the target application
   - If service is unavailable: Shows "No Access" page
   - If path not found: Shows 404 page
   - If no path specified: Redirects to Basel-Stadt KI homepage

## License

[MIT](LICENSE) © Data Competence Center Basel-Stadt

<a href="https://www.bs.ch/schwerpunkte/daten/databs/schwerpunkte/datenwissenschaften-und-ki"><img src="https://github.com/DCC-BS/.github/blob/main/_imgs/databs_log.png?raw=true" alt="DCC Logo" width="200" /></a>

Datenwissenschaften und KI <br>
Developed with ❤️ by DCC - Data Competence Center

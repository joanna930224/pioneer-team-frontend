# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev      # Start development server with HMR
npm run build    # TypeScript compile + Vite production build
npm run lint     # Run ESLint
npm run preview  # Preview production build locally
```

## Architecture

This is a React 19 + TypeScript + Vite frontend application.

- **Entry point**: `src/main.tsx` renders the root React component
- **App component**: `src/App.tsx` is the main application component
- **Static assets**: `src/assets/` for app assets, `public/` for static files served at root

## TypeScript Configuration

Uses project references with two configs:
- `tsconfig.app.json` - Application code in `src/` (strict mode enabled)
- `tsconfig.node.json` - Node tooling configs

## Key Tech Stack

- React 19 with react-jsx transform
- Vite 7 for bundling and dev server
- TypeScript 5.9 with strict mode
- ESLint 9 with typescript-eslint

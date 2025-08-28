# Overview

This is a full-stack web application for "Carspain", an automotive parts and accessories e-commerce platform. The application features a sophisticated, Mazda-inspired landing website with premium dark automotive design targeting male customers. Built using React with Vite, styled with TailwindCSS and shadcn/ui components, featuring high-quality automotive photography and masculine design elements. The backend is an Express.js server with PostgreSQL database integration using Drizzle ORM.

# User Preferences

Preferred communication style: Simple, everyday language.
Design inspiration: Mazda websites (mazda.com/en and mazdausa.com) for sophisticated automotive branding.

# Recent Changes (August 28, 2025)

## Design Enhancement - Professional Automotive Landing Page
- **Enhanced Visual Identity**: Updated color scheme to use red (#dc2626) as primary color for masculine appeal
- **Typography System**: Implemented premium typography with Inter font, including `.premium-text` and `.bold-impact` classes
- **Professional Navigation**: Clean navigation design with increased height (h-20) and refined typography
- **Hero Section Transformation**: 
  - Updated to "PROFESSIONAL GRADE AUTOMOTIVE PARTS" with industry-focused messaging
  - Removed blur effects for clearer image visibility
  - Professional copy targeting commercial customers
  - Enhanced stats section with clear value propositions
- **Content Strategy**: Updated all sections with professional, corporate messaging
- **Visual Improvements**: Removed blur effects, enhanced image visibility, section dividers
- **Professional Tone**: All text rewritten for B2B professional audience
- **Typography Enhancement**: Added Inter and Roboto fonts, improved text contrast and readability
- **Color Refinement**: Enhanced metallic gradient with gold accents, improved text colors for better contrast
- **Image Clarity Enhancement**: Completely removed all blur effects and image overlays for crystal clear visuals

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript, bundled using Vite
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: TailwindCSS with dark theme design system and custom automotive-themed styles
- **Icons**: Font Awesome for consistent iconography

## Backend Architecture
- **Runtime**: Node.js with Express.js web framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API structure with `/api` prefix for all routes
- **Development**: TSX for running TypeScript in development, esbuild for production builds
- **Middleware**: Express JSON parsing, CORS handling, and request logging

## Data Storage Solutions
- **Database**: PostgreSQL with Neon Database serverless driver
- **ORM**: Drizzle ORM for type-safe database operations and migrations
- **Schema**: Shared schema definitions in TypeScript using Drizzle and Zod
- **Fallback Storage**: In-memory storage interface for development/testing

## Authentication and Authorization
- **Session Management**: PostgreSQL-backed sessions using connect-pg-simple
- **User Schema**: Basic user model with username/password authentication
- **Storage Interface**: Abstracted storage layer supporting both memory and database implementations

## Development and Build Tools
- **Package Manager**: npm with lockfile for dependency management
- **Build Pipeline**: Vite for frontend, esbuild for backend production builds
- **Type Checking**: TypeScript with strict configuration across the entire codebase
- **Path Aliases**: Configured for clean imports (@/, @shared/, @assets/)

# External Dependencies

## Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon Database
- **@tanstack/react-query**: Server state management and caching
- **drizzle-orm**: Type-safe ORM for PostgreSQL operations
- **drizzle-kit**: Database migration and schema management tools

## UI and Styling
- **@radix-ui/***: Comprehensive set of accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant API for component styling
- **clsx**: Utility for constructing className strings conditionally

## Development Tools
- **vite**: Fast build tool and development server
- **@vitejs/plugin-react**: React support for Vite
- **tsx**: TypeScript execution engine for development
- **esbuild**: Fast JavaScript bundler for production builds

## Routing and Navigation
- **wouter**: Minimalist routing library for React
- **react-hook-form**: Forms with built-in validation
- **@hookform/resolvers**: Validation resolvers for react-hook-form

## Database and Validation
- **zod**: TypeScript-first schema validation
- **drizzle-zod**: Integration between Drizzle ORM and Zod validation
- **connect-pg-simple**: PostgreSQL session store for Express

## Replit Integration
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Replit-specific development tools
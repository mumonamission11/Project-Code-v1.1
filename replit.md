# Overview

Little Checkout is a Progressive Web App (PWA) designed for kids to learn about shopping, math, and money management through role-play. The application allows children to create their own virtual shop by taking photos of items, adding names and prices, and then using a point-of-sale (POS) system to simulate transactions. Built as a mobile-first React application, it features camera integration, local storage persistence, and engaging animations to create an educational and fun experience.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The application uses a **React-based single-page application (SPA)** with the following architectural decisions:

- **Framework**: React with TypeScript for type safety and better development experience
- **Routing**: Wouter for lightweight client-side routing with pages for Home, Camera, POS, Celebration, and Info screens
- **State Management**: React hooks with custom hooks for camera functionality and local storage management
- **UI Components**: Radix UI primitives with shadcn/ui component system for consistent design
- **Styling**: Tailwind CSS with custom color palette and animations optimized for mobile interfaces
- **PWA Features**: Service worker implementation for offline functionality and app installation capabilities

## Backend Architecture
The application implements a **minimal Express.js server** primarily for development purposes:

- **Development Server**: Express.js with Vite integration for hot module replacement
- **Production Build**: Static file serving with minimal API surface
- **Data Persistence**: Client-side only using browser localStorage (no server-side database for user data)
- **Database Schema**: Prepared for future expansion with Drizzle ORM and PostgreSQL schema definitions

## Data Storage Solutions
The application uses a **client-first storage strategy**:

- **Primary Storage**: Browser localStorage for shop items persistence
- **Data Structure**: JSON serialization of shop items with image data as base64 strings
- **Future Database**: Drizzle ORM configured for PostgreSQL with user authentication schema prepared
- **Cache Strategy**: Service worker caching for offline functionality

## Authentication and Authorization
Currently implements a **development-ready authentication foundation**:

- **Current State**: No active authentication (kids' app with local-only data)
- **Prepared Infrastructure**: User schema with username/password fields ready for future implementation
- **Session Management**: Placeholder storage interface for user management
- **Security**: Minimal attack surface with client-side only data storage

## Design Patterns and Architecture Decisions

### Component Architecture
- **Compound Components**: UI components built with Radix primitives for accessibility
- **Custom Hooks**: Separated business logic (useCamera, useLocalStorage) from presentation
- **Page-based Routing**: Clear separation between different app screens

### Mobile-First Design
- **Responsive Layout**: Tailwind breakpoints with mobile optimization
- **Touch Interactions**: Large touch targets and gesture-friendly interfaces  
- **Performance**: Optimized image handling and lazy loading strategies

### PWA Implementation
- **Installability**: Web app manifest with proper icons and metadata
- **Offline Support**: Service worker with caching strategy for core app functionality
- **Mobile Integration**: Apple touch icons and mobile web app capabilities

# External Dependencies

## Core Technologies
- **React 18**: Frontend framework with concurrent features
- **TypeScript**: Type safety and enhanced developer experience
- **Vite**: Build tool and development server with fast HMR
- **Express.js**: Minimal backend server for development and static serving

## UI and Styling
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Radix UI**: Headless UI primitives for accessibility and behavior
- **shadcn/ui**: Pre-built component system built on Radix primitives
- **Lucide Icons**: Icon system with Font Awesome fallbacks

## Data Management
- **TanStack Query**: Server state management and caching (prepared for future API integration)
- **Drizzle ORM**: Database toolkit with PostgreSQL dialect
- **Neon Database**: Serverless PostgreSQL provider (@neondatabase/serverless)

## Camera and Media
- **Browser APIs**: Native MediaDevices API for camera access
- **Canvas API**: Image capture and processing for item photos

## Development and Build Tools
- **ESBuild**: Fast JavaScript bundling for production builds
- **PostCSS**: CSS processing with Tailwind integration
- **Wouter**: Lightweight routing library for SPA navigation

## PWA and Mobile Features
- **Service Workers**: Native browser API for offline functionality and caching
- **Web App Manifest**: PWA specification for app installation and mobile integration
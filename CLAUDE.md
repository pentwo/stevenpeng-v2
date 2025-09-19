# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

Personal portfolio website for Steven Peng built with Gatsby 5 and TypeScript. The site showcases projects, professional experience, and technical skills with a modern, responsive design.

## Tech Stack

- **Framework**: Gatsby 5.7.0 (React static site generator)
- **Language**: TypeScript 4.9.5 with strict mode
- **UI Library**: Mantine v6 components
- **Styling**: Emotion CSS-in-JS with Mantine theming
- **Build**: Gatsby's webpack configuration

## Development Commands

```bash
# Development
npm run develop     # Start dev server on localhost:8000
npm run clean       # Clear Gatsby cache (run when dependencies change)

# Build & Production
npm run build       # Create production build
npm run serve       # Serve production build locally

# Code Quality
npm run typecheck   # Run TypeScript type checking
```

## Architecture Overview

### Component Structure
```
src/components/
├── Layout/          # App shell (Header, Footer, Layout wrapper)
├── general/         # Page sections (Hero, Projects, Experience, etc.)
├── element/         # Reusable UI elements (Cards, modals)
└── styles/          # Theme configuration and global styles
```

### Data Architecture
- **Static Data**: TypeScript files in `/src/data/` define all content
- **Type Definitions**: Strong interfaces in each data file (IProject, ITechStack, etc.)
- **Image Assets**: `/src/images/projects/` contains project screenshots in WebP format
- **No CMS**: All content is code-based, requiring rebuilds for updates

### Key Architectural Patterns

1. **Layout System**: Uses Mantine's AppShell with responsive Grid (4:8 desktop split)
2. **Component Pattern**: Functional components with hooks, no class components
3. **Data Flow**: Static imports from data files, passed as props
4. **Responsive Design**: Mobile-first with `useMediaQuery` for desktop enhancements
5. **Theme System**: Centralized in `siteTheme.ts` with consistent teal/orange palette

## Content Management

### Adding/Modifying Projects
Edit `/src/data/projectsData.tsx`:
- Main projects in `projectsMainData` array
- Side projects in `projectsSideData` array
- Each project requires: title, description, tech stack, GitHub URL, optional live URL
- Add screenshots to `/src/images/projects/[project-name]/`

### Updating Experience
Edit `/src/data/experienceData.tsx`:
- Follow the existing interface structure
- Include company, position, dates, description, and bullet points

### Managing Tech Stack
Edit `/src/data/techStackData.tsx`:
- Reusable technology definitions with icons
- Referenced by projects and skills sections

## Mantine Component Usage

### Standard Patterns
```tsx
// Use Mantine components consistently
import { Stack, Grid, Card, Title, Text } from '@mantine/core';

// Responsive breakpoints
const matches = useMediaQuery('(min-width: 48em)', true);

// Theme-based spacing
<Stack spacing={0}>  // Use 0 for no spacing between sections
<Grid gutter="xl">   // Use xl for standard grid gaps
```

### Color Scheme
- Primary: Teal (`theme.colors.teal`)
- Accent: Orange for highlights
- Background: Light gray (`#F6FBFE`)
- Text: Dark gray/black defaults

## Image Handling

### Adding Project Screenshots
1. Export images as WebP format for performance
2. Place in `/src/images/projects/[project-name]/`
3. Import in project data file
4. Use Gatsby Image components for optimization

### Gallery Pattern
Screenshots use modal galleries on click - implemented via Mantine modals in ProjectCard component.

## Deployment Considerations

### Build Process
- Static site generation at build time
- All data must be present during build
- Images are processed and optimized during build

### Performance
- Gatsby automatically code-splits and lazy loads
- Images use gatsby-plugin-image for optimization
- WebP format with fallbacks

### SEO & Meta
- Site metadata in `gatsby-config.ts`
- Helmet component for page-specific meta tags
- Automatic sitemap generation via gatsby-plugin-sitemap

## Common Modifications

### Update Portfolio Content
1. Modify relevant files in `/src/data/`
2. Add any new images to `/src/images/`
3. Run `npm run clean && npm run develop` to see changes
4. Build and deploy: `npm run build`

### Adjust Theme/Colors
Edit `/src/components/styles/siteTheme.ts` for global theme changes.

### Add New Section
1. Create component in `/src/components/general/`
2. Import and add to `/src/pages/index.tsx`
3. Follow existing section patterns for consistency
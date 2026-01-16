# Avanti AI - Dark Modern Design System

## Design Philosophy

### Color Palette
- **Primary Background**: Deep charcoal (#0A0A0B) - sophisticated black with subtle warmth
- **Secondary Background**: Dark graphite (#1A1A1D) - elevated surfaces, cards
- **Accent Primary**: Electric cyan (#00D4FF) - CTAs, highlights, active states
- **Accent Secondary**: Soft purple (#8B5CF6) - gradients, secondary elements
- **Text Primary**: Pure white (#FFFFFF) - main headings, high contrast
- **Text Secondary**: Light gray (#A1A1AA) - body text, descriptions
- **Text Muted**: Medium gray (#6B7280) - captions, metadata

### Typography
- **Display Font**: "Inter" - clean, modern sans-serif for headings
- **Body Font**: "Inter" - consistent typography system
- **Font Weights**: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- **Heading Hierarchy**: 
  - H1: 3.5rem (56px) - hero headlines
  - H2: 2.5rem (40px) - section headers
  - H3: 1.875rem (30px) - subsections
  - H4: 1.25rem (20px) - card titles

### Visual Language
- **Minimalist Sophistication**: Clean lines, generous whitespace, purposeful elements
- **High Contrast**: Sharp differentiation between text and backgrounds
- **Geometric Precision**: Sharp edges, perfect alignment, systematic spacing
- **Subtle Depth**: Minimal shadows, layered surfaces, dimensional hierarchy
- **Premium Materials**: Glass morphism effects, subtle gradients, metallic accents

## Visual Effects & Animation

### Core Libraries Used
1. **Anime.js** - smooth micro-interactions and element animations
2. **Shader-park** - background visual effects and ambient animations
3. **PIXI.js** - particle systems and visual FX
4. **ECharts.js** - data visualization with dark theme
5. **Splide.js** - carousel and slider components
6. **p5.js** - creative coding effects and generative backgrounds
7. **Matter.js** - physics-based interactions

### Background Effects
- **Volumetric Noise Fog**: Subtle animated fog using shader-park for ambient depth
- **Particle Field**: Floating geometric particles with physics-based movement
- **Aurora Gradient Flow**: Gentle color transitions across dark backgrounds
- **Grid Matrix**: Subtle geometric grid patterns with animated intersections

### Text Effects
- **Typewriter Animation**: Progressive text reveal for hero headlines
- **Color Cycling**: Subtle color shifts on key terms (cyan to purple)
- **Glitch Effect**: Brief digital distortion on hover for interactive elements
- **Neon Glow**: Soft luminescent outline on primary CTAs
- **Split-by-letter Stagger**: Individual letter animations for emphasis

### Interactive Elements
- **3D Tilt**: Subtle perspective shifts on cards and buttons
- **Depth Shadow**: Dynamic shadow expansion on hover
- **Glow Edges**: Animated border illumination on focus
- **Morphing Buttons**: Shape transitions and color morphing
- **Image Zoom**: Ken Burns effect on service imagery

### Scroll Motion
- **Reveal Animation**: Elements fade in with 20px upward motion
- **Parallax Layers**: Background elements move at 0.5x scroll speed
- **Stagger Delays**: Sequential reveals with 100ms intervals
- **Progress Indicators**: Animated scroll progress bars

## Layout & Structure

### Grid System
- **Container Max Width**: 1400px for high-resolution displays
- **Column Grid**: 12-column flexible grid with 24px gutters
- **Breakpoints**: Mobile (320px), Tablet (768px), Desktop (1024px), Large (1400px)
- **Vertical Rhythm**: 24px baseline grid for consistent spacing

### Navigation
- **Fixed Header**: Translucent dark background with backdrop blur
- **Minimal Design**: Logo, 4 main tabs, CTA button
- **Hover States**: Subtle underline animations with cyan accent
- **Mobile**: Hamburger menu with slide-out panel

### Content Sections
- **Hero Area**: Compact height (40vh) with direct value proposition
- **Service Cards**: 3-column grid with hover lift effects
- **Pricing Tables**: Comparison layout with feature highlights
- **Contact Forms**: Dark theme with cyan focus states

### Visual Hierarchy
- **Z-index Layers**: Navigation (100), Modals (200), Tooltips (300)
- **Elevation Levels**: Cards (4px), Modals (16px), Dropdowns (8px)
- **Focus Management**: Clear keyboard navigation indicators
- **Loading States**: Skeleton screens with shimmer effects

## Component Styling

### Buttons
- **Primary**: Cyan background, white text, subtle glow
- **Secondary**: Transparent with cyan border, cyan text
- **Ghost**: No background, cyan text, underline on hover
- **Sizes**: Small (32px), Medium (44px), Large (56px)

### Cards
- **Background**: Dark graphite with subtle border
- **Hover State**: Lift 8px, expanded shadow, cyan border glow
- **Content Padding**: 32px internal spacing
- **Border Radius**: 12px for modern feel

### Forms
- **Input Fields**: Dark background, cyan focus border, white text
- **Labels**: Light gray, positioned above fields
- **Validation**: Green success, red error states
- **Buttons**: Primary style with loading states

This design system creates a cohesive, premium experience that positions Avanti AI as a sophisticated technology partner while maintaining excellent usability and accessibility standards.
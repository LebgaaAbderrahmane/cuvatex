Design PRD: Cuvatex Website Design System
1. Project Overview

Product: Cuvatex - Software Development Agency Website
Positioning: "Cuvatex builds scalable, high-quality digital products for startups and businesses — from idea to production."
Primary Goal: Lead generation with premium, professional presentation
Primary Color: #09524C (Forest Teal)
Typography: Poppins (Clean, modern, professional)
Animation Philosophy: Minimal, purposeful, restrained - only subtle transitions
2. Design System Specifications
2.1 Color Palette

    Primary: #09524C (Forest Teal) - Main brand color

    Primary Light: #0A6B62 (Hover states, secondary elements)

    Primary Dark: #063933 (Active states, borders)

    Accent 1: #1E293B (Dark slate - Headers, important text)

    Accent 2: #64748B (Slate gray - Body text, secondary information)

    Background: #FFFFFF (Pure white)

    Surface: #F8FAFC (Very light slate - Cards, sections)

    Success: #10B981 (Emerald green - Positive indicators)

    Warning: #F59E0B (Amber - Cautions, highlights)

    Error: #EF4444 (Red - Errors, important alerts)

2.2 Typography System

Primary Font: Poppins (Google Fonts)

    Weights:

        Light (300): Secondary text

        Regular (400): Body text

        Medium (500): Sub-headers

        Semibold (600): Headers

        Bold (700): Hero text, important CTAs

Scale (Desktop):

    H1: 48px (Hero headers)

    H2: 36px (Page headers)

    H3: 28px (Section headers)

    H4: 22px (Card headers)

    Body Large: 18px (Lead paragraphs)

    Body: 16px (Primary content)

    Body Small: 14px (Captions, meta)

    Micro: 12px (Labels, small text)

Scale (Mobile):

    H1: 36px

    H2: 28px

    H3: 22px

    H4: 18px

    Body: 16px

2.3 Layout & Spacing

Grid System: 12-column grid with consistent gutters

    Gutter: 24px (desktop), 16px (tablet), 12px (mobile)

    Max Width: 1280px for content, 1440px for full-width sections

    Container Padding: 80px (desktop), 40px (tablet), 24px (mobile)

Spacing Scale (Based on 8px unit):

    4px: Micro spacing (icon to text)

    8px: Small spacing

    16px: Base spacing

    24px: Medium spacing

    32px: Large spacing

    48px: XL spacing

    64px: XXL spacing

    80px: Section spacing

    96px: Hero spacing

2.4 Animation System (Restrained & Minimal)

General Rule: No animation for animation's sake. Only functional transitions that enhance UX.

Transition Timing:

    Default: 0.2s ease-in-out (fast, natural)

    Slow: 0.3s ease-in-out (for larger movements)

    Very Slow: 0.4s ease-in-out (rarely used)

Allowed Animations:
2.4.1 Micro-interactions (Subtle)

    Button Hover: Background color transition only (#09524C → #0A6B62)

    Link Hover: Color transition with underline (width: 0 → 100%)

    Card Hover: Subtle shadow elevation (if absolutely necessary)

    Form Focus: Border color transition (gray → #09524C)

2.4.2 Page Transitions (Minimal)

    Fade In: opacity: 0 → 1 over 0.3s (for content load)

    Staggered Content: Sequential fade-in with 0.05s delay between items

2.4.3 Section Reveals (Optional)

    Scroll-triggered Fade: Only if it doesn't distract from content

    Threshold: 20% of element visible before animation starts

Prohibited:

    Parallax effects

    Bounce animations

    Complex SVG animations

    Auto-playing animations

    Any animation that could cause motion sickness

2.5 Component Design Specifications
2.5.1 Navigation

    Height: 72px (desktop), 64px (mobile)

    Background: White with subtle bottom border (#E2E8F0, 1px)

    Logo: Poppins Semibold, color #09524C, size 24px

    Menu Items: Poppins Medium, 16px, color #64748B

    Active State: Color #09524C, underline (2px solid)

    Hover: Color transitions to #09524C

    Mobile Menu: Slide-in from right, overlay background at 70% opacity

2.5.2 Buttons

Primary Button:

    Background: #09524C

    Text: White, Poppins Medium 16px

    Padding: 12px 32px

    Border radius: 6px

    Hover: Background #0A6B62

    Active: Background #063933

Secondary Button:

    Background: Transparent

    Border: 2px solid #09524C

    Text: #09524C, Poppins Medium 16px

    Hover: Background #F8FAFC

Text Button:

    Background: Transparent

    Text: #09524C, Poppins Medium 16px

    Hover: Text decoration underline

WhatsApp CTA:

    Background: #25D366 (WhatsApp green)

    Text: White

    Icon: White WhatsApp logo (from react-icons)

    Hover: Background #128C7E

2.5.3 Cards

Project Cards:

    Background: White

    Border: 1px solid #E2E8F0

    Border radius: 8px

    Shadow: Subtle (0 1px 3px rgba(0,0,0,0.1))

    Padding: 24px

    Hover: Shadow elevation (0 4px 12px rgba(0,0,0,0.08))

Service Cards:

    Background: #F8FAFC

    Border radius: 8px

    Padding: 32px

    Icon: #09524C, size 48px

    No hover effects (keeps it minimal)

2.5.4 Forms

    Input Height: 48px

    Input Border: 1px solid #CBD5E1

    Input Border Radius: 6px

    Focus Border: 2px solid #09524C

    Label: Poppins Medium, #1E293B, 14px

    Placeholder: #94A3B8, Poppins Regular

2.5.5 Typography Hierarchy
text

Hero Section:
  H1: 48px, Poppins Bold, #1E293B
  Subtitle: 20px, Poppins Light, #64748B, line-height 1.6
  
Page Header:
  H2: 36px, Poppins Semibold, #1E293B
  Introduction: 18px, Poppins Regular, #64748B
  
Content Sections:
  H3: 28px, Poppins Semibold, #1E293B
  Body: 16px, Poppins Regular, #64748B, line-height 1.7
  
Cards:
  H4: 22px, Poppins Semibold, #1E293B
  Body: 16px, Poppins Regular, #64748B

2.6 Section Design Specifications
2.6.1 Hero Section

    Background: White

    Height: 90vh minimum, 100vh maximum

    Content: Centered vertically and horizontally

    CTA Buttons: Primary + Secondary, spaced 16px apart

    Scroll Indicator: Simple animated arrow (subtle bounce)

2.6.2 Services Overview

    Layout: 3-column (desktop), 1-column (mobile)

    Spacing: 48px between items

    Icons: Lucide React icons, size 48px, color #09524C

2.6.3 Portfolio Section

    Grid: 2-column (desktop), 1-column (mobile)

    Filter: Simple tab-based, color #09524C for active

    Project Modal: Overlay with fade-in, close button top-right

2.6.4 Process Section

    Timeline: Vertical with connecting lines

    Steps: Numbered circles (1-5) with #09524C background

    Connecting Lines: Dashed, color #CBD5E1

2.6.5 Pricing Section

    Cards: 3-column (desktop), 1-column (mobile)

    Featured Card: Border 2px solid #09524C, subtle scale (1.02)

    Feature List: Checkmarks in #10B981

2.6.6 Testimonials

    Layout: 2-column grid with alternating quote styles

    Quote Marks: #F1F5F9, size 64px

    Author Photo: Circular, 64px diameter

2.6.7 Tech Stack

    Grid: Responsive grid of logos

    Logos: Grayscale by default, color on hover

    Categories: Clear separation between frontend/backend/mobile

2.6.8 FAQ

    Accordion: Simple expand/collapse with chevron rotation

    Border: 1px solid #E2E8F0 between items

    Animation: Smooth height transition (max-height method)

2.6.9 Contact Form

    Layout: 2-column (desktop), 1-column (mobile)

    Fields: Clean, ample spacing

    Submit Button: Full width, centered

2.7 Responsive Design
2.7.1 Breakpoints

    Mobile: 0-767px

    Tablet: 768-1023px

    Desktop: 1024px+

2.7.2 Mobile-First Adjustments

    Typography: Scale down by approximately 20%

    Spacing: Reduce by approximately 25%

    Grids: Stack columns vertically

    Navigation: Hamburger menu

    Touch Targets: Minimum 44px × 44px

2.8 Accessibility Requirements

    Color Contrast: Minimum 4.5:1 for normal text, 3:1 for large text

    Focus States: Clear visible focus rings (color: #09524C)

    Semantic HTML: Proper heading hierarchy, ARIA labels where needed

    Keyboard Navigation: Full site navigable via keyboard

    Screen Reader: All images have alt text, icons have aria labels

2.9 Performance Guidelines

    Image Optimization: WebP format, responsive sizes, lazy loading

    Font Loading: Preload critical fonts, use font-display: swap

    JavaScript: Code splitting, minimal bundle size

    CSS: Critical CSS inlined, rest loaded async

    Target Lighthouse Scores: 95+ Performance, 90+ Accessibility, 90+ SEO

2.10 Implementation Notes for Developers

    Framework: Next.js 14+ with App Router

    Styling: Tailwind CSS with custom configuration

    Icons: react-icons package (Lucide preferred)

    Internationalization: Next.js i18n with proper SEO handling

    Components: Reusable, typed with TypeScript

    State Management: React hooks only (no Redux needed)

    Forms: React Hook Form with validation

Design Philosophy Reminder:
Every design decision should reflect Cuvatex's core values - clarity over complexity, engineering excellence, partnership mindset, and product thinking. The website should feel like the digital products we build: clean, performant, and purposeful.
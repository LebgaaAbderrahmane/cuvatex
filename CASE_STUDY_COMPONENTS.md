# Case Study Components - Documentation

## Overview
The Surah case study page has been refactored into reusable, modular components following the same pattern as the home page. This improves maintainability, reusability, and code organization.

## Component Structure

### 1. **CaseStudyHero** (`/components/case-study/CaseStudyHero.tsx`)
Hero section with breadcrumbs, project metadata, title, description, stats, and mockup image.

**Props:**
- `title`: Project title
- `description`: Project description
- `category`: Project category (default: "Mobile Development")
- `date`: Project date (default: "2024")
- `mockupImage`: Path to mockup image
- `stats`: Object with platform, stack, and role

**Features:**
- Animated entrance with Framer Motion
- Responsive grid layout
- Stat cards with hover effects
- Hero mockup with glow effect

---

### 2. **ChallengeSolution** (`/components/case-study/ChallengeSolution.tsx`)
Displays problem and solution cards side by side.

**Props:**
- `subtitle`: Section subtitle
- `title`: Section title
- `problem`: Object with icon, title, description, and points array
- `solution`: Object with icon, title, description, and points array

**Features:**
- Two-column grid layout
- Icon-based headers
- Bullet points with custom markers (✕ for problems, ✓ for solutions)
- Hover effects

---

### 3. **TechStackSection** (`/components/case-study/TechStackSection.tsx`)
Displays technology stack organized by categories.

**Props:**
- `subtitle`: Section subtitle
- `title`: Section title
- `categories`: Array of objects with title and technologies array

**Features:**
- Responsive grid layout
- Tag-based technology display
- Hover animations on cards and tags

---

### 4. **KeyFeatures** (`/components/case-study/KeyFeatures.tsx`)
Showcases key features with icons.

**Props:**
- `subtitle`: Section subtitle
- `title`: Section title
- `features`: Array of objects with icon, title, and description

**Features:**
- Auto-fit grid layout
- Hover animations (translateY)
- Icon containers with branded colors

---

### 5. **ProcessFlow** (`/components/case-study/ProcessFlow.tsx`)
Timeline visualization of the development process.

**Props:**
- `subtitle`: Section subtitle
- `title`: Section title
- `steps`: Array of objects with number, title, and description

**Features:**
- Vertical timeline with connecting line
- Numbered markers
- Slide-in hover effect
- Gradient timeline connector

---

### 6. **ResultsImpact** (`/components/case-study/ResultsImpact.tsx`)
Shows project metrics, outcomes, and showcase images.

**Props:**
- `subtitle`: Section subtitle
- `title`: Section title
- `metrics`: Array of objects with value and label
- `outcomes`: Array of outcome strings
- `showcaseImage`: Path to showcase image
- `showcaseAlt`: Alt text for image

**Features:**
- Two-column layout (metrics/outcomes + image)
- Metric cards with hover effects
- Outcome list with checkmarks
- Image showcase with frame overlay

---

### 7. **CaseStudyCTA** (`/components/case-study/CaseStudyCTA.tsx`)
Call-to-action section with gradient background.

**Props:**
- `title`: CTA title
- `description`: CTA description
- `primaryButtonText`: Primary button text
- `primaryButtonHref`: Primary button link
- `secondaryButtonText`: Secondary button text
- `secondaryButtonHref`: Secondary button link

**Features:**
- Gradient background with overlay
- Floating decoration
- Two action buttons
- Fully responsive

---

## Usage Example

```tsx
import CaseStudyHero from '@/components/case-study/CaseStudyHero';
import ChallengeSolution from '@/components/case-study/ChallengeSolution';
// ... other imports

export default function MyProjectPage() {
  return (
    <main>
      <CaseStudyHero
        title="My Amazing Project"
        description="A revolutionary app that..."
        mockupImage="/images/my-project.png"
      />

      <ScrollReveal>
        <ChallengeSolution
          problem={{
            icon: AlertTriangle,
            title: "The Challenge",
            description: "...",
            points: ["point 1", "point 2"]
          }}
          solution={{
            icon: CheckCircle,
            title: "Our Solution",
            description: "...",
            points: ["solution 1", "solution 2"]
          }}
        />
      </ScrollReveal>

      {/* Other sections... */}
    </main>
  );
}
```

## Benefits

1. **Reusability**: All components can be used across different case study pages
2. **Maintainability**: Each component is self-contained with its own styles
3. **Consistency**: Ensures consistent design across all case studies
4. **Performance**: Components are optimized with proper animations
5. **Flexibility**: Props allow customization for different projects

## File Structure

```
src/
├── components/
│   └── case-study/
│       ├── CaseStudyHero.tsx
│       ├── ChallengeSolution.tsx
│       ├── TechStackSection.tsx
│       ├── KeyFeatures.tsx
│       ├── ProcessFlow.tsx
│       ├── ResultsImpact.tsx
│       └── CaseStudyCTA.tsx
└── app/
    └── [locale]/
        └── portfolio/
            └── surah/
                └── page.tsx (refactored)
```

## Next Steps

To create a new case study page:
1. Copy the Surah page structure
2. Update the data objects with your project information
3. Adjust component props as needed
4. Wrap sections with `ScrollReveal` for animations

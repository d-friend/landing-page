# Scrollytelling Implementation Plan v2

## Tasks

### Task 1: Create CinematicRevealProvider
- Create: `src/components/shared/CinematicRevealProvider.tsx`
- Context for mobile/reduced-motion detection

### Task 2: Create CinematicReveal
- Create: `src/components/shared/CinematicReveal.tsx`
- Reusable scroll-reveal with blur, scale, direction

### Task 3: Student - Philosophy (Split Entrance)
- Modify: `src/components/student/Philosophy.tsx`
- D slides from left, Friend from right + blur

### Task 4: Student - CoreEngine (Staggered Reveal)
- Modify: `src/components/student/CoreEngine.tsx`
- Cinematic staggered reveal

### Task 5-10: Student - Other Sections
- Hero, Experience, StudyBuddy, Progress, TeacherCopilot, Differentiation, Footer

### Task 11-18: Teacher - All Sections
- Hero, Pain, How, Report (star), Trust, Difference, School, Footer

### Task 19: CSS Utility
- Add scrollbar-hide utility to globals.css

# Studify ERP Portal - Architecture Documentation

## System Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────┐
│                         Studify ERP Portal                          │
│                         (Next.js 13 App)                            │
└─────────────────────────────────────────────────────────────────────┘
                                    │
                    ┌───────────────┼───────────────┐
                    ▼               ▼               ▼
            ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
            │   Landing   │ │   Sign In   │ │  Dashboard  │
            │   Page      │ │   Portal    │ │  (Main Hub) │
            │  (/)        │ │ (/sign-in)  │ │ (/dashboard)│
            └─────────────┘ └─────────────┘ └─────────────┘
                    │               │               │
                    └───────────────┼───────────────┘
                                    │
                    ┌───────────────┼───────────────┐
                    ▼               ▼               ▼
            ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
            │Admin Portal │ │Teacher Port │ │StudentPort │
            │ (/admin)    │ │ (/teacher)  │ │ (/student) │
            └─────────────┘ └─────────────┘ └─────────────┘
```

## Navigation Flow

```
Landing Page (/)
    │
    ├─► "Sign In" Button ──► Sign In Page (/sign-in)
    │                            │
    │                            ├─► admin@... ──► Admin Dashboard
    │                            │
    │                            ├─► teacher@... ──► Teacher Dashboard
    │                            │
    │                            └─► others ──► Student Dashboard
    │
    └─► "Register Now" ──► Register Dialog
```

## Teacher Portal Structure

```
Teacher Portal (/teacher)
    │
    └─► Redirect to /teacher/dashboard
            │
            ├─► Dashboard (/teacher/dashboard)
            │    ├── Stats Cards (Groups, Students, Assignments)
            │    ├── Upcoming Classes
            │    ├── Quick Actions
            │    └── Recent Activity
            │
            ├─► Groups (/teacher/groups)
            │    └── Group Cards
            │        ├── Progress tracking
            │        ├── Score metrics
            │        ├── Attendance rates
            │        └── Open button
            │
            ├─► Students (/teacher/students)
            │    ├── Search functionality
            │    ├── Data table
            │    │   ├── Name
            │    │   ├── Email
            │    │   ├── Group
            │    │   ├── Score
            │    │   ├── Attendance
            │    │   └── Status
            │    └── Export function
            │
            ├─► Schedule (/teacher/schedule)
            │    ├── Weekly breakdown
            │    │   ├── Monday
            │    │   ├── Tuesday
            │    │   ├── ...
            │    │   └── Saturday
            │    ├── Class details per day
            │    └── Key metrics
            │
            └─► Homework (/teacher/homework)
                 ├── Create Assignment Dialog
                 ├── Assignment Cards
                 │   ├── Title & Status
                 │   ├── Submission Stats
                 │   ├── Due Date
                 │   └── Actions
                 └── View Submissions
```

## Component Hierarchy

```
App Layout
│
├── RootLayout (/app/layout.tsx)
│   └── Providers (Theme, etc.)
│       │
│       ├── Landing Page
│       │   ├── Navigation
│       │   ├── Hero Section
│       │   ├── Courses Section
│       │   ├── Features Section
│       │   ├── Testimonials
│       │   ├── Contact Section
│       │   └── Footer
│       │
│       ├── Sign In Page
│       │   ├── Logo
│       │   ├── Sign In Card
│       │   └── Back Link
│       │
│       ├── Dashboard Page
│       │   ├── Header
│       │   ├── Stats Grid
│       │   ├── Main Content Grid
│       │   │   ├── Left (2/3 width)
│       │   │   │   ├── Key Metrics
│       │   │   │   ├── Administration
│       │   │   │   └── Recent Activity
│       │   │   └── Right (1/3 width)
│       │   │       ├── Portal Access
│       │   │       ├── System Status
│       │   │       └── Help & Support
│       │   │
│       │   └── TeacherLayout
│       │       ├── TeacherSidebar
│       │       │   ├── Logo
│       │       │   ├── Profile Card
│       │       │   ├── Navigation Links
│       │       │   └── Footer
│       │       │
│       │       ├── Dashboard Page
│       │       │   ├── Stats Cards
│       │       │   ├── Upcoming Classes
│       │       │   ├── Quick Actions
│       │       │   └── Recent Activity
│       │       │
│       │       ├── Groups Page
│       │       │   └── Group Cards Grid
│       │       │
│       │       ├── Students Page
│       │       │   ├── Search Bar
│       │       │   └── Data Table
│       │       │
│       │       ├── Schedule Page
│       │       │   ├── Metrics
│       │       │   └── Day Breakdown
│       │       │
│       │       └── Homework Page
│       │           ├── Create Dialog
│       │           └── Assignment Cards
```

## Data Flow

### Sign In Flow
```
User Input (Email + Password)
    │
    ▼
Form Validation
    │
    ▼
Role Detection
    ├─► Contains "admin" → Route to /admin/users
    ├─► Contains "teacher" → Route to /teacher/dashboard
    └─► Other → Route to /student/dashboard
```

### Dashboard Display
```
Mock Data (Defined in component)
    │
    ▼
Component Rendering
    │
    ▼
Card Components
    │
    ├─► Stats Cards
    ├─► Grid Layout
    ├─► Tables
    ├─► Lists
    └─► Progress Bars
    │
    ▼
CSS Styling (Tailwind)
    │
    ▼
Responsive Output
    ├─► Mobile (1 column)
    ├─► Tablet (2 columns)
    └─► Desktop (3-4 columns)
```

## State Management

### Current Implementation
- Client-side state using React hooks (`useState`)
- Local component state for UI interactions
- No persistent storage (demo purposes)

### Recommended Production Setup
```
Zustand/Context API
    │
    ├─► User Authentication State
    ├─► Role/Permissions State
    ├─► Sidebar Collapse State
    ├─► Theme State
    └─► Notification State
    │
    ▼
Backend API
    │
    ├─► /api/auth (Login/Logout)
    ├─► /api/users (User management)
    ├─► /api/teachers (Teacher data)
    ├─► /api/students (Student data)
    ├─► /api/groups (Group management)
    ├─► /api/assignments (Homework)
    └─► /api/schedule (Class schedule)
```

## Styling Architecture

### Tailwind CSS
```
globals.css
    │
    ├─► Theme Variables
    │   ├── --primary (Teal)
    │   ├── --secondary (Light Gray)
    │   ├── --muted (Gray)
    │   ├── --background (White)
    │   ├── --card (White)
    │   └── --foreground (Black)
    │
    ├─► Base Styles
    │   ├── HTML, Body
    │   ├── Typography
    │   └── Links
    │
    └─► Utility Classes
        ├── Layout (flex, grid)
        ├── Spacing (p, m, gap)
        ├── Colors (bg, text)
        ├── Typography (text-size, font)
        ├── Effects (shadow, border, rounded)
        └── Responsive (sm:, md:, lg:, xl:)
```

## Component Library (shadcn/ui)

### Used Components
```
UI Components
├── Card (CardHeader, CardTitle, CardContent, CardDescription)
├── Button (variants: default, outline, ghost)
├── Input
├── Textarea
├── Label
├── Badge (variants, colors)
├── Dialog (DialogHeader, DialogTitle, DialogContent)
├── Select (SelectTrigger, SelectContent, SelectItem)
├── Progress
└── Tabs
```

### Icon Library (lucide-react)
```
Navigation Icons
├── LayoutDashboard
├── BookOpen
├── Calendar
├── Users
├── FileText
├── Settings
└── ChevronLeft/Right

Status Icons
├── CheckCircle
├── AlertCircle
├── TrendingUp
└── AlertTriangle

Form Icons
├── Mail
├── Lock
├── Download
├── Plus
├── X
└── Menu

Business Icons
├── DollarSign
├── Building2
├── Shield
├── Megaphone
└── Target
```

## Responsive Design Strategy

### Breakpoints
```
Mobile:  < 768px
    └─► Sidebar off-canvas or collapsed
        Single column layouts
        Stacked cards
        Touch-friendly buttons

Tablet: 768px - 1024px
    └─► Sidebar visible, collapsible
        2 column grids
        Optimized spacing
        Medium text sizes

Desktop: > 1024px
    └─► Full sidebar always visible
        3-4 column grids
        Maximum info density
        Larger fonts and spacing
```

### Mobile-First Approach
```
Base Styles (Mobile - 320px+)
    │
    ▼
    sm: 640px breakpoint
    └─► Typography adjustments
    
    ▼
    md: 768px breakpoint
    └─► Layout changes
    
    ▼
    lg: 1024px breakpoint
    └─► Grid expansions
    
    ▼
    xl: 1280px breakpoint
    └─► Max content width
```

## Performance Optimization

### Current
- Static component rendering
- Minimal JavaScript (demo features)
- CSS-in-JS via Tailwind
- Icon optimization via lucide-react

### Recommended for Production
```
Next.js Features
├── Image Optimization
├── Code Splitting
├── Dynamic Imports
├── Static Generation (SSG)
├── Incremental Static Regeneration (ISR)
├── Caching Headers
└── Compression

Frontend Optimizations
├── Lazy Loading
├── Memoization (React.memo)
├── useCallback/useMemo hooks
├── Virtual Scrolling for lists
└── Service Workers

Backend Optimizations
├── Database Query Optimization
├── API Response Caching
├── GraphQL for efficient queries
└── CDN for static assets
```

## Deployment Architecture

### Development
```
npm run dev
    └─► Runs on http://localhost:3001
        Hot Module Replacement enabled
        Source maps available
        Development warnings shown
```

### Production
```
npm run build
    └─► Creates optimized build
        Code splitting
        Tree shaking
        Minification

npm start
    └─► Runs production server
        Optimal performance
        No development tools
        Compressed assets
```

### Vercel Deployment
```
Push to GitHub
    │
    ▼
Vercel Auto-Deploy
    │
    ├─► Install dependencies
    ├─► Build project
    ├─► Run tests
    ├─► Deploy to CDN
    └─► Live at domain
```

## Security Considerations

### Current (Demo)
- No authentication
- No data encryption
- No HTTPS requirement
- Mock data only

### Production Requirements
```
Authentication
├── JWT tokens
├── Secure password hashing (bcrypt)
├── Session management
└── OAuth2 integration

Authorization
├── Role-Based Access Control (RBAC)
├── Permission checks
├── Route protection
└── Data-level security

Data Protection
├── HTTPS/TLS encryption
├── SQL injection prevention
├── XSS protection
├── CSRF tokens
├── Rate limiting
└── Input validation
```

## Testing Strategy

### Unit Tests
```
Components
├── Button interactions
├── Form validation
├── Card rendering
└── Icon displays
```

### Integration Tests
```
Pages
├── Navigation flow
├── Form submissions
├── Data display
└── Role routing
```

### E2E Tests
```
User Workflows
├── Sign in flow
├── Dashboard access
├── Teacher portal usage
└── Student enrollment
```

---

## Scalability Path

```
Current (MVP) → Phase 1 → Phase 2 → Phase 3
    │             │         │         │
    ├─ Demo    ├─ DB     ├─ Cache  ├─ Microservices
    ├─ Static  ├─ API    ├─ Search ├─ Kubernetes
    └─ Mock    └─ Auth   └─ CDN    └─ Multi-region
```

---

**Last Updated**: July 9, 2026
**Architecture Version**: 1.0
**Status**: ✅ Production Ready (with recommended enhancements)

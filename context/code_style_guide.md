# Mentis AI — Code Style Guide

## 1. Purpose

This document defines the coding standards, architectural conventions, and development practices for the Mentis AI website and its supporting software.

Its purpose is to ensure that the codebase remains readable, maintainable, consistent, accessible, performant, and easy for both human developers and AI coding agents to understand.

All new code and modifications must follow this guide unless an established project convention or an explicitly approved architectural decision requires otherwise.

## 2. General Principles

### 2.1 Clarity Over Cleverness
Write straightforward code that communicates its intent. Avoid unnecessary abstractions, clever one-liners, and complicated patterns when a simpler implementation is sufficient.

### 2.2 Consistency
Follow existing conventions before introducing new ones. Similar features should be implemented using similar structures and patterns.

### 2.3 Maintainability
Organize code around clear responsibilities. Keep components, functions, and modules focused on one primary purpose.

### 2.4 Minimal Changes
Make the smallest coherent change that fully solves the problem. Do not rewrite unrelated functionality, reorganize entire directories, or introduce new libraries without a clear reason.

### 2.5 Reuse Without Overengineering
Reuse shared components and utilities when doing so improves consistency. Avoid building generic frameworks or abstractions for hypothetical future requirements.

### 2.6 Accessibility and Responsiveness
All user-facing interfaces must be accessible, keyboard-friendly, and responsive across mobile, tablet, and desktop screen sizes.

### 2.7 Performance
Prefer efficient rendering, optimized assets, minimal unnecessary dependencies, and appropriate loading strategies. Avoid premature optimization that makes the code harder to maintain.

### 2.8 Production Readiness
Code must not be considered complete simply because it looks correct in a screenshot. Verify behavior, responsiveness, accessibility, build output, and relevant edge cases.

### 2.9 AI Coding Agent Discipline
AI coding agents must inspect the existing repository before making changes, preserve working functionality, and report what they actually verified. They must not invent files, APIs, dependencies, or test results.

## 3. Technology and Stack

### 3.1 Default Technology Choices
Unless the existing repository or project requirements justify a different choice, use the following defaults:

- **Framework:** Next.js with React.
- **Language:** TypeScript with strict type checking enabled.
- **Styling:** Tailwind CSS.
- **UI components:** Small, reusable, accessible components built with established patterns.
- **Icons:** A consistent icon library, such as Lucide, rather than a mixture of unrelated icon sets.
- **Package manager:** Follow the repository's existing package manager and lockfile.
- **Version control:** Git and GitHub.
- **Deployment:** Vercel.
- **Testing:** Appropriate unit, integration, and browser-based tests for the project's complexity.

These are defaults, not permission to replace the existing stack automatically. Inspect the repository first and discuss major migrations before performing them.

### 3.2 TypeScript
- Prefer explicit, meaningful types for component props, function arguments, and external data.
- Avoid `any`. Use `unknown` when a value's type is not yet established, then validate or narrow it.
- Use discriminated unions and reusable types when they improve correctness.
- Do not suppress type errors merely to make the build pass.
- Validate external data at runtime when TypeScript types alone cannot guarantee its shape.

### 3.3 Framework Conventions
- Follow the conventions of the installed framework version.
- Use server-rendered components and static rendering where appropriate.
- Introduce client-side interactivity only where necessary.
- Keep server-only logic, credentials, and privileged operations out of browser bundles.
- Use framework-native routing, image optimization, metadata, and error handling where appropriate.

### 3.4 Dependency Policy
Before adding a dependency:
1. Confirm the requirement cannot be met cleanly with existing tools.
2. Check that the package is maintained and appropriate.
3. Consider bundle size, security, compatibility, and licensing.
4. Avoid adding multiple packages that solve the same problem.

## 4. File, Folder, and Project Structure

### 4.1 General Rules
- Group files by responsibility and feature rather than placing everything in one directory.
- Keep related components, types, utilities, and tests logically organized.
- Separate presentation from business logic where doing so improves clarity.
- Avoid deeply nested directories without a meaningful organizational need.
- Keep configuration files at the project root unless the framework requires otherwise.

### 4.2 Suggested Structure

The following structure is a starting point for a Next.js project, not a requirement to create every directory immediately.

    src/
      app/
        layout.tsx
        page.tsx
        globals.css
        about/
          page.tsx
        services/
          page.tsx
        contact/
          page.tsx
      components/
        layout/
        navigation/
        sections/
        ui/
      features/
      lib/
      hooks/
      types/
      styles/
    public/
      images/
      icons/
      fonts/
    tests/

Additional configuration and documentation files may include:

    package.json
    package-lock.json
    tsconfig.json
    next.config.ts
    .gitignore
    .env.example
    README.md
    SECURITY_GUIDE.md
    CODE_STYLE_GUIDE.md

Use only the files and directories that the actual project needs. Do not create empty placeholder modules simply to match this example.

### 4.3 Responsibilities
- `app/`: Routes, layouts, loading states, and framework-specific page composition.
- `components/`: Shared interface components organized by purpose.
- `features/`: Feature-specific logic and components when the project grows sufficiently to justify the separation.
- `lib/`: Shared utilities, integrations, and non-UI application logic.
- `hooks/`: Reusable React hooks.
- `types/`: Shared type definitions when they are genuinely used across multiple modules.
- `public/`: Public assets that do not require private access.
- `tests/`: Automated tests and supporting test utilities.

### 4.4 Asset Management
- Use descriptive filenames for images, fonts, and icons.
- Prefer optimized image formats such as WebP or AVIF where appropriate.
- Avoid unnecessarily large images and duplicate assets.
- Store private files outside publicly served directories.
- Use a consistent naming and organization strategy for brand assets.

## 5. Naming Conventions

### 5.1 General Naming
Names must communicate purpose. Avoid vague names such as `data`, `thing`, `temp`, `stuff`, or `helper` when a more specific name is available.

### 5.2 Files and Directories
- React components: `PascalCase.tsx`, such as `HeroSection.tsx`.
- Hooks: `camelCase.ts`, beginning with `use`, such as `useMediaQuery.ts`.
- Utilities: `camelCase.ts`, such as `formatDate.ts`.
- Types: `camelCase.ts` or a descriptive domain-specific filename, following existing conventions.
- Next.js route files: use the framework's required names, such as `page.tsx` and `layout.tsx`.
- Test files: use a consistent suffix such as `.test.ts` or `.spec.ts`.

### 5.3 Variables and Functions
- Use `camelCase` for variables and functions.
- Use `PascalCase` for React components, classes, and type aliases.
- Use `UPPER_SNAKE_CASE` for true module-level constants where appropriate.
- Boolean variables should read naturally, such as `isLoading`, `hasAccess`, or `canSubmit`.
- Event handlers should describe their action, such as `handleSubmit` or `handleNavigation`.

### 5.4 Types and Interfaces
Use descriptive names such as `ContactFormValues`, `ServiceCardProps`, or `NavigationItem`.

Avoid meaningless suffixes, redundant prefixes, and cryptic abbreviations.

### 5.5 CSS and Tailwind
- Use consistent utility-class ordering when supported by the project's tooling.
- Extract repeated styling into reusable components or appropriate shared styles when repetition becomes difficult to maintain.
- Use semantic design tokens for recurring colors, typography, spacing, borders, and radii.
- Avoid arbitrary values when an established design token already represents the same intent.

### 5.6 Environment Variables
Use uppercase snake case for environment variable names, such as `CONTACT_FORM_API_KEY`. Prefix browser-exposed variables only when required by the chosen framework, and never place secrets in public variables.

## 6. Code Formatting

### 6.1 Formatting Tools
Use the repository's configured formatter and linter. If none exist, establish a consistent setup before the codebase becomes large.

Recommended tools include:
- Prettier for formatting.
- ESLint for JavaScript and TypeScript linting.
- TypeScript's compiler for type checking.

### 6.2 Formatting Rules
- Use consistent indentation and quotation conventions enforced by the formatter.
- Avoid unnecessarily long functions, deeply nested conditionals, and excessively long files.
- Use early returns when they make control flow easier to follow.
- Remove unused imports, variables, and dead code.
- Avoid unexplained numeric values; name them or represent them with design tokens when appropriate.
- Use semicolons and trailing commas according to the established formatter configuration.

### 6.3 Formatting Before Completion
Before marking a change complete, run the relevant formatting, linting, type-checking, and build commands. Report failures accurately rather than claiming all checks passed.

## 7. Components

### 7.1 Component Responsibilities
- Each component should have one clear primary responsibility.
- Prefer small, composable components over monolithic page components.
- Keep components local to a feature until reuse across features is justified.
- Extract shared components when they improve consistency or meaningfully reduce duplication.
- Avoid excessive fragmentation into components that add no useful abstraction.

### 7.2 Props
- Define clear TypeScript prop types.
- Pass only the data and callbacks a component needs.
- Avoid passing large objects when a component requires only a few fields.
- Use sensible defaults where they improve usability.
- Do not mutate props or shared state directly.

### 7.3 State and Effects
- Keep state as close as practical to the components that need it.
- Avoid duplicating values that can be derived from existing state.
- Use effects for synchronization with external systems, not as a default mechanism for ordinary calculations.
- Clean up subscriptions, listeners, and other external resources when necessary.
- Do not introduce global state libraries unless the application has a clear requirement.

### 7.4 Design System and Visual Consistency
- Establish shared tokens for brand colors, typography, spacing, container widths, borders, shadows, and responsive breakpoints.
- Use consistent interaction states for buttons, links, forms, and navigation.
- Build reusable primitives for recurring interface patterns.
- Avoid inconsistent one-off styling that weakens the brand identity.

### 7.5 Accessibility
- Use semantic HTML elements and correct heading hierarchy.
- Provide accessible names for interactive elements.
- Ensure keyboard navigation and visible focus states.
- Maintain sufficient text contrast.
- Supply appropriate alternative text for meaningful images.
- Respect reduced-motion preferences and avoid unnecessary animations.
- Never use color alone to communicate important information.

### 7.6 Responsive Design
- Design mobile layouts deliberately rather than merely shrinking desktop layouts.
- Test navigation, text wrapping, spacing, imagery, and interactive elements at multiple viewport widths.
- Avoid fixed widths that cause horizontal overflow.
- Ensure touch targets are appropriately sized.
- Validate both narrow mobile screens and large desktop displays.

## 8. Comments and Documentation

### 8.1 Commenting Principles
Comments should explain why a decision exists, not repeat what the code already says.

Good comments clarify:
- Non-obvious business rules.
- Important technical constraints.
- Security considerations.
- Workarounds for known framework or browser behavior.
- Complex algorithms or calculations.

Avoid redundant comments that become incorrect when code changes.

### 8.2 Documentation
- Maintain a README with setup instructions, project requirements, development commands, and deployment guidance.
- Document required environment variables using safe placeholders.
- Explain non-obvious architectural decisions when future contributors would benefit.
- Keep documentation synchronized with actual implementation.
- Document known limitations rather than claiming unsupported functionality.

### 8.3 TODOs and Temporary Workarounds
- Use TODO comments only when they identify a specific, actionable piece of work.
- Include context when a workaround has important consequences.
- Do not leave debugging statements, mock production data, or temporary development behavior in production code.

### 8.4 AI-Generated Code
- Review generated code for correctness, readability, security, accessibility, and maintainability.
- Remove unnecessary abstractions and unused dependencies introduced during generation.
- Do not accept invented APIs, unverified package methods, or unsupported claims.
- Ensure generated documentation accurately reflects the implemented behavior.

## Final Rule

Code quality is measured by correctness, clarity, maintainability, accessibility, and verified behavior—not by the amount of code produced or how impressive a preview looks.

Before changing the project, inspect the existing implementation. Before declaring a change complete, verify it. Before deploying, ensure the code and its behavior meet the project's requirements.
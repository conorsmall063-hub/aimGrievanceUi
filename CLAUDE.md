# Project: AimGreivences - React/Vite/Shadcn Stack

## Tech Stack
- vite,  Typescript React19
- UI Components taken from shadcn-react type: base, style: Nova, basecolour: mist, chart colour Sky
- Tailwind CSS V$

## Coding Standards
- **Component Pattern:** Use functional components with arrow functions.
- **Directory Structure:** 
  - UI components: `src/components/ui` (shadcn)
  - Feature components: `src/components/features`
  - Hooks: `src/hooks`
  - Lib/Utils: `src/lib` (specifically `src/lib/utils.ts` for cn helper)
- **Styling Rules:** 
  - Use Tailwind utility classes exclusively.
  - Follow the Tailwind v4 `@theme` pattern in `src/index.css` for custom variables.
  - Avoid creating new `.css` files; keep logic in `.tsx`.
- **Naming:** PascalCase for components, camelCase for functions/variables.

## Common Workflows
- **Install Shadcn Component:** `npx shadcn@latest add [component]`
- **Development:** `npm run dev`
- **Build:** `npm run build`

## Specific Instructions for Claude
- When generating UI, always use Shadcn components first. If a component isn't installed, suggest the installation command.
- Always use the `cn()` utility for conditional class merging.
- Ensure all components are accessible (ARIA labels, keyboard navigation).\
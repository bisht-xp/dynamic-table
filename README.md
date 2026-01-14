# Dynamic Table Assignment

[dynamic-table-jade-seven.vercel.app](https://dynamic-table-jade-seven.vercel.app/)

A modern, responsive, and performance-focused table implementation built with **Next.js**, **Tailwind CSS**, and **TanStack Table**. This project demonstrates advanced React patterns, component design, and API simulation.

## 🚀 Getting Started

To install and run the project locally:

1.  **Clone variables** (if applicable) and install dependencies:

    ```bash
    npm install
    # or
    bun install
    ```

2.  **Start the development server**:

    ```bash
    npm run dev
    # or
    bun dev
    ```

3.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 🏗️ Architecture & Component Design

The project strictly follows the **Compound Component Pattern** to ensure maximum flexibility, readability, and maintainability.

### Why Compound Components?

Instead of passing massive configuration objects to a monolithic component (e.g., `<Table config={...} />`), we expose sub-components that share implicit state. This allows for declarative usage:

```tsx
<Grid>
  <Grid.Header>...</Grid.Header>
  <Grid.Body>...</Grid.Body>
  <Grid.Footer>...</Grid.Footer>
</Grid>
```

**Key Components:**

- **Grid**: The main layout container. Separates the scrollable table area from the fixed footer.
- **DataCell**: A universal cell renderer (`DataCell.Text`, `DataCell.Icon`, `DataCell.User`, etc.) that ensures consistent styling across the app.
- **FilterSection**: A reusable toolbar component that supports complex layouts without hardcoded styles.

---

## ⚡ API Simulation & Streaming

To mimic a real-world enterprise application, the data loading is simulated with artificial delays to represent different API endpoints responding at different times.

**The Staggered Loading Strategy:**

- **Columns/Header (100ms)**: Loads first to establish structure.
- **Footer/Metadata (200ms)**: Loads secondary context.
- **Row Data (300ms)**: Loads last, as it's typically the heaviest payload.

This is implemented in `lib/api.ts` and consumed in `TableComponent.tsx` using individual loading states and Skeleton loaders. This approach provides immediate visual feedback (perceived performance) rather than a blank screen until everything is ready.

---

## 🔮 Future Improvements

If this were a production-grade library, here is how I would scale it further:

1.  **Generic Dynamic Renderer**:

    - Currently, columns are defined content-specifically. I would build a generic renderer that accepts _any_ JSON API response, detects the data type (string, date, boolean, nested object), and automatically selects the correct `DataCell` variant.

2.  **Virtualization**:

    - For datasets > 1000 rows, DOM nodes became heavy. I would integrate **@tanstack/react-virtual** to render only the rows currently in the viewport, maintaining 60fps scrolling performance regardless of dataset size.

3.  **Advanced CSS Optimization**:

    - Extract common Tailwind utility patterns (e.g., `flex items-center justify-center`) into global CSS classes (`.flex-center`) or use `cva` (Class Variance Authority) to reduce the HTML bundle size and improve `useMemo` efficiency by stabilizing className strings.

4.  **Backend-Driven UI**:
    - Move column definitions to the backend. The API would return not just data, but also the _schema_ (headers, widths, types), allowing the frontend to be completely agnostic to the specific data being shown.

---

## 📦 Tech Stack & Packages

- **Next.js 14 (App Router)**: For server-side rendering capabilities and routing.
- **@tanstack/react-table**: Headless UI library for complex table logic (sorting, filtering, pagination) without enforcing styles.
- **Tailwind CSS**: Utility-first CSS for rapid, responsive styling.
- **React Icons**: Lightweight icon library.
- **Bun**: Fast JavaScript runtime and package manager.

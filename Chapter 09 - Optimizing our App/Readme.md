# 📚 Today's Learnings

## 1. Single Responsibility Principle (SRP)
- A component or function should **do only one thing** and do it well.
- Benefits:
  - Easier to read and maintain.
  - Reusable and testable components.
  - Reduces complexity by separating concerns.

**Example:**  
Instead of writing one large component that fetches data, handles UI, and manages state →  
split it into smaller parts:  
- `useFetch()` hook for fetching data.  
- `RestaurantCard` for displaying restaurant info.  
- `Body` component for layout.

---

## 2. Custom Hooks
### 🔹 Data Fetching Hook
- Created reusable custom hooks to fetch API data.
- Helps keep UI components clean by separating logic from presentation.

### 🔹 Internet Status Hook (`useOnlineStatus`)
- Used `navigator.onLine` to detect initial online/offline state.
- Added `online` and `offline` event listeners for continuous monitoring.
- Cleaned up event listeners to prevent memory leaks.
- Used this hook in `Body` to display online/offline status dynamically.

---

## 3. Optimizing App using `React.lazy()` (Code Splitting)
- Implemented **lazy loading** to load components only when needed.
- Example: `Grocery` component loads only when user navigates to `/grocery`.
- Reduces initial bundle size → faster page load.
- Used `Suspense` with a fallback UI to handle loading state.

---

## 🚀 Key Takeaways
- Follow **SRP** for better maintainability.  
- **Custom hooks** help abstract logic and improve reusability.  
- **Lazy loading & code splitting** improve app performance by reducing initial bundle size.  

---

## 📌 Next Steps
- Explore more design principles (Open/Closed, Liskov Substitution).  
- Build more custom hooks (e.g., form handling, debouncing, caching).  
- Try dynamic imports for routes and components.  

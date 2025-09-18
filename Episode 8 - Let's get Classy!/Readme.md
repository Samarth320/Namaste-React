## Episode 08 – Let’s Get Classy! 🎩

### Key Learnings & Notes 📝

- **Class-based Components**
  - Example of creating a class component.
  - Compared props in function components vs. class components.
  - Used `super(props)` in constructors and understood why it is required.
  - Handling multiple props in class components.
  - Created local/state variables inside both functional and class components.
  - Explained `this.state` and destructuring in class components.
  - Added and updated multiple state variables.
  - Learned how to update state variables with `this.setState`.

- **React Lifecycle (Class Components)**
  - Detailed breakdown of lifecycle methods:
    - Constructor → Render → ComponentDidMount.
    - Lifecycle flow between parent and child components.
  - `ComponentDidMount()` usage for API calls.
  - Compared API calls in `useEffect` vs. class lifecycle methods.
  - Observed how `ComponentDidUpdate()` works.
  - Understood the **Unmounting phase** using `componentWillUnmount()`.
  - React Lifecycle diagram explained.
  - Discussed why React is fast (Virtual DOM, efficient reconciliation).
  - Explored render phase and commit phase.

- **APIs & Data Handling**
  - Made GitHub API calls inside class components.
  - Updated JSON data on the UI dynamically.
  - Built a `UserClass.js` component and saw lifecycle behavior in action.
  - Handled API rate limit issues.
  - Learned how to clean up intervals or subscriptions inside `componentWillUnmount`.
  - Practiced with `ProfileClass.js` and compared it to modern function components with hooks.
  - Used `async` inside `useEffect()` for API calls.

- **React Best Practices & Insights**
  - Single Page Application challenges were discussed.
  - What senior developers should know about component lifecycles.
  - Impact of `setInterval` inside `useEffect`.
  - DOM manipulation differences in function vs. class components.
  - Debugging with `debugger` inside lifecycle methods.
  - Explored older React coding patterns and compared with modern hooks approach.

- **Hands-on Coding**
  - Built `UserClass.js` and `ProfileClass.js` using class-based approach.
  - Explored lifecycle behavior by adding console logs at each stage.
  - Tried `async` in `useEffect` and integrated APIs.
  - Understood practical differences between class components and functional components.

---

📌 **Note:** The complete code for this chapter is located inside the [_Project_Food_ordering_app_](../Project_Food_ordering_app/) folder.

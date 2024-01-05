let hooks = [];
let currentHook = 0;

function useState(initialValue) {
  hooks[currentHook] = hooks[currentHook] || initialValue;
  const hookIndex = currentHook;
  const setState = (newVal) => (hooks[hookIndex] = newVal);
  return [hooks[currentHook++], setState];
}

function renderComponent(component) {
  currentHook = 0;
  component();
}

// Usage
function App() {
  const [count, setCount] = useState(0);
  console.log(count);
  setCount(count + 1);

  const [count2, setCount2] = useState(0);
  console.log(count2);
  setCount2(count2 + 1);
}

renderComponent(App); // Output: 0
// Rerender the component
renderComponent(App); // Output: 1

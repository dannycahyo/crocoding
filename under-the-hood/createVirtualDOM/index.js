let userName = "";
let vDOM = createVDOM();
let prevDOM;
let elems;

function createVDOM() {
  return [
    {
      tag: "input",
      attributes: {
        value: userName,
        oninput: "handleInput(event)",
      },
    },
    {
      tag: "div",
      children: [`Hello, ${userName}!`],
    },
    {
      tag: "div",
      children: ["Great Job!"],
    },
  ];
}

function handleInput(event) {
  userName = event.target.value;
}

function createDom(root) {
  const { tag, children, attributes } = root;
  const element = document.createElement(tag);

  if (attributes) {
    Object.keys(attributes).forEach((key) => {
      if (key === "oninput") {
        element.oninput = handleInput;
      } else {
        element.setAttribute(key, attributes[key]);
      }
    });
  }

  if (children) {
    children.forEach((child) => {
      if (typeof child === "string") {
        element.appendChild(document.createTextNode(child));
      } else {
        element.appendChild(createDom(child));
      }
    });
  }

  return element;
}

function findDiff(prevDOM, currentDOM) {
  for (let i = 0; i < prevDOM.length; i++) {
    if (JSON.stringify(prevDOM[i]) !== JSON.stringify(currentDOM[i])) {
      const newElem = createDom(currentDOM[i]);
      elems[i].replaceWith(newElem);
      elems[i] = newElem;
    }
  }
}

function updateDOM() {
  const activeElement = document.activeElement;
  const activeElementTagName =
    activeElement && activeElement.tagName.toLowerCase();

  if (activeElementTagName === "input") {
    activeElement.focus();
  }

  if (elems === undefined) {
    elems = vDOM.map(createDom);
    document.body.append(...elems);
  } else {
    prevDOM = [...vDOM];
    vDOM = createVDOM();
    findDiff(prevDOM, vDOM);
  }
}

setInterval(updateDOM, 1000);

const metrics = document.getElementById("metrics");

// Bad Practice - Forces multiple reflows
function runBadPractice() {
  const start = performance.now();
  const boxes = document.querySelectorAll("#badPractice .box");

  // Repeat the operation multiple times to make the difference more noticeable
  for (let iteration = 0; iteration < 10; iteration++) {
    boxes.forEach((box) => {
      // Force reflow with height
      const height = box.offsetHeight;
      box.style.height = height + 2 + "px";

      // Force reflow with width
      const width = box.offsetWidth;
      box.style.width = width + 2 + "px";

      // Force reflow with margin
      const margin = parseInt(getComputedStyle(box).marginTop);
      box.style.marginTop = margin + 1 + "px";

      // Force reflow with padding
      const padding = parseInt(getComputedStyle(box).paddingLeft);
      box.style.padding = padding + 1 + "px";

      // Force reflow with border
      const border = parseInt(getComputedStyle(box).borderWidth || 0);
      box.style.border = border + 1 + "px solid #999";

      // Force reflow with font size
      const fontSize = parseInt(getComputedStyle(box).fontSize);
      box.style.fontSize = fontSize + 1 + "px";
    });
  }

  const duration = performance.now() - start;
  metrics.textContent = `Bad Practice: ${duration.toFixed(2)}ms`;
}

// Good Practice - Batch measurements and updates
function runGoodPractice() {
  const start = performance.now();
  const boxes = document.querySelectorAll("#goodPractice .box");
  const measurements = [];

  // Batch all readings
  boxes.forEach((box) => {
    measurements.push({
      height: box.offsetHeight,
      width: box.offsetWidth,
      margin: parseInt(getComputedStyle(box).marginTop),
      padding: parseInt(getComputedStyle(box).paddingLeft),
      border: parseInt(getComputedStyle(box).borderWidth || 0),
      fontSize: parseInt(getComputedStyle(box).fontSize),
    });
  });

  // Batch all writings with requestAnimationFrame
  requestAnimationFrame(() => {
    // Repeat the operation multiple times
    for (let iteration = 0; iteration < 10; iteration++) {
      boxes.forEach((box, i) => {
        const measure = measurements[i];
        // Use transform where possible to trigger hardware acceleration
        box.style.cssText = `
          height: ${measure.height + 2}px;
          width: ${measure.width + 2}px;
          margin-top: ${measure.margin + 1}px;
          padding: ${measure.padding + 1}px;
          border: ${measure.border + 1}px solid #999;
          font-size: ${measure.fontSize + 1}px;
          transform: translateZ(0);
        `;
      });
    }

    const duration = performance.now() - start;
    metrics.textContent = `Good Practice: ${duration.toFixed(2)}ms`;
  });
}

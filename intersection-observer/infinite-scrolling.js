class InfiniteScroll {
  constructor(options = {}) {
    this.contentEl = document.getElementById("content");
    this.sentinelEl = document.getElementById("sentinel");
    this.loadingEl = document.getElementById("loading");
    this.page = 0;
    this.loading = false;

    this.initObserver();
  }

  initObserver() {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !this.loading) {
          this.loadMore();
        }
      });
    }, options);

    observer.observe(this.sentinelEl);
  }

  async loadMore() {
    this.loading = true;
    this.loadingEl.style.display = "block";

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Generate mock data
      const items = Array.from({ length: 10 }, (_, i) => {
        return `Item ${this.page * 10 + i + 1}`;
      });

      this.renderItems(items);
      this.page++;
    } finally {
      this.loading = false;
      this.loadingEl.style.display = "none";
    }
  }

  renderItems(items) {
    items.forEach((item) => {
      const div = document.createElement("div");
      div.className = "item";
      div.textContent = item;
      this.contentEl.appendChild(div);
    });
  }
}

// Initialize
const scroller = new InfiniteScroll();

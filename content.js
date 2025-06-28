function hideShorts() {
  // Hide Shorts on the homepage
  document.querySelectorAll("ytd-rich-section-renderer").forEach((section) => {
    if (section.innerText.includes("Shorts")) {
      section.style.display = "none";
    }
  });

  // Hide Shorts in the recommendations
  document.querySelectorAll("ytd-reel-shelf-renderer").forEach((short) => {
    short.style.display = "none";
  });
  // Hide Shorts in search results
  document.querySelectorAll("grid-shelf-view-model").forEach((shortSection) => {
    if (shortSection.innerText.includes("Shorts")) {
      shortSection.style.display = "none";
    }
  });
}

hideShorts();
let observer = new MutationObserver(hideShorts);
observer.observe(document.body, { childList: true, subtree: true });

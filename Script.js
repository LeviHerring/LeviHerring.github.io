function toggleDescription(element) {
  const container = element.nextElementSibling;
  if (container.style.display === "none") {
    container.style.display = "block";
  } else {
    container.style.display = "none";
  }
}

function filterSection(section, event) {
  const sections = document.querySelectorAll(".filter-section");
  const buttons = document.querySelectorAll(".tab-button");

  buttons.forEach(btn => btn.classList.remove("active"));
  if (event) event.target.classList.add("active");

  if (section === "all") {
    sections.forEach(sec => {
      sec.style.display = "block";
    });
  } else {
    sections.forEach(sec => {
      if (sec.classList.contains(section)) {
        sec.style.display = "block";
      } else {
        sec.style.display = "none";
      }
    });
  }
}

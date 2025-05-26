function toggleDescription(element) {
  const container = element.nextElementSibling;
  if (container.style.display === "none") {
    container.style.display = "block";
  } else {
    container.style.display = "none";
  }
}
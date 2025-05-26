function toggleDescription(element) {
  const description = element.nextElementSibling;
  if (description.style.display === "none") {
    description.style.display = "block";
  } else {
    description.style.display = "none";
  }
}
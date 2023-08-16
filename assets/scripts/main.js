const inputField = document.querySelectorAll(".input-field");

inputField.forEach(input => {
  input.addEventListener("focus", () => {
    input.parentNode.classList.add("active");
  });

  input.addEventListener("blur", () => {
    if (input.value.trim() == "") {
      input.parentNode.classList.remove("active");
      input.value = "";
    }
  });
});

export default function CheckColorTheme() {
  const toggle = document.getElementById("toggleColor");
  const body = document.getElementsByTagName("body");

  if (!body[0].classList.contains("dark")) {
    body[0].classList.add("dark");
  } else {
    body[0].classList.remove("dark");
  }
}

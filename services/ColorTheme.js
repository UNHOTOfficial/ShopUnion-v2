export default function CheckColorTheme() {
  const body = document.getElementsByTagName("body");
  const toggleMoons = document.querySelectorAll("#toggleMoon");
  const toggleSuns = document.querySelectorAll("#toggleSun");

  if (!body[0].classList.contains("dark")) {
    body[0].classList.add("dark");
    toggleMoons.forEach((toggleMoon) => toggleMoon.classList.add("hidden"));
    toggleSuns.forEach((toggleSun) => toggleSun.classList.remove("hidden"));
  } else {
    body[0].classList.remove("dark");
    toggleMoons.forEach((toggleMoon) => toggleMoon.classList.remove("hidden"));
    toggleSuns.forEach((toggleSun) => toggleSun.classList.add("hidden"));
  }
}

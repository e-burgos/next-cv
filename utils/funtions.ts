import { _storage } from "./localStorage";

export function handleSwitchValue(isDark: boolean) {
  let body = document.querySelector("body");
  if (isDark) {
    _storage.set("theme-color", "dark");
    body && body.classList.add("dark");
    body && body.classList.remove("light");
  } else {
    _storage.set("theme-color", "light");
    body && body.classList.add("light");
    body && body.classList.remove("dark");
  }
}

export default handleSwitchValue;

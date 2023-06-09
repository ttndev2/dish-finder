function injectScript(content) {
  var script = document.createElement("script");
  var scriptText = document.createTextNode(content);
  script.appendChild(scriptText);
  (document.head || document.documentElement).appendChild(script);
}

function createElement() {
  // Create a new div element
  var newDiv = document.createElement("div");
  newDiv.id = "dish-finder-root";
  newDiv.style.height = "0px";
  // Append the new div to the body
  document.body.prepend(newDiv);

  let link = document.createElement("link");
  link.href = chrome.runtime.getURL("static/css/main.css");
  link.type = "text/css";
  link.rel = "stylesheet";
  (document.head || document.documentElement).appendChild(link);

  var injectedScript = document.createElement("script");
  injectedScript.src = chrome.runtime.getURL("static/js/main.js");
  (document.head || document.documentElement).appendChild(injectedScript);
}

function showDishMenu() {
  let el = document.getElementById("dish-finder-root");
  const menuEl = el.querySelector("#dish-finder-menu");
  const backEl = el.querySelector("#dish-finder-overlay");

  backEl.style.display = "block";
  menuEl.style.transform = "translate(0, 0)";
}

function hideDishMenu() {
  let el = document.getElementById("dish-finder-root");
  const menuEl = el.querySelector("#dish-finder-menu");
  const backEl = el.querySelector("#dish-finder-overlay");

  backEl.style.display = "none";
  menuEl.style.transform = "translate(600px, 0)";
}

function toggleElement() {
  let el = document.getElementById("dish-finder-root");

  if (!el) {
    createElement();
  } else {
    const menuEl = el.querySelector("#dish-finder-menu");
    const visibility = menuEl.getAttribute("data-visibility");

    if (visibility === "visible") {
      menuEl.setAttribute("data-visibility", "hidden");
      hideDishMenu();
    } else {
      menuEl.setAttribute("data-visibility", "visible");
      showDishMenu();
    }
  }
}

toggleElement();

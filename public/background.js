try {
  chrome.action.onClicked.addListener((tab) => {
    if (tab.url === "chrome://newtab/") {
      chrome.tabs.update(tab.id, { url: "https://dish-finder.vercel.app/" });
    } else {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["contentScript.js"],
      });
    }
  });
} catch (e) {}

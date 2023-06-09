try {
  chrome.action.onClicked.addListener((tab) => {
    if (tab.url === "chrome://newtab/") {
      chrome.tabs.update(tab.id, { url: "https://your-url-here.com" }); // replace with your url
    } else {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["contentScript.js"],
      });
    }
  });
} catch (e) {}

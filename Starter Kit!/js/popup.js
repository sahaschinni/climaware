// listening for a click event on the #DanceOn <button>
document.getElementById("LearnMore").addEventListener('click', async () => {

  // get the ID of the current tab
  tabId = await getTabId()

  // send a message to the content script running in the tab with tabId
  chrome.tabs.sendMessage(tabId, "learn_more", (response) => {

  chrome.tabs.create({url:"https://www.un.org/en/climatechange/the-climate-crisis-is-a-humanitarian-crisis"});
  
  
    // EXTRA CODE NOT COVERED IN WORKSHOP
    // get a response from the content script
    if (response === 'success') {
      // do something after you find receive a response/reply
      // from content.js that the message has been received successfully 
    }
  });

});

document.getElementById("DonateHere").addEventListener('click', async () => {

  // get the ID of the current tab
  tabId = await getTabId()

  // send a message to the content script running in the tab with tabId
  chrome.tabs.sendMessage(tabId, "donate_here", (response) => {

  chrome.tabs.create({url:"https://www.climateemergencyfund.org/?form=donate"});
  
    // EXTRA CODE NOT COVERED IN WORKSHOP
    // get a response from the content script
    if (response === 'success') {
      // do something after you find receive a response/reply
      // from content.js that the message has been received successfully 
    }
  });

});

// function to get the tabId of the current tab
async function getTabId() {
  let queryOptions = { active: true, currentWindow: true };
  let tabs = await chrome.tabs.query(queryOptions);
  return tabs[0].id;
}

fetch('https://gnews.io/api/v4/top-headlines?q=%22climate%20change%20news%22%20OR%20%22climate%20change%20impacts%22&lang=en&max=8&token=6ccd038091d1957fb6f30b8fea17ef93')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
    document.getElementById("ts0")
    .innerHTML = data["articles"][0]["title"];
    document.getElementById("ds0")
    .innerHTML = data["articles"][0]["description"];
    document.getElementById("urls0")
    .innerHTML = "source"
    document.getElementById("urls0")
    .href = data["articles"][0]["url"];

    document.getElementById("ts1")
    .innerHTML = data["articles"][1]["title"];
    document.getElementById("ds1")
    .innerHTML = data["articles"][1]["description"];
    document.getElementById("urls1")
    .innerHTML = "source"
    document.getElementById("urls1")
    .href = data["articles"][1]["url"];

    document.getElementById("ts2")
    .innerHTML = data["articles"][2]["title"];
    document.getElementById("ds2")
    .innerHTML = data["articles"][2]["description"];
    document.getElementById("urls2")
    .innerHTML = "source"
    document.getElementById("urls2")
    .href = data["articles"][2]["url"]
  
});

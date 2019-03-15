// https://hacker-news.firebaseio.com/v0/item/{INSETHERE}.json?print=pretty
let url = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
let newsUL = document.getElementById("newsUL")
let storyURLs = []
let allStories = []

function getStories(){
  fetch(url)
  .then(response => response.json())
  .then(function(stories){
    return stories
  })
  .then(function(storiesArr){
    storiesArr.forEach(function(storyNo){
      storyURLs.push("https://hacker-news.firebaseio.com/v0/item/" + storyNo + ".json?print=pretty")
    })
    storyURLs.forEach(function(oneURL){
      fetch(oneURL)
      .then(response => response.json())
      .then(function(story){
        return story
      })
      .then(function(oneURL){
        let storyInfo = {title: oneURL["title"], url: oneURL["url"], by: oneURL["by"], time: oneURL["time"]}
        allStories.push(storyInfo)
        let stories = allStories.map(function(story){
          return `<li><h3>${story.title}</h4>
          Link: <a href="${story.url}">${story.url}</a><br>
          By: ${story.by}<br>
          Date: ${new Date(story.time)}</li>`
        })
        newsUL.innerHTML = stories.join('')
      })
    })
  })
}

getStories()

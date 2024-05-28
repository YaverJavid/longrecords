let articles = document.getElementsByClassName("article-card");
let metas = document.getElementsByClassName("article-meta");
let titles = document.getElementsByClassName("article-title")

for (let i = 0; i < articles.length; i++) {
    let article = articles[i]
    let meta = metas[i]
    let title = titles[i]
    article.onclick = () => {
         let authorPart = meta.innerText.split(": ")[1].split(" |")[0].replace(" ", "-")
         let titlePart = title.innerText.replaceAll(" ", "-")
         let URL = ("articles/" + authorPart + "-" + titlePart + ".html").toLowerCase()
         window.location.href = URL
    }
}
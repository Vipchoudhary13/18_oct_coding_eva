async function searchNews(){
    let quary = document.getElementById("quary").value;
    let res = await fetch(`https://newsapi.org/v2/top-headlines/sources?=${quary}&apiKey=163fc0b552fb494bab0b63150ce0e6a0`);

    let data = await res.json();
    console.log("data:", data);

    appendNews(data.sources);
};
searchNews()

function appendNews(news_data){
    
    news_data.forEach(function(newses){
        let p = document.createElement("p");
        p.innerText = newses.sources;

        news.append(p);
    })
}



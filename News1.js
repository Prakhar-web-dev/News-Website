console.log("Second News website");

let apikey = "9544504a3c154b2b8a74c5ba0e616a3d";
let country = "us";


let newsAccordion = document.getElementById("newsAccordion");

const xhr = new XMLHttpRequest();

xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apikey}`, true);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        // console.log(json);
        let articles = json.articles;
        console.log(articles);
        let news = "";
        articles.forEach(function (element,index) {
            news += `<div class="accordion-item">
            <h2 class="accordion-header" id="heading${index}">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" 
            aria-expanded="true" aria-controls="collapse${index}">
            <b>Breaking News ${index + 1}:</b>${element["title"]}
            </button>
            </h2>
            <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" 
            data-bs-parent="#newsAccordion">
            <div class="accordion-body">
            ${element["content"]}.<a href = "${element['url']}" target ="_blank">Read more here</a>
        </div>
    </div>
    </div>`;
        });
        newsAccordion.innerHTML += news;
    }
    else {
        console.log("SOME ERROR OCCURRED");
    }
}
xhr.send();
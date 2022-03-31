// 9544504a3c154b2b8a74c5ba0e616a3d :-API KEY

// console.log("Hello world"); 

// Parameters of news API parameters
let country = "in";
let apikey = "9544504a3c154b2b8a74c5ba0e616a3d"

// Grabbing the container 
let newsAccordion = document.getElementById('newsAccordion');

// ajax GET REQUEST
// Instantiate an xhr object
const xhr = new XMLHttpRequest();
// open object
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apikey}`, true);

xhr.onload = function () {
    if (this.status === 200) {
        let Json = JSON.parse(this.responseText);
        // console.log(json);
        let articles = Json.articles;
        // console.log(articles)
        let newshtml = "";
        articles.forEach(function (element,index) {
            // console.log(articles[news]);
            let news = `<div class="accordion-item">
            <h2 class="accordion-header" id="heading${index}">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" 
            aria-expanded="true" aria-controls="collapse${index}">
            <b>Breaking News ${index+1}:</b>${element["title"]}
            </button>
            </h2>
            <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" 
            data-bs-parent="#newsAccordion">
            <div class="accordion-body">
            ${element["content"]}.<a href = "${element['url']}" target ="_blank">Read more here</a>
        </div>
    </div>
    </div>`;

            newshtml += news;
        });
        newsAccordion.innerHTML += newshtml;
    }
    else {
        console.log("Some Eror Occurred")
    }
}
xhr.send();

// const xhr = new XMLHttpRequest();


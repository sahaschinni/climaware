function api(){
    fetch('https://gnews.io/api/v4/top-headlines?q=%22Global+Warming%22&lang=en&max=4&token=49aed3571d704635a26e40156443bbdb')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });
}

api()
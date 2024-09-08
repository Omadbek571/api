const btn = document.getElementById("btn")
const wrapper = document.getElementById("wrapper")


function creatCard(todo) {
    return `
    <div id="todo">
            <img id="imges" src="${todo.url}" alt="">
            <h3>${todo.title}</h3>
            <h3>${todo.id}</h3>
        </div>
    `
}


document.addEventListener("DOMContentLoaded", function () {
    fetch("https://jsonplaceholder.typicode.com/photos", {
        method: "GET"


    })

        .then((response) => {
            if (response.status == 200) {
                return response.json();
            }

        })
        .then(data => {
            wrapper.innerHTML = ""
            if (data.length) {
                data.forEach(todo => {
                    if (todo.id < 200) {
                        let card = creatCard(todo)
                        wrapper.innerHTML += card;
                        console.log(todo);
                    }

                });

            }

        })
        .catch(err => {
            console.log(err);

        })
})
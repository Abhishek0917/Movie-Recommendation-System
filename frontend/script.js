document.getElementById('formData').addEventListener('submit', predictSpam)

function predictSpam (e) {
    e.preventDefault()

    let text = document.getElementById('textarea_1').value

    fetch('http://localhost:5000/', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            'text' : text
        })
    })
    .then(res => res.json())
    .then(data => {
        for (i=0; i<5; i++) {
            document.getElementById('movie').innerHTML += `
                <div class="row justify-content-center">
                    <div class="col-md-auto">
                        <img src="${data['images'][i]}" class="image">
                        <h5 class="well text-center">${data['movies'][i]}</h5>
                    </div>
                </div>
                <br>
          `
        }

        // content = `</div>`
        // document.innerHTML += content

    })
}

function clearContent(){
    document.getElementById('movie').innerHTML = '';
}
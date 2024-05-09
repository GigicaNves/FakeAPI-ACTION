const API_URL = "https://my-json-server.typicode.com/GigicaNves/FakeAPI";

        fetch(`${API_URL}/confrontosSccpSpfc`)
        .then(response => response.json())
        .then(json => {
            const div = document.getElementById("info")
            div.innerHTML = JSON.stringify(json.partidasDisputadas)
        })

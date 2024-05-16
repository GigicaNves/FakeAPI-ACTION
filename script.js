/*const API_URL = "https://my-json-server.typicode.com/GigicaNves/FakeAPI";

        fetch(`${API_URL}/confrontosSccpSpfc`)
        .then(response => response.json())
        .then(json => {
            const div = document.getElementById("confrontos")
            div.innerHTML = JSON.stringify(json.partidasDisputadas)
        })*/


        const API_URL = "https://my-json-server.typicode.com/GigicaNves/FakeAPI";

        fetch(`${API_URL}/db`)
            .then(response => response.json())
            .then(data => {
                // Exibindo informações de confrontos
                const confrontosDiv = document.getElementById("confrontos");
                confrontosDiv.innerHTML += `<h3>SCCP X SPFC</h3> <ul>
                    <li>Partidas Disputadas: <strong>${JSON.stringify(data.confrontosSccpSpfc.partidasDisputadas)}</strong></li>
                    <li>Vitórias Corinthians: <strong>${data.confrontosSccpSpfc.vitóriasSccp}</strong></li>
                    <li>Vitórias São Paulo: <strong>${data.confrontosSccpSpfc.vitóriasSpfc}</strong></li>
                    <li>Empates: <strong>${data.confrontosSccpSpfc.empates}</strong></li>
                    <li>Gols Totais: <strong>${data.confrontosSccpSpfc.golsConfronto}</strong></li>
                    <li>Gols Corinthians: <strong>${data.confrontosSccpSpfc.golsSccp}</strong></li>
                    <li>Gols São Paulo: <strong>${data.confrontosSccpSpfc.golsSpfc}</strong></li>
                    <li>Média de Gols por Partida: <strong>${data.confrontosSccpSpfc.médiaGolsPartida}</strong></li>
                </ul>`;
    
                // Exibindo informações de estádios
                const estadiosTable = document.getElementById("estadios");
                let estadiosHTML = `<tr><th>Estádio</th><th>Jogos</th><th>Vitórias</th><th>Gols</th></tr>`;
                data.estadiosSccpSpfc.forEach(estadio => {
                    estadiosHTML += `<tr>
                        <td>${estadio.estadio}</td>
                        <td>${estadio.jogos}</td>
                        <td>${estadio.vitorias}</td>
                        <td>${estadio.gols}</td>
                    </tr>`;
                });
                estadiosTable.innerHTML = estadiosHTML;
    
                // Exibindo informações de campeonatos
                const campeonatosTable = document.getElementById("campeonatos");
                let campeonatosHTML = `<tr><th>Campeonato</th><th>Jogos</th><th>Vitórias</th><th>Gols</th></tr>`;
                data.campeonatosSccpSpfc.forEach(campeonato => {
                    campeonatosHTML += `<tr>
                        <td>${campeonato.campeonato}</td>
                        <td>${campeonato.jogos}</td>
                        <td>${campeonato.vitórias}</td>
                        <td>${campeonato.gols}</td>
                    </tr>`;
                });
                campeonatosTable.innerHTML = campeonatosHTML;
    
                // Exibindo informações do primeiro confronto
                const primeiroConfrontoDiv = document.getElementById("primeiro-confronto");
                primeiroConfrontoDiv.innerHTML += `<h3>Primeiro Confronto</h3> <ul>
                    <li>Data: <strong>${data.primeiroConfronto.data}</strong></li>
                    <li>Horário: <strong>${data.primeiroConfronto.horario}</strong></li>
                    <li>Local: <strong>${data.primeiroConfronto.local}</strong></li>
                    <li>Campeonato: <strong>${data.primeiroConfronto.campeonato}</strong></li>
                </ul>`;
    
                // Exibindo informações do próximo confronto
                const proximoConfrontoDiv = document.getElementById("proximo-confronto");
                proximoConfrontoDiv.innerHTML = "<h3>Próximos Confrontos</h3>";
                data.próximoConfronto.forEach(confronto => {
                    proximoConfrontoDiv.innerHTML += `<ul>
                        <li>Data: <strong>${confronto.data}</strong></li>
                        <li>Horário: <strong>${confronto.horario}</strong></li>
                        <li>Local: <strong>${confronto.local}</strong></li>
                        <li>Campeonato: <strong>${confronto.campeonato}</strong></li>
                    </ul>`;
                });
    
            })
            .catch(error => {
                console.error("Erro ao buscar dados da API:", error);
                const div = document.getElementById("info");
                div.innerHTML = "<p>Erro ao carregar informações dos confrontos.</p>";
            });


            
            window.onscroll = function() {scrollFunction()};
            document.addEventListener("DOMContentLoaded", function() {
                var btnSubirTopo = document.getElementById("btnSubirTopo");
            
                window.addEventListener("scroll", function() {
                    if (document.documentElement.scrollTop > 20) {
                        btnSubirTopo.style.display = "block";
                    } else {
                        btnSubirTopo.style.display = "none";
                    }
                });
            
                btnSubirTopo.addEventListener("click", function() {
                    scrollToTop(1000); // Tempo em milissegundos para a animação (opcional)
                });
            
                function scrollToTop(scrollDuration) {
                    var cosParameter = window.scrollY / 2,
                        scrollCount = 0,
                        oldTimestamp = performance.now();
                    function step(newTimestamp) {
                        scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
                        if (scrollCount >= Math.PI) window.scrollTo(0, 0);
                        if (window.scrollY === 0) return;
                        window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)));
                        oldTimestamp = newTimestamp;
                        window.requestAnimationFrame(step);
                    }
                    window.requestAnimationFrame(step);
                }
            });
            
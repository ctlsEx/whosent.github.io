// Simulação de dados de análise
let totalVisitors = 500;
let mostVisitedPages = [
    { page: 'Homepage', visits: 300 },
    { page: 'Produtos', visits: 150 },
    { page: 'Contato', visits: 100 }
];

// Atualiza os elementos HTML com os dados de análise
document.getElementById('totalVisitors').textContent = totalVisitors;

let mostVisitedList = document.getElementById('mostVisitedList');
mostVisitedPages.forEach(page => {
    let li = document.createElement('li');
    li.textContent = `${page.page}: ${page.visits} visitas`;
    mostVisitedList.appendChild(li);
});

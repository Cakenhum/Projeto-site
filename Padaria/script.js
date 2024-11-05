// Lista de produtos simulados
const products = [
    { name: "Pão de Queijo", description: "Delicioso pão de queijo fresquinho, ideal para o café da manhã.", image: "imagens/pao-queijo.jpg" },
    { name: "Bolo de Cenoura", description: "Bolo de cenoura com cobertura de chocolate, uma verdadeira delícia.", image: "imagens/bolo-cenoura.jpg" },
    { name: "Croissant", description: "Croissant amanteigado e crocante, perfeito para qualquer hora do dia.", image: "imagens/croissant.jpg" },
    { name: "Pão Francês", description: "Pão francês fresquinho, perfeito para acompanhar sua refeição.", image: "imagens/pao-frances.jpg" }
];

// Função para renderizar os produtos na página
function renderProducts(filteredProducts) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';  // Limpa a lista de produtos exibidos

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
        `;

        productList.appendChild(productCard);
    });
}

// Função de busca dos produtos
function searchProduct() {
    const query = document.getElementById('search').value.toLowerCase();

    const filteredProducts = products.filter(product => {
        return product.name.toLowerCase().includes(query) || product.description.toLowerCase().includes(query);
    });

    renderProducts(filteredProducts);
}

// Renderiza todos os produtos na inicialização da página
renderProducts(products);

const nomeAnimal = document.getElementById("nome_animal");
const descricaoAnimal = document.getElementById("description_animal");
const imgAnimal = document.getElementById("img_animal");

const selecaoAnimal = (animal) => {
    if (animal === 'scooby') {
        nomeAnimal.textContent = "Scooby";
        descricaoAnimal.textContent = "Scooby é um cão leal e protetor. Ama crianças e é muito obediente. Precisa de espaço para correr e brincar. Ideal para famílias ativas."
        imgAnimal.setAttribute("src", "/SRC/assets/image/scooby.png")
        imgAnimal.setAttribute("alt", "Imagem do cachorro rafeiro");
    } else if (animal === 'gatoPreto') {
        nomeAnimal.textContent = "Pantera";
        descricaoAnimal.textContent = "Pantera é uma gatinha carinhosa e brincalhona. Ela adora carinho e é muito sociável com outros gatos. Procura uma família que lhe dê muito amor e atenção."
        imgAnimal.setAttribute("src", "/SRC/assets/image/pantera.png")
        imgAnimal.setAttribute("alt", "Imagem do gato preto");
    } else if (animal === 'caramelo') {
        nomeAnimal.textContent = "Thor";
        descricaoAnimal.textContent = "Thor é um cão cheio de energia e lealdade. Adora brincar e estar perto da família, sempre demonstrando carinho e proteção. Procura um lar onde possa receber amor e ter bastante espaço para gastar sua energia."
        imgAnimal.setAttribute("src", "/SRC/assets/image/thor.png")
        imgAnimal.setAttribute("alt", "Imagem do cachorro caramelo");
    } else if (animal === 'garfield') {
        nomeAnimal.textContent = "Garfield";
        descricaoAnimal.textContent = "Garfield é um gato independente mas carinhoso. Gosta de explorar e é muito curioso. Ideal para quem quer um companheiro aventureiro."
        imgAnimal.setAttribute("src", "/SRC/assets/image/garfield.png")
        imgAnimal.setAttribute("alt", "Imagem do gato laranja");
    }
}


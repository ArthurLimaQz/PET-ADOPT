function botaoAnimal() {
    const galeriaLink = document.querySelectorAll('.pet-gallery__item');
    const nomeAnimal = document.getElementById("nome_animal");
    const descricaoAnimal = document.getElementById("description_animal");
    const imgAnimal = document.getElementById("img_animal");
    const animais = [{
        nome: "Scooby",
        descricao: "Scooby é um cão leal e protetor. Ama crianças e é muito obediente. Precisa de espaço para correr e brincar. Ideal para famílias ativas.",
        imagem: "/SRC/assets/image/scooby.png",
        alt: "Imagem do cachorro rafeiro"
    },
    {
        nome: "Pantera",
        descricao: "Pantera é uma gatinha carinhosa e brincalhona. Ela adora carinho e é muito sociável com outros gatos. Procura uma família que lhe dê muito amor e atenção.",
        imagem: "/SRC/assets/image/pantera.png",
        alt: "Imagem do gato preto",

    },
    {
        nome: "Thor",
        descricao: "Thor é um cão cheio de energia e lealdade. Adora brincar e estar perto da família, sempre demonstrando carinho e proteção. Procura um lar onde possa receber amor e ter bastante espaço para gastar sua energia.",
        imagem: "/SRC/assets/image/thor.png",
        alt: "Imagem do cachorro caramelo",

    },
    {
        nome: "Garfield",
        descricao: "Garfield é um gato independente mas carinhoso. Gosta de explorar e é muito curioso. Ideal para quem quer um companheiro aventureiro.",
        imagem: "/SRC/assets/image/garfield.png",
        alt: "Imagem do gato laranja",

    }
    ];
    if (galeriaLink.length && animais.length) {

        function selecaoAnimal(index) {
            event.preventDefault();
            const animal = animais[index]
            nomeAnimal.textContent = animal.nome;
            descricaoAnimal.textContent = animal.descricao;
            imgAnimal.setAttribute("src", animal.imagem);
            imgAnimal.setAttribute("alt", animal.alt);
        }

        galeriaLink.forEach((e, index) => {
            e.addEventListener('click', () => {
                selecaoAnimal(index)
            });
        })
    }
}
botaoAnimal();
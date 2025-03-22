const container = document.querySelector('.container');

const elementos = [
    { tag: 'p', texto: 'Frase 1' },
    { tag: 'div', texto: 'Frase 2' },
    { tag: 'footer', texto: 'Frase 3' },
    { tag: 'section', texto: 'Frase 4' }
]

const div = document.createElement("div")
for (let i = 0; i < elementos.length; i++) {
    const { tag, texto } = elementos[i];
    let tagNew = document.createElement(tag);
    tagNew.innerHTML = texto;
    //POSSO TBM USAR    
    //POIS SEI QUE E SÓ STRING QUE TEM
    //tagNew.innerHTML = texto;
    //OU TBM CRIANDO UM NO DE TEXTO
    //let textoNew = document.createTextNode (texto);
    //tagNew.appendChild(texto);
    div.appendChild(tagNew);
}//OU TBM CRIANDO UM NO DE TEXTO

container.appendChild(div);

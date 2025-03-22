//factory function (Função fábrica)
//Constructor function
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,
         //Getter (transforma(finge ser uma atributo mas e um metodo) 
         // um função (metodo) em uma string(atributo));
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        //setter(apenasd quando usando o getter)
        set nomeCompleto (valor){
            //split divide toda vez que ver um espaço e cria um arrey
            valor = valor.split(" ");
            //agora vou eliminar o primeiro nome do arrey
            //agora nome e o primeiro nome do arrey
            this.nome = valor.shift();
            //aqui diz que sobremnome e oque sobrou do arrey e separa
            //por um espaço
            this.sobrenome = valor.join('');
          
        },
        peso : p,
        //função dentro de um objeto se chama metodo
        fala: function (assunto) {
            return `${this.peso} ${nome} esta ${assunto}.`;
        },
        altura: a,
        imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2)
            //toFixed = Quantas casas decimais
        }
       
        //this e para buscar quando o parametro nao tem o mesmo
        //nome que o objeto
        //this busca no objeto inteiro  

    };
}
const p1 = criaPessoa('junior', 'Hennemann', 1.80, 80);
console.log(p1);
/*
    nome: 'junior',
    sobrenome: 'Hennemann',
    fala: [Function: fala],
    altura: 1.8,
    peso: 80
  }*/
console.log(p1.fala('falando sobre JS'));//80 junior esta falando sobre JS.
console.log(p1.imc());//24.69
//sou usa para chmar ex: p1.imc() quado e uma função
//se e uma primitivo e so o nome ex: p1.fala

console.log('/////////////////////////////////////')
console.log(p1.nome);//junior
console.log(p1.sobrenome);//Hennemann
console.log(p1.imc());//24.69
p1.nomeCompleto = 'carlos Eduardo';
console.log(p1.nomeCompleto);//carlos Eduardo


//nessa aula aprendi como fazer um getter um setter e um metodo normal e usar o this
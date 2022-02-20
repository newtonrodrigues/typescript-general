interface Time {
    nome: string;
    hino: string;
    cores: string[];
    estadio: string;
    idade: number;
    dataCriacao: Date;
    cidade: string;
    estado: string;
}   // declaração tipada de um dado estruturado. 
    // Interface é um conjunto de propriedades
    // Quem chama a interface tem que atribuir um valor e instanciar a propriedade
    // Pode construir a interface sem instanciá-la
    // Uma interface pode ter como um de seus atributos
    // outra chamada de outra interface
    interface Jogador {
        nome: string
        numero: number
        idade: number
        time: Time
    }
    var joao: Jogador
    joao.nome = "João da Silva"
    joao.numero = 9
    joao.idade = 33
    joao.time.nome = "Palmeiras"


    var palmeiras: Time
    palmeiras.cidade = "SP"
    palmeiras.idade = 100
    palmeiras.estado = "São Paulo"
    palmeiras.cores = [
        "Verde",
        "Branco"
    ]
     var dado = {
         nome: "João",
         cpf: "123456",
         filhos: [
             {
                 nome: "Joaozinho",
                 idade: 14
             },
             {
                nome: "Maria",
                idade: 18
            }
         ]
     }

     var nome = "Newton"
     var texto = `Meu nome é: ${nome}`
     texto = "Meu nome é: " + nome

     function somar(): number {
         return 1 + 1
     }

     var numero: number = somar()
     console.log(numero)

     function acrescimo() {
         if (1==1) 
             return "É igual"
         if (1!=1) 
             return 2
     }

     var retorno = acrescimo()
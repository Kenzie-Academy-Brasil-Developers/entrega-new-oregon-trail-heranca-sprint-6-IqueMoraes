# language: pt

Funcionalidade: Caçador
    Como um Hunter
    Devo caçar e garantir a minha comida
    E também as comidas dos passageiros
    Para que eu possa continuar a viagem saudável.

    Contexto:
        Dado um Hunter de nome "Antonio"
        E ele sempre começa a viagem com 2 refeições
        E ele sempre começa a viagem saudável

    Cenário: Caçou para conseguir mais refeições
        Quando o Hunter sair para caçar 1 vezes
        Então a quantidade de refeições deverá ser igual a 7
        
    Cenário: Comeu e seguiu saudável
        Quando o Hunter parar para comer 1 vezes
        Então a quantidade de refeições deverá ser igual a 0
        E o Hunter não ficará doente

    Cenário: Comeu e ficou doente
        Quando o Hunter parar para comer 2 vezes
        Então a quantidade de refeições deverá ser igual a 0
        E o Hunter ficará doente

    Cenário: Saiu para caçar, comeu e seguiu saudável
        Quando o Hunter sair para caçar 2 vezes
        E o Hunter parar para comer 2 vezes
        Então a quantidade de refeições deverá ser igual a 8
        E o Hunter não ficará doente


    Cenário: Dividiu suas refeições com outros passageiros
        Quando lhe pediram para dar suas 2 refeições
        Então a quantidade de refeições deverá ser igual a 0


    Cenário: Não dividiu suas refeições com outros passageiros
        Quando lhe pediram para dar suas 4 refeições
        Então a quantidade de refeições deverá ser igual a 2
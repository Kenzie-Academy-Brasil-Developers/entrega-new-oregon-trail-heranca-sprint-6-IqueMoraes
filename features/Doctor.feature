# language: pt

Funcionalidade: Medico
    Como um Doctor
    Devo cuidar dos viajantes
    Para que possamos todos continuar a viagem saudável.

    Contexto:
        Dado um Doctor de nome "Joseph"
        E ele já inicia a viagem saudável
        

    Cenário: Um traveler ficou doente
        Quando um dos travelers de nome <name> que está com saúde <isHealthy> 
            | name   | isHealthy |
            | Sergio | true      |
            | Simone | true      |
            | Samuel | true      |
            | Sandra | true      |
            | João   | true      |
            | Diego  | false     |
            | Diana  | false     |
        Então todos os 7 passageiros estarão saudáveis


    Cenário: Um traveler específico ficou doente
        Dado um traveler de nome 'Sergio' com a saúde prejudicada
        Quando 'Sergio' se torna paciente do Medico ele
        Então terá sua saúde recuperada

    Cenário: Um traveler específico saudável
        Dado um traveler de nome 'Sergio' com boa saúde
        Quando 'Sergio' se encontra com o Medico ele
        Então se manterá saudável

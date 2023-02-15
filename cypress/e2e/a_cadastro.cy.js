import cadastro from "../support/pages/cadastro"

describe('Acesso ao Cadastro de Pessoa - Sig Folha', () => {
    beforeEach(() => {
       cy.visit('http://167.250.26.147:8080/sigAutomacao/app.html#/folha/pessoa')
       cy.contains("Sistema Integrado de Gestão")
       cy.get('[type="text"]').type("automacao")
       cy.get('[type="password"]').type("1010")
       cy.get('[type="submit"]').click()
    
       cy.intercept('GET', '**/sigAutomacao/rest/menu/getMenu?modulo=menu')
       .as('login')
       cy.wait('@login')  
    })
    
     it('Executa Inserção de Dados', () => {
       cadastro.elements.nome().type("Teste Page Object")
       cadastro.elements.pis().type("680.68387.85-6")
       cadastro.elements.cpf().type("742.258.010-04")
       cadastro.elements.dataNascimento().type("03/09/1987")
       cadastro.elements.sexo().type('Feminino','{downArrow}').type('{enter}')
       cadastro.elements.estadoCivil().click().type('Solteiro','{downArrow}').type('{enter}')
       cadastro.elements.grauInstrucao().click().type('Superior Completo','{downArrow}').type('{enter}')
       cadastro.elements.curso().type("7")
       cadastro.elements.nomeMae().type("Antonia de Jesus")
       cadastro.elements.nacionalidade().click().type('Brasileiro','{downArrow}').type('{enter}')
       cadastro.elements.naturalidade().type("5305427")
       cadastro.elements.salvar().click()
       cadastro.elements.validacaoSucesso()
     })
   
   })
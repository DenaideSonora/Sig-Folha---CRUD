import alteracao from "../support/pages/alteracao"

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

    it('Executa Edição de Dados', () => {
      //alteracao.elements.limpar().click()
      alteracao.elements.pesquisaCodigo().click()
      alteracao.elements.pesquisaNome().click().type("Teste Page Object", {delay: 0}).should("be.visible").wait(3000)
      alteracao.elements.pesquisarBotao().click()
      alteracao.elements.carregarBotao().first().click()
      alteracao.elements.grauInstrucao().click().type("Tecnólogo", '{downArrow}').type('{enter}')
      alteracao.elements.curso().click().clear().type('17', '{downArrow}').type('{enter}')
      alteracao.elements.salvar().click()
      alteracao.elements.validacaoSucesso()   
    })    
})

//comando para dar duas setas para baixo
//alteracao.elements.curso().click().clear().type('17', '{downArrow}').type('{downArrow}').type('{enter}')
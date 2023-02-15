import exclusao from "../support/pages/exclusao"

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

    it('Exclusão', () => {
        exclusao.elements.limpar().click()
        exclusao.elements.pesquisaCodigo().click().should("be.visible")
        exclusao.elements.pesquisaNome().click().type("Teste Page Object").should("be.visible")
        //exclusao.elements.pesquisaNome().click().type("Teste Page Object", {delay: 0}).should("be.visible").wait(3000)
        exclusao.elements.pesquisarBotao().click().should("be.visible")
        exclusao.elements.carregarBotao().first().click()
        exclusao.elements.excluirBotao().click()
        exclusao.elements.confirmacao().click()
        exclusao.elements.validacaoSucesso().should("be.visible", "Registro excluído com sucesso!")
    })  
})
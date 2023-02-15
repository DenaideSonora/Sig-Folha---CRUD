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
 

  it('Cadastro dos Campos Obrigatórios', () => {
    cy.get('input[nat="cadastroPessoaFolhaNome"]').click().type("Cadastro com Código Resumido", {delay: 0}).should("be.visible")
    cy.get('input[nat="cadastroPessoaFolhaNumeroPis"]').click().type("358.10045.93-4", {delay: 0}).should("be.visible")
    cy.get('input[nat="cadastroPessoaFolhaCpf"]').click().type("295.571.150-09", {delay: 0}).should("be.visible")
    cy.get('input[nat="cadastroPessoaFolhaDadosPessoaisDataNascimento"]').click().type("01/03/2002", {delay: 0}).should("be.visible")
    cy.get('[nat="cadastroPessoaFolhaDadosPessoaisSexoSelect"]').click().type("Masculino", {delay: 0}).type('{enter}').should("be.visible")
    cy.get('[nat="cadastroPessoaFolhaDadosPessoaisEstadoCivilSelect"]').click().type("Casado", {delay: 0}).type('{enter}').should("be.visible")
    cy.get('[nat="cadastroPessoaFolhaDadosPessoaisGrauInstrucaoSelect"]').click().type("Superior Completo", {delay: 0}).type('{enter}').should("be.visible")
    cy.get('input[nat="cadastroPessoaFolhaDadosPessoaisCurso"]').click().type('7', {delay: 0}).type('{enter}').should('be.visible')
    cy.get('input[nat="cadastroPessoaFolhaDadosPessoaisNomeMae"]').click().type("Antonia de Jesus", { delay: 0}).should("be.visible")
    cy.get('[nat="cadastroPessoaFolhaDadosPessoaisNacionalidadeSelect"]').click().type('10 - Brasileiro {enter}', {Delay: 10}).should('be.visible')
    cy.get('input[nat="cadastroPessoaFolhaDadosPessoaisNaturalidade"]').click().type('5301183', { delay: 0}).type('{enter}').should('be.visible')
    cy.get('[nat="cadastroPessoaFolhaCrudSalvar"]').click()
    cy.get('.md-toast-content').should("be.visible", "Registro salvo com sucesso!")
  })

  it('Alteração dos Campos', () => {
    cy.get('[nat="cadastroPessoaFolhaCrudLimpar"]').click().should("be.visible")
    cy.get('[nat="cadastroPessoaFolhaCodigoPesquisa"]').click().should("be.visible")
    cy.get('input[nat="pesquisaPessoaNome"]').click().type("Cadastro com Código Resumido", {delay: 0}).should("be.visible")
    cy.get('[nat="pesquisaPessoaPesquisaPesquisar"]').click().should("be.visible")
    cy.get('[nat="botaoCarregar"]').first().click().should("be.visible")
    cy.get('[nat="cadastroPessoaFolhaDadosPessoaisGrauInstrucaoSelect"]').click().type("Doutorado", {delay: 0}).type('{enter}').should("be.visible")
    cy.get('input[nat="cadastroPessoaFolhaDadosPessoaisCurso"]').click().clear().type('5', {delay: 0}).should('be.visible')
    cy.get('[nat="cadastroPessoaFolhaCrudSalvar"]').click().should("be.visible")
    cy.get('.md-toast-content').should("be.visible", "Registro salvo com sucesso!")
  })

  it('Exclusão do Registro de Usuário', () => {
    cy.get('[nat="cadastroPessoaFolhaCrudLimpar"]').click().should("be.visible")
    cy.get('[nat="cadastroPessoaFolhaCodigoPesquisa"]').click().should("be.visible")
    cy.get('input[nat="pesquisaPessoaNome"]').click().type("Cadastro com Código Resumido", {delay: 0}).should("be.visible").wait(3000)
    cy.get('[nat="pesquisaPessoaPesquisaPesquisar"]').click().should("be.visible")
    cy.get('[nat="botaoCarregar"]').first().click()
    cy.get('[nat="cadastroPessoaFolhaCrudExcluir"]').click()
    cy.get('.modal-footer > .btn-default').click()
    cy.get('.md-toast-text').should("be.visible", "Registro excluído com sucesso!")
  })

})


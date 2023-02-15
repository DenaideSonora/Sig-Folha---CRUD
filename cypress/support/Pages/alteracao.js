class alteracao {

    elements = {
       //limpar: () => cy.get('[nat="cadastroPessoaFolhaCrudLimpar"]'),
       pesquisaCodigo: () => cy.get('[nat="cadastroPessoaFolhaCodigoPesquisa"]'),
       pesquisaNome: () => cy.get('input[nat="pesquisaPessoaNome"]'),
       pesquisarBotao: () => cy.get('[nat="pesquisaPessoaPesquisaPesquisar"]'),
       carregarBotao: () => cy.get('[nat="botaoCarregar"]'),
       grauInstrucao: () => cy.get('[nat="cadastroPessoaFolhaDadosPessoaisGrauInstrucaoSelect"]'),
       curso: () => cy.get('input[nat="cadastroPessoaFolhaDadosPessoaisCurso"]'),
       salvar: () => cy.get('[nat="cadastroPessoaFolhaCrudSalvar"]'),
       validacaoSucesso: () => cy.get('.md-toast-content')
    }

    // fillLimpar(limpar){
    //     this.elements.limpar().click()
    // }

    fillPesquisaCodigo(pesquisaCodigo){
        this.elements.pesquisaCodigo().click().should("be.visible")
    }   
    
    fillPesquisaNome(pesquisaNome){
        this.elements.pesquisaNome().click().type(pesquisaNome, {delay: 0}).should("be.visible")
    }

    fillPesquisarBotao(pesquisarBotao){
        this.elements.pesquisarBotao().click().should("be.visible")
    }

    fillCarregarBotao(carregarBotao){
        this.elements.carregarBotao().first().click().should("be.visible")
    }

    fillGrauInstrucao(grauInstrucao){
        this.elements.grauInstrucao().click().type(grauInstrucao, {delay: 0}).type('{enter}').should("be.visible")
    }

    fillCurso(curso){
        this.elements.curso().click().clear().type(curso, {delay: 0}).should('be.visible')
    }

    fillSalvar(salvar){
        this.elements.salvar().click().should("be.visible")
    }

    fillValidacaoSucesso(validacaoSucesso){
        this.elements.validacaoSucesso().should("be.visible", "Registro salvo com sucesso!")
    }
    
}

export default new alteracao();
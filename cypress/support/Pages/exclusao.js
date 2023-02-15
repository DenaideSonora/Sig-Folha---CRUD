class exclusao {

    elements = {
        limpar: () => cy.get('[nat="cadastroPessoaFolhaCrudLimpar"]'),
        pesquisaCodigo: () => cy.get('[nat="cadastroPessoaFolhaCodigoPesquisa"]'),
        pesquisaNome: () => cy.get('input[nat="pesquisaPessoaNome"]'),
        pesquisarBotao: () => cy.get('[nat="pesquisaPessoaPesquisaPesquisar"]'),
        carregarBotao: () => cy.get('[nat="botaoCarregar"]'),
        excluirBotao: () => cy.get('[nat="cadastroPessoaFolhaCrudExcluir"]'),
        confirmacao: () => cy.get('.modal-footer > .btn-default'),
        validacaoSucesso: () => cy.get('.md-toast-content')
    }

    fillLimpar(limpar){
        this.elements.limpar().click()
    }

    fillPesquisaCodigo(pesquisaCodigo){
        this.elements.pesquisaCodigo().click().should("be.visible")
    }

    fillPesquisaNome(pesquisaNome){
        this.elements.pesquisaNome().click().type("Cadastro com Código Resumido", {delay: 0}).should("be.visible").wait(3000)
    }

    fillPesquisarBotao(pesquisarBotao){
        this.elements.pesquisarBotao().click().should("be.visible")
    }

    fillCarregarBotao(carregarBotao){
        this.elements.carregarBotao().first().click()
    }

    fillExcluirBotao(excluirBotao){
        this.elements.excluirBotao().click()
    }

    fillConfirmacao(confirmacao){
        this.elements.confirmacao().click()
    }

    fillValidacaoSucesso(validacaoSucesso){
        this.elements.validacaoSucesso().should("be.visible", "Registro excluído com sucesso!")
    }
}

export default new exclusao();
class cadastro {

    elements = {
        nome: () => cy.get('input[nat="cadastroPessoaFolhaNome"]'),
        pis: () => cy.get('input[nat="cadastroPessoaFolhaNumeroPis"]'),
        cpf: () => cy.get('input[nat="cadastroPessoaFolhaCpf"]'),
        dataNascimento: () => cy.get('input[nat="cadastroPessoaFolhaDadosPessoaisDataNascimento"]'),
        sexo: () => cy.get('[nat="cadastroPessoaFolhaDadosPessoaisSexoSelect"]'),
        estadoCivil: () => cy.get('[nat="cadastroPessoaFolhaDadosPessoaisEstadoCivilSelect"]'),
        grauInstrucao: () => cy.get('[nat="cadastroPessoaFolhaDadosPessoaisGrauInstrucaoSelect"]'),
        curso: () => cy.get('input[nat="cadastroPessoaFolhaDadosPessoaisCurso"]'),
        nomeMae: () => cy.get('input[nat="cadastroPessoaFolhaDadosPessoaisNomeMae"]'),
        nacionalidade: () => cy.get('[nat="cadastroPessoaFolhaDadosPessoaisNacionalidadeSelect"]'),
        naturalidade: () => cy.get('input[nat="cadastroPessoaFolhaDadosPessoaisNaturalidade"]'),
        salvar: () => cy.get('[nat="cadastroPessoaFolhaCrudSalvar"]'),
        validacaoSucesso: () => cy.get('.md-toast-content')
    }

    fillNome(nome){
        this.elements.nome().click().type(nome, {delay: 0}).should("be.visible").wait(3000)
    }

    fillPis(pis){
        this.elements.pis().click().type(pis, {delay: 0}).should("be.visible")
    }

    fillCPF(cpf){
        this.elements.cpf().click().type(cpf, {delay: 0}).should("be.visible")
    }

    fillDataNascimento(dataNascimento){
        this.elements.dataNascimento().click().type(dataNascimento, {delay: 0}).should("be.visible")
    }

    fillSexo(sexo){
        this.elements.sexo().click().type(sexo, {delay: 10}).type({enter}).should("be.visible")
        
    }

    fillEstadoCivil(estadoCivil){
        this.elements.estadoCivil().click().type(estadoCivil, {delay: 0}).type('{enter}').should("be.visible")
    }

    fillGrauIntrucao(grauInstrucao){
        this.elements.grauInstrucao().click().type(grauInstrucao, {delay: 0}).type('{enter}').should("be.visible")
    }

    fillCurso(curso){
        this.elements.curso().click().type(curso, {delay: 0}).type('{enter}').should('be.visible')
    }

    fillNomeMae(nomeMae){
        this.elements.nomeMae().click().type(nomeMae, {delay: 0}).should("be.visible")
    }

    fillNacionalidade(nacionalidade){
        this.elements.nacionalidade().click().type(nacionalidade, '{enter}', {delay: 10}).should('be.visible')
    }

    fillNaturalidade(naturalidade){
        this.elements.naturalidade().click().type(naturalidade, {delay: 0}).type('{enter}').should('be.visible')
    }

    fillSalvar(salvar){
        this.elements.salvar().click({delay: 0}).should('be.visible')
    }

    fillValidacaoSucesso(validacaoSucesso){
        this.elements.validacaoSucesso().should("be.visible", "Registro salvo com sucesso!")
    }
}

export default new cadastro();


//fillCurso(curso){
 //   this.elements.curso().click().type(curso, {delay: 0}).type('{enter}').should('be.visible')
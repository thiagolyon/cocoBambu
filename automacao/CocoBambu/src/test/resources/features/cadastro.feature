# language: pt

  @cadastro
  Funcionalidade: Usuário realiza cadastro
    Eu como usuário
    Quero me cadastrar
    Para ter acesso aos produtos

    @cadastro-sucesso
    Cenário: Cadastro com sucesso
      Dado que estou na tela de login
      Quando clico no botao Cadastre-se
      E preencho o campo nome completo "Thiago Lyon Souza do Nascimento"
      E preencho o campo email "thiagococo6@bambu.com"
      E preencho o campo senha "CocoBambu23@"
      E preencho o campo confirmar senha "CocoBambu23@"
      E seleciono um estado
      E seleciono o checkbox de notificacoes
      E seleciono o checkbox de termos e condicoes
      E clico no botao aceitar
      E clico no botao cadastrar
      Então o codigo é enviado para o meu email

    @validação-campos-obrigatorios
    Cenário: Validando campos obrigatórios
      Dado que estou na tela de login
      Quando clico no botao Cadastre-se
      E clico no campo Nome completo
      E clico fora do campo Nome completo
      E clico no campo Email
      E clico fora do campo Email
      E clico no campo Senha
      E clico fora do campo Senha
      E clico no campo Confirmar senha
      E clico fora do campo Confirmar senha
      Então a aplicacao deve exibir as mensagem de campos obrigatórios

    @validacao-campo-nome-um-caractere
    Cenário: Validando campo nome completo com um caractere
      Dado que estou na tela de login
      Quando clico no botao Cadastre-se
      E preencho o campo nome completo com um caractere "a"
      Então a aplicacao deve exibir a mensagem Nome completo deve conter mais de dois caracteres

    @validacao-campo-nome-tres-caracteres
    Cenário: Validando campo nome completo tres caracteres
      Dado que estou na tela de login
      Quando clico no botao Cadastre-se
      E preencho o campo nome completo com um caractere "aaa"
      Então a aplicacao deve exibir a mensagem Digite seu nome completo

    @validacao-campo-email
    Cenário: Validando campo Email
      Dado que estou na tela de login
      Quando clico no botao Cadastre-se
      E preencho o campo email "thiago"
      Então a aplicacao deve exibir a mensagem Email invalido

    @validacao-campo-senha
    Cenário: Validando campo senha
      Dado que estou na tela de login
      Quando clico no botao Cadastre-se
      E preencho o campo senha "ASDQW"
      Então a aplicacao deve exibir a mensagem Senha deve conter no minimo seis caracteres

    @validacao-campo-senha-seis-caracteres
    Cenário: Validando campo senha com seis caracteres
      Dado que estou na tela de login
      Quando clico no botao Cadastre-se
      E preencho o campo senha "asdqwe"
      Então a aplicacao deve exibir a mensagem Sua senha deve conter no minimo um caractere maiusculo

    @validacao-campo-senha-seis-caracteres-um-maisculo
    Cenário: Validando campo senha com seis caracateres com um caractere maiusculo
      Dado que estou na tela de login
      Quando clico no botao Cadastre-se
      E preencho o campo senha "asdqweA"
      Então a aplicacao deve exibir a mensagem Sua senha deve conter no minimo um caractere especial
# language: pt

  @login
  Funcionalidade: Login do usuário
    Eu como usuário cadastrado
    Quero Realizaro login na minha conta
    Para poder realizar meus pedidos

  Contexto: Acessar tela login
    Dado que estou na tela de login

  @login-sucesso
  Cenário: Login com sucesso
    Quando preencho o campo Email com "thiago.lyon.passos@gmail.com" valido
    E preencho o campo Senha com "9KrDv$H39diPHZ" valida
    E clico no botao entrar
    E preencho o campo auteticacao com o codigo recebido
    E clico no botao acessar
    Então a aplicacao deve ser redirecionada para a tela de delivery


  @login-email-invalido
  Cenário: Usuário realiza login com um email invalido
    Quando preencho o campo Email com "thiago" valido
    Então a aaplicacao deve exibir a mensagem de Email invalido

  @login-email-vazio
    Cenário: Login com email vazio
      Quando não preencho o campo Email
      Então a aplicacao deve exibir a mensagem Email é obrigatorio

  @login-senha-incorreta
    Cenário: Usuário digita senha errada
      Quando preencho o campo Email com "thiago.lyon.passos@gmail.com" valido
      E preencho o campo Senha com a senha errada "senhaerrada"
      E clico no botao entrar
      Então a aplicacao deve exibir a mensagem Email ou senha invalidos

  @login-senha-vazio
    Cenário: Usuário não preenche o campo senha
      Quando preencho o campo Email com "thiago.lyon.passos@gmail.com" valido
      E não preencho o campo senha
      Então a aplicacao deve exibir a mensagem Senha é obrigatoria

  @senha-invalida
    Cenário: Usuário digitou senha com menos de 6 caracteres
      Quando preencho o campo Email com "thiago.lyon.passos@gmail.com" valido
      E preencho o campo Senha com menos que seis caracteres "Senha"
      Então a aplicacao deve exibir a mensagem Senha deve conter no mínimo seis caracteres

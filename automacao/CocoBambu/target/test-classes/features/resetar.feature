# language: pt

  @resetar
  Funcionalidade: Resetar e redefinir senha
    Cenário: Usuário deseja resetar e redefinir senha
      Dado que estou na tela de login
      Quando clico no botao Resetar senha
      E preencho o email "thiago.lyon.passos@gmail.com"
      E clico no botao RECUPERAR
      E clico no botao OK
      Então o email de redefinir senha é enviado
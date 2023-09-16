$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("resetar.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 4,
  "name": "Resetar e redefinir senha",
  "description": "",
  "id": "resetar-e-redefinir-senha",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@resetar"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Usuário deseja resetar e redefinir senha",
  "description": "",
  "id": "resetar-e-redefinir-senha;usuário-deseja-resetar-e-redefinir-senha",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 6,
  "name": "que estou na tela de login",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "clico no botao Resetar senha",
  "keyword": "Quando "
});
formatter.step({
  "line": 8,
  "name": "preencho o email \"thiago.lyon.passos@gmail.com\"",
  "keyword": "E "
});
formatter.step({
  "line": 9,
  "name": "clico no botao RECUPERAR",
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "clico no botao OK",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "o email de redefinir senha é enviado",
  "keyword": "Então "
});
formatter.match({
  "location": "LoginSteps.que_estou_na_tela_de_login()"
});
formatter.result({
  "duration": 2903227800,
  "status": "passed"
});
formatter.match({
  "location": "ResetarSteps.clico_no_botao_Resetar_senha()"
});
formatter.result({
  "duration": 84668300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "thiago.lyon.passos@gmail.com",
      "offset": 18
    }
  ],
  "location": "ResetarSteps.preencho_o_email(String)"
});
formatter.result({
  "duration": 724333700,
  "status": "passed"
});
formatter.match({
  "location": "ResetarSteps.clico_no_botao_RECUPERAR()"
});
formatter.result({
  "duration": 78838499,
  "status": "passed"
});
formatter.match({
  "location": "ResetarSteps.clico_no_botao_OK()"
});
formatter.result({
  "duration": 73831599,
  "status": "passed"
});
formatter.match({
  "location": "ResetarSteps.o_email_de_redefinir_senha_é_enviado()"
});
formatter.result({
  "duration": 54865900,
  "status": "passed"
});
});
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 4,
  "name": "Login do usuário",
  "description": "Eu como usuário cadastrado\r\nQuero Realizaro login na minha conta\r\nPara poder realizar meus pedidos",
  "id": "login-do-usuário",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    }
  ]
});
formatter.background({
  "line": 9,
  "name": "Acessar tela login",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 10,
  "name": "que estou na tela de login",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.que_estou_na_tela_de_login()"
});
formatter.result({
  "duration": 2946825400,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login com sucesso",
  "description": "",
  "id": "login-do-usuário;login-com-sucesso",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 12,
      "name": "@login-sucesso"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "preencho o campo Email com \"thiago.lyon.passos@gmail.com\" valido",
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "preencho o campo Senha com \"9KrDv$H39diPHZ\" valida",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "clico no botao entrar",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "preencho o campo auteticacao com o codigo recebido",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "clico no botao acessar",
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "a aplicacao deve ser redirecionada para a tela de delivery",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "thiago.lyon.passos@gmail.com",
      "offset": 28
    }
  ],
  "location": "LoginSteps.preencho_o_campo_Email_com_valido(String)"
});
formatter.result({
  "duration": 119887599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9KrDv$H39diPHZ",
      "offset": 28
    }
  ],
  "location": "LoginSteps.preencho_o_campo_Senha_com_valida(String)"
});
formatter.result({
  "duration": 80759400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clico_no_botao_entrar()"
});
formatter.result({
  "duration": 72975800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.preencho_o_campo_auteticacao_com_o_codigo_recebido()"
});
formatter.result({
  "duration": 1575933200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clico_no_botao_acessar()"
});
formatter.result({
  "duration": 7000624600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.a_aplicacao_deve_ser_redirecionada_para_a_tela_de_delivery()"
});
formatter.result({
  "duration": 15500,
  "status": "passed"
});
formatter.after({
  "duration": 1103800,
  "status": "passed"
});
formatter.after({
  "duration": 1021800,
  "status": "passed"
});
formatter.after({
  "duration": 509900,
  "status": "passed"
});
formatter.background({
  "line": 9,
  "name": "Acessar tela login",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 10,
  "name": "que estou na tela de login",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.que_estou_na_tela_de_login()"
});
formatter.result({
  "duration": 3103043800,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Usuário realiza login com um email invalido",
  "description": "",
  "id": "login-do-usuário;usuário-realiza-login-com-um-email-invalido",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 22,
      "name": "@login-email-invalido"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "preencho o campo Email com \"thiago\" valido",
  "keyword": "Quando "
});
formatter.step({
  "line": 25,
  "name": "a aaplicacao deve exibir a mensagem de Email invalido",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "thiago",
      "offset": 28
    }
  ],
  "location": "LoginSteps.preencho_o_campo_Email_com_valido(String)"
});
formatter.result({
  "duration": 86886800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.a_aaplicacao_deve_exibir_a_mensagem_de_Email_invalido()"
});
formatter.result({
  "duration": 34400,
  "status": "passed"
});
formatter.after({
  "duration": 78400,
  "status": "passed"
});
formatter.after({
  "duration": 95701,
  "status": "passed"
});
formatter.after({
  "duration": 64600,
  "status": "passed"
});
formatter.background({
  "line": 9,
  "name": "Acessar tela login",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 10,
  "name": "que estou na tela de login",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.que_estou_na_tela_de_login()"
});
formatter.result({
  "duration": 2983496100,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Login com email vazio",
  "description": "",
  "id": "login-do-usuário;login-com-email-vazio",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 27,
      "name": "@login-email-vazio"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "não preencho o campo Email",
  "keyword": "Quando "
});
formatter.step({
  "line": 30,
  "name": "a aplicacao deve exibir a mensagem Email é obrigatorio",
  "keyword": "Então "
});
formatter.match({
  "location": "LoginSteps.não_preencho_o_campo_Email()"
});
formatter.result({
  "duration": 147697799,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.a_aplicacao_deve_exibir_a_mensagem_Email_é_obrigatorio()"
});
formatter.result({
  "duration": 49207900,
  "status": "passed"
});
formatter.after({
  "duration": 37300,
  "status": "passed"
});
formatter.after({
  "duration": 39600,
  "status": "passed"
});
formatter.after({
  "duration": 38899,
  "status": "passed"
});
formatter.background({
  "line": 9,
  "name": "Acessar tela login",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 10,
  "name": "que estou na tela de login",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.que_estou_na_tela_de_login()"
});
formatter.result({
  "duration": 3007444200,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Usuário digita senha errada",
  "description": "",
  "id": "login-do-usuário;usuário-digita-senha-errada",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 32,
      "name": "@login-senha-incorreta"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "preencho o campo Email com \"thiago.lyon.passos@gmail.com\" valido",
  "keyword": "Quando "
});
formatter.step({
  "line": 35,
  "name": "preencho o campo Senha com a senha errada \"senhaerrada\"",
  "keyword": "E "
});
formatter.step({
  "line": 36,
  "name": "clico no botao entrar",
  "keyword": "E "
});
formatter.step({
  "line": 37,
  "name": "a aplicacao deve exibir a mensagem Email ou senha invalidos",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "thiago.lyon.passos@gmail.com",
      "offset": 28
    }
  ],
  "location": "LoginSteps.preencho_o_campo_Email_com_valido(String)"
});
formatter.result({
  "duration": 109354000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "senhaerrada",
      "offset": 43
    }
  ],
  "location": "LoginSteps.preencho_o_campo_Senha_com_a_senha_errada(String)"
});
formatter.result({
  "duration": 78559200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clico_no_botao_entrar()"
});
formatter.result({
  "duration": 72932000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.a_aplicacao_deve_exibir_a_mensagem_Email_ou_senha_invalidos()"
});
formatter.result({
  "duration": 604501601,
  "status": "passed"
});
formatter.after({
  "duration": 35101,
  "status": "passed"
});
formatter.after({
  "duration": 40001,
  "status": "passed"
});
formatter.after({
  "duration": 26500,
  "status": "passed"
});
formatter.background({
  "line": 9,
  "name": "Acessar tela login",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 10,
  "name": "que estou na tela de login",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.que_estou_na_tela_de_login()"
});
formatter.result({
  "duration": 3046947001,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Usuário não preenche o campo senha",
  "description": "",
  "id": "login-do-usuário;usuário-não-preenche-o-campo-senha",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 39,
      "name": "@login-senha-vazio"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "preencho o campo Email com \"thiago.lyon.passos@gmail.com\" valido",
  "keyword": "Quando "
});
formatter.step({
  "line": 42,
  "name": "não preencho o campo senha",
  "keyword": "E "
});
formatter.step({
  "line": 43,
  "name": "a aplicacao deve exibir a mensagem Senha é obrigatoria",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "thiago.lyon.passos@gmail.com",
      "offset": 28
    }
  ],
  "location": "LoginSteps.preencho_o_campo_Email_com_valido(String)"
});
formatter.result({
  "duration": 114243800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.não_preencho_o_campo_senha()"
});
formatter.result({
  "duration": 158244499,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.a_aplicacao_deve_exibir_a_mensagem_Senha_é_obrigatoria()"
});
formatter.result({
  "duration": 50877000,
  "status": "passed"
});
formatter.after({
  "duration": 38300,
  "status": "passed"
});
formatter.after({
  "duration": 37000,
  "status": "passed"
});
formatter.after({
  "duration": 27999,
  "status": "passed"
});
formatter.background({
  "line": 9,
  "name": "Acessar tela login",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 10,
  "name": "que estou na tela de login",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.que_estou_na_tela_de_login()"
});
formatter.result({
  "duration": 3024801100,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Usuário digitou senha com menos de 6 caracteres",
  "description": "",
  "id": "login-do-usuário;usuário-digitou-senha-com-menos-de-6-caracteres",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 45,
      "name": "@senha-invalida"
    }
  ]
});
formatter.step({
  "line": 47,
  "name": "preencho o campo Email com \"thiago.lyon.passos@gmail.com\" valido",
  "keyword": "Quando "
});
formatter.step({
  "line": 48,
  "name": "preencho o campo Senha com menos que seis caracteres \"Senha\"",
  "keyword": "E "
});
formatter.step({
  "line": 49,
  "name": "a aplicacao deve exibir a mensagem Senha deve conter no mínimo seis caracteres",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "thiago.lyon.passos@gmail.com",
      "offset": 28
    }
  ],
  "location": "LoginSteps.preencho_o_campo_Email_com_valido(String)"
});
formatter.result({
  "duration": 107957000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Senha",
      "offset": 54
    }
  ],
  "location": "LoginSteps.preencho_o_campo_Senha_com_menos_que_seis_caracteres(String)"
});
formatter.result({
  "duration": 75482600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.a_aplicacao_deve_exibir_a_mensagem_Senha_deve_conter_no_mínimo_seis_caracteres()"
});
formatter.result({
  "duration": 44146400,
  "status": "passed"
});
formatter.after({
  "duration": 40499,
  "status": "passed"
});
formatter.after({
  "duration": 42601,
  "status": "passed"
});
formatter.after({
  "duration": 44500,
  "status": "passed"
});
});
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cadastro.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 4,
  "name": "Usuário realiza cadastro",
  "description": "Eu como usuário\r\nQuero me cadastrar\r\nPara ter acesso aos produtos",
  "id": "usuário-realiza-cadastro",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@cadastro"
    }
  ]
});
formatter.scenario({
  "line": 10,
  "name": "Cadastro com sucesso",
  "description": "",
  "id": "usuário-realiza-cadastro;cadastro-com-sucesso",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 9,
      "name": "@cadastro-sucesso"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "que estou na tela de login",
  "keyword": "Dado "
});
formatter.step({
  "line": 12,
  "name": "clico no botao Cadastre-se",
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "preencho o campo nome completo \"Thiago Lyon Souza do Nascimento\"",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "preencho o campo email \"thiagococo5@bambu.com\"",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "preencho o campo senha \"CocoBambu23@\"",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "preencho o campo confirmar senha \"CocoBambu23@\"",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "seleciono um estado",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "seleciono o checkbox de notificacoes",
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "seleciono o checkbox de termos e condicoes",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "clico no botao aceitar",
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "clico no botao cadastrar",
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "o codigo é enviado para o meu email",
  "keyword": "Então "
});
formatter.match({
  "location": "LoginSteps.que_estou_na_tela_de_login()"
});
formatter.result({
  "duration": 3111289800,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.clico_no_botao_Cadastre_se()"
});
formatter.result({
  "duration": 105616500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thiago Lyon Souza do Nascimento",
      "offset": 32
    }
  ],
  "location": "CadastroSteps.preencho_o_campo_nome_completo(String)"
});
formatter.result({
  "duration": 131653700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "thiagococo5@bambu.com",
      "offset": 24
    }
  ],
  "location": "CadastroSteps.preencho_o_campo_email(String)"
});
formatter.result({
  "duration": 109235900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CocoBambu23@",
      "offset": 24
    }
  ],
  "location": "CadastroSteps.preencho_o_campo_senha(String)"
});
formatter.result({
  "duration": 91342600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CocoBambu23@",
      "offset": 34
    }
  ],
  "location": "CadastroSteps.preencho_o_campo_confirmar_senha(String)"
});
formatter.result({
  "duration": 86415400,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.seleciono_um_estado()"
});
formatter.result({
  "duration": 3359665300,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.seleciono_o_checkbox_de_notificacoes()"
});
formatter.result({
  "duration": 79328300,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.seleciono_o_checkbox_de_termos_e_condicoes()"
});
formatter.result({
  "duration": 96959500,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.clico_no_botao_aceitar()"
});
formatter.result({
  "duration": 270731200,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.clico_no_botao_cadastrar()"
});
formatter.result({
  "duration": 81077700,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.o_codigo_é_enviado_para_o_meu_email()"
});
formatter.result({
  "duration": 1206564900,
  "status": "passed"
});
formatter.after({
  "duration": 1100200,
  "status": "passed"
});
formatter.after({
  "duration": 58500,
  "status": "passed"
});
formatter.after({
  "duration": 1909000,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Validando campos obrigatórios",
  "description": "",
  "id": "usuário-realiza-cadastro;validando-campos-obrigatórios",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 24,
      "name": "@validação-campos-obrigatorios"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "que estou na tela de login",
  "keyword": "Dado "
});
formatter.step({
  "line": 27,
  "name": "clico no botao Cadastre-se",
  "keyword": "Quando "
});
formatter.step({
  "line": 28,
  "name": "clico no campo Nome completo",
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "clico fora do campo Nome completo",
  "keyword": "E "
});
formatter.step({
  "line": 30,
  "name": "clico no campo Email",
  "keyword": "E "
});
formatter.step({
  "line": 31,
  "name": "clico fora do campo Email",
  "keyword": "E "
});
formatter.step({
  "line": 32,
  "name": "clico no campo Senha",
  "keyword": "E "
});
formatter.step({
  "line": 33,
  "name": "clico fora do campo Senha",
  "keyword": "E "
});
formatter.step({
  "line": 34,
  "name": "clico no campo Confirmar senha",
  "keyword": "E "
});
formatter.step({
  "line": 35,
  "name": "clico fora do campo Confirmar senha",
  "keyword": "E "
});
formatter.step({
  "line": 36,
  "name": "a aplicacao deve exibir as mensagem de campos obrigatórios",
  "keyword": "Então "
});
formatter.match({
  "location": "LoginSteps.que_estou_na_tela_de_login()"
});
formatter.result({
  "duration": 4550857100,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.clico_no_botao_Cadastre_se()"
});
formatter.result({
  "duration": 132678400,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.clico_no_campo_Nome_completo()"
});
formatter.result({
  "duration": 94019600,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.clico_fora_do_campo_Nome_completo()"
});
formatter.result({
  "duration": 82383400,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.clico_no_campo_Email()"
});
formatter.result({
  "duration": 95087300,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.clico_fora_do_campo_Email()"
});
formatter.result({
  "duration": 90913900,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.clico_no_campo_Senha()"
});
formatter.result({
  "duration": 90438200,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.clico_fora_do_campo_Senha()"
});
formatter.result({
  "duration": 91391000,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.clico_no_campo_Confirmar_senha()"
});
formatter.result({
  "duration": 73973900,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.clico_fora_do_campo_Confirmar_senha()"
});
formatter.result({
  "duration": 80660300,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.a_aplicacao_deve_exibir_as_mensagem_de_campos_obrigatórios()"
});
formatter.result({
  "duration": 202859200,
  "status": "passed"
});
formatter.after({
  "duration": 93100,
  "status": "passed"
});
formatter.after({
  "duration": 63700,
  "status": "passed"
});
formatter.after({
  "duration": 79100,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Validando campo nome completo com um caractere",
  "description": "",
  "id": "usuário-realiza-cadastro;validando-campo-nome-completo-com-um-caractere",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 38,
      "name": "@validacao-campo-nome-um-caractere"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "que estou na tela de login",
  "keyword": "Dado "
});
formatter.step({
  "line": 41,
  "name": "clico no botao Cadastre-se",
  "keyword": "Quando "
});
formatter.step({
  "line": 42,
  "name": "preencho o campo nome completo com um caractere \"a\"",
  "keyword": "E "
});
formatter.step({
  "line": 43,
  "name": "a aplicacao deve exibir a mensagem Nome completo deve conter mais de dois caracteres",
  "keyword": "Então "
});
formatter.match({
  "location": "LoginSteps.que_estou_na_tela_de_login()"
});
formatter.result({
  "duration": 5371274100,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.clico_no_botao_Cadastre_se()"
});
formatter.result({
  "duration": 136918900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "a",
      "offset": 49
    }
  ],
  "location": "CadastroSteps.preencho_o_campo_nome_completo_com_um_caractere(String)"
});
formatter.result({
  "duration": 106183900,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.a_aplicacao_deve_exibir_a_mensagem_Nome_completo_deve_conter_mais_de_dois_caracteres()"
});
formatter.result({
  "duration": 47398200,
  "status": "passed"
});
formatter.after({
  "duration": 52100,
  "status": "passed"
});
formatter.after({
  "duration": 31700,
  "status": "passed"
});
formatter.after({
  "duration": 50100,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Validando campo nome completo tres caracteres",
  "description": "",
  "id": "usuário-realiza-cadastro;validando-campo-nome-completo-tres-caracteres",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 45,
      "name": "@validacao-campo-nome-tres-caracteres"
    }
  ]
});
formatter.step({
  "line": 47,
  "name": "que estou na tela de login",
  "keyword": "Dado "
});
formatter.step({
  "line": 48,
  "name": "clico no botao Cadastre-se",
  "keyword": "Quando "
});
formatter.step({
  "line": 49,
  "name": "preencho o campo nome completo com um caractere \"aaa\"",
  "keyword": "E "
});
formatter.step({
  "line": 50,
  "name": "a aplicacao deve exibir a mensagem Digite seu nome completo",
  "keyword": "Então "
});
formatter.match({
  "location": "LoginSteps.que_estou_na_tela_de_login()"
});
formatter.result({
  "duration": 3406589600,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.clico_no_botao_Cadastre_se()"
});
formatter.result({
  "duration": 124274100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aaa",
      "offset": 49
    }
  ],
  "location": "CadastroSteps.preencho_o_campo_nome_completo_com_um_caractere(String)"
});
formatter.result({
  "duration": 160560600,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.a_aplicacao_deve_exibir_a_mensagem_Digite_seu_nome_completo()"
});
formatter.result({
  "duration": 62783900,
  "status": "passed"
});
formatter.after({
  "duration": 120100,
  "status": "passed"
});
formatter.after({
  "duration": 165200,
  "status": "passed"
});
formatter.after({
  "duration": 81400,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Validando campo Email",
  "description": "",
  "id": "usuário-realiza-cadastro;validando-campo-email",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 52,
      "name": "@validacao-campo-email"
    }
  ]
});
formatter.step({
  "line": 54,
  "name": "que estou na tela de login",
  "keyword": "Dado "
});
formatter.step({
  "line": 55,
  "name": "clico no botao Cadastre-se",
  "keyword": "Quando "
});
formatter.step({
  "line": 56,
  "name": "preencho o campo email \"thiago\"",
  "keyword": "E "
});
formatter.step({
  "line": 57,
  "name": "a aplicacao deve exibir a mensagem Email invalido",
  "keyword": "Então "
});
formatter.match({
  "location": "LoginSteps.que_estou_na_tela_de_login()"
});
formatter.result({
  "duration": 6722160000,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.clico_no_botao_Cadastre_se()"
});
formatter.result({
  "duration": 131672100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "thiago",
      "offset": 24
    }
  ],
  "location": "CadastroSteps.preencho_o_campo_email(String)"
});
formatter.result({
  "duration": 107550200,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.a_aplicacao_deve_exibir_a_mensagem_Email_invalido()"
});
formatter.result({
  "duration": 53205500,
  "status": "passed"
});
formatter.after({
  "duration": 45100,
  "status": "passed"
});
formatter.after({
  "duration": 30900,
  "status": "passed"
});
formatter.after({
  "duration": 34800,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "Validando campo senha",
  "description": "",
  "id": "usuário-realiza-cadastro;validando-campo-senha",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 59,
      "name": "@validacao-campo-senha"
    }
  ]
});
formatter.step({
  "line": 61,
  "name": "que estou na tela de login",
  "keyword": "Dado "
});
formatter.step({
  "line": 62,
  "name": "clico no botao Cadastre-se",
  "keyword": "Quando "
});
formatter.step({
  "line": 63,
  "name": "preencho o campo senha \"ASDQW\"",
  "keyword": "E "
});
formatter.step({
  "line": 64,
  "name": "a aplicacao deve exibir a mensagem Senha deve conter no minimo seis caracteres",
  "keyword": "Então "
});
formatter.match({
  "location": "LoginSteps.que_estou_na_tela_de_login()"
});
formatter.result({
  "duration": 3299113700,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.clico_no_botao_Cadastre_se()"
});
formatter.result({
  "duration": 134661300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ASDQW",
      "offset": 24
    }
  ],
  "location": "CadastroSteps.preencho_o_campo_senha(String)"
});
formatter.result({
  "duration": 130499300,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.a_aplicacao_deve_exibir_a_mensagem_Senha_deve_conter_no_minimo_seis_caracteres()"
});
formatter.result({
  "duration": 56154800,
  "status": "passed"
});
formatter.after({
  "duration": 64900,
  "status": "passed"
});
formatter.after({
  "duration": 33000,
  "status": "passed"
});
formatter.after({
  "duration": 36900,
  "status": "passed"
});
formatter.scenario({
  "line": 67,
  "name": "Validando campo senha com seis caracteres",
  "description": "",
  "id": "usuário-realiza-cadastro;validando-campo-senha-com-seis-caracteres",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 66,
      "name": "@validacao-campo-senha-seis-caracteres"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "que estou na tela de login",
  "keyword": "Dado "
});
formatter.step({
  "line": 69,
  "name": "clico no botao Cadastre-se",
  "keyword": "Quando "
});
formatter.step({
  "line": 70,
  "name": "preencho o campo senha \"asdqwe\"",
  "keyword": "E "
});
formatter.step({
  "line": 71,
  "name": "a aplicacao deve exibir a mensagem Sua senha deve conter no minimo um caractere maiusculo",
  "keyword": "Então "
});
formatter.match({
  "location": "LoginSteps.que_estou_na_tela_de_login()"
});
formatter.result({
  "duration": 3245557900,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.clico_no_botao_Cadastre_se()"
});
formatter.result({
  "duration": 133993900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asdqwe",
      "offset": 24
    }
  ],
  "location": "CadastroSteps.preencho_o_campo_senha(String)"
});
formatter.result({
  "duration": 132978000,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.a_aplicacao_deve_exibir_a_mensagem_Sua_senha_deve_conter_no_minimo_um_caractere_maiusculo()"
});
formatter.result({
  "duration": 56250600,
  "status": "passed"
});
formatter.after({
  "duration": 47700,
  "status": "passed"
});
formatter.after({
  "duration": 47100,
  "status": "passed"
});
formatter.after({
  "duration": 49500,
  "status": "passed"
});
formatter.scenario({
  "line": 74,
  "name": "Validando campo senha com seis caracateres com um caractere maiusculo",
  "description": "",
  "id": "usuário-realiza-cadastro;validando-campo-senha-com-seis-caracateres-com-um-caractere-maiusculo",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 73,
      "name": "@validacao-campo-senha-seis-caracteres-um-maisculo"
    }
  ]
});
formatter.step({
  "line": 75,
  "name": "que estou na tela de login",
  "keyword": "Dado "
});
formatter.step({
  "line": 76,
  "name": "clico no botao Cadastre-se",
  "keyword": "Quando "
});
formatter.step({
  "line": 77,
  "name": "preencho o campo senha \"asdqweA\"",
  "keyword": "E "
});
formatter.step({
  "line": 78,
  "name": "a aplicacao deve exibir a mensagem Sua senha deve conter no minimo um caractere especial",
  "keyword": "Então "
});
formatter.match({
  "location": "LoginSteps.que_estou_na_tela_de_login()"
});
formatter.result({
  "duration": 5200603700,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.clico_no_botao_Cadastre_se()"
});
formatter.result({
  "duration": 154030000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asdqweA",
      "offset": 24
    }
  ],
  "location": "CadastroSteps.preencho_o_campo_senha(String)"
});
formatter.result({
  "duration": 153463400,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.a_aplicacao_deve_exibir_a_mensagem_Sua_senha_deve_conter_no_minimo_um_caractere_especial()"
});
formatter.result({
  "duration": 70448400,
  "status": "passed"
});
formatter.after({
  "duration": 65400,
  "status": "passed"
});
formatter.after({
  "duration": 45900,
  "status": "passed"
});
formatter.after({
  "duration": 63500,
  "status": "passed"
});
formatter.uri("login.feature");
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
  "duration": 3393009700,
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
  "duration": 161670400,
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
  "duration": 133193900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clico_no_botao_entrar()"
});
formatter.result({
  "duration": 107363100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.preencho_o_campo_auteticacao_com_o_codigo_recebido()"
});
formatter.result({
  "duration": 1793809500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clico_no_botao_acessar()"
});
formatter.result({
  "duration": 7230005300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.a_aplicacao_deve_ser_redirecionada_para_a_tela_de_delivery()"
});
formatter.result({
  "duration": 27900,
  "status": "passed"
});
formatter.after({
  "duration": 85000,
  "status": "passed"
});
formatter.after({
  "duration": 50000,
  "status": "passed"
});
formatter.after({
  "duration": 48400,
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
  "duration": 2980191700,
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
  "duration": 123308400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.a_aaplicacao_deve_exibir_a_mensagem_de_Email_invalido()"
});
formatter.result({
  "duration": 27500,
  "status": "passed"
});
formatter.after({
  "duration": 131600,
  "status": "passed"
});
formatter.after({
  "duration": 38700,
  "status": "passed"
});
formatter.after({
  "duration": 45000,
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
  "duration": 3261342400,
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
  "duration": 199443900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.a_aplicacao_deve_exibir_a_mensagem_Email_é_obrigatorio()"
});
formatter.result({
  "duration": 58472700,
  "status": "passed"
});
formatter.after({
  "duration": 116500,
  "status": "passed"
});
formatter.after({
  "duration": 38200,
  "status": "passed"
});
formatter.after({
  "duration": 36300,
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
  "duration": 7013124500,
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
  "duration": 149068500,
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
  "duration": 94370700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clico_no_botao_entrar()"
});
formatter.result({
  "duration": 85603100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.a_aplicacao_deve_exibir_a_mensagem_Email_ou_senha_invalidos()"
});
formatter.result({
  "duration": 2054780800,
  "status": "passed"
});
formatter.after({
  "duration": 47900,
  "status": "passed"
});
formatter.after({
  "duration": 18500,
  "status": "passed"
});
formatter.after({
  "duration": 19300,
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
  "duration": 3141455100,
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
  "duration": 152097500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.não_preencho_o_campo_senha()"
});
formatter.result({
  "duration": 203081000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.a_aplicacao_deve_exibir_a_mensagem_Senha_é_obrigatoria()"
});
formatter.result({
  "duration": 55376400,
  "status": "passed"
});
formatter.after({
  "duration": 84800,
  "status": "passed"
});
formatter.after({
  "duration": 34700,
  "status": "passed"
});
formatter.after({
  "duration": 100100,
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
  "duration": 3275095600,
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
  "duration": 153343600,
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
  "duration": 111644900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.a_aplicacao_deve_exibir_a_mensagem_Senha_deve_conter_no_mínimo_seis_caracteres()"
});
formatter.result({
  "duration": 70838600,
  "status": "passed"
});
formatter.after({
  "duration": 57400,
  "status": "passed"
});
formatter.after({
  "duration": 22800,
  "status": "passed"
});
formatter.after({
  "duration": 24600,
  "status": "passed"
});
formatter.uri("resetar.feature");
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
  "duration": 3206422300,
  "status": "passed"
});
formatter.match({
  "location": "ResetarSteps.clico_no_botao_Resetar_senha()"
});
formatter.result({
  "duration": 108748900,
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
  "duration": 1845788000,
  "status": "passed"
});
formatter.match({
  "location": "ResetarSteps.clico_no_botao_RECUPERAR()"
});
formatter.result({
  "duration": 85786200,
  "status": "passed"
});
formatter.match({
  "location": "ResetarSteps.clico_no_botao_OK()"
});
formatter.result({
  "duration": 82330700,
  "status": "passed"
});
formatter.match({
  "location": "ResetarSteps.o_email_de_redefinir_senha_é_enviado()"
});
formatter.result({
  "duration": 63969900,
  "status": "passed"
});
formatter.after({
  "duration": 237400,
  "status": "passed"
});
formatter.after({
  "duration": 146500,
  "status": "passed"
});
formatter.after({
  "duration": 45500,
  "status": "passed"
});
});
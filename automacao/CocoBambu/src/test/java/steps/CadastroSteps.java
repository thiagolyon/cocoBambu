package steps;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;
import pages.CadastroPage;
import runner.RunCucumber;
import support.ScreenshotUtils;

public class CadastroSteps extends RunCucumber {

    CadastroPage cadastroPage = new CadastroPage();

    @Quando("^clico no botao Cadastre-se$")
    public void clico_no_botao_Cadastre_se() {
        cadastroPage.clicarBtnCadastro();
    }

    @Quando("^preencho o campo nome completo \"([^\"]*)\"$")
    public void preencho_o_campo_nome_completo(String nome) {
        cadastroPage.preencherNome(nome);
    }

    @Quando("^preencho o campo email \"([^\"]*)\"$")
    public void preencho_o_campo_email(String email) {
        cadastroPage.preencherEmail(email);
    }

    @Quando("^preencho o campo senha \"([^\"]*)\"$")
    public void preencho_o_campo_senha(String senha) {
        cadastroPage.preencherSenha(senha);
    }

    @Quando("^preencho o campo confirmar senha \"([^\"]*)\"$")
    public void preencho_o_campo_confirmar_senha(String senha) {
        cadastroPage.confirmarSenha(senha);
    }

    @Quando("^seleciono um estado$")
    public void seleciono_um_estado() {
        cadastroPage.selecionoEstado();
    }

    @Quando("^seleciono o checkbox de notificacoes$")
    public void seleciono_o_checkbox_de_notificacoes() {
        cadastroPage.checkboxNotificacoes();
    }

    @Quando("^seleciono o checkbox de termos e condicoes$")
    public void seleciono_o_checkbox_de_termos_e_condicoes() {
        cadastroPage.checkboxTermos();
    }

    @Quando("^clico no botao aceitar$")
    public void clico_no_botao_aceitar() {
        cadastroPage.aceitarTermos();
    }

    @Quando("^clico no botao cadastrar$")
    public void clico_no_botao_cadastrar() {
        cadastroPage.clicarBtnCadastrar();
    }

    @Então("^o codigo é enviado para o meu email$")
    public void o_codigo_é_enviado_para_o_meu_email() {
        cadastroPage.fecharModal();
        cadastroPage.validarTelaAutenticacao();
    }

    @Quando("^clico no campo Nome completo$")
    public void clico_no_campo_Nome_completo() {
        cadastroPage.clicarNomeCompleto();
    }

    @Quando("^clico fora do campo Nome completo$")
    public void clico_fora_do_campo_Nome_completo() {
        cadastroPage.clicarCampoSenha();
    }

    @Quando("^clico no campo Email$")
    public void clico_no_campo_Email() {
        cadastroPage.clicarCampoEmail();
    }

    @Quando("^clico fora do campo Email$")
    public void clico_fora_do_campo_Email()  {
        cadastroPage.clicarNomeCompleto();
    }

    @Quando("^clico no campo Senha$")
    public void clico_no_campo_Senha() {
        cadastroPage.clicarCampoSenha();
    }

    @Quando("^clico fora do campo Senha$")
    public void clico_fora_do_campo_Senha() {
        cadastroPage.clicarNomeCompleto();
    }

    @Quando("^clico no campo Confirmar senha$")
    public void clico_no_campo_Confirmar_senha() {
        cadastroPage.clicarCampoConfirmarSenha();
    }

    @Quando("^clico fora do campo Confirmar senha$")
    public void clico_fora_do_campo_Confirmar_senha(){
        cadastroPage.clicarNomeCompleto();
    }

    @Então("^a aplicacao deve exibir as mensagem de campos obrigatórios$")
    public void a_aplicacao_deve_exibir_as_mensagem_de_campos_obrigatórios() {
        cadastroPage.validarCamposobrigatorios();
    }

    @Quando("^preencho o campo nome completo com um caractere \"([^\"]*)\"$")
    public void preencho_o_campo_nome_completo_com_um_caractere(String nome) {
        cadastroPage.preencherNomeUmCaractere(nome);
    }

    @Então("^a aplicacao deve exibir a mensagem Nome completo deve conter mais de dois caracteres$")
    public void a_aplicacao_deve_exibir_a_mensagem_Nome_completo_deve_conter_mais_de_dois_caracteres() {
        cadastroPage.validarMensagemDoisCaracteres();
    }

    @Então("^a aplicacao deve exibir a mensagem Digite seu nome completo$")
    public void a_aplicacao_deve_exibir_a_mensagem_Digite_seu_nome_completo() {
        cadastroPage.validarMensagemNomeCompleto();
    }

    @Então("^a aplicacao deve exibir a mensagem Email invalido$")
    public void a_aplicacao_deve_exibir_a_mensagem_Email_invalido() {
        cadastroPage.validarMensagemEmailInvalido();
    }

    @Então("^a aplicacao deve exibir a mensagem Senha deve conter no minimo seis caracteres$")
    public void a_aplicacao_deve_exibir_a_mensagem_Senha_deve_conter_no_minimo_seis_caracteres() {
        cadastroPage.validarMensagemSenhaSeisCaracteres();
    }

    @Então("^a aplicacao deve exibir a mensagem Sua senha deve conter no minimo um caractere maiusculo$")
    public void a_aplicacao_deve_exibir_a_mensagem_Sua_senha_deve_conter_no_minimo_um_caractere_maiusculo() {
        cadastroPage.validarMensagemSenhaUmCaractereMaiusculo();
    }

    @Então("^a aplicacao deve exibir a mensagem Sua senha deve conter no minimo um caractere especial$")
    public void a_aplicacao_deve_exibir_a_mensagem_Sua_senha_deve_conter_no_minimo_um_caractere_especial() {
        cadastroPage.validarMensagemSenhaComCaractereEspecial();
    }

    @After
    public static void afterScenario(Scenario scenario) {
        ScreenshotUtils.addScreenshotOnScenario(scenario);
    }
}

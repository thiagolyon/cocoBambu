package steps;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;
import pages.LoginPage;
import runner.RunCucumber;

public class LoginSteps extends RunCucumber {

    LoginPage loginPage = new LoginPage();

    @Dado("^que estou na tela de login$")
    public void que_estou_na_tela_de_login() {
        loginPage.acessarLogin();
    }

    @Quando("^preencho o campo Email com \"([^\"]*)\" valido$")
    public void preencho_o_campo_Email_com_valido(String email) {
        loginPage.preencherEmail(email);
    }

    @Quando("^preencho o campo Senha com \"([^\"]*)\" valida$")
    public void preencho_o_campo_Senha_com_valida(String senha) {
        loginPage.preencherSenha(senha);
    }

    @Quando("^clico no botao entrar$")
    public void clico_no_botao_entrar() {
        loginPage.clicarBtnEntrar();
    }

    @Quando("^preencho o campo auteticacao com o codigo recebido$")
    public void preencho_o_campo_auteticacao_com_o_codigo_recebido() {
        loginPage.fecharModal();
    }

    @Quando("^clico no botao acessar$")
    public void clico_no_botao_acessar() {
        loginPage.acessoEmail();
//        loginPage.pegarCodigoEmail();
    }

    @Então("^a aplicacao deve ser redirecionada para a tela de delivery$")
    public void a_aplicacao_deve_ser_redirecionada_para_a_tela_de_delivery()  {

    }

    @Quando("^preencho o campo Email com \"([^\"]*)\" invalido$")
    public void preencho_o_campo_Email_com_invalido(String email) {
        loginPage.preencherEmail(email);
    }

    @Então("^a aplicavao deve exibir a mensagem Email invalido$")
    public void a_aplicacao_deve_exibir_a_mensagem_Email_invalido() {
        loginPage.validandoMensagem();
    }

    @Quando("^não preencho o campo Email$")
    public void não_preencho_o_campo_Email() {
        loginPage.naoPreencheEmail();
    }

    @Então("^a aplicacao deve exibir a mensagem Email é obrigatorio$")
    public void a_aplicacao_deve_exibir_a_mensagem_Email_é_obrigatorio() {
        loginPage.mensagemEmailObrigatorio();
    }

    @Quando("^preencho o campo Senha com a senha errada \"([^\"]*)\"$")
    public void preencho_o_campo_Senha_com_a_senha_errada(String email) {
        loginPage.senhaErrada(email);
    }

    @Então("^a aplicacao deve exibir a mensagem Email ou senha invalidos$")
    public void a_aplicacao_deve_exibir_a_mensagem_Email_ou_senha_invalidos() {
        loginPage.mensagemSenhaEmailInvalidos();
    }

    @Quando("^não preencho o campo senha$")
    public void não_preencho_o_campo_senha() {
        loginPage.naoPreencheSenha();
    }

    @Então("^a aplicacao deve exibir a mensagem Senha é obrigatoria$")
    public void a_aplicacao_deve_exibir_a_mensagem_Senha_é_obrigatoria() {
        loginPage.mensagemSenhaObrigatoria();
    }

    @Quando("^preencho o campo Senha com menos que seis caracteres \"([^\"]*)\"$")
    public void preencho_o_campo_Senha_com_menos_que_seis_caracteres(String senha) {
        loginPage.senhaMenorSeis(senha);
    }

    @Então("^a aplicacao deve exibir a mensagem Senha deve conter no mínimo seis caracteres$")
    public void a_aplicacao_deve_exibir_a_mensagem_Senha_deve_conter_no_mínimo_seis_caracteres(){
        loginPage.mensagemSenhaSeis();
    }
}

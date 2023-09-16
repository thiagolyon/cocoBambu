package pages;

import org.openqa.selenium.By;
import runner.RunCucumber;

import static support.Commands.*;
import static support.Utils.acessandoEmail;
//import static support.Utils.pegandoCodigoEmail;

public class LoginPage extends RunCucumber {

    private String URL = "https://app.cocobambu.com/entrar";
    private By preencher_email = By.cssSelector("#username > input");
    private By preencher_senha = By.cssSelector("ion-input[formcontrolname='password'] input.native-input");
    private By clicar_btn_entrar = By.xpath("//*[@id='content']/app-login/div/div/div[2]/button");
    private By fechar_modal = By.xpath("/html/body/app-root/ion-app/div/div/desktop-modal/div/email-spam-popup/div/div/base-button");
    private By mensagem_email = By.cssSelector(".validation-errors .error-message");
    private By mensagem_email_obrigatorio = By.cssSelector(".validation-errors .error-message");
    private By mensagem_senha_email_invalido = By.cssSelector(".server-error-container p");
    private By mensagem_senha_obrigatoria = By.cssSelector(".validation-errors .error-message");
    private By mensagem_senha_seis = By.cssSelector(".validation-errors .error-message");
    private By bem_vindo = By.cssSelector("#content > app-login > div > div > section > p");


    public void acessarLogin() {
        getDriver(System.getProperty("browser")).get(URL);
        checkMessage(bem_vindo, "Seja bem-vindo ao melhor restaurante do Brasil!");
    }

    public void preencherEmail(String email) {
        fillField(preencher_email, email);
    }

    public void preencherSenha(String senha) {
        fillField(preencher_senha, senha);
    }

    public void clicarBtnEntrar() {
        clickElement(clicar_btn_entrar);
    }

    public void acessoEmail() {
        acessandoEmail();
    }

//    public void pegarCodigoEmail() {
//        pegandoCodigoEmail();
//    }

    public void fecharModal() {
        clickElement(fechar_modal);
    }

    public void preencheEmailInvalido (String email) {
        fillField(preencher_email, email);
    }

    public void validandoMensagem () {
        checkMessage(mensagem_email, "E-mail inválido.");
    }

    public void naoPreencheEmail () {
        clickElement(preencher_email);
        clickElement(preencher_senha);
    }

    public void mensagemEmailObrigatorio () {
        checkMessage(mensagem_email_obrigatorio, "E-mail é obrigatório.");
    }

    public void senhaErrada (String senha) {
        fillField(preencher_senha, senha);
    }

    public void mensagemSenhaEmailInvalidos() {
        checkMessage(mensagem_senha_email_invalido, "E-mail ou senha inválidos.");
    }

    public void naoPreencheSenha() {
        clickElement(preencher_senha);
        clickElement(preencher_email);
    }

    public void mensagemSenhaObrigatoria() {
        checkMessage(mensagem_senha_obrigatoria, "Senha é obrigatória.");
    }

    public void senhaMenorSeis(String senha) {
        fillField(preencher_senha, senha);
    }

    public void mensagemSenhaSeis() {
        checkMessage(mensagem_senha_seis, "Senha deve conter no mínimo 6 caracteres.");
    }
}

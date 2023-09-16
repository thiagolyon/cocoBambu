package pages;

import org.openqa.selenium.By;
import runner.RunCucumber;

import static support.Commands.clickElement;
import static support.Commands.fillField;
import static support.Commands.checkMessage;

public class CadastroPage extends RunCucumber {

    private By clicar_btn_cadastro = By.cssSelector("span.link");
    private By preencher_nome = By.cssSelector("#name > input");
    private By preencher_email = By.xpath("/html/body/app-root/ion-app/div/div/desktop-modal/div[2]/register-popup/div/form/div[3]/ion-input/input");
    private By preencher_senha = By.xpath("//*[@id='formRegisterUser']/div[5]/ion-input/input");
    private By confirmar_senha = By.xpath("/html/body/app-root/ion-app/div/div/desktop-modal/div[2]/register-popup/div/form/div[7]/ion-input/input");
    private By seleciono_estado = By.xpath("//*[@id='formRegisterUser']/div[9]/ion-select");
    private By escolho_estado = By.xpath("/html/body/app-root/ion-app/ion-action-sheet/div[2]/div/div[1]/button[8]");
    private By checkbox_notificacao = By.xpath("/html/body/app-root/ion-app/div/div/desktop-modal/div[2]/register-popup/div/form/div[11]/ion-item[1]/ion-checkbox");
    private By checkbox_termos = By.cssSelector("#formRegisterUser > div.checkbox-container > ion-item.checkbox.ion-untouched.ion-pristine.ion-invalid.item.md.ion-activatable.ion-focusable.hydrated.item-label > ion-checkbox");
    private By aceitar_termos = By.cssSelector("#content > terms-and-conditions > base-button > button");
    private By clicar_btn_cadastrar = By.xpath("/html/body/app-root/ion-app/div/div/desktop-modal/div[2]/register-popup/div/div[1]/button");
    private By fechar_modal = By.xpath("/html/body/app-root/ion-app/div/div/desktop-modal/div/email-spam-popup/div/div/base-button/button");
    private By checar_mensagem_autenticacao = By.xpath("/html/body/app-root/ion-app/main/ion-router-outlet/app-login/div/div/div[1]/p");
    private By validar_nome_obrigatorio = By.xpath("/html/body/app-root/ion-app/div/div/desktop-modal/div[2]/register-popup/div/form/div[2]/div");
    private By validar_email_obrigatorio = By.xpath("/html/body/app-root/ion-app/div/div/desktop-modal/div[2]/register-popup/div/form/div[4]/div");
    private By validar_senha_obrigatorio = By.xpath("/html/body/app-root/ion-app/div/div/desktop-modal/div[2]/register-popup/div/form/div[6]/div[1]");
    private By validar_confirmacao_senha_obrigatorio = By.xpath("/html/body/app-root/ion-app/div/div/desktop-modal/div[2]/register-popup/div/form/div[8]/div");
    private By validar_mensagem_dois_caracteres = By.xpath("/html/body/app-root/ion-app/div/div/desktop-modal/div[2]/register-popup/div/form/div[2]/div");
    private By validar_mensagem_nome_completo = By.xpath("/html/body/app-root/ion-app/div/div/desktop-modal/div[2]/register-popup/div/form/div[2]/div");
    private By validar_mensagem_email_invalido = By.xpath("/html/body/app-root/ion-app/div/div/desktop-modal/div[2]/register-popup/div/form/div[4]/div");
    private By validar_mensagem_senha_seis_caracteres = By.xpath("/html/body/app-root/ion-app/div/div/desktop-modal/div[2]/register-popup/div/form/div[6]/div[1]");
    private By validar_mensagem_senha_um_caractere_maiusculo = By.xpath("/html/body/app-root/ion-app/div/div/desktop-modal/div[2]/register-popup/div/form/div[6]/div[1]");
    private By validar_mensagem_senha_com_caractere_especial = By.xpath("/html/body/app-root/ion-app/div/div/desktop-modal/div[2]/register-popup/div/form/div[6]/div[1]");


    public void clicarBtnCadastro () {
        clickElement(clicar_btn_cadastro);
    }

    public void preencherNome(String nome) {
        fillField(preencher_nome, nome);
    }

    public void preencherEmail(String email) {
        fillField(preencher_email, email);
    }

    public void preencherSenha(String senha) {
        fillField(preencher_senha, senha);
    }

    public void confirmarSenha(String senha) {
        fillField(confirmar_senha, senha);
    }

    public void selecionoEstado() {
        clickElement(seleciono_estado);
        clickElement(escolho_estado);
    }

    public void checkboxNotificacoes() {
        clickElement(checkbox_notificacao);
    }

    public void checkboxTermos() {
        clickElement(checkbox_termos);
    }

    public void aceitarTermos() {
        clickElement(aceitar_termos);
    }

    public void clicarBtnCadastrar() {
        clickElement(clicar_btn_cadastrar);
    }

    public void fecharModal() {
        clickElement(fechar_modal);
    }

    public void validarTelaAutenticacao() {
        checkMessage(checar_mensagem_autenticacao, "Informe o código recebido em seu e-mail");
    }

    public void clicarNomeCompleto() {
        clickElement(preencher_nome);
    }

    public void clicarCampoEmail() {
        clickElement(preencher_email);
    }

    public void clicarCampoSenha() {
        clickElement(preencher_senha);
    }

    public void clicarCampoConfirmarSenha() {
        clickElement(confirmar_senha);
    }

    public void validarCamposobrigatorios() {
        checkMessage(validar_nome_obrigatorio, "Nome completo obrigatório.");
        checkMessage(validar_email_obrigatorio, "E-mail é obrigatório.");
        checkMessage(validar_senha_obrigatorio, "Senha é obrigatória.");
        checkMessage(validar_confirmacao_senha_obrigatorio, "Confirmação de senha é obrigatória.");
    }

    public void preencherNomeUmCaractere(String nome) {
        fillField(preencher_nome, nome);
    }

    public void validarMensagemDoisCaracteres() {
        checkMessage(validar_mensagem_dois_caracteres, "Nome completo deve conter mais de 2 caracteres.");
    }

    public void validarMensagemNomeCompleto() {
        checkMessage(validar_mensagem_nome_completo, "Digite seu nome completo.");
    }

    public void validarMensagemEmailInvalido() {
        checkMessage(validar_mensagem_email_invalido, "E-mail inválido.");
    }

    public void validarMensagemSenhaSeisCaracteres() {
        checkMessage(validar_mensagem_senha_seis_caracteres, "Senha deve conter no mínimo 6 caracteres.");
    }

    public void validarMensagemSenhaUmCaractereMaiusculo(){
        checkMessage(validar_mensagem_senha_um_caractere_maiusculo, "Sua senha deve conter no mínimo 1 caractere maiúsculo.");
    }

    public void validarMensagemSenhaComCaractereEspecial() {
        checkMessage(validar_mensagem_senha_com_caractere_especial, "Sua senha deve conter no mínimo 1 caractere especial.");
    }
}

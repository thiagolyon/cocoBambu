package pages;

import org.openqa.selenium.By;
import runner.RunCucumber;

import static support.Commands.*;

public class ResetarPage extends RunCucumber {

    private By clicar_btn_resetar = By.xpath("/html/body/app-root/ion-app/main/ion-router-outlet/app-login/div/div/div[3]/ion-col[2]");
    private By prencher_email = By.xpath("/html/body/app-root/ion-app/ion-alert/div[2]/div[3]/div/input");
    private By clicar_btn_recuperar = By.xpath("/html/body/app-root/ion-app/ion-alert/div[2]/div[4]/button[2]");
    private By clicar_btn_OK = By.xpath("/html/body/app-root/ion-app/ion-alert/div[2]/div[3]/button");
    private By validar_tela_login = By.cssSelector("#content > app-login > div > div > section > p");

    public void clicarBtnResetar() {
        clickElement(clicar_btn_resetar);
    }

    public void preencherEmail(String email) {
        fillField(prencher_email, email);
    }

    public void clicarBtnRecuperar() {
        clickElement(clicar_btn_recuperar);
    }

    public void clicarBtnOK() {
        clickElement(clicar_btn_OK);
    }

    public void validarTelaEntrar() {
        checkMessage(validar_tela_login, "Seja bem-vindo ao melhor restaurante do Brasil!");
    }
}

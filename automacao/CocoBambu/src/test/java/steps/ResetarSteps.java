package steps;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;
import pages.ResetarPage;
import runner.RunCucumber;
import support.ScreenshotUtils;

public class ResetarSteps extends RunCucumber {

    ResetarPage resetarPage = new ResetarPage();

    @Quando("^clico no botao Resetar senha$")
    public void clico_no_botao_Resetar_senha() {
        resetarPage.clicarBtnResetar();
    }

    @Quando("^preencho o email \"([^\"]*)\"$")
    public void preencho_o_email(String email) {
        resetarPage.preencherEmail(email);
    }

    @Quando("^clico no botao RECUPERAR$")
    public void clico_no_botao_RECUPERAR() {
        resetarPage.clicarBtnRecuperar();
    }

    @Quando("^clico no botao OK$")
    public void clico_no_botao_OK() {
        resetarPage.clicarBtnOK();
    }

    @Então("^o email de redefinir senha é enviado$")
    public void o_email_de_redefinir_senha_é_enviado()  {
        resetarPage.validarTelaEntrar();
    }

    @After
    public static void afterScenario(Scenario scenario) {
        ScreenshotUtils.addScreenshotOnScenario(scenario);
    }
}

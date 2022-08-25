import BasePage from "./BasePage";

class practiceFormPage extends BasePage {
    static get url() {
      return "https://demoqa.com/automation-practice-form";
    }
    
    static get firstName()  {
        return cy.get("#firstName")
    }
    static get lastName()  {
        return cy.get("#lastName")
    }
    static get email()  {
        return cy.get("#userEmail")
    }
    static get maleRadioButton() {
        return cy.get("[for='gender-radio-1']");
    }
    static get mobileNumberField() {
        return cy.get("#userNumber");
    }
    static get dateOfBirthField() {
        return cy.get("#dateOfBirthInput");
    }
    static get dateSelector() {
        return cy.get(":nth-child(5) > .react-datepicker__day--029");
    }
    static get monthSelector() {
        return cy.get(".react-datepicker__month-select")
    }
    static get yearSelector() {
        return cy.get(".react-datepicker__year-select")
    }
    static get subjectsField() {
        return cy.get("#subjectsContainer");
    }
    static get subjectsFieldFiller() {
        return cy.get(".css-12jo7m5");
    }
    static get hobbiesMusicButton() {
        return cy.get("[for='hobbies-checkbox-3']");
    }
    static get currentAddressField() {
        return cy.get("#currentAddress");
    }
    static get stateField() {
        return cy.get("#state");
    }
    static get stateFieldSelect() {
        return cy.get(".css-26l3qy-menu");
    }
    static get cityField() {
        return cy.get("#stateCity-wrapper > :nth-child(3)");
    }
    static get cityFieldSelect() {
        return cy.get(".css-26l3qy-menu");
    }
    static get submitButton() {
        return cy.get("#submit");
    }
    static get summaryForm() {
        return cy.get(".table-responsive");
    }
    // static get studentName() {
    //     return cy.get("");
    // }
    // static get studentEmail() {
    //     return cy.get("");
    // }
    // static get gender() {
    //     return cy.get("");
    // }
    // static get mobile() {
    //     return cy.get("");
    // }
    // static get dob() {
    //     return cy.get("");
    // }
    // static get subjects() {
    //     return cy.get("");
    // }
    // static get hobbies() {
    //     return cy.get("");
    // }
    // static get address() {
    //     return cy.get("");
    // }
    // static get stateAndCity() {
    //     return cy.get("");
    // }
}
export default practiceFormPage;
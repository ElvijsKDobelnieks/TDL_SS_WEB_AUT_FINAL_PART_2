import practiceFormPage from "../pageObjects/PracticeForm.page";

describe("Demo QA", () => {
  beforeEach (() => {
    practiceFormPage.visit();
  })
  it("fill in information", () => {
    practiceFormPage.firstName.click().type("Elvijs");
    practiceFormPage.lastName.click().type("Dobelnieks");
    practiceFormPage.email.click().type("test@test.lv");
    practiceFormPage.maleRadioButton.click();
    practiceFormPage.mobileNumberField.click().type("2626262626");
    practiceFormPage.dateOfBirthField.click();
    practiceFormPage.monthSelector.select("February");
    practiceFormPage.yearSelector.select("1984");
    practiceFormPage.dateSelector.click();
    practiceFormPage.subjectsField.type("Ma{enter}");
    practiceFormPage.hobbiesMusicButton.click();
    practiceFormPage.currentAddressField.type("Yo street 3");
    practiceFormPage.stateField.click();
    practiceFormPage.stateFieldSelect.contains("NCR")
      .then(option => {option[0]}).click();
    practiceFormPage.cityField.click();
    practiceFormPage.stateFieldSelect.contains("Delhi")
      .then(option => {option[0]}).click();
    practiceFormPage.submitButton.click();
    // let id = 0;
    // let text = ["Elvijs Dobelnieks", "test@test.lv", "Male", "2626262626", "29 February,1984", "Maths", "Music", "", "Yo street 3", "NCR Delhi"];
    // practiceFormPage.summaryForm().each(($el) => {
    //   cy.wrap($el).should("have.text", text[id])
    //   id++;
    // })
  })
});
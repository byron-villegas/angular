import 'cypress-xpath';

function calculateAge(value: string): number {
    const birthDate = new Date(value);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    if (age < 0 || isNaN(age)) {
        age = 0; // Default to 0 if the date is invalid or in the future
    }

    return age;
}

describe('Users Page Tests', () => {
    it('Users details title is visible', () => {
        cy.visit('/users');
        cy.xpath('//h1[contains(text(), "User Details")]').should('be.visible');
    });

    it('Users add title is visible', () => {
        cy.visit('/users');
        cy.xpath('//h3[contains(text(), "Add User")]').should('be.visible');
    });

    it('Users list title is visible', () => {
        cy.visit('/users');
        cy.xpath('//h3[contains(text(), "Users")]').should('be.visible');
    });

    it('User add input fields are visible', () => {
        cy.visit('/users');
        cy.xpath('//input[@id="rut"]').should('be.visible');
        cy.xpath('//input[@id="nombres"]').should('be.visible');
        cy.xpath('//input[@id="apellidos"]').should('be.visible');
        cy.xpath('//input[@id="fechaNacimiento"]').should('be.visible');
        cy.xpath('//input[@id="edad"]').should('be.visible');
        cy.xpath('//input[@id="sexoM"]').should('be.visible');
        cy.xpath('//input[@id="sexoF"]').should('be.visible');
        cy.xpath('//input[@id="saldo"]').should('be.visible');
    });

    it('User add input fields are invalid', () => {
        cy.visit('/users');
        cy.xpath('//input[@id="rut"]').should('have.class', 'is-invalid');
        cy.xpath('//input[@id="nombres"]').should('have.class', 'is-invalid');
        cy.xpath('//input[@id="apellidos"]').should('have.class', 'is-invalid');
        cy.xpath('//input[@id="fechaNacimiento"]').should('have.class', 'is-invalid');
        cy.xpath('//input[@id="edad"]').should('have.class', 'is-invalid');
        cy.xpath('//input[@id="sexoM"]').should('have.class', 'is-invalid');
        cy.xpath('//input[@id="sexoF"]').should('have.class', 'is-invalid');
        cy.xpath('//input[@id="saldo"]').should('have.class', 'is-invalid');
    });

    it('Users add input fields error messages are visible', () => {
        cy.visit('/users');

        cy.xpath('//span[@id="rut-errors"]').should('have.length', 1);
        cy.xpath('//span[@id="nombres-errors"]').should('have.length', 1);
        cy.xpath('//span[@id="apellidos-errors"]').should('have.length', 1);
        cy.xpath('//span[@id="fechaNacimiento-errors"]').should('have.length', 1);
        cy.xpath('//span[@id="edad-errors"]').should('have.length', 1);
        cy.xpath('//span[@id="sexo-errors"]').should('have.length', 1);
        cy.xpath('//span[@id="saldo-errors"]').should('have.length', 1);
    });

    it('Users add input fields are valid', () => {
        cy.visit('/users');

        const birthDate = '1996-06-22';
        const age = calculateAge(birthDate).toString();

        cy.xpath('//input[@id="rut"]').type('11111111-1');
        cy.xpath('//input[@id="nombres"]').type('Juan Carlos');
        cy.xpath('//input[@id="apellidos"]').type('Bodoque Triviño');
        cy.xpath('//input[@id="fechaNacimiento"]').type(birthDate);
        cy.xpath('//input[@id="sexoM"]').check();
        cy.xpath('//input[@id="saldo"]').clear().type('100000');

        cy.xpath('//input[@id="rut"]').should('not.have.class', 'is-invalid');
        cy.xpath('//input[@id="nombres"]').should('not.have.class', 'is-invalid');
        cy.xpath('//input[@id="apellidos"]').should('not.have.class', 'is-invalid');
        cy.xpath('//input[@id="fechaNacimiento"]').should('not.have.class', 'is-invalid');
        cy.xpath('//input[@id="edad"]').should('not.have.class', 'is-invalid');
        cy.xpath('//input[@id="sexoM"]').should('not.have.class', 'is-invalid');
        cy.xpath('//input[@id="sexoF"]').should('not.have.class', 'is-invalid');
        cy.xpath('//input[@id="saldo"]').should('not.have.class', 'is-invalid');

        cy.xpath('//input[@id="rut"]').should('have.value', '11.111.111-1');
        cy.xpath('//input[@id="nombres"]').should('have.value', 'Juan Carlos');
        cy.xpath('//input[@id="apellidos"]').should('have.value', 'Bodoque Triviño');
        cy.xpath('//input[@id="fechaNacimiento"]').should('have.value', birthDate);
        cy.xpath('//input[@id="edad"]').should('have.value', age);
        cy.xpath('//input[@id="sexoM"]').should('be.checked');
        cy.xpath('//input[@id="sexoF"]').should('not.be.checked');
        cy.xpath('//input[@id="saldo"]').should('have.value', '100000');
        
    });

    it('Users add create user', () => {
        cy.visit('/users');

        const birthDate = '1996-06-22';
        const age = calculateAge(birthDate).toString();

        cy.xpath('//input[@id="rut"]').type('11111111-1');
        cy.xpath('//input[@id="nombres"]').type('Juan Carlos');
        cy.xpath('//input[@id="apellidos"]').type('Bodoque Triviño');
        cy.xpath('//input[@id="fechaNacimiento"]').type(birthDate);
        cy.xpath('//input[@id="sexoM"]').check();
        cy.xpath('//input[@id="saldo"]').clear().type('100000');

        cy.xpath('//button[@type="submit" and normalize-space(text())="Enviar"]').should('be.enabled').click();
        
        cy.xpath('//table').should('be.visible');
        cy.xpath('//table/tbody/tr[1]/td[1]').should('contain.text', '1');
        cy.xpath('//table/tbody/tr[1]/td[2]').should('contain.text', '11.111.111-1');
        cy.xpath('//table/tbody/tr[1]/td[3]').should('contain.text', 'Juan Carlos');
        cy.xpath('//table/tbody/tr[1]/td[4]').should('contain.text', 'Bodoque Triviño');
        cy.xpath('//table/tbody/tr[1]/td[5]').should('contain.text', birthDate);
        cy.xpath('//table/tbody/tr[1]/td[6]').should('contain.text', age);
        cy.xpath('//table/tbody/tr[1]/td[7]').should('contain.text', 'M');
        cy.xpath('//table/tbody/tr[1]/td[8]').should('contain.text', '$100.000');
    });
});
import { faker } from '@faker-js/faker';

function newUser () {
    const newUsername = faker.internet.userName();
    const newPassword = faker.internet.password();
    const newEmail = faker.internet.email();

    return {
        newUsername,
        newPassword,
        newEmail,
    }
};

module.exports = { newUser };
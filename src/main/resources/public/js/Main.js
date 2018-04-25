$(document).ready(function () {
    addEventListenersToNavbar();
    DOM.showUsersList();
});

function addEventListenersToNavbar() {
    $("#usersListEl").click(function () {
        DOM.showUsersList()
    });

    $("#addUserEl").click(function () {
        DOM.addUserForm()
    });

    $("#deleteUserEl").click(function () {
        DOM.deleteUser()
    })
}
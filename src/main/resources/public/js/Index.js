$(document).ready(function () {
    addEventListenersToNavbar();
    Main.showUsersList();
});

function addEventListenersToNavbar() {
    $("#usersListEl").click(function () {
        Main.showUsersList()
    });

    $("#addUserEl").click(function () {
        Main.addUserForm()
    });

    $("#deleteUserEl").click(function () {
        Main.deleteUserForm()
    })
}
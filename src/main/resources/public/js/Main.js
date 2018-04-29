Main = {

    showUsersList: function () {
        $.getJSON("/api/getAllUsers", function (data) {
            $("#mainContainer").html(`<table id="usersTable" class="table">
                                                        <thead>
                                                          <tr>
                                                            <th>Id</th>
                                                            <th>Name</th>
                                                            <th>Email</th>
                                                            <th>Delete</th>
                                                          </tr>
                                                        </thead>
                                                        <tbody>`);
            for (let user of data) {
                $("#usersTable").append(`<tr>
                                            <td>${user.id}</td>
                                            <td>${user.userName}</td>
                                            <td>${user.userEmail}</td>
                                            <td><button id="deleteUserBtn-${user.id}" class="btn btn-danger">Delete</button></td>
                                        </tr>`);
                Main.addEventListenerToDeleteBtn($("#deleteUserBtn-" + user.id), user.id, "list")
            }
            $("#usersTable").append(`</tbody></table>`)
        });

    },

    addEventListenerToDeleteBtn: function (htmlEl, userId, whereToRedirectOnSuccess) {
        htmlEl.click(function () {
            swal({
                title: "Are you sure?",
                text: "Once deleted, the user data will be lost forever, nothing can bring it back!!!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        swal("Fine, executing request!", {
                            icon: "success",
                        });
                        Main.deleteUser(userId, whereToRedirectOnSuccess);
                    } else {
                        swal("Good! This user data will live another day!");
                    }
                });
        })
    },

    deleteUser: function (userId, whereToRedirectOnSuccess) {
        $.post("/api/deleteUser",
            {
                userId: userId
            },
            function (response) {
                if (response === "ok") {
                    swal("Great", "User deleted successfully", "success")
                    if (whereToRedirectOnSuccess === "list") {
                        Main.showUsersList()
                    } else {
                        Main.deleteUserForm()
                    }
                } else if (response === "bad id") {
                    swal("Fail", "There is no user with that id", "warning")
                } else {
                    swal("Fail", "There was a database problem", "warning")
                }
            })
    },

    deleteUserForm: function () {
        $("#mainContainer").html(`<input type="text" id="userIdToDelete" placeholder="User id"><br>
                                         <button id="sendDeleteUserBtn" class="btn btn-success">Delete User</button>`);
        $("#userIdToDelete").change(function () {
            Main.addEventListenerToDeleteBtn($("#sendDeleteUserBtn"), $("#userIdToDelete").val(), "deleteInput")
            $("#userIdToDelete").trigger("click");
        })
    },

    addUserForm: function () {
        $("#mainContainer").html(`<input type="text" id="userName" placeholder="Name"><br>
                                        <input type="text" id="userEmail" placeholder="Email"><br>
                                         <button id="sendAddUserBtn" class="btn btn-success">Add User</button>`);
        $("#sendAddUserBtn").click(function () {
            $.post("/api/addUser",
                {
                    userName: $("#userName").val(),
                    userEmail: $("#userEmail").val()
                },
                function (response) {
                    if (response === "ok") {
                        swal("Great", "User added successfully", "success")
                        Main.addUserForm();
                    } else {
                        swal("Fail", "There was a database problem", "warning")
                    }
                })
        })
    }

};
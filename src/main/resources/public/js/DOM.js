DOM = {

    showUsersList: function () {
        $.getJSON("/api/getAllUsers", function (data) {
            $("#mainContainer").html(`<br><br><br><br><br><table id="usersTable" class="table">
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
                                            <td><button class="btn btn-danger">Delete</button></td>
                                        </tr>`)
            }
            $("#usersTable").append(`</tbody></table>`)
        }).fail(swal("Fail", "There was a database problem", "warning")
        )

    },

    addUserForm: function () {
        $("#mainContainer").html(`<br><br><br><br><br><br><input type="text" id="userName" placeholder="Name"><br>
                                        <input type="text" id="userEmail" placeholder="Email">
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
                    } else {
                        swal("Fail", "There was a database problem", "warning")
                    }
                })
        })
    }

};
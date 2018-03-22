  // var userType = $("#typeOfuser").val().trim();
  // var firstName = $("#firstName").val().trim();
  // var lastName = $("#lastName").val().trim();
  // //var profilePic = $("#profilePic").val().trim();
  // var birthdate = $("#birthdate").val().trim();
  // var emailAddress = $("#email").val().trim();
  // var country = $("#country").val().trim();
  // var school = $("#school").val().trim();
  // var religion = $("#religion").val().trim();
  // var languages = $("#languages").val().trim();
  // var lengthOfstay = $("#length").val().trim();
  // var introduction = $("#introduction").val().trim();

  $(".btn-primary").on("click", function(event) {
      event.preventDefault();

  var newUser = {
    typeofuser: $("#typeOfuser").val().trim(),
  	firstname: $("#firstName").val().trim(),
    lastname: $("#lastName").val().trim(),
    profilepicture: $("#picture").val().trim(),
    birthdate: $("#birthdate").val().trim(),
    gender: $("#gender").val().trim(),
    emailaddress: $("#birthdate").val().trim(),
    country: $("#country").val().trim(),
    school: $("#school").val().trim(),
    religion: $("#religion").val().trim(),
    language: $("#languages").val().trim(),
    staylength: $("#length").val().trim(),
    introduction: $("#introduction").val().trim()
    };

    var currentUserName = newUser.firstname + " " + newUser.lastname;
    console.log(currentUserName);
    console.log(newUser);

<<<<<<< HEAD
  submitForm(newUser);
=======
    submitForm(newUser);
>>>>>>> b45948227e81cfa632e69721d18e4b013b1cc220

    function deleteInput() {
    $("#typeOfuser").val("").trim();
    $("#firstName").val("").trim();
    $("#lastName").val("").trim();
    $("#profilePic").val("").trim();
    $("#birthdate").val("").trim();
    $("#email").val("");
    $("#country").val("");
    $("#religion").val("");
    $("#languages").val("");
    $("#length").val("");
    $("#introduction").val("");
    };
});

function submitForm(user) {
$.post("/api/add", user, function() {
    window.location.href = "/user-profile";
  });
};

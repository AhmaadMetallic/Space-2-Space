  var userType = $("#typeOfuser").val().trim();
  var firstName = $("#firstName").val().trim();
  var lastName = $("#lastName").val().trim();
  var profilePic = $("#profilePic").val().trim();
  var birthdate = $("#birthdate").val().trim();
  var emailAddress = $("#email").val().trim();
  var country = $("#country").val().trim();
  var religion = $("#religion").val().trim();
  var languages = $("#languages").val().trim();
  var lengthOfstay = $("#length").val().trim();
  var introduction = $("#introduction").val().trim();

  $(".btn-primary").on("click", function(event) {
      event.preventDefault();
  console.log(firstName);
  console.log(lastName);
  console.log(emailAddress);
  var newUser = {
    typeofuser: userType,
  	firstname: firstName,
    lastname: lastName,
    profilepicture: profilePic,
    birthdate: birthdate,
    // gender: req.body.
    emailaddress: emailAddress,
    country: country,
    religion: religion,
    language: languages,
    length: lengthOfstay,
    introduction: introduction
    };

  console.log(newUser);

  //submitForm(newUser);



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

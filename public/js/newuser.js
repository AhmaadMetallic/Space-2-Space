$(document).ready(function() {
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

  var newUser = {
    typeofuser: userType.val().trim(),
  	firstname: firstName.val().trim(),
    lastname: lastName.val().trim(),
    profilepicture: profilePic.val().trim(),
    birthdate: birthdate.val().trim(),
    // gender: req.body.
    emailaddress: emailAddress.val().trim(),
    country: country.val().trim(),
    religion: religion.val().trim(),
    language: languages.val().trim(),
    length: lengthOfstay.val().trim(),
    introduction: introduction.val().trim()
    };

  console.log(newUser);

  $.post("/api/add", newUser)
});

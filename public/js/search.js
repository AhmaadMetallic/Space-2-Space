$("#submitSearch").on("click", function(event) {
    event.preventDefault();

var typeofuser = $("#typeofuser").val().trim();

var gender = $("#genderpref").val().trim();

var country = $("#countrypref").val().trim();

var religion = $("#religionpref").val().trim();

var language = $("#languagepref").val().trim();

$.get("/api/" + typeofuser + "/" + gender + "/" + country + "/" + religion + "/" + language, function(data) {
  console.log(data);
  renderData(data);
});

};

function renderData(results) {
  if (results.length < 1) {
    $("#card-div").append("<h4>No Matches Found</h4>");
  }
  else if (results.length < 2) {
    $("#card1").append('<img src= " ' + results[0].profilepicture + ' "class="card-img-top" />');
    $("#name1").append("Name: " + results[0].firstname);
    $("#intro1").append(results[0].introduction);
    $("#gender1").append(results[0].gender);
    $("#language1").append("Primary Language: " + results[0].language);
    $("#country1").append("Country: " + results[0].country);
    $("#religion1").append("Religion: " + results[0].religion);
    $("#type1").append(results[0].typeofuser);
    $("#stayLength1").append(results[0].staylength);
    $("#button1").append("Contact");
  }
  else if (results.length < 3) {
    $("#card1").append('<img src= " ' + results[0].profilepicture + ' "class="card-img-top" />');
    $("#name1").append("Name: " + results[0].firstname);
    $("#intro1").append(results[0].introduction);
    $("#gender1").append(results[0].gender);
    $("#language1").append("Primary Language: " + results[0].language);
    $("#country1").append("Country: " + results[0].country);
    $("#religion1").append("Religion: " + results[0].religion);
    $("#type1").append(results[0].typeofuser);
    $("#stayLength1").append(results[0].staylength);
    $("#button1").append("Contact");
    $("#card2").append('<img src= " ' + results[1].profilepicture + ' "class="card-img-top" />');
    $("#name2").append("Name: " + results[1].firstname);
    $("#intro2").append(results[1].introduction);
    $("#gender2").append(results[1].gender);
    $("#language2").append("Primary Language: " + results[1].language);
    $("#country2").append("Country: " + results[1].country);
    $("#religion2").append("Religion: " + results[1].religion);
    $("#type2").append(results[1].typeofuser);
    $("#stayLength2").append(results[1].staylength);
    $("#button2").append("Contact");
  }
  else if (results.length < 4) {
    $("#card1").append('<img src= " ' + results[0].profilepicture + ' "class="card-img-top" />');
    $("#name1").append("Name: " + results[0].firstname);
    $("#intro1").append(results[0].introduction);
    $("#gender1").append(results[0].gender);
    $("#language1").append("Primary Language: " + results[0].language);
    $("#country1").append("Country: " + results[0].country);
    $("#religion1").append("Religion: " + results[0].religion);
    $("#type1").append(results[0].typeofuser);
    $("#stayLength1").append(results[0].staylength);
    $("#button1").append("Contact");
    $("#card2").append('<img src= " ' + results[1].profilepicture + ' "class="card-img-top" />');
    $("#name2").append("Name: " + results[1].firstname);
    $("#intro2").append(results[1].introduction);
    $("gender2").append(results[1].gender);
    $("#language2").append("Primary Language: " + results[1].language);
    $("#country2").append("Country: " + results[1].country);
    $("#religion2").append("Religion: " + results[1].religion);
    $("#type2").append(results[1].typeofuser);
    $("#stayLength2").append(results[1].staylength);
    $("#button2").append("Contact");
    $("#card3").append('<img src= " ' + results[2].profilepicture + ' "class="card-img-top" />');
    $("#name3").append("Name: " + results[2].firstname);
    $("#intro3").append(results[2].introduction);
    $("#gender3").append(results[2].gender);
    $("#language3").append("Primary Language: " + results[2].language);
    $("#country3").append("Country: " + results[2].country);
    $("#religion3").append("Religion: " + results[2].religion);
    $("#type3").append(results[2].typeofuser);
    $("#stayLength3").append(results[2].staylength);
    $("#button3").append("Contact");
    }
  else if (results.length < 5) {
    $("#card1").append('<img src= " ' + results[0].profilepicture + ' "class="card-img-top" />');
    $("#name1").append("Name: " + results[0].firstname);
    $("#intro1").append(results[0].introduction);
    $("#gender1").append(results[0].gender);
    $("#language1").append("Primary Language: " + results[0].language);
    $("#country1").append("Country: " + results[0].country);
    $("#religion1").append("Religion: " + results[0].religion);
    $("#type1").append(results[0].typeofuser);
    $("#stayLength1").append(results[0].staylength);
    $("#button1").append("Contact");
    $("#card2").append('<img src= " ' + results[1].profilepicture + ' "class="card-img-top" />');
    $("#name2").append("Name: " + results[1].firstname);
    $("#intro2").append(results[1].introduction);
    $("#gender2").append(results[1].gender);
    $("#language2").append("Primary Language: " + results[1].language);
    $("#country2").append("Country: " + results[1].country);
    $("#religion2").append("Religion: " + results[1].religion);
    $("#type2").append(results[1].typeofuser);
    $("#stayLength2").append(results[1].staylength);
    $("#button2").append("Contact");
    $("#card3").append('<img src= " ' + results[2].profilepicture + ' "class="card-img-top" />');
    $("#name3").append("Name: " + results[2].firstname);
    $("#intro3").append(results[2].introduction);
    $("#gender3").append(results[2].gender);
    $("#language3").append("Primary Language: " + results[2].language);
    $("#country3").append("Country: " + results[2].country);
    $("#religion3").append("Religion: " + results[2].religion);
    $("#type3").append(results[2].typeofuser);
    $("#stayLength3").append(results[2].staylength);
    $("#button3").append("Contact");
    $("#card4").append('<img src= " ' + results[3].profilepicture + ' "class="card-img-top" />');
    $("#name4").append("Name: " + results[3].firstname);
    $("#intro4").append(results[3].introduction);
    $("#gender4").append(results[3].gender);
    $("#language4").append("Primary Language: " + results[3].language);
    $("#country4").append("Country: " + results[3].country);
    $("#religion4").append("Religion: " + results[3].religion);
    $("#type4").append(results[3].typeofuser);
    $("#stayLength4").append(results[3].staylength);
    $("#button4").append("Contact");
    }
  else if (results.length < 6) {
    $("#card1").append('<img src= " ' + results[0].profilepicture + ' "class="card-img-top" />');
    $("#name1").append("Name: " + results[0].firstname);
    $("#intro1").append(results[0].introduction);
    $("#gender1").append(results[0].gender);
    $("#language1").append("Primary Language: " + results[0].language);
    $("#country1").append("Country: " + results[0].country);
    $("#religion1").append("Religion: " + results[0].religion);
    $("#type1").append(results[0].typeofuser);
    $("#stayLength1").append(results[0].staylength);
    $("#button1").append("Contact");
    $("#card2").append('<img src= " ' + results[1].profilepicture + ' "class="card-img-top" />');
    $("#name2").append("Name: " + results[1].firstname);
    $("#intro2").append(results[1].introduction);
    $("#gender2").append(results[1].gender);
    $("#language2").append("Primary Language: " + results[1].language);
    $("#country2").append("Country: " + results[1].country);
    $("#religion2").append("Religion: " + results[1].religion);
    $("#type2").append(results[1].typeofuser);
    $("#stayLength2").append(results[1].staylength);
    $("#button2").append("Contact");
    $("#card3").append('<img src= " ' + results[2].profilepicture + ' "class="card-img-top" />');
    $("#name3").append("Name: " + results[2].firstname);
    $("#intro3").append(results[2].introduction);
    $("#gender3").append(results[2].gender);
    $("#language3").append("Primary Language: " + results[2].language);
    $("#country3").append("Country: " + results[2].country);
    $("#religion3").append("Religion: " + results[2].religion);
    $("#type3").append(results[2].typeofuser);
    $("#stayLength3").append(results[2].staylength);
    $("#button3").append("Contact");
    $("#card4").append('<img src= " ' + results[3].profilepicture + ' "class="card-img-top" />');
    $("#name4").append("Name: " + results[3].firstname);
    $("#intro4").append(results[3].introduction);
    $("#gender4").append(results[3].gender);
    $("#language4").append("Primary Language: " + results[3].language);
    $("#country4").append("Country: " + results[3].country);
    $("#religion4").append("Religion: " + results[3].religion);
    $("#type4").append(results[3].typeofuser);
    $("#stayLength4").append(results[3].staylength);
    $("#button4").append("Contact");
    $("#card5").append('<img src= " ' + results[4].profilepicture + ' "class="card-img-top" />');
    $("#name5").append("Name: " + results[4].firstname);
    $("#intro5").append(results[4].introduction);
    $("#gender5").append(results[4].gender);
    $("#language5").append("Primary Language: " + results[4].language);
    $("#country5").append("Country: " + results[4].country);
    $("#religion5").append("Religion: " + results[4].religion);
    $("#type5").append(results[4].typeofuser);
    $("#stayLength5").append(results[4].staylength);
    $("#button5").append("Contact");
    }
  else if (results.length < 7 || results.length > 7) {
    $("#card1").append('<img src= " ' + results[0].profilepicture + ' "class="card-img-top" />');
    $("#name1").append("Name: " + results[0].firstname);
    $("#intro1").append(results[0].introduction);
    $("#gender1").append(results[0].gender);
    $("#language1").append("Primary Language: " + results[0].language);
    $("#country1").append("Country: " + results[0].country);
    $("#religion1").append("Religion: " + results[0].religion);
    $("#type1").append(results[0].typeofuser);
    $("#stayLength1").append(results[0].staylength);
    $("#button1").append("Contact");
    $("#card2").append('<img src= " ' + results[1].profilepicture + ' "class="card-img-top" />');
    $("#name2").append("Name: " + results[1].firstname);
    $("#intro2").append(results[1].introduction);
    $("#gender2").append(results[1].gender);
    $("#language2").append("Primary Language: " + results[1].language);
    $("#country2").append("Country: " + results[1].country);
    $("#religion2").append("Religion: " + results[1].religion);
    $("#type2").append(results[1].typeofuser);
    $("#stayLength2").append(results[1].staylength);
    $("#button2").append("Contact");
    $("#card3").append('<img src= " ' + results[2].profilepicture + ' "class="card-img-top" />');
    $("#name3").append("Name: " + results[2].firstname);
    $("#intro3").append(results[2].introduction);
    $("#gender3").append(results[2].gender);
    $("#language3").append("Primary Language: " + results[2].language);
    $("#country3").append("Country: " + results[2].country);
    $("#religion3").append("Religion: " + results[2].religion);
    $("#type3").append(results[2].typeofuser);
    $("#stayLength3").append(results[2].staylength);
    $("#button3").append("Contact");
    $("#card4").append('<img src= " ' + results[3].profilepicture + ' "class="card-img-top" />');
    $("#name4").append("Name: " + results[3].firstname);
    $("#intro4").append(results[3].introduction);
    $("#gender4").append(results[3].gender);
    $("#language4").append("Primary Language: " + results[3].language);
    $("#country4").append("Country: " + results[3].country);
    $("#religion4").append("Religion: " + results[3].religion);
    $("#type4").append(results[3].typeofuser);
    $("#stayLength4").append(results[3].staylength);
    $("#button4").append("Contact");
    $("#card5").append('<img src= " ' + results[4].profilepicture + ' "class="card-img-top" />');
    $("#name5").append("Name: " + results[4].firstname);
    $("#intro5").append(results[4].introduction);
    $("#gender5").append(results[4].gender);
    $("#language5").append("Primary Language: " + results[4].language);
    $("#country5").append("Country: " + results[4].country);
    $("#religion5").append("Religion: " + results[4].religion);
    $("#type5").append(results[4].typeofuser);
    $("#stayLength5").append(results[4].staylength);
    $("#button5").append("Contact");
    $("#card6").append('<img src= " ' + results[5].profilepicture + ' "class="card-img-top" />');
    $("#name6").append("Name: " + results[5].firstname);
    $("#intro6").append(results[5].introduction);
    $("#gender6").append(results[5].gender);
    $("#language6").append("Primary Language: " + results[5].language);
    $("#country6").append("Country: " + results[5].country);
    $("#religion6").append("Religion: " + results[5].religion);
    $("#type6").append(results[5].typeofuser);
    $("#stayLength6").append(results[5].staylength);
    $("#button6").append("Contact");
  }
};

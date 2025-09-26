/* user_name = window.prompt("Please enter your name", "Type your name here");
document.getElementById("welcome-heading").textContent ="Hello,Welcome " + user_name +"!";
*/
var webmaps =
[
  ["Oil Spill Toolkit" , "https://www.glo.texas.gov",
"The oil spill toolkit developed by Enterprise Technology Solutions is neat."],
["Texas Ecosystems Analytical Mapper", "http://tpwd.texas.gov/gis/team/",
"The Texas Parks and Wildlife's Landscape Ecology Program is great."]
];
function welcome()
{
  let a = "Please enter your name.";
  let b = "Type your name here.";
  //A prompt box is used to prompt users to input a value before entering a page
  user_name = window.prompt(a, b);
  message = "<h1>Hello, welcome to my webpage," + user_name + "!</h1>"
  return message
}
document.write(welcome());

function webmap_table() {
  for (var row = 0; row < webmaps.length * 2; row++) {
    if (row % 2 == 0) {
      var i = row / 2;
      document.write("<p><b>" + webmaps[i][0] + "</b> <a href='" + webmaps[i][1] + "'>" + webmaps[i][1] + "</a></p>");
    } else {
      var i = (row - 1) / 2;
      document.write("<p>" + webmaps[i][2] + "</p>");
    }
  }
}

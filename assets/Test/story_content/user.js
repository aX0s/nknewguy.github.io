function ExecuteScript(strId)
{
  switch (strId)
  {
      case "69Nkw456vX8":
        Script1();
        break;
      case "6QQNMCE5wfu":
        Script2();
        break;
  }
}

function Script1()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/ " + day + "/ " + year
var player = GetPlayer();
player.SetVar("todayDate",dateString);
}

function Script2()
{
  window.print(); 
}


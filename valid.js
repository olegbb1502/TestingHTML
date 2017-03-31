var form = document.form1;
document.write(form.name.value + "<br />");
document.write(form.email.value + "<br />");
document.write(form.address.value + "<br />");
document.write(form.address2.value + "<br />");
document.write(form.zipcode.value + "<br />");
document.write(form.country.value + "<br />");

function check(form) {
  var name = form.name.value;
  var email = form.email.value;
  var address = form.address.value;
  var address2 = form.address2.value;
  var zipcode = form.zipcode.value;
  var bad = "";
  if (name.length < 3)
     bad += "Имя слишком короткое" + "\n";
  if (name.length > 32)
    bad += "Имя слишком длинное" + "\n";
  if (email.length < 3)
    bad += "email слишком короткий" + "\n";
  if (email.length > 32)
    bad += "email слишком длинный" + "\n";
  if (email[i]!='@') 
	bad += "email not coorect" + "\n";	  
if (address.length < 3)
    bad += "Address слишком короткое" + "\n";
  if (rules != "on")
if (address2.length < 3)
    bad += "Address слишком короткое" + "\n";
  if (zipcode != [0-9])
    bad += "Not coorect" + "\n";
  if (bad != "") {
    bad = "Неверно заполнена форма:" + "\n" + bad;
    alert(bad);
    return false;
  }
  return true;
}
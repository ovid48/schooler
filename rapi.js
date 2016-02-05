    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange=function(){
    if (xmlhttp.readyState==4 && xmlhttp.status==200){
      eval(xmlhttp.responseText);
      }
    }
  xmlhttp.open("GET","https://raw.githubusercontent.com/ovid48/schooler/master/api.js",true);
  xmlhttp.send();

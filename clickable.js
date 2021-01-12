function ShowAndHide(i, header, row) {
  var x = document.getElementById(i);
  var y = document.getElementById(header);
  var content = document.getElementById("be-content");

  if (x.style.display == 'none') {
    x.style.display = 'block';
    x.scrollIntoView();
    //content.style.maxHeight = content.scrollHeight + "px";
    document.getElementById(row).style.marginTop = (content.scrollHeight+10) + "px";
    //document.getElementById('nucsanucsa').style.marginTop = '15%';


  } else {
    x.style.display = 'none';
    y.scrollIntoView();
    document.getElementById(row).style.marginTop = "-" + (content.scrollHeight+10) + "px";
    //document.getElementById('nucsanucsa').style.marginTop = '-15%';

  }
}

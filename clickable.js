function ShowAndHide(i) {
    var x = document.getElementById(i);
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

function klikaj(i)
{ document.getElementById(i).style.visibility='visible';
}

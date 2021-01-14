function ShowAndHide(card, card_content, header, row) {
  var x = document.getElementById(card);
  var y = document.getElementById(header);
  var content = document.getElementById(card_content);

  var all_cards = document.getElementsByClassName("child-div");
  if (x.style.display == 'none')
  {
    //Loop through all cards and see if any are active, if they are, close them
    //row is parent parent next. parentNode.parentNode.nextElementSibling.id
    for (i = 0; i < all_cards.length; i++)
    {
      if (all_cards[i].style.display == 'block')
      {
        all_cards[i].style.display = 'none';
        const parent_parent_next_id = all_cards[i].parentNode.parentNode.nextElementSibling.id;
        var child_nodes = all_cards[i].childNodes;

        var child_content = child_nodes[1];
        //document.getElementById(row).style.marginTop = "-" + (content.scrollHeight) + "px";
        document.getElementById(parent_parent_next_id).style.marginTop = "-" + (child_content.scrollHeight) + "px";

      }
    }

    x.style.display = 'block';
    x.scrollIntoView();
    document.getElementById(row).style.marginTop = (content.scrollHeight) + "px";
  }

  else
  {
    x.style.display = 'none';
    y.scrollIntoView();
    document.getElementById(row).style.marginTop = "-" + (content.scrollHeight) + "px";

  }
}

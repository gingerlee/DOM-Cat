$(document).ready(function() {
  $("img#cat").click(function() {
     $("ul").prepend("<li>Ruff!</li>");
     $("ul").children("li").first().click(function() {
        $(this).remove();
    });
  });

  $("img#dog").click(function() {
    $("img#cat").after("<h1>MEEOW!!</h1>");
  });

  $("h2#kitty").click(function() {
    $("img#cat").after("<img src='img/kat.jpg'>");
    $("img.cat").children("img").first().click(function() {
      $(this).remove();
    });
  });

});

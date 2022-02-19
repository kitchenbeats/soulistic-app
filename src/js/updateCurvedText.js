
function updateCurvedText() {

  var $curvedText = $(".curved-text");
  var radius = 195;


  var w = $curvedText.width(), h = $curvedText.height();

  $curvedText.css("min-width", w + "px");
  $curvedText.css("min-height", h + "px");

  var text = $curvedText.text();
  var html = "";

  Array.from(text).forEach(function (letter) {
      html += `<span>${letter}</span>`;
  });

  $curvedText.html(html);

  var $letters = $curvedText.find("span");

  $letters.css({
    position: "absolute",
    height:`${radius}px`,
    transformOrigin:"bottom center"
  });
  
  var angleRad = w/(2*radius);
  var angle = 2 * angleRad * 180/Math.PI/text.length;
  
  $letters.each(function(idx,el){
    $(el).css({
        transform:`translate(${w/2}px,0px) rotate(${idx * angle - text.length*angle/2}deg)`
    })
  });
}
document.addEventListener('DOMContentLoaded', function(event) {
  updateCurvedText()
});

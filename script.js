$("button").click(function() {
    var phrase = $("input").val();
    if (phrase === "2845") {
    $(".riddle").text("My first is in readable but not in blare. My second is in dinette but not in dent. My third is in somatic but not in atomic. My fourth is in rightly but not in tightly. My fifth is in petulantly but not in aplenty. My sixth is in opinionated but not in indentation. My seventh is in hardhearted but not in redheaded.");}
});

$("img").click(function() {
    $("img").attr("src", "https://i.imgur.com/rxPDEJW.jpg");
});
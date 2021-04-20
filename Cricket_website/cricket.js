
//Creating a show/hide button for the image included with the quote on the homepage
$(function(){
    $("button.hide").click(function(){
        $("#Virat").hide(2000)
        })

    $("button.show").click(function(){
        $("#Virat").show(2000)
        })
})

//Creating the Like function that will be available at the bottom of the main pages
//https://www.w3schools.com/howto/howto_js_display_checkbox_text.asp
function likeBox() {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("text");
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
       text.style.display = "none";
    }
  }

//Implementing animation allowing the image of the fielding positions to be enlarged
$(function(){
    $("button.enlargeImg").click(function(){
        $("figure img").animate({
            width: "50%"
        },2000); //Animating the images

        $("figcaption").slideUp(1000).slideDown(1000);//Chained effects
    })
})

//Adding the comments to the bottom of the page

function addComment() {
    localStorage.setItem("theComment", document.getElementById("commInput").value)
    let newComment = localStorage.getItem("theComment")
    document.getElementById("result").innerHTML += "<br>"+ newComment
    event.preventDefault() //Preventing the program from resetting after submitting the comment
    return false
}

//Creating the content for Save for Later
function addLater(idDes) {
    console.log(idDes)
    localStorage.setItem(idDes, document.getElementById(idDes).textContent)
    
    alert("This has been saved. You have " + localStorage.length + " items saved");//Alert for the amount of items saved
    return false
    
}

//Creating the function to call on the localSession saved items and show them on the Save For Later page
function addSaveFile(){

    let savedList = document.getElementById("resultList")

    for (var i = 0; i < localStorage.length; i++){
        
        savedList.innerHTML += `<b>You saved the following from the ${localStorage.key(i)} page:</b>` +"<br />" + 
        localStorage.getItem(localStorage.key(i)) + "<br />"+ "<br />";
               
    }
}















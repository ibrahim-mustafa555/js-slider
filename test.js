
 

var imglist=document.getElementsByClassName("item-img")

var imgarray =[];
var backi =document.getElementById("backi")
var backiover=document.getElementById("backiover")
var currentindex=0;
for(var i=0;i<imglist.length;i++)
{
    imgarray.push(imglist[i]);

      imgarray[i].addEventListener("click", function (eventinformation)
 {

    currentindex= imgarray.indexOf(eventinformation.target)
   backi.style.display="flex"
  var srcimg=eventinformation.target.getAttribute('src')
 backiover.style.backgroundImage="url("+srcimg+")"

})

}

var nextbtn=document.getElementById("next");
var prevbtn=document.getElementById("prev");  
var closebtn=document.getElementById("close");

function nextslide()
{
    currentindex++;
  if(currentindex==imgarray.length)
  {
      currentindex=0;
  }
    backiover.style.backgroundImage="url("+imgarray[currentindex]. getAttribute("src") +")"

}

 


function prevslide()
{
    currentindex--;
    if(currentindex<0)
    {
        currentindex=imgarray.length-1;
    }
    backiover.style.backgroundImage="url("+imgarray[currentindex]. getAttribute("src") +")"

}

function closeslide()
{
    backi.style.display="none"
}
    

nextbtn. addEventListener("click", nextslide)

prevbtn. addEventListener("click", prevslide)
closebtn. addEventListener("click", closeslide)

/*لو عايز ادوس بره الصوره ويعمل كلوز للصوره
backi.addEventListener("click" ,function (eventinfo)
{
    if(eventinfo!=backiover)
    {
        backi.style.display="none"

    }

})*/

document.body.addEventListener("keydown", function(information)
{
if(information.keyCode==39)//right arrow
{
nextslide();
}
else if(information.keyCode==37)//left arrow
{
    prevslide()
}
else if(information.keyCode==27)//escape
{
    closeslide()
}
}

)





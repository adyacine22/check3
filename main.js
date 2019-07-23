 function italic(){
    bold=document.getElementById("textarea")
    if(bold.style.fontStyle != "italic"){
      bold.style.fontStyle = "italic"    
    }
    else{
        bold.style.fontStyle = "normal";
    }
    }
    function bolde(){
        bold=document.getElementById("textarea");
        if (bold.style.fontWeight==""){
            
            bold.style.fontWeight="bold";
        }
        else {
            bold.style.fontWeight="";
        }
    }
    function underlin(){
        bold=document.getElementById("textarea");
        if (bold.style.textDecoration==""){
            
            bold.style.textDecoration="underline";
        }
        else {
            bold.style.textDecoration="";
        }
    }

    function handleSize (){
        bold=document.getElementById("textarea");
        bold.style.fontSize = document.getElementById('sizeStyle').value

    }
    function police(){
        bold=document.getElementById("textarea")
        bold.style.fontFamily= document.getElementById('Police').value
    }
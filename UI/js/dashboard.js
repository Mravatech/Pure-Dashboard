var click = 1;
function myFunction(){
   if(click ==  1){
    document.getElementById("nav-lateral").style.display    = "none";
    document.getElementById("nabvar").style.width           = "100%";
    document.getElementById("nabvar").style.left            = "0";
    document.getElementById("main").style.width             = "100%";
    click                                                   = click + 1;
   } else{
      document.getElementById("nav-lateral").style.display  = "block";
      document.getElementById("nabvar").style.width         = "82%";
      document.getElementById("nabvar").style.left          = "18%";
      document.getElementById("main").style.width           = "82%";
      click                                                 = 1;
   }
}
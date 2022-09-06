var browser_width = window.innerWidth;
var browser_height = window.innerHeight;
//document.getElementById("endPageBar").innerHTML = "Width: " + screen_width + " Height: " + screen_height;
var screen_width = screen.width;
var screen_height = screen.height;


var swch = document.getElementById("switchOne");
//switch language to english by redirecting to other page with english text
function switchLanguage() {
    "use strict";
    swch.checked = false;
    window.location.href = "about.html";
}



function show_menu()
{
    'use strict';
    //document.getElementsByTagName("body").style.height = "100vh";
    document.getElementById("menuImage").style.display = "none";
    document.getElementById("switchContainer_mobile").style.display = "none";
    document.getElementById("menu_show_container").style.display = "block";
    document.getElementById("close_image").style.display = "block";
    document.getElementById("supervised_container").style.display = "none";
}
function close_menu()
{
    'use strict';
    //document.getElementsByTagName("body").style.height = "auto";
     document.getElementById("menu_show_container").style.display = "none";
    document.getElementById("close_image").style.display = "none";
    document.getElementById("menuImage").style.display = "block";
    document.getElementById("supervised_container").style.display = "block";
    document.getElementById("switchContainer_mobile").style.display = "block";
                            
   
}
function close_language_box()
{
    'use strict';
     document.getElementById("language_container").style.display = "none";
    document.getElementById("close_image_language").style.display = "none";

                            
   
}
function checkScreen()
{
    'use strict';
    close_menu();
                        if((screen_width <= 800) || (browser_width <= 800))
                        {
                            //remove tabs
                            //remove switch container for mobile
                            document.getElementById("switchContainer").style.display = "none";
                            //remove client portal for desktop
                            document.getElementById("client_portal_container").style.display = "none";
                            //remove navigation container for desktop
                            document.getElementById("list_one").style.display = "none";
                            document.getElementById("list_two").style.display = "none";
                            document.getElementById("list_three").style.display = "none";
                            document.getElementById("list_four").style.display = "none";
                            //remmove logo for desktop
                            document.getElementById("logo_container").style.display = "none";
                            //show menu button image
                            document.getElementById("menuImage").style.display = "block";
                            //show mobile logo image
                            document.getElementById("logoImage_mobile").style.display = "block";
                             //show language switch for mobile
                            document.getElementById("switchContainer_mobile").style.display = "block";
                            
                            //Checks if screen widht is lessthen or equal to 800. 
                            // that way if someone just minimized their browser on a desktop, the screen size will still be to big
                            //in mobile phone
                            if(screen_width <= 800)
                            {
                                //resize nav container
                                // this controls the height of the header, in the other files im using
                                // the padding of the switch container to accomplish this
                                //
                                document.getElementById("nav_container").style.paddingTop = "160px";
                                //resize image
                               
                               // document.getElementById("logoImage").style.height = "100px";
                                //document.getElementById("menuImage").style.height = "80px";
                               
                            }
                            else
                            {
                                //in mini browser
                                //enters here when browser is minimized below or equal to 800
                                //resize nav container
                                //document.getElementById("nav_container").style.paddingTop = "60px";
                                //resize image
                                //document.getElementById("logoImage_mobile").style.height = "50px";
                                //adjust size of center logo
                                document.getElementById("center_logo").style.width = "150px";
                                document.getElementById("center_logo").style.borderWidth = "4px";
                                //adjust language question/button font
                                document.getElementById("language_container").style.fontSize = "20px";
                                document.getElementById("language_button").style.fontSize = "20px";
                                
                            }
                            
                            
                        }
                        if((screen_width > 800) && (browser_width > 800))
                        {
                            close_menu();
                            //switch
                            document.getElementById("switchContainer_mobile").style.display = "none";
                            //adjust size of center logo
                            document.getElementById("center_logo").style.width = "250px";
                            document.getElementById("center_logo").style.borderWidth = "6px";
                            //remove mobile logo
                            document.getElementById("logoImage_mobile").style.display = "none";
                            //remove menu image button
                            document.getElementById("menuImage").style.display = "none";
                            document.getElementById("logo_container").style.display = "block";
                            //switch
                            document.getElementById("switchContainer").style.display = "block";
                            
                            document.getElementById("list_one").style.display = "inline";
                            document.getElementById("list_two").style.display = "inline";
                            document.getElementById("list_three").style.display = "inline";
                            document.getElementById("list_four").style.display = "inline";
                            //show client portal for desktop
                            document.getElementById("client_portal_container").style.display = "block";
                            //adjust language question/button font
                            document.getElementById("language_container").style.fontSize = "30px";
                            document.getElementById("language_button").style.fontSize = "30px";
                          
                           
                            //resize nav container
                            document.getElementById("nav_container").style.paddingTop = "40px";
                            //resize image
                            document.getElementById("logoImage").style.height = "0px";
                            
                           
                        }

}

checkScreen();

//checks to see if broswer is resized, 
//if resized calls functions to adjust website to screen dimensions
window.addEventListener('resize', 
    function(event){
                        //Gets browser widht and height
                        browser_width = window.innerWidth;
                        browser_height = window.innerHeight;
                        //Gets screen width and height
                        screen_width = screen.width;
                        screen_height = screen.height;
                        
                        //calls function to adjsut website on screen and broswer dimensions
                        checkScreen();
                        
                    });
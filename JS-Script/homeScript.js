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
                             //switch
                            document.getElementById("switchContainer").style.display = "none";
                            
                            document.getElementById("list_one").style.display = "none";
                            document.getElementById("list_two").style.display = "none";
                            document.getElementById("list_three").style.display = "none";
                            document.getElementById("list_four").style.display = "none";
                            document.getElementById("logo_container").style.display = "none";
                           
                            document.getElementById("menuImage").style.display = "block";
                            document.getElementById("logoImage_mobile").style.display = "block";
                             //switch
                            document.getElementById("switchContainer_mobile").style.display = "block";
                            
                           // document.getElementById("pic_container").style.width = "100%";
                           // document.getElementById("about_info_container").style.width = "100%";
                            //document.getElementById("approach_pic_container").style.width = "100%";
                            //document.getElementById("approach_info_container").style.width = "100%";
                            //document.getElementById("experience_title").style.marginTop = "30px";
                            if(screen_width <= 800)
                            {
                                //resize nav container
                                document.getElementById("nav_container").style.paddingTop = "120px";
                                //resize image
                                //document.getElementById("logo_container").style.width = "0px";
                                document.getElementById("logoImage").style.height = "100px";
                                document.getElementById("menuImage").style.height = "80px";
                                //document.getElementById("menuImage").style.width = "100px";
                                //document.getElementById("supervised_container").style.fontSize = "40px";
                                //bar height
                                //document.getElementById("bar").style.height = "155px";
                            }
                            else
                            {
                                //resize nav container
                                document.getElementById("nav_container").style.paddingTop = "60px";
                                //resize image
                                document.getElementById("logoImage_mobile").style.height = "50px";
                                //bar height
                                //document.getElementById("bar").style.height = "125px";
                                //document.getElementById("logo_container").style.display = "none";
                            }
                            
                            
                        }
                        if((screen_width > 800) && (browser_width > 800))
                        {
                            close_menu();
                            //switch
                             document.getElementById("switchContainer_mobile").style.display = "none";
                             //document.getElementById("supervised_container").style.fontSize = "20px";
                            document.getElementById("logoImage_mobile").style.display = "none";
                            document.getElementById("menuImage").style.display = "none";
                             document.getElementById("logo_container").style.display = "block";
                             //switch
                             document.getElementById("switchContainer").style.display = "block";
                            //document.getElementByClassName("nav_list").style.display = "inline";
                             document.getElementById("list_one").style.display = "inline";
                            document.getElementById("list_two").style.display = "inline";
                            document.getElementById("list_three").style.display = "inline";
                            document.getElementById("list_four").style.display = "inline";
                            
                           // document.getElementById("pic_container").style.width = "45.5%";
                            //document.getElementById("about_info_container").style.width = "45.5%";
                            //document.getElementById("approach_pic_container").style.width = "47%";
                            //document.getElementById("approach_info_container").style.width = "47%";
                           
                            //resize nav container
                            document.getElementById("nav_container").style.paddingTop = "5px";
                            //resize image
                            document.getElementById("logoImage").style.height = "60px";
                            
                            //bar height
                            //document.getElementById("bar").style.height = "170px";
                           
                        }

}

checkScreen();


window.addEventListener('resize', 
    function(event){
                        browser_width = window.innerWidth;
                        browser_height = window.innerHeight;
                        
                        screen_width = screen.width;
                        screen_height = screen.height;
                        //document.getElementById("endPageBar").innerHTML = "Width: " + screen_width + " Height: " + screen_height;
    
                        checkScreen();
                        
                    });
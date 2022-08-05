var browser_width = window.innerWidth;
var browser_height = window.innerHeight;
//document.getElementById("endPageBar").innerHTML = "Width: " + screen_width + " Height: " + screen_height;
var screen_width = screen.width;
var screen_height = screen.height;


var swch = document.getElementById("switchOne");
//switch language to english by redirecting to other page with english text
function switchLanguage() 
{
    "use strict";
    swch.checked = false;
    window.location.href = "about.html";
}

//if(screen_width )
function submit_email()
{
    'use strict';
    var first_name, last_name, email, message,mailto_string,subject;
    first_name = document.getElementById("email_first_name").value;
    last_name = document.getElementById("email_last_name").value;
    email = document.getElementById("email").value;
    message = document.getElementById("email_message").value;
    
    if(first_name.length == 0)
    {
            document.getElementById("error").value = "Please enter first name";
    }
    else
    {
        if(first_name.length > 50)
        {
                document.getElementById("error").value = "First name cannot be more then 50 characters";
        }
        else
        {
            if(last_name.length == 0)
            {
                  document.getElementById("error").value = "Please enter last name";   
            }
            else
            {
                if(last_name.length > 50)
                {
                      document.getElementById("error").value = "Last name cannot be more then 50 characters";   
                }
                else
                {
                    
                    if(email.length == 0)
                    {
                            document.getElementById("error").value = "Please enter email";
                    }
                    else
                    {
                        if(email.length > 256)
                        {
                                document.getElementById("error").value = "Email cannot be more then 256 characters";
                        }
                        else
                        {
                            if(message.length == 0)
                            {
                                    document.getElementById("error").value = "Please enter message";
                            }
                            else
                            {
                                if(message.length > 500)
                                {
                                        document.getElementById("error").value = "Message cannot be more then 500 characters";
                                }
                                else
                                {
                                    subject = "Message From Website - " + first_name + " " + last_name + " - " + email;
                                    mailto_string = "mailto:jenniferz@jennizcounselingcenter.com?subject=" + subject + "&body=" + message;
                                    window.open(mailto_string);
                                }
                            }
                        }
                    }
                }
            }
             
        }
       
    }
    //alert(first_name + " " + last_name + " Email: " + email + " Message: " + message);
    
}
function show_menu()
{
    'use strict';
    document.getElementById("menuImage").style.display = "none";
    document.getElementById("switchContainer_mobile").style.display = "none";
    document.getElementById("menu_show_container").style.display = "block";
    document.getElementById("close_image").style.display = "block";
}
function close_menu()
{
    'use strict';
     document.getElementById("menu_show_container").style.display = "none";
    document.getElementById("close_image").style.display = "none";
    document.getElementById("menuImage").style.display = "block";
    document.getElementById("switchContainer_mobile").style.display = "block";
                            
   
}
function checkScreen()
{
    'use strict';
    close_menu();
                        if((screen_width <= 800) || (browser_width <= 800))
                        {
                            //remove tabs
                            
                            document.getElementById("list_one").style.display = "none";
                            document.getElementById("list_two").style.display = "none";
                            document.getElementById("list_three").style.display = "none";
                            document.getElementById("list_four").style.display = "none";
                            document.getElementById("switchContainer").style.display = "none";
                            document.getElementById("logo_container").style.display = "none";
                            document.getElementById("menuImage").style.display = "block";
                            document.getElementById("logoImage_mobile").style.display = "block";
                             //switch
                            document.getElementById("switchContainer_mobile").style.display = "block";
                            
                            document.getElementById("pic_container").style.width = "100%";
                            document.getElementById("about_info_container").style.width = "100%";
                            document.getElementById("approach_pic_container").style.width = "100%";
                            document.getElementById("approach_info_container").style.width = "100%";
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
                                document.getElementById("bar").style.height = "125px";
                                document.getElementById("logo_container").style.display = "none";
                            }
                            
                            
                        }
                        if((screen_width > 800) && (browser_width > 800))
                        {
                            close_menu();
                             //switch
                             document.getElementById("switchContainer_mobile").style.display = "none";
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
                            
                            document.getElementById("pic_container").style.width = "45.5%";
                            document.getElementById("about_info_container").style.width = "45.5%";
                            document.getElementById("approach_pic_container").style.width = "47%";
                            document.getElementById("approach_info_container").style.width = "47%";
                           
                            //resize nav container
                            document.getElementById("nav_container").style.paddingTop = "5px";
                            //resize image
                            document.getElementById("logoImage").style.height = "80px";
                            
                            //bar height
                            document.getElementById("bar").style.height = "170px";
                           
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
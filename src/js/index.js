
function PreventAutoPlay()
{
     // JQuery
     var $Frame = $("#LogoIframe");
     $Frame.attr('src', '');
     $Frame.attr('src', url);
     // JQuery
}
function GoogleSteelpanShare()
{
   
    // JQuery
    var $Frame = $("#LogoIframe");
    $Frame.attr('src', '');
    $Frame.attr('src', url);
    // JQuery
}
var sharecount = 0;
function GSteelpan_Share()
{
    sharecount++;
    if(sharecount % 2 == 1)
    {
        document.getElementById("GoogleSteelpan_Twitter").style.display = "block";
        document.getElementById("GoogleSteelpan_Facebook").style.display = "block";
        document.getElementById("GoogleSteelpan_Mailto").style.display = "block";
    }
else
    {    
    document.getElementById("GoogleSteelpan_Twitter").style.display = "none";
    document.getElementById("GoogleSteelpan_Facebook").style.display = "none";
    document.getElementById("GoogleSteelpan_Mailto").style.display = "none";  
    }
}
function MenuOnOff()
{
    document.getElementById("dropcont").classList.toggle("show");
    document.getElementById("ProfileMenu").classList.toggle("show");
//////////////////////////////////////////////////////////////////////
    window.onclick = function(event) 
    {
        if(!event.target.matches('.ProfileButton') && !event.target.matches('.UserIcon'))
        {
            if(!event.target.matches('.ProfileContents') && 
                !event.target.matches('.PColumn'))
            {
                document.getElementById("ProfileMenu").classList.remove("show");
            }
        }
//////////////////////////////////////////////////////////////////////
        if(!event.target.matches('.dropbtn') && !event.target.matches('.buttonImg'))
        {
            if(!event.target.matches('.dropdown-content') && 
                !event.target.matches('.column'))
            {
                var DropdownContents = document.getElementsByClassName("dropdown-content");
                var i;
                for(i = 0; i < DropdownContents.length; i++)
                {
                    // Insert all the contents in dropdown-content to this variable,
                    var DropdownWindow = DropdownContents[i];
                    // and turn off the box of dropdown-content.
                    if(DropdownWindow.classList.contains("show"))
                    {
                        DropdownWindow.classList.remove("show");
                    }
                }
            }
        }
    } 
//////////////////////////////////////////////////////////////////////
    // JQuery
    var $Frame = $("#LogoIframe");
    $Frame.attr('src', '');
    $Frame.attr('src', url);
    // JQuery
}
    function Iframe()
    {
        // JQuery 
        // attr: ?????? ????????? ????????? ???????????????.
        // 2. ???????????? ????????? ???????????? ?????? ?????? ????????? ?????? ?????? 
        // ????????? ???????????? ?????? ???????????? ??????
        var $Frame = $("#LogoIframe"); // JQuery Object ??????
        var url = 'https://www.youtube.com/embed/bdvidv6RXJY?autoplay=1';
        $Frame.attr('src', '');
        $Frame.attr('src', url);
        // JQuery
        document.getElementById("LoadingCat").classList.toggle("show");
        document.getElementById("LogoIframe").style.display = "block";
        document.getElementById("VidContainer").style.display = "block";
        document.getElementById("PageLogo").style.display = "none";
        document.getElementById("LogoBtn").style.display = "none";
        document.getElementById("CatBtn").style.display = "none";
        document.getElementById("GoogleFooter").style.display = "none";
        document.getElementById("GoogleSteelpan_Buttons").classList.toggle("show");
    }
    function CloseIframe()
    {
        document.getElementById("LoadingCat").classList.remove("show");
        document.getElementById("PageLogo").style.display = "initial";
        document.getElementById("LogoBtn").style.display = "initial";
        document.getElementById("CatBtn").style.display = "initial";
        document.getElementById("GoogleFooter").style.display = "initial";
        document.getElementById("LogoIframe").style.display = "none";
        document.getElementById("LogoIframe").currentTime = 0;
        document.getElementById("VidContainer").style.display = "none";
        document.getElementById("GoogleSteelpan_Buttons").classList.remove("show");
        document.getElementById("GoogleSteelpan_Twitter").style.display = "none";
        document.getElementById("GoogleSteelpan_Facebook").style.display = "none";
        document.getElementById("GoogleSteelpan_Mailto").style.display = "none";
        // 1. ???????????? ?????? ??? Iframe ????????? ?????? ??? ????????? ??????????????? ??????(???????????????)
        var $Frame = $("#LogoIframe"); // JQuery Object ?????? 
        var url = 'src';
        $Frame.attr('src', '');
        $Frame.attr('src', url);
    }
var count = 0;
function CatOnOff()
{
    count++;
    if(count % 2 == 1)
        {
            document.getElementById("ClickMeIMG").style.display = "none";
            document.getElementById("ToggleCat").style.display= "block";
        }
    else
        {
            document.getElementById("ClickMeIMG").style.display= "block";
            document.getElementById("ToggleCat").style.display = "none";
        }
       // JQuery
       var $Frame = $("#LogoIframe");
       $Frame.attr('src', '');
       $Frame.attr('src', url);
       // JQuery
}
 
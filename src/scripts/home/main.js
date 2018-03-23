$(document).ready(() => {
    /* 
        $( ".Btn" ).hide();
            $( "#SHBtn" ).click(() => {
                $( ".Btn" ).slideToggle(500);
                if($("#SHBtn").html() == "▲"){
                    $("#SHBtn").html("▼");
                } else if($("#SHBtn").html() == "▼") {
                    $("#SHBtn").html("▲");
                }
            
        }); 
    */
    
    if($( ".Onpage" ).text()=="Start"){
        $("#iframe").attr("src", "https://bcetha.de");
    }
    $( ".NavBtn" ).on("click", function(){
        if(!$(this).hasClass("Onpage")){
            $(".NavBtn").removeClass("Onpage");
            $(this).addClass("Onpage");
        }
        if($( ".Onpage" ).text()=="Start"){
            $("#iframe").attr("src", "https://bcetha.de");
        }
        if($( ".Onpage" ).text()=="forum"){
            $("#iframe").attr("src", "https://bcetha.de/forum");
        }
    });
});
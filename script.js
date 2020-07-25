

let current = $("#currentDay");
    let nowHour = moment().format("H");

setInterval(() => {
         let now =moment();
        let date = now.format("dddd, MMMM, D, Y ");
            current.text(date);
}, 1000);


$("#clear").on("click", function () {
    console.log("clicked");
    localStorage.clear();
    window.location.reload();
});

$(".saveBtn").click(function () { 
    $('input[type="text"]').each(function () { 
        const id = $(this).attr('id'); 
        const value = $(this).val(); 
        localStorage.setItem(id, value);
    });
});


changeTheColor(9, "#workHour9"); 
changeTheColor(10, "#workHour10"); 
changeTheColor(11, "#workHour11"); 
changeTheColor(12, "#workHour12"); 
changeTheColor(13, "#workHour13");
changeTheColor(14, "#workHour14"); 
changeTheColor(15, "#workHour15"); 
changeTheColor(16, "#workHour16"); 
changeTheColor(17, "#workHour17"); 


function changeTheColor(time, theId) { 
    if (nowHour > time) { 
        $(theId).addClass("past"); 
    }
    if (nowHour < time) { 
        $(theId).addClass("present"); 
    }
    if (nowHour == time) { 
        $(theId).addClass("future");
    }
}

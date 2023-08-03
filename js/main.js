var speed=document.getElementById("count");
var second=document.getElementById("seconds");
var minute=document.getElementById("minutes");
var hours=document.getElementById("hours");

var cou=0;
var sec=0;
var min=0;
var hrs=0;

var getstart=document.getElementById("start");
var getstop=document.getElementById("stop");
var getreset=document.getElementById("reset");

getstart.addEventListener("click",function(){
    starttimer=setInterval(timer,10);
})

getstop.addEventListener("click",function(){
    clearInterval(starttimer);
})

getreset.addEventListener("click",function(){
    clearInterval(starttimer);
    cou="00";
    sec="00";
    min="00";
    hrs="00";
    speed.innerHTML=cou;
    second.innerHTML=sec;
    minute.innerHTML=min;
    hours.innerHTML=hrs;

})





// var set=setInterval(timer,10);
function timer(){
    if(cou<9){
        cou++;
        speed.innerHTML="0"+cou;
       
    }
    else if(cou>=9&&cou<59){
        cou++;
        speed.innerHTML=cou;
        

    }
    else{
        clearInterval(speed);
        cou=0;
        speed.innerHTML=cou;
        
        // second.innerHTML=sec;
        if(sec<9){
            sec++;
            second.innerHTML="0"+sec;
            
            
        }

        else if(sec>=9&&sec<59){
            sec++;
            second.innerHTML=sec;
            

        }
        else{
            clearInterval(second);
            sec=0;
            second.innerHTML=sec;

            if(min<9){
                min++;
                minute.innerHTML="0"+min
            }
            else if(min>=9&&min<59){
                min++;
                minute.innerHTML=min
            }
            else{
                clearInterval(minute);
                min=0;
                minute.innerHTML=min;
                if(hrs<9){
                    hrs++;
                    hours.innerHTML="0"+hrs;
                }
                else if(hrs>=9&&hrs<24){
                    hrs++;
                    hours.innerHTML=hrs;
                }
                else{
                    clearInterval(hours);
                    hrs=0;
                }
            }

        }
       
    }
    

}
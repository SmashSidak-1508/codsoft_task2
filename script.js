
let num=document.getElementById('enterNum');
let operation=document.querySelectorAll('button');

let result="";
let ops=Array.from(operation);
ops.forEach(button=>{button.addEventListener('click',(e)=>{
    if(e.target.innerHTML == '='){
        result=eval(result);
        num.value=result;
    }
    else if(e.target.innerHTML=='AC'){
        result="";
        num.value=result;
    }
    else if(e.target.innerHTML=='DEL'){
        result=res.substring(0,res.length-1);
        num.value=result;
    }
    else{
    result += e.target.innerHTML;
    num.value=result;
    }
})
})
ans=""
function displayElement(val){
    dispInp.value += val;
}

function evalu(){
    try{
        dispInp.value = eval(dispInp.value);
        ans = dispInp.value;
        setTimeout(function(){dispInp.value=""},2500);
    }
    catch{
        dispInp.value = "Error";
    }
}

function acClear(){
    dispInp.value = "";
}


function cClear(){
    dispInp.value = dispInp.value.slice(0,-1)
}
function answer(){
    dispInp.value += ans
}


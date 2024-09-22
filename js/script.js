let input = document.querySelector("input")
let button = document.querySelector("button")
let result = document.querySelector("h1")


button.addEventListener("click" ,function(){
    if( input.value == "Male") {
       result.innerHTML= ("you are perfect")
    
    }
    else{
        result.innerHTML= ("Its Male Candidate But You Are Not");
    }
})
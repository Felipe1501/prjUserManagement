var name = document.querySelector("#exampleInputName");
var gender = document.querySelectorAll("#form-user-create [name=gender]:checked");
var birth = document.querySelector("#exampleInputBirth");
var country = document.querySelector("#exampleInputCountry");
var email = document.querySelector("#exampleInputEmail");
var password = document.querySelector("#exampleInputPassaword");
var photo = document.querySelector("#exampleInputFile");
var admin = document.querySelector("#exampleAdmin");



//a culpa é sempre sua sempre em questão de erro!!!

var fields =  document.querySelectorAll("#form-user-create [name]");

fields.forEach(function(field, index){

    if(field.name == "gender"){
        if(field.checked){
            console.log("SIM", field);
        }
        
    }else{
        console.log("NÃO");
    }

});

//console.log(field.id, field.name, field.value, field.checked, index);

// = atribuição de valor

//== comparar valores

// === compara valor e o tipo de dado
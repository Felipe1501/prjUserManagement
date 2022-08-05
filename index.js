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
var user = {};
//declarou uma variável fora da função ela é visível dentro e fora da função



fields.forEach(function(field, index){
//sempre evitar código engessado, sempre crie códigos dinâmicos
    if(field.name == "gender"){
        if(field.checked){
            user[field.name] = field.value;
        }
        
    }else{
        user[field.name] = field.value;
    }

});

console.log(user);

//console.log(field.id, field.name, field.value, field.checked, index);

// = atribuição de valor

//== comparar valores

// === compara valor e o tipo de dado

//JSON = JavaScript Object Notation

//Padrão de Notação JS = Baseado em Chave e Valor

//Objeto Literal = possui atributos e métodos
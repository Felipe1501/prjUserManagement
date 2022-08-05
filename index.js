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

function addLine(dataUser){

    console.log(dataUser);
 
    document.getElementById("table-users").innerHTML = `
    <tr>
        <td>
          <img src="dist/img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm">
        </td>
        <td>${dataUser.name}</td>
        <td>${dataUser.email}</td>
        <td>${dataUser.admin}</td>
        <td>${dataUser.data}</td>
        <td>
          <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
          <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
        </td>
    </tr>

`;



}

document.getElementById("form-user-create").addEventListener("submit", function(event){
    event.preventDefault();

    console.log("testando");
});

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

var objectUser = new User(
    user.name, 
    user.gender, 
    user.birth, 
    user.country, 
    user.email, 
    user.password, 
    user.photo, 
    user.admin
    
    );

//objeto = uma variável que instancia uma classe

addLine(objectUser);



//SPA = aplicação de página única

//get = sempre vão para a url

//console.log(field.id, field.name, field.value, field.checked, index);

// = atribuição de valor

//== comparar valores

// === compara valor e o tipo de dado

//JSON = JavaScript Object Notation

//Padrão de Notação JS = Baseado em Chave e Valor

//Objeto Literal = possui atributos e métodos
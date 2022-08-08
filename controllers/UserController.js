class UserController {

    constructor(formId, tableId){

        this.formEl = document.getElementById(formId);
        this.tableEl = document.getElementById(tableId);

        this.onSubmit();
    }

    onSubmit(){

        
        //arrow functions = simplifica a forma de escrita
        this.formEl.addEventListener("submit", event =>{

        event.preventDefault();

        let btn = this.formEl.querySelector("[type=submit]");

        btn.disabled = true;

        let values = this.getValues();

        if(!values) return false;

        this.getPhoto().then((content)=>{
            values.photo = content;

            this.addLine(values);

            this.formEl.reset();

            btn.disabled = false;
        },
        (e) =>{
            //console.error comando que exibe mensagem como erro
            console.error(e);
        }
        );


            //base64 = usado na internet

            //binários por meio de transmissão de texto
        });
        
        

        //objeto = uma variável que instancia uma classe

    }

    getPhoto(){
        return new Promise((resolve, reject)=>{
            //new FileReader = já invoca o método construtor
    let fileReader = new FileReader();

    let elements = [...this.formEl.elements].filter(item=> {
         if (item.name === 'photo'){
             return item;
         }
     });
 
     let file = elements[0].files[0];
 
     fileReader.onload = ()=>{
 
     resolve(fileReader.result);
     };
     
     fileReader.onerror = (e)=>{
        reject(e);
     };

     if(file){
        //callback = após a execução de uma rotina
     fileReader.readAsDataURL(file);
     }else{
        resolve('dist/img/boxed-bg.jpg');
     }
     
 
 
        });
    }

    getValues(){

        let user = {};
        let isValid = true;

        [...this.formEl.elements].forEach(function(field, index){

            //indexOf = realiza buscas dentro de um ARRAY, e se não encontrar retornar - 1
            if(['name', 'email', 'password'].indexOf(field.name) > -1 && !field.value){

                field.parentElement.classList.add("has-error");
                isValid = false;
                //é um conjunto de atributos e métodos: Coleção, que são aninhados dentro de um objeto
            }

            //sempre evitar código engessado, sempre crie códigos dinâmicos
                if(field.name == "gender"){
                    if(field.checked){
                        user[field.name] = field.value;
                    }
                    
                }else if(field.name == "admin"){

                    user[field.name] = field.checked;

                }else{
                    user[field.name] = field.value;
                }
            
            });

            if(!isValid){
                return false;
            }
            
            return new User(
                user.name, 
                user.gender, 
                user.birth, 
                user.country, 
                user.email, 
                user.password, 
                user.photo, 
                user.admin
                
                );

    }

    addLine(dataUser){

        let tr = document.createElement('tr');

        tr.dataset.user = JSON.stringify(dataUser);

        tr.innerHTML = `

            <td>
              <img src="${dataUser.photo}" alt="User Image" class="img-circle img-sm">
            </td>
            <td>${dataUser.name}</td>
            <td>${dataUser.email}</td>
            <td>${(dataUser.admin) ? 'SIM' : 'NÃO'}</td>
            <td>${Utils.dateFormat(dataUser.register)}</td>
            <td>
              <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
              <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
            </td>
     
    `;
        
        this.tableEl.appendChild(tr);
    
        this.updateCount();
    
    }

    updateCount(){
        let numberUsers = 0;
        let numberAdmin = 0;

        [...this.tableEl.children].forEach(tr =>{

            //operador++ = muito comum em laços de repetição(operador incremental)
            numberUsers++;
            //dataset = uma Api web que permite leitura e escrita em elementos co data-*

            let user = JSON.parse(tr.dataset.user);

            if (user._admin) numberAdmin++;
            //serialização = transforma um obj em texto

        });


        document.querySelector("#number-users").innerHTML = numberUsers;
        document.querySelector("#number-users-admin").innerHTML = numberAdmin;
    }
//método estático = pode ser chamada diretamente
}
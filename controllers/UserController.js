class UserController {

    constructor(formIdCreate, formIdUpdate, tableId){

        this.formEl = document.getElementById(formIdCreate);
        this.formUpdateEl = document.getElementById(formIdUpdate)
        this.tableEl = document.getElementById(tableId);
        

        this.onSubmit();
        this.onEdit();
    }

    onEdit(){
        document.querySelector("#box-user-update .btn-cancel").addEventListener("click", e=>{
            //sempre que um trecho de código se repetir, Crie um Método dados variáveis serão parâmetros

            this.showPanelCreate();

        });

        this.formUpdateEl.addEventListener("submit", event => {
            
            event.preventDefault();

            let btn = this.formUpdateEl.querySelector("[type=submit]");

            btn.disabled = true;

            let values = this.getValues(this.formUpdateEl);

            //indice = é a posição exata dessa linha no array

           let index = this.formUpdateEl.dataset.trIndex;

           let tr = this.tableEl.rows[index];

           let userOld = JSON.parse(tr.dataset.user);

           //copia o valor de atributos de um objeto.
           //object.assign = cria um objeto destino, retornando este objeto
           let result = Object.assign({}, userOld, values);

        this.getPhoto(this.formUpdateEl).then((content)=>{

            if (!values.photo) {
                result._photo = userOld._photo;
            }else{
                result._photo = content;
            }

           //JSON.stringify = transforma um objeto JSON em uma string
            tr.dataset.user = JSON.stringify(result);

            tr.innerHTML = `

            <td>
              <img src="${result._photo}" alt="User Image" class="img-circle img-sm">
            </td>
            <td>${result._name}</td>
            <td>${result._email}</td>
            <td>${(result._admin) ? 'SIM' : 'NÃO'}</td>
            <td>${Utils.dateFormat(result._register)}</td>
            <td>
              <button type="button" class="btn btn-primary btn-edit btn-xs btn-flat">Editar</button>
              <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
            </td>
     
    `;
    
            this.addEventsTr(tr);

            this.updateCount();

            this.formUpdateEl.reset();

            btn.disabled = false;

            this.showPanelCreate();
        },
        (e) =>{
            //console.error comando que exibe mensagem como erro
            console.error(e);
        }
        );

        
        });
        
    }

    onSubmit(){

        
        //arrow functions = simplifica a forma de escrita
        this.formEl.addEventListener("submit", event =>{

        event.preventDefault();

        let btn = this.formEl.querySelector("[type=submit]");

        btn.disabled = true;

        let values = this.getValues(this.formEl);

        if(!values) return false;

        this.getPhoto(this.formEl).then((content)=>{
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

    getPhoto(formEl){
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
    //formEl neste caso é o que passamos no parâmetro
    getValues(formEl){

        let user = {};
        let isValid = true;

        [...formEl.elements].forEach(function(field, index){

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
              <button type="button" class="btn btn-primary btn-edit btn-xs btn-flat">Editar</button>
              <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
            </td>
     
    `;

        this.addEventsTr(tr);

        this.tableEl.appendChild(tr);
     
        this.updateCount();
    
    }

    addEventsTr(tr){
        tr.querySelector(".btn-edit").addEventListener("click", e=>{

            let json = JSON.parse(tr.dataset.user);
            
 
           this.formUpdateEl.dataset.trIndex = tr.sectionRowIndex;
 
            //For In = laço para percorrer objetos
            for (let name in json){
 
                 //crie códigos dinâmicos, para isso, sempre manter um padrão de nome de objetos e utilize laços
              let field =  this.formUpdateEl.querySelector("[name=" + name.replace("_", "") + "]");
                 
                 
                 //palavra reservada, continue, ignora o restante das instruções e avança
                 
                 //replace = função nativa que substitui dados, que procura o primeiro elementos e substitui
                 if (field){
                    
                         switch(field.type){
                             case 'file':
                             continue;
                             break;
 
                             case 'radio':
                             field =  this.formUpdateEl.querySelector("[name=" + name.replace("_", "") + "][value=" + json[name] + "]");
                             field.checked = true;
                             break;
 
                             case 'checkbox':
                             field.checked = json[name];
                             break;
 
                             default:
                                 field.value = json[name];
                         }
                     field.value = json[name];
                 }
                 
 
            }

            this.formUpdateEl.querySelector(".photo").src = json._photo;
 
             this.showPanelUpdate();
 
         });
         

    }

    showPanelCreate(){
        document.querySelector("#box-user-create").style.display = "block";
        document.querySelector("#box-user-update").style.display = "none";
    }
    
    showPanelUpdate(){
        document.querySelector("#box-user-create").style.display = "none";
        document.querySelector("#box-user-update").style.display = "block";
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
class User{
    constructor(name, gender, birth, country, email, password, photo, admin){

        this._name = name;
        this._gender = gender;
        this._birth = birth;
        this._country = country;
        this._email = email;
        this._password = password;
        this._photo = photo;
        this._admin = admin;
        this._register = new Date();

    }

    get register(){
        return this._register;
    }

    //não é uma regra, é uma convenção, uma boa prática coletiva
    get name(){
        return this._name;
    }

    get gender(){
        return this._gender;
    }

    get birth(){
        return this._birth;
    }

    get country(){
        return this._country;
    }

    get email(){
        return this._email;
    }

    get photo(){
        return this._photo;
    }

    get password(){
        return this._password;
    }

    get admin(){
        return this._admin;
    }

    set photo(value){
        this._photo = value;
    }
}

//método construtor é um método chamado automaticamente quando invocamos a classe
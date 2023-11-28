class Storage{
    static getSearchedUsersFromStorage(){
        // Tum Kullanici al

        let users;
        if(localStorage.getItem("searched") === null){
            users=[];

        }
        else{
            users = JSON.parse(localStorage.getItem("searched"));
        }

        return users;

    }
    static addSearchedUserToStorage(username){
        // Kullanici ekle

        let users =this.getSearchedUsersFromStorage();
        
        //IndexOf
        if(users.indexOf(username)=== -1){
            users.push(username);
        }

        localStorage.setItem("searched",JSON.stringify(users));


    }
    static clearAllSearchedUsersFromStorage(){
        // Tum kullanicilari sil

        localStorage.removeItem("searched");

    }
}
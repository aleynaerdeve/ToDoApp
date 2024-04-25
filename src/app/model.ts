export class ToDoItem{
    description;
    action;

    constructor(description: any, action:any){
        this.description=description;
        this.action=action;
    }

}

export class Model{
    user;
    items;


    constructor(){
        this.user="Aleyna";
        this.items= [
                            new ToDoItem("Spor", true),
                            new ToDoItem("Kahvaltı", false),
                            new ToDoItem("Kitap okumak", false),
                            new ToDoItem("Sinema", false),
                            

        ]

    }
}

const m = new Model();



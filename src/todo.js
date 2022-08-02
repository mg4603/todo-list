export default class ToDo{
    #title;
    #description;
    #dueDate;
    #priority;
    #notes;
    #checklist;
    constructor(title, description, dueDate, priority, notes, checklist){
        this.#title = title;
        this.#description = description;
        this.#dueDate = dueDate;
        this.#priority = priority;
        this.#notes = notes;
        this.#checklist = checklist;
    }
    getTitle(){
        return this.#title;
    }
    getDescription(){
        return this.#description;
    }
    getDueDate(){
        return this.#dueDate;
    }
    getPriority(){
        return this.#priority;
    }
    getNotes(){
        return this.#notes;
    }
    getChecklist(){
        return this.#checklist;
    }

};
class CheckListItem{
    #status = 0;
    #title;
    constructor(title){
        this.#title = title;
    }
    toggleStatus(){
        this.#status = !this.#status;
    }
    getTitle(){
        return this.#title;
    }
    editTitle(newTitle){
        this.#title = newTitle;
    }
}

export default class ToDo{
    #title;
    #description;
    #dueDate;
    #priority;
    #notes;
    #checklist = [];
    constructor(title, description, dueDate, priority, notes){
        this.#title = title;
        this.#description = description;
        this.#dueDate = dueDate;
        this.#priority = priority;
        this.#notes = notes;
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
    
    editTitle(title){
        this.#title = title;
    }
    editDescription(description){
        this.#description = description;
    }
    editDueDate(date){
        this.#date = date;
    }
    editPriority(priority){
        this.#priority = priority;
    }
    editNotes(newNotes){
        this.#notes = newNotes;
    }
    addCheckListItem(item_title){
        this.#checklist.push(new CheckListItem(item_title));
    }
};
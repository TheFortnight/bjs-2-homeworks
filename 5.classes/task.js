class PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
        
    }
    fix() {
        return this.state = this.state * 1.5;
    }

    set state(number) {
        this._state = number;
        if (number < 0) {
            this._state = 0;
        }
        else if (number > 100) {
            this._state = 100;
        }
        else {
            this._state = number;
        }
    }  
    get state() {
        return this._state;
    }
};

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
};

class Book extends PrintEditionItem {
        constructor (author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
};

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
};

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
};

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
};

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        if(book.state > 30) {
            this.books.push(book);
        }
    }
    findBookBy(type, value){
        let arr = this.books;
        let result = null;
        for(let i=0; i<arr.length; i++){
            if(arr[i][type] === value){
                result = arr[i];                
            }
        }
        return result;
    }
    giveBookByName(bookName) {
        let search = this.findBookBy("name", bookName);
        let giveBook = null;
        if (search != null) {
            giveBook = this.books.splice(this.books.indexOf(search)-1,1)[0];
        }
       return giveBook;
    }
}
class Student {
    constructor() {
        this.marks = {};
    }
    addMark(mark, subject) {
        if(mark<1 || mark>5){
            return;
        }
        else if (this.marks[subject] === undefined) {
            this.marks[subject] = [mark];
          }
        else {
            this.marks[subject].push(mark);
          }
    }
    getAverageBySubject(sub) {
        let marksSumm = 0;
        for (let i=0; i<this.marks[sub].length; i++) {
            marksSumm += this.marks[sub][i];
        }
        return marksSumm / this.marks[sub].length;
    }
    getAverage(){
        let allMarks = 0;
        let marksTotal = 0;
        for(let subj in this.marks) {
            marksTotal += this.marks[subj].length;
            for(let i=0; i<this.marks[subj].length; i++) {
                allMarks += this.marks[subj][i];
                            }
        }
        return allMarks / marksTotal;
    }
}
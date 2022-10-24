function parseCount(str){
    let parsed = Number.parseInt(str, 10);
    if (Number.isNaN(parsed)){
        const error = new Error("Невалидное значение");
        throw error;
    }
    else return parsed;
}

function validateCount(str){
    try {
        return parseCount(str)
    } catch(error) {
        return error;
    }
}

class Triangle{
    constructor(a,b,c){
        this.a = a;
        this.b = b;
        this.c = c;

        if((this.a+this.b)<this.c || (this.a+this.c)<this.b || (this.b+this.c)<this.a){
            let error = new Error("Треугольник с такими сторонами не существует");
            throw error;
        }
    }
    getPerimeter(){
        return (this.a + this.b + this.c);
    }
    getArea(){
        let p = (this.a + this.b + this.c)/2;
        let s = Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c));
        s = +s.toFixed(3);
        return s;
    }
    
}

function getTriangle(a,b,c){
    try{
        return new Triangle(a,b,c);
    } catch{
        return {
            getPerimeter: function(){
                return ('Ошибка! Треугольник не существует')
            },
            getArea: function(){
                return ('Ошибка! Треугольник не существует')
            }
        } 
    };
}


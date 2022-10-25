function parseCount(str){
    let parsed = Number.parseInt(str, 10);
    if (Number.isNaN(parsed)){
        throw new Error("Невалидное значение");
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

        if((a+b)<c || (a+c)<b || (b+c)<a){
           throw new Error("Треугольник с такими сторонами не существует");
        }
    }
    getPerimeter(){
        return (this.a + this.b + this.c);
    }
    getArea(){
        let p = this.getPerimeter()/2;
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


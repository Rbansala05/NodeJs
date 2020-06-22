var rect = {
    perimeter: (x,y) => (2*(x+y)),
    area: (x,y) => (x*y)
};

function solveRect(l,b){
    console.log("solving for rect with l=" +l + " and b=" +b);
    if (l<=0 || b<=0){
        console.log("rectangle dimension should bee greater than zero");
    }
    else{
        console.log("The area of rect is " +rect.area(l,b));
        console.log("The perimiter of rect is " +rect.perimeter(l,b));
    }

}


solveRect(2,4);
solveRect(3,5);
solveRect(0,2);
solveRect(0,0);
solveRect(-1,4);

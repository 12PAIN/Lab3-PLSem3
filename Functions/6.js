
function perimeter(nodes){

    let prevNode = null;
    let perimeter = 0;

    nodes.forEach(node => {

        if(prevNode != null){
            perimeter += metric(node, prevNode);
        }
        else{
            prevNode = node;
        }

    });

    perimeter += metric(prevNode, nodes[nodes.length - 1]);

    return perimeter;
}

function metric(x, y){

    let value = Math.sqrt(Math.pow(y.x - x.x,2) + Math.pow(y.y - x.y,2))

    return value; 
}

let triangle = [{x: 0.0, y: 0.0}, {x: 1.0, y: 1.0}, {x: 0.0, y: 1.0}];

console.log(perimeter(triangle));
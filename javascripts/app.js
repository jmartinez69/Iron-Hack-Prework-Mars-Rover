// Rover Object Goes Here
// ======================
// Autor: Jesus Antonio Martinez Alvarez
// Proyecto: Simulacion Mars Rover

var marsRovers = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [[0,0]]
};
var marsRovers2 = {
  direction: "N",
  x: 4,
  y: 4,
  travelLog: []
};

// Grid de ejemplo. Puede modificarse para poner obstaculos, como por ejemplo un string
// o un objeto tipo marsRovers. Actualmente tres obstaculos con X y un Mars Rover adicional
var roversGrid = [[marsRovers, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, "X", null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, "X" , null, marsRovers2, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, "X", null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null]
];


// ======================

function turnLeft(rover) {
  switch (rover["direction"]) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
  }
  console.log("turnLeft was called!");
}

function turnRight(rover){
  switch (rover["direction"]) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
  console.log("turnRight was called!");
}

/* moveForward: Recibe como parámetros el objeto Rover a mover y el Grid sobre el 
   cual se moverá. Cualquier cosa que no sea null que tenga al frente puede ser un obstáculo,
   incluyendo otro rover, lo cual sera reportado al intentar avanzar sobre el. Importante
   destacar que no se esta fijando el tamaño del grid por lo que puede usarse de 
   cualquier cantidad de filas y columnas. No puede haber filas de distinto tamaño
   que el resto, cosa que si es permitida en javascript.
*/
function moveForward(rover, grid){
  var prevX, prevY;
  // Aquí se determina las fronteras del grid que se pase como parámetro
  edgeEjeX = grid[0].length-1;
  edgeEjeY = grid.length-1;
  prevX = rover.x;
  prevY = rover.y;
  switch(rover["direction"]){
    case "N": if (rover.y > 0){
                if (grid[rover.y-1][rover.x] == null){
                  grid[rover.y][rover.x] = null;
                  rover.y--;
                  grid[rover.y][rover.x] = rover;
                }
                else{
                  console.log("ERROR: Obstaculo en frente: " + grid[rover.y-1][rover.x]);
                }
              }
              else{
                console.log("ERROR: No se puede avanzar mas al Norte");
              }
              break;
    case "E": if (rover.x < edgeEjeX){
                if (grid[rover.y][rover.x+1] == null){
                  grid[rover.y][rover.x] = null;   
                  rover.x++;
                  grid[rover.y][rover.x] = rover;
                }
                else{
                  console.log("ERROR: Obstaculo en frente: " + grid[rover.y][rover.x+1]);             
                }
              }
              else {
                console.log("ERROR: No se puede avanzar mas al Este");
              }
              break;
    case "S": if (rover.y < edgeEjeY){
                if (grid[rover.y+1][rover.x] == null){
                  grid[rover.y][rover.x] = null;   
                  rover.y++;
                  grid[rover.y][rover.x] = rover;
                }
                else {
                  console.log("ERROR: Obstaculo en frente: " + grid[rover.y+1][rover.x]);         
                }
              }
              else {
                console.log("ERROR: No se puede avanzar mas al Sur");
              }
              break;
    case "W": if (rover.x > 0){
                if (grid[rover.y][rover.x-1] == null){
                  grid[rover.y][rover.x] = null;   
                  rover.x--;
                  grid[rover.y][rover.x] = rover;
                }   
                else {
                  console.log("ERROR: Obstaculo en frente: " + grid[rover.y][rover.x-1]);         
                } 
              }
              else{
                console.log("ERROR: No se puede avanzar mas al Oeste");
              }
              break;

  }
  console.log("moveForward was called")
  rover.travelLog.push([prevX,prevY]);

}

/* moveBackward: Misma funcionalidad y parámetros que moveForward pero en el sentido contrario.
*/
function moveBackward(rover, grid){
  var prevX, prevY;
  // Aquí se determina las fronteras del grid que se pase como parámetro
  edgeEjeX = grid[0].length-1;
  edgeEjeY = grid.length-1;
  prevX = rover.x;
  prevY = rover.y;
  switch(rover["direction"]){
    case "N": if (rover.y < edgeEjeY){
                if (grid[rover.y+1][rover.x] == null){
                  grid[rover.y][rover.x] = null;
                  rover.y++;
                  grid[rover.y][rover.x] = rover;
                }
                else {
                  console.log("ERROR: Obstaculo en frente: " + grid[rover.y+1][rover.x]);         
                }                
              }
              else{
                console.log("ERROR: No se puede avanzar mas al Norte");
              }
              break;
    case "E": if (rover.x > 0){
                if (grid[rover.y][rover.x-1] == null){
                  grid[rover.y][rover.x] = null;
                  rover.x--;
                  grid[rover.y][rover.x] = rover;
                }
                else {
                  console.log("ERROR: Obstaculo en frente: " + grid[rover.y][rover.x-1]);         
                }                              
              }
              else {
                console.log("ERROR: No se puede avanzar mas al Oeste");
              }
              break;
    case "S": if (rover.y > 0){
                if (grid[rover.y-1][rover.x] == null){
                  grid[rover.y][rover.x] = null;
                  rover.y--;
                  grid[rover.y][rover.x] = rover;
                }
                else {
                  console.log("ERROR: Obstaculo en frente: " + grid[rover.y-1][rover.x]);         
                }                
              }
              else {
                console.log("ERROR: No se puede avanzar mas al Norte");
              }
              break;
    case "W": if (rover.x < edgeEjeX){
                if (grid[rover.y][rover.x+1] == null){ 
                  grid[rover.y][rover.x] = null;
                  rover.x++;
                  grid[rover.y][rover.x] = rover;
                }
                else {
                  console.log("ERROR: Obstaculo en frente: " + grid[rover.y][rover.x+1]);         
                }                
              }
              else{
                console.log("ERROR: No se puede avanzar mas al Este");
              }
              break;

  }
  console.log("moveBackward was called")
  rover.travelLog.push([prevX,prevY]);
}

/*
Funcion commandsRover: Recibe tres parámetros. El primero es un string con la secuencia
de movimientos que se harán (r: turn right, l: turnleft, f: move forward, b: move backwards)
el objeto rover que se desea mover como segundo parámetro y el último parámetro es el
grid donde se moverá el rover. Aquí, una vez finalizado los movimientos programados en el
string, se imprime la secuencia de coordenadas por donde paso el Rover.
*/
function commandsRover(strCommands, rover, grid)
{
 for (var i=0; i < strCommands.length; i++){
   switch (strCommands[i]){
    case 'r': turnRight(rover);
              break;
    case 'l': turnLeft(rover);
              break;
    case 'f': moveForward(rover, grid);
              break;
    case 'b': moveBackward(rover, grid);
              break;              
    /* Validación en caso de no incluir un comando válido. Se enviará mensaje y
    obviará la instrucción, permitiendo que pueda ejecutarse en la secuencia
     otro comando válido */
    default:  console.log("ERROR: Comando " + strCommands[i] + " invalido");
    
   }
  }
   // Seccion donde se imprime el recorrido en coordenadas del rover
   console.log("Coordenadas de recorrido rover: ");
   for (var i=0; i< rover.travelLog.length; i++){
     console.log(rover.travelLog[i]); 
   } 
   console.log("Posicion Actual del rover: [" + rover.x + ", " + rover.y + "]" );
}

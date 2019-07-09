let $ = go.GraphObject.make;
let myDiagram =
   $(go.Diagram, "myDiagramDiv");

let myModel = $(go.Model);

myModel.nodeDataArray = [
   {key: 'Hichem'},
   {key: 'Momo'},
   {key: 'Farah'},
];

myDiagram.model = myModel;
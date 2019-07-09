let $ = go.GraphObject.make;
let myDiagram =
   $(go.Diagram, 'myDiagramDiv');


myDiagram.nodeTemplate =
   $(go.Node, 'Horizontal',

      {background: '#DE6816'},

      $(go.TextBlock,
         'Default Text',
         {margin: 12, stroke: '#FFFFFF', font: 'bold 16px sans-serif'},

         new go.Binding('text', 'name'))
   );


let myModel = $(go.TreeModel);

myModel.nodeDataArray = [
   {key: '1', name: 'A'},
   {key: '2', parent: '1', name: 'B'},
   {key: '3', parent: '2', name: 'C'},
   {key: '4', parent: '3', name: 'D'},
];

myDiagram.model = myModel;
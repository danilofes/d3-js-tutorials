var expenses = {
  "categoria": "Despesas Totais",
  "subitens": [{
    "categoria": "Água",
    "valor": 67.00
  },{
    "categoria": "Energia",
    "valor": 112.00
  },{
    "categoria": "Aluguel",
    "valor": 900.00
  },{
    "categoria": "Alimentação",
    "subitens": [{
      "categoria": "Almoço no RU",
      "valor": 84.00
    },{
      "categoria": "Compra do mês",
      "valor": 316.00
    }]
  },{
    "categoria": "Transporte",
    "subitens": [{
      "categoria": "Gasolina",
      "valor": 250.00
    },{
      "categoria": "Troca de Óleo",
      "valor": 120.00
    },{
      "categoria": "Ônibus",
      "valor": 26.40
    }]
  }]
};

var width = 600;
var height = 400;
var treemapLayout = d3.layout.treemap();


treemapLayout.padding([40, 10, 10, 10]);

treemapLayout.size([width, height]);

treemapLayout.value(function(node) {
  return node.valor;
});

treemapLayout.children(function(node) {
  return node.subitens;
});

var nodes = treemapLayout.nodes(expenses);

var colorScale = function(i) {
  var step = 256/nodes.length;
  return "hsl(" + i * step + ", 80%, 70%)";
};

var svgTag = d3.select("body").append("svg")
  .attr("class", "treemap")
  .attr("width", width + "px")
  .attr("height", height + "px");

var groups = svgTag.selectAll("g").data(nodes).enter().append("g");

groups
  .attr("transform", function(d) {return "translate(" + d.x + "," + d.y + ")";});

groups.append("rect")
  .attr("width", function(d) {return d.dx;})
  .attr("height", function(d) {return d.dy;})
  .attr("fill", function(d, i) {return colorScale(i);});

groups.append("text")
  .attr("x", function(d) {return d.dx/2;})
  .attr("y", 18)
  .attr("text-anchor", "middle")
  .text(function(d) {return d.categoria;});

groups.append("text")
  .attr("x", function(d) {return d.dx/2;})
  .attr("y", 34)
  .attr("text-anchor", "middle")
  .text(function(d) {return "R$ " + d.value;});


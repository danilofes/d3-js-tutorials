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
      "categoria": "Almoço no Bandejão",
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

treemapLayout.size([width, height]);

treemapLayout.value(function(node) {
  return node.valor;
});

treemapLayout.children(function(node) {
  return node.subitens;
});

var nodes = treemapLayout.nodes(expenses);

var svgTag = d3.select("body").append("svg")
  .attr("class", "treemap")
  .attr("width", width + "px")
  .attr("height", height + "px");

var selection = svgTag.selectAll("rect").data(nodes);

selection.enter().append("rect").attr("class", "treemap-rect").attr("x",
		function(d) {
			return d.x;
		}).attr("y", function(d) {
	return d.y;
}).attr("width", function(d) {
	return d.dx;
}).attr("height", function(d) {
	return d.dy;
});
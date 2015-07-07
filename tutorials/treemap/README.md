# Treemap

Neste tutorial vamos ensinar os conceitos necessários para construir uma visualização Treemap.
Esse tipo de visualização é apropriada para representar o relacionamento parte/todo quando os dados
possuem uma estrutura hierárquica.
Um Treemap divide a área recursivamente em retângulos, de forma que a área de cada retângulo corresponda ao valor do dado associado, conforme exemplificado na figura abaixo:

![Exemplo de Treemap](treemap-example.png)


Antes de começar nosso tutorial, primeiro precisamos de dados. 
Vamos imaginar que estamos interessados em controlar as despesas mensais e saber com que tipo
de coisa gastamos mais dinheiro. Supondo que uma certa pessoa registrou todas as despesas do mês e as organizou em uma hierarquia de categorias, podemos ter dados como exemplificado abaixo.

```json
{
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
}
```

Os dados acima estão na notação JSON. Uma característica importante é que eles são organizados em uma hierárquia, onde os nodos folha possuem valores e o valor dos nodos internos correspondem à soma dos valores de seus descendentes. Com isso, a visualização em Treemap é interessante para visualizar as despesas.


Para começar a construir nossa visualização, vamos partir de um template HTML simples, como exemplificado abaixo:

```html
<html>
<head>
<title>Treemap</title>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8">
</head>
<body>

<svg></svg>

<script src="../../lib/jquery-1.11.2.min.js"></script>
<script src="../../lib/d3.v3.min.js"></script>
<script src="treemap.js"></script>

</body>
</html>
```



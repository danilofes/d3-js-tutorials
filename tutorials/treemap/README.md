# Treemap

Neste tutorial vamos ensinar os conceitos necessários para construir uma visualização treemap.
Esse tipo de visualização é apropriada para representar o relacionamento parte/todo quando os dados
possuem uma estrutura hierárquica. 



Para começar, vamos partir de um template HTML simples, como exemplificado abaixo:

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


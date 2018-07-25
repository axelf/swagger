const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const yaml = require('yamljs');
const swaggerDocument = yaml.load('./swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000, function(){
    console.log("Server is running");
});

/*
const swaggerUiAssetPath = require("swagger-ui-dist").getAbsoluteFSPath();
const express = require('express');
const app = express();
app.use(express.static(swaggerUiAssetPath));
app.get('/spec', ({}, res) => res.sendFile('./swagger.json', {root: './'}));
app.listen(3001, () => {
console.log('🤓 ➡️ Swagger started on port 3001.'); // tslint:disable-line
});
*/

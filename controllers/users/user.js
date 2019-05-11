'use strict'

const conn = require('../connect').connection;
const Request = require('request');
var jsonEnviar = '';
//[{"idProducto": 1,"nombre": "Producto1","SKU": "SKU1","precioLista": 12,"caracteristicas": "Producto prueba","descripcion": "Producto prueba","estado": 1,"proveedor": "tienda"}]
async function obtenerCatalogoTienda(req,res){
    jsonEnviar='';
    const options = {
        url: 'http://35.231.130.137:8084/Tienda/catalogoTienda',
        method: 'GET',
        json: true
        /*headers: {
            'scope': 'catalogoTienda',
            'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MSwicm9sZXMiOiJvYnRlbmVyQ2F0YWxvZ28sZW5yaXF1ZWNlclByb2R1Y3RvLG9idGVuZXJJbnZlbnRhcmlvLHJlYWxpemFyRGVzcGFjaG8iLCJpYXQiOjE1NTc1NjMyNjIsImV4cCI6MTU1NzU2Njg2Mn0.eE1CGWBh9IqAJnuaxmxZyhFeyh__WUduS-Cm_dx8hCs'
        }*/
    };
    
    Request.get(options, (error, response, body) => {
        if (error) {
            return console.dir(error);
        }
        let tam= body.length;
        console.log(body);
        let ram = Math.floor(Math.random()*tam);
        let skusComprar = [];
        for (let index = 0; index < ram; index++) {
            const element = body[index];
            let index2 = Math.floor(Math.random()*ram);
            skusComprar[index] = element.SKU; 
        }
        jsonEnviar = jsonEnviar + '[';
        for (let index = 0; index < skusComprar.length; index++) {
            const element = skusComprar[index];
            let ram2 = Math.floor(Math.random()*500);
            jsonEnviar = jsonEnviar + '{"sku" : "'+skusComprar[index]+'","cantidad": '+ram2+'}';
            if (index!=skusComprar.length-1) {
                jsonEnviar = jsonEnviar + ',';
            } 
        }
        jsonEnviar = jsonEnviar + ']';
        res.jsonp(body);
    });
}


async function enviarOrden(req,res){
    let enviar= JSON.parse(jsonEnviar);
    res.jsonp(enviar);
}

module.exports = {
    obtenerCatalogoTienda,
    enviarOrden
}
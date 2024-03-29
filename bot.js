const Telegraf = require('telegraf').Telegraf;
const dotenv = require('dotenv').config();
const bot = new Telegraf(process.env.BOT_TOKEN);
const express = require('express');
const app = express();

const port = process.env.PORT || 3000


app.get('/', (req, res)=>{
	res.send('Hola mundo')
})

app.listen(port, ()=>{
	console.log(`server en el puerto: ${port}`);
})

bot.command('electrostatica', (ctx)=>{
ctx.reply('Sabías que la electrostática es muy usada en la biología? La teoría electrostática clásica ha sido estudiada y aplicada en sistemas microscópicos de manera tal que se han obtenido resultados que comprueban su validez. Actualmente se tiene un fácil acceso a estudios de sistemas biológicos-moleculares de manera tal que se han realizado modelos que describen el comportamiento y las interacciones entre las estructuras moleculares.');

})

bot.command('electromagnetismo', (ctx)=>{
ctx.reply('Este campo de la física ha sido clave en el desarrollo de numerosas disciplinas y tecnologías, en particular de las ingenierías y la electrónica, así como del almacenamiento de la electricidad e incluso su utilización en áreas de la salud, de la aeronáutica o de la construcción urbana. Algunos ejemplos son: Micrófonos, Tarjetas magnéticas, Almacenamiento digital en cintas magnéticas, entre otros.');

})



bot.command('electricidad', (ctx)=>{
ctx.reply('Sabías que inglaterra fue el primer pais en tener una ciudad iluminada?La ciudad inglesa de Godalming (Surrey) fue la primera en cambiar alumbrado público de gas por uno alimentado por energía eléctrica en el año 1.881 ');
})

bot.command('leydecoulomb', (ctx)=>{
ctx.reply('La ley de Coulomb se ve muy reflejada en la vida cotidiana, algunos ejemplos son: Cuando usamos imanes, si quisiéramos calcular la fuerza de atracción pudiéramos hacerlo,cuando sentimos corriente pasar por nuestro cuerpo,cuando se forman rayos; entre otros.');
})


bot.command('circuito', (ctx)=>{
ctx.reply('Te haz preguntado porque la tecnologia se basa en 0 y 1. Y no en otro numero?. Simple por el paso de electricidad en los circuito, cuando pasa electricidad es un 1 y cuando no pasa electricidad es un 0');

})




bot.command('help', (ctx)=>{
ctx.reply('Comandos para usar el bot: /electrostatica, /leydecoulomb, /electromagnetismo,/electricidad, /circuito, /help');
	
})



bot.launch()


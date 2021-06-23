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


bot.launch()

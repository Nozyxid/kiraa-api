require("./settings");
const http = require("http");
const app = require("./index");
const PORTHOST = port || 8080;

http.createServer(app).listen(PORTHOST, () => {
    console.log(`
    CFonts.say('KIRAA', {
   font: 'tiny',
   align: 'center',
   colors: ['system']
								 
Server running on http://localhost:` + PORTHOST)
console.log(`Hello ${creator}`)
})

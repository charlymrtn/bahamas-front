const express= require('express'),
	 path = require('path');

const app =express();


app.use(express.static('./dist/private-investment-bank'));

app.get('/*', (req,res)=>{
    
res.sendFile(path.join(__dirname,'/dist/private-investment-bank/index.html'));

});

app.listen(process.env.PORT || 8080, ()=>{
console.log('Server started');
})
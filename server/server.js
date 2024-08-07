const express = require ('express');
const app = express();
const path = require('path');
const publicPath = path.join(__dirname,'..','public');
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));;
app.use(xyz);

app.get('*',(req,res)=>{ // unhandled requests
  res.sendFile(path.join(publicPath,'index.html'));
});

app.listen(port,()=>{
    console.log('Server is up');
})

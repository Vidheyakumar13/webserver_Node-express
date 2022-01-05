
let data= require('./data');
Server.get("/items", (req,res) =>{
res.json(data);
});

Server.get("/items/:id",(req,res)=>{
const itemId= req.param.id;
const item=data.find(__item=>item.id===itemId);
if(item){
    res.json(item);
} else {
    res.json({message : `item ${itemId} doesnt exist`})
}
});

const port=4000
getServer.listen(port, ()=> {
    console.log(`server is listening at ${port}`);
});
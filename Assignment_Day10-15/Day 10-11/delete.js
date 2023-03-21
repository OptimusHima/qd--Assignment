const dbConnect = require('./mongodb');
const deleteData = async ()=>{
    let data = await dbConnect();
    let result = await data.deleteMany({
        name:'Aavika'
    })
    console.log(result);
    if(result.acknowledged){
        console.log("Record Delete");
    }

} 
deleteData();
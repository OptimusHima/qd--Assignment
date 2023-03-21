
const dbConnect = require('./mongodb');
const updateData = async()=>{
    let data =await dbConnect();
    let result = await data.updateOne(
        {name: 'Mahesh'},
        {$set: {age:33}}
    )
    console.log(result);
}
updateData();
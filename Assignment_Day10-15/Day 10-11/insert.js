
const dbConnect = require('./mongodb');

const insert = async()=>{
    const data = await dbConnect();
    const result =await data.insertMany([
        {name:'HImanshu Patel',age:20,gender: "Male"},
        {name:'Piyush',age:21,gender: "Male"},
        {name:'Preeti',age:20,gender:'Female'},
        {name:'Deepak',age:25,gender:'Male'},
        {name:'Aavika',age:30,gender:'Female'}
    ])
        if(result.acknowledged){
            console.log("Your Data Inserted");
        }
        // console.log(result);
}

insert();
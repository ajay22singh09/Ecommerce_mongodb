const { MongoClient } = require("mongodb");
const url="mongodb://localhost:27017/ecommerce"
MongoClient.connect(url, function(err, client)
{
    if(err) throw err;
    
    var usersobj=[
        {First_name:'Ajay', Last_Name:'Singh', Email:'ajaysingh@gmail.com', Profile_image:"https://pixabay.com/vectors/business-man-man-tie-suit-business-147092/"},
        {First_name:'Adarsh', Last_Name:'Singh', Email:'adsingh@gmail.com', Profile_image:"https://pixabay.com/vectors/business-man-man-tie-suit-business-147092/"},
        {First_name:'AD', Last_Name:'Saraswat', Email:'adsar@gmail.com', Profile_image:"https://pixabay.com/vectors/business-man-man-tie-suit-business-147092/"},
        {First_name:'Shivam', Last_Name:'Singh', Email:'shivam@gmail.com', Profile_image:"https://pixabay.com/vectors/avatar-people-person-business-user-3637561/"},
        {First_name:'supriya', Last_Name:'kumar', Email:'supriya@gmail.com', Profile_image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fopenbase.com%2Fjs%2Fcartoon-avatar&psig=AOvVaw1pG1lhQxuD44M4bEBhlsYu&ust=1633623362991000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPiJybOXtvMCFQAAAAAdAAAAABAD"},
    ]
    const db=client.db("ecommerce")
    
    //insertion|| creation
    db.collection("Users").insertMany(usersobj, function(err, result)
    {
        if(err) throw err;
        console.log("Inserted: "+result.insertedCount)
    })

    //reading data
    db.collection("Users").find({}).toArray(function(err, result2)
    {
        if(err) throw err;
        console.log("Found : "+result2.matchedCount)
        console.log(result2)
        
    })
    //updating data
    db.collection("Users").updateOne({Last_Name:'Saraswat'},{$set:{Last_Name:'AD'}}, function(err, result3)
    {
        if(err) throw err
        console.log("updated:"+result3.matchedCount)
    })
    //deleting data
    db.collection("Users").deleteOne({First_name:'Ajay'}, function(err, result4)
    {
        if(err) throw err
        console.log("deleted: "+result4.deletedCount)
        client.close();
    })
})
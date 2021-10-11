const { MongoClient } = require("mongodb");
const url="mongodb://localhost:27017"
MongoClient.connect(url, function(err, client)
{
    if (err) throw err
    var categoriesobj=[
        {Name:'Gadgets',slug:'Gadget-items',image:'https://thegadgetflow.com/wp-content/uploads/2021/04/Intelli-ScoutPro-tiny-power-bank-01.jpeg', description:'Contains gadgets'},
        {Name:'Clothes',slug:'Clothes-items',image:'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhlcyUyMHNob3B8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80', description:'Contains clothes'},
        {Name:'Accessories',slug:'Accessories-items',image:'https://images.ctfassets.net/3s5io6mnxfqz/3q6QfJJZgqTljZhxbwliRz/ecde7628474fb6613b460adedf02f64f/AdobeStock_185261221.jpeg?fm=jpg&w=900&fl=progressive', description:'Contains accessoties of all types'},
        {Name:'Health',slug:'Health-items',image:'https://www.biospectrumasia.com/uploads/articles/1-10772.jpg', description:'Contains health related equipments'},
        {Name:'Fitness',slug:'Fitness-items',image:'https://image.shutterstock.com/image-photo/fitness-equipment-healthy-food-sneakers-260nw-362066123.jpg', description:'Contains workout items and nutrient powders'},
        {Name:'Decor',slug:'Decor-items',image:'https://assets-news.housing.com/news/wp-content/uploads/2018/01/30130410/Decor-trends-that-will-define-2018-FB-1200x700-compressed.jpg', description:'Contains house decorating items'},
        {Name:'Decor',slug:'Decor-items',image:'https://assets-news.housing.com/news/wp-content/uploads/2018/01/30130410/Decor-trends-that-will-define-2018-FB-1200x700-compressed.jpg', description:'Contains house decorating items'},
    ]
    const db=client.db('ecommerce')
    //Insertion|| Creation
    db.collection("Categories").insertMany(categoriesobj, function(err, result)
    {
        if (err) throw err
        console.log("Inserted : "+result.insertedCount)
    })
    //Reading Data
    db.collection("Categories").find({}).toArray(function(err, result2)
    {
        if (err) throw err;
        console.log("Found : "+result2.matchedCount)
        console.log(result2)
    })
    //Updating Data
    db.collection('Categories').updateOne({slug:'Decor-items'},{$set:{slug:'Decorating-items'}}, function(err, result3)
    {
        if (err) throw err
        console.log("Updated : "+result3.matchedCount)
    })
    //Deleting Data
    db.collection('Categories').deleteOne({Name:'Accessories'}, function(err, result4)
    {
        if (err) throw err
        console.log("Deleted : "+result4.deletedCount)
        client.close();
    })
})
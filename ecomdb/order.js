const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017"
MongoClient.connect(url, function(err, client)
{
    if (err) throw err
    var ordersobj=[
        {User_ID:001, Total_Items:7, Products:'Shoes', Billing_add:'Ranchi', Shipping_add:'Ranchi_Home', Transaction_stat:'success', Payment_mode:'UID', Payment_stat:'done', Order_stat:'ordered'},
        {User_ID:002, Total_Items:7, Products:'Clothes', Billing_add:'Lucknow', Shipping_add:'Lucknow_Office', Transaction_stat:'success', Payment_mode:'Cash', Payment_stat:'done', Order_stat:'ordered'},
        {User_ID:003, Total_Items:100, Products:'Screws', Billing_add:'Delhi', Shipping_add:'New_Delhi', Transaction_stat:'failed', Payment_mode:'none', Payment_stat:'rejected', Order_stat:'canceled'},
        {User_ID:004, Total_Items:170, Products:'Pyjamas', Billing_add:'Bangalore', Shipping_add:'HSR_Layout', Transaction_stat:'failed', Payment_mode:'none', Payment_stat:'rejected', Order_stat:'canceled'},
        {User_ID:005, Total_Items:25, Products:'Earbuds', Billing_add:'Chengdu', Shipping_add:'Jiangan', Transaction_stat:'success', Payment_mode:'Alipay', Payment_stat:'done', Order_stat:'ordered'},
        {User_ID:006, Total_Items:60, Products:'Glasses', Billing_add:'Sichuan', Shipping_add:'Leshan', Transaction_stat:'success', Payment_mode:'Wechat', Payment_stat:'done', Order_stat:'ordered'},
    ]
    const db=client.db("ecommerce")
    //Insertion || Creation of data
    db.collection("Orders").insertMany(ordersobj,function(err, result)
    {
        if (err) throw err
        console.log("Inserted : "+result.insertedCount)
    })
    //Reading Data
    db.collection("Orders").find({}).toArray(function(err, result2)
    {
        if (err) throw err
        console.log("Found : "+result2.matchedCount)
        console.log(result2);
        
    })
    //Updating data
    db.collection("Orders").updateOne({Products:'Glasses'},{$set:{Products:'Ferrari'}}, function(err, result3)
    {
        if (err) throw err
        console.log("Updated : "+result3.matchedCount)
    })
    //Deleting Data
    db.collection("Orders").deleteOne({User_ID:004}, function(err, result4)
    {
        if (err) throw err
        console.log("Deleted : "+result4.deletedCount)
        client.close();
    })
    
})
var MongoClient = require("mongodb").MongoClient;
 var url = "mongodb://localhost:27017/ecommerce";
 MongoClient.connect(url, function (err, client) {
 if (err) throw err;
   //create operation
   var products = [  
       {name:"Samsung A20",
       thumbnail : "image.png",
       product_gallery : ["image1.jpg","image2.jpg","image3.jpg","image4.jpg"],
       description : "3 GB RAM | 32 GB ROM | Expandable Upto 512 GB16.26 cm (6.4 inch) HD+ Display | 13MP + 5MP | 8MP Front Camera | 4000 mAh Lithium-ion Battery | Exynos 7884B Processor",
       base_price : Double(12000.00),
       sell_price : Double(12990.00),
       Category_Name:"mobile",Tags:"samsung",Additional_information:"best batter life"
       },
{
    name:"Iphone 12",
thumbnail : "iphone_thumbnail",
product_gallery : ["iphone-img1","iphone-img2","iphone-img3","iphone-img4"],
description : "64 GB ROM | 15.49 cm (6.1 inch) Super Retina XDR Display | 12MP + 12MP | 12MP Front Camera | A14 Bionic Chip with Next Generation Neural Engine Processor | Ceramic Shield  | Industry-leading IP68 Water Resistance | All Screen OLED Display | 12MP TrueDepth Front Camera with Night Mode, 4K Dolby Vision HDR Recording",
base_price : Double(50000.00),
sell_price : Double(52999.00),
Category_Name:"mobile",Tags:"apple",Additional_information:"best phone"
},

{
    name:"Fastrack Watch",
thumbnail : "watch-thumbnail",
product_gallery : ["watch-img1","watch-img2","watch-img3","watch-img4",],
description : "This is a very good watch.",
base_price : Double(1400.50),
sell_price : Double(1599.50),
Category_Name:"watches",Tags:"samsung",Additional_information:"samsung watch"
},
];
   const db = client.db("ecommerce");
  db.collection("Products").insertMany(products, function (err, res) {
     if (err) throw err;
     console.log("Number of records inserted: " + res.insertedCount);
  });

  //read

  var query={Name:"Samsung A20"};
   db.collection("Products").find(query).toArray(function(err,result){
    if(err) throw err;
    console.log(result);
    
});


//update

db.collection("Products").updateMany({Name:""},{$set :{Name:"Samsung A20"}},function(err,result){
    if(err) throw err;
    console.log("update = "+(result.modifiedCount));
});
  
  //delete
var myquery = { Name:"Fastrack Watch" }; 
db.collection("Products").deleteMany(myquery, function(err, result) { 
if (err) throw err; 
console.log(result.deletedCount + " record(s) deleted"); 
client.close(); 
  

}); 
});

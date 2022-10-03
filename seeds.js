var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/thryve3", {useNewUrlParser: true, useUnifiedTopology: true});


var Food = require("./models/food");
var Profile = require("./models/profile");
var Exercise = require("./models/exercise");

var data=[
    {name: "Apple", categoryTag: "fruits", proteinTag: "MEDIUM", fatTag: "LOW",carbohydratesTag: "HIGH"},
    {name: "Apricot", categoryTag: "fruits", proteinTag: "MEDIUM", fatTag: "LOW",carbohydratesTag: "HIGH"},
    {name: "Avocado", categoryTag: "fruits", proteinTag: "MEDIUM", fatTag: "LOW",carbohydratesTag: "HIGH"},
    {name: "Banana", categoryTag: "fruits", proteinTag: "MEDIUM", fatTag: "LOW",carbohydratesTag: "HIGH"},
    {name: "Blackcurrant", categoryTag: "fruits", proteinTag: "MEDIUM", fatTag: "LOW",carbohydratesTag: "HIGH"},
    {name: "Blackberry", categoryTag: "fruits", proteinTag: "MEDIUM", fatTag: "LOW",carbohydratesTag: "HIGH"},
    {name: "Cherry", categoryTag: "fruits", proteinTag: "MEDIUM", fatTag: "LOW",carbohydratesTag: "HIGH"},
    {name: "Coconut", categoryTag: "fruits", proteinTag: "MEDIUM", fatTag: "MEDIUM",carbohydratesTag: "HIGH"},
    {name: "Fig", categoryTag: "fruits", proteinTag: "MEDIUM", fatTag: "LOW",carbohydratesTag: "HIGH"},
    {name: "Grape", categoryTag: "fruits", proteinTag: "MEDIUM", fatTag: "LOW",carbohydratesTag: "HIGH"},
    {name: "Kiwi", categoryTag: "fruits", proteinTag: "MEDIUM", fatTag: "LOW",carbohydratesTag: "HIGH"},
    {name: "Lemon", categoryTag: "vegetable", proteinTag: "MEDIUM", fatTag: "LOW",carbohydratesTag: "HIGH"},
    {name: "Orange", categoryTag: "fruits", proteinTag: "MEDIUM", fatTag: "LOW",carbohydratesTag: "HIGH"},
    {name: "Papaya", categoryTag: "fruits", proteinTag: "MEDIUM", fatTag: "LOW",carbohydratesTag: "HIGH"},
    {name: "Peach", categoryTag: "fruits", proteinTag: "MEDIUM", fatTag: "LOW",carbohydratesTag: "HIGH"},
    {name: "Pineapple", categoryTag: "fruits", proteinTag: "MEDIUM", fatTag: "LOW",carbohydratesTag: "HIGH"},
    {name: "Plum", categoryTag: "fruits", proteinTag: "MEDIUM", fatTag: "LOW",carbohydratesTag: "HIGH"}, 
    {name: "Strawberry", categoryTag: "fruits", proteinTag: "MEDIUM", fatTag: "LOW",carbohydratesTag: "HIGH"},
    {name: "Watermelon", categoryTag: "fruits", proteinTag: "MEDIUM", fatTag: "LOW",carbohydratesTag: "HIGH"}
]

// Food.remove({}, function(err){
//     if(err){
//         console.log(err);
//     }
//     console.log("removed all");
//     const fs1 = require("fs");
//     fs1.exists('food.json', function(exists){
//         if(exists){
//             var obj = {
//                 table:[]
//             };
            
//             fs1.readFile('food.json','utf8', function(err,data){
//                 obj = JSON.parse(data);
//                 //console.log(obj.table);
//                 obj.table.forEach(function(food){
//                     Food.create(food, function(err){
//                         if(err){
//                             console.log(err)
//                         }
//                         else{
//                             console.log(food)
//                             console.log("added food");
//                         }
//                     });
//                 });
//             });
//         }
//         else{
//             console.log("error");  
//         } 
//     });   
// });

// Exercise.remove({}, function(err){
//     if(err){
//         console.log(err);
//     }
//     console.log("removed all");
//     const fs1 = require("fs");
//     fs1.exists('exercises.json', function(exists){
//         if(exists){
//             var obj = {
//                 table:[]
//             };
            
//             fs1.readFile('exercises.json','utf8', function(err,data){
//                 obj = JSON.parse(data);
//                 // console.log(obj.table);
//                 obj.table.forEach(function(exercise){
//                     Exercise.create(exercise, function(err){
//                         if(err){
//                             console.log(err)
//                         }
//                         else{
//                             console.log(exercise)
//                             console.log("added exercise");
//                         }
//                     });
//                 });
//             });
//         }
//         else{
//             console.log("error");  
//         } 
//     });   
// });

// const fs1 = require("fs");
// fs1.exists('food3.json', function(exists){
//     if(exists){
//         var obj = {
//             table:[]
//         };
        
//         fs1.readFile('food3.json','utf8', function(err,data){
//             obj = JSON.parse(data);
//             // console.log(obj.table);
//             obj.table.forEach(function(food){
//                 food.energy.amount = food.energy.amount*1000;
//             });
//             var json = JSON.stringify(obj);
//             fs1.writeFile('food3.json', json, 'utf8', function(err){
//                 console.log("done");
//             });
//         });
//     }
//     else{
//         console.log("error");  
//     } 
// });   

// const fs = require("fs");
// fs.exists('food1.json', function(exists){
//     if(exists){
//         var src = {
//             table:[]
//         };
        
//         var des = {
//             table:[]
//         };

//         var res = {
//             table:[]
//         };
        
//         fs.readFile('food1.json','utf8', function(err,desdata){
//             des = JSON.parse(desdata);
//             console.log(des.table.length);
//             const fs1 = require("fs");
//             fs1.readFile('food3.json', 'utf8', function(err,srcdata){
//                 src = JSON.parse(srcdata);
//                 console.log(src.table.length);
//                 res.table = des.table.concat(src.table);
//                 console.log(res.table.length);
//                 var json = JSON.stringify(res);
//                 fs.writeFile('food1.json', json, 'utf8', function(err){
//                     console.log("done");
//                 });
//             });
//         });
//     }
// });

// Food.update({'name': "App"}, {'$set': {
//     'name': "Apple"
// }}, function(err, food) {
//     console.log(food);
// });

// Food.distinct('categoryTag', function(err, Tags){
//     console.log(Tags);
// });

Exercise.find({}, function(err, exercises){
    exercises.forEach(function(exercise){
        Exercise.findById(exercise._id, function(err, e){
            e.verified = true;
            e.save();
            console.log(e);
        });
    })
});

// Food.find({}, function(err, foods){
//     foods.forEach(function(food){
//         Food.findById(food._id, function(err, f){
//             f.verified = true;
//             f.save();
//             console.log(f);
//         });
//     })
// });

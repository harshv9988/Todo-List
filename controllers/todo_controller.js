
const Todo = require('../models/todo');

module.exports.todo = function(req,res){
    // return res.render('todo',{
    //     title:"Todo List",
    //     task_list : taskList
    // });

    Todo.find({},function(err,tasks){
        if(err){
            console.log('error in fetching');
            return;
        }
        return res.render('todo',{
            title:"Todo List",
            task_list:tasks
        });
    })
}

module.exports.add = function(req,res){
    // console.log(req.body);
    // taskList.push(req.body);
    // return res.redirect('back');
    Todo.create({
        description:req.body.description,
        category:req.body.category,
        date:req.body.date
    },function(err,newTask){
        if(err){
            console.log('error in creating task');
            return;
        }
        console.log('*******',newTask);
        return res.redirect('back');
    });
}

module.exports.delete = function(req,res){
    let id = req.body;
    console.log(id);

    let checkboxs = Object.keys(id).length;

    for(let i=0;i<checkboxs;i++){
        Todo.findByIdAndDelete(Object.keys(id)[i],function(err){
            if(err){
                console.log("error in deleting");
                return;
            }
        });
    }
   return res.redirect('back');    
}
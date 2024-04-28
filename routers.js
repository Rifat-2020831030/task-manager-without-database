const express = require('express');
const { v4: uuidv4 } = require('uuid');

const router = express.Router();

let tasks = [
    {
        title: 'sample title',
        description: 'sample description',
        status: `sample description`,
        id: `sampleid`
    }
];

router.get('/', (req, res)=>{
    console.log(tasks);
    res.send(tasks);
});

router.post('/', (req, res)=>{
    const newtasks = req.body;

    tasks.push({ ...newtasks, id: uuidv4()});
    res.send(`New tasks titled ${newtasks.title} has been added`);
});

// serach by id
router.get('/:id', (req, res)=>{
    const {id} = req.params; // it return id of the user who hitted

    const srch = tasks.find((task) => task.id === id);
    res.send(srch);
});

// delete by id
router.delete('/:id', (req, res)=>{
    const { id } = req.params;

    tasks = tasks.filter((task)=> task.id !== id )// filter will filter if return false
    

    res.send(`${id} id tasks has been deleted`);
});

// update by id
router.patch('/:id', (req, res)=>{
    const {id} = req.params;
    // find this tasks
    const updateTask = tasks.find((task)=> task.id === id);
    const {title, description, status} = req.body; // extract updated task


    if(title) updateTask.title = title;
    if(description) updateTask.task = description;
    if(status) updateTask.status = status


    res.send(`task ${id} updated ${updateTask.title}`);
})

module.exports = router;
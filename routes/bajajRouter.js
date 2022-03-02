var express = require('express');
var router = express.Router();


router.post('/', (req, res, next)=>{

    var data = req.body.data;
    if(!data){
        data = [];
    }
    var numbers = [], alphabets = [];
    for(let i = 0; i < data.length; i++){

        if(isNaN(data[i])){
            alphabets.push(data[i]);
        }
        else numbers.push(data[i]);
    }
    
    var responseData = {

        is_success: true,
        user_id: 'priyansh_gupta_15062002',
        email:'guptapriyansh1555@gmail.com',
        roll_number:'11910386',
        numbers,
        alphabets
    }

    res.json(responseData);
})

module.exports = router;

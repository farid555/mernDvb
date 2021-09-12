const express = require('express');
const router = express.Router();

require('../db/conn');
const User = require('../model/userSchema');



router.get('/', (req, res) => {
    res.send(` Hello from the surver router js`);
});

//using promises
// router.post('/register', (req, res) => {

//     const { name, email, phone, work, password, cpassword } = req.body;
//     if (!name || !email || !phone || !work || !password || !cpassword) {
//         return res.status(422).json({ error: "Please filled the form properly" });

//     }
//     User.findOne({ email: email })
//         .then((userExist) => {
//             if (userExist) {
//                 return res.status(422).json({ error: "Email already Exist" });
//             }
//             const user = new User({ name, email, phone: phone, work, password, cpassword });
//             user.save().then(() => {
//                 res.status(201).json({ message: "user registered successfuly" });
//             }).catch((err) => res.status(500).json({ error: "Failed to registered" }));
//         }).catch(err => { console.log(err); });
// });

//Async-Await
router.post('/register', async (req, res) => {

    const { name, email, phone, work, password, cpassword } = req.body;
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "Please filled the form properly" });

    }
    try {
        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(422).json({ error: "Email already Exist" });
        } else if (password != cpassword) {
            return res.status(422).json({ error: "password are not matching" });
        } else {
            const user = new User({ name, email, phone: phone, work, password, cpassword });
            await user.save();

        }



        res.status(201).json({ message: "user registered successfuly" });

    } catch (err) {
        console.log(err);
    }
});


//login route

router.post('/signin', async (req, res) => {

    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "please filled the data..." })
        }
        const userLogin = await User.findOne({ email: email });
        console.log(userLogin);
        res.json({ message: "user Signin Successfully " })

    } catch (err) {
        console.log(err);


    }

})

module.exports = router;

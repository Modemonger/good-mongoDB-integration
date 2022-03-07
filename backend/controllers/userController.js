const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const asyncHandler = require('express-async-handler');
const User = require('../../models/userModel');

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

const registerUser = asyncHandler( async (req, res) => {

    const { name, email, password } = req.body;

    if(!name || !email || !password){
        res.status(400);
        throw new Error('Please add all fields');
    }

    const userExists = await User.findOne({email});
    if(userExists){
        res.status(400);
        throw new Error('User already exists');
    }

    const salt = await crypto.randomBytes(Math.ceil(password.length/2)).toString('hex');
    const hashedPassword = await crypto.createHmac('sha256', salt);
    hashedPassword.update(password);

    const user = await User.create({
        name,
        email,
        password: hashedPassword.digest('hex')
    });

    if(user){
        res.status(201).json({
            message: 'User registered as',
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else{
        res.status(400);
        throw new Error('Invalid user data');
    }

});

const loginUser = asyncHandler( async (req, res) => {
    const { email, password } = req.body;

    const  user = await User.findOne({email});

    const salt = await crypto.randomBytes(Math.ceil(password.length/2)).toString('hex');
    const hashed = await crypto.createHmac('sha256', salt);
    hashed.update(password);

    if( user && (hashed.digest('hex') === user.password)){
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400);
        throw new Error('Invalid credentials');
    }
});

const getUser = asyncHandler( async (req, res) => {
    const { _id, name, email } = await User.findById(req.body.id);
    console.log(req);

    res.status(200).json({
        id: _id,
        name,
        email,
    })
});

module.exports = {
    registerUser,
    loginUser,
    getUser
}
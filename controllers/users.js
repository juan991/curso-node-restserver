

const { response } = require('express');



const getUsers = async( req, res = response ) => {
 
    // Query params / parámetros opcionales ?nom=valor&nom2=valor2
    //const query = req.query;
    const { q, nombre = 'no name', apikey } = req.query;
 
    res.status( 200 ).json({
        msg: 'Get API --controlador',
        //query // Se parsea automáticamente a JSON
        q,
        nombre,
        apikey
    });
};


const postUser = async( req, res = response ) => {

    const { nombre, edad } = req.body; 
    
    res.status( 200 ).json({
        msg: 'Post API --controlador',
        nombre,
        edad,
    });
};

const putUser = async( req, res = response ) => {
    
    // const id = req.params.id;
    const { id }= req.params; // Llega como un string
    
    res.status( 200 ).json({
        msg: 'Put API --controlador',
        id,
    });
};

const deleteUser = async( req, res = response ) => {
 
 
    res.status( 200 ).json({
        msg: 'Delete API --controlador'
    });
};

const patchUser = async( req, res = response ) => {
 
 
    res.status( 200 ).json({
        msg: 'Patch API --controlador'
    });
};




module.exports = {
    getUsers,
    postUser,
    putUser,
    deleteUser,
    patchUser,
};
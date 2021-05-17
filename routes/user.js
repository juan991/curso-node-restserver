

const { Router } = require('express'); // Averiguar más del método Router
const router = Router(); 

const { getUsers, postUser, putUser, deleteUser, patchUser, } = require('../controllers/users');

/* 
router.get('/', (req, res) => {
    //res.send('Hello World');  ------ send() retorna un sitio web html --------
    res.json({
        msg: 'Get API'
    }); // retorna un application/json, se puede chequear en los headers
}); */

router.get( '/', getUsers );

router.post( '/', postUser );

router.put( '/:id', putUser ); // Parámetro obligatorio --->> req.params

router.delete( '/', deleteUser );

router.patch( '/', patchUser );



module.exports = router; // A donde va está importación?????
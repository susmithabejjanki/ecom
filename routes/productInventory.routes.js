module.exports = app => {
    const prodInventory = require('../controllers/productInventory.controller');
    const router = require("express").Router();

    /* create new product inventory */

    router.post('/add', prodInventory.create);

    /* create new product inventory */

    /* retrive all product invenotires from database */

    router.get('/list', prodInventory.findAll);

    /* retrive all product invenotires from database */

    /* retirive single product inventory from database */

    router.get('/list/:id', prodInventory.findOne);

    /* retirive single product inventory from database */

    /* update single product inventory from databse */

    router.put('/update/:id', prodInventory.update);

    /* update single product inventory from databse */

    /* remove single product inventory from database */

    router.delete('/remove/:id', prodInventory.delete);

    /* remove single product inventory from database */

    /* remove all product inventory from database */

    router.delete('/remove', prodInventory.deleteAll);

    /* remove all product inventory from database */

    app.use('/create-prodinventory', router);
}
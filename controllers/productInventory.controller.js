const db = require('../models');
const ProductInventory = db.prodInventory;

/* create and save new product Inventory to database */

exports.create = (req,res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    /* create new product Inventory */

    const newprodInventory = new ProductInventory({
        id: req.body.id,
        name: req.body.name,
        quantity: req.body.quantity
    })

    /* create new product Inventory */
 
    /* save created product Inventory to databse */

    newprodInventory.save(newprodInventory).then(data => {
        res.send(data);
        console.log("New Product Inventory:", data);
    }).catch(error => {
        res.status(500).send({
            message: error.message || "Error occured while creating new product check details properly!!!!....."
        })
    });

    /* save created product Inventory to databse */

}

/* create and save new product Inventory to database */

/* retrive all created product Inventories from */

exports.findAll = (req,res) => {
    const name = req.body.name;

    var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};

    ProductInventory.find(condition).then(data => {
        res.send(data);
        console.log("retrived data:", data);
    }).catch(error => {
        res.status(500).send({
            message: error.message || "Error occured while retiving all product Inventories from database!!!..."
        })
    })
}

/* retrive all created product Inventories from */

/* find single product Inventory from database with id in request */

exports.findOne = (req,res) => {
    const id = req.body.id;

    ProductInventory.findById(id).then(data => {
        if(!data){
            res.status(404).send({ message: "Product Inventory not found with id " + id });
        }else{
            res.send(data);
            console.log("single product inventory with specified id" + id, data);
        }
    }).catch(error => {
        res.status(500).send({
            message: error.message || "Error retrieving single product inventory with id=" + id
        });
    });
}

/* find single product Inventory from database with id in request */

/* update single product inventory from databse with id  */

exports.update = (req,res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    ProductInventory.findByIdAndUpdate(id,req.body,{ useFindAndModify: false }).
    then(data => {
        if(!data){
            res.status(400).send({
                message: `Cannot update product inventory with id=${id}. Maybe product inventory details were not found!`
            })
        }else{
            res.send({message: `product inventory was successfully updated!!!..`})
        }
    }).catch(error => {
        res.status(500).send({
            message: error.message || "error occured while updating product inventory with id" + id
        })
    })
}

/* update single product inventory from databse with id  */

/* delete product inventory with id in request */

exports.delete = (req,res) => {
    const id = req.params.id;

    ProductInventory.findByIdAndRemove(id).then(data=>{
        if(!data){
            res.status(400).send({
                message: `cannot delete product inventory with id=${id}, May be product was not found in inventory`
            })
        }else{
            res.status(500).send({
                message: "product inventory was successfully removed from database"
            })
        }
    }).catch(error => {
        res.status(500).send({
            message: error.message || "could'nt remove product inventory with specified id" + id
        })
    })
}

/* delete product inventory with id in request */

/* remove all product inventory from database */

exports.deleteAll = (req,res) => {
    ProductInventory.deleteMany({}).then(data => {
        res.send({
            message: `${data.deletedCount} product inventory details were deleted successfully!`
        })
    }).catch(error => {
        res.status(500).send({
            message: error.message || "some error occured all product inventory from database"
        })
    })
}

/* remove all product inventory from database */
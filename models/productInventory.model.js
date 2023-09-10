module.exports = mongoose => {
    const ProdInventory = mongoose.model("prodInventory", mongoose.Schema({
        id: Number,
        name: String,
        quantity: Number
    },{timestamps:true}))

    return ProdInventory;

}
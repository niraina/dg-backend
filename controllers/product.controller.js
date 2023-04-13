const productModel = require('../models/product.model')

module.exports.getProduct = async (req, res) => {
    const product = await productModel.find();
    res.status(200).json(product)
}

module.exports.setProduct = async (req, res) => {
    switch (true) {
        case !req.body.reference:
            res.status(400).json({ message: "Champ reference requis" });
            break;
        case !req.body.type:
            res.status(400).json({ message: "Champ type requis" });
            break;
        case !req.body.categorie:
            res.status(400).json({ message: "Champ categorie requis" });
            break;
        case !req.body.prix:
            res.status(400).json({ message: "Champ prix requis" });
            break;
        case !req.body.qunatiter:
            res.status(400).json({ message: "Champ qunatiter requis" });
            break;
        case !req.body.departement:
            res.status(400).json({ message: "Champ departement requis" });
            break;
        default:
            const product = await productModel.create({
                reference: req.body.reference,
                type: req.body.type,
                categorie: req.body.categorie,
                prix: req.body.prix,
                qunatiter: req.body.qunatiter,
                departement: req.body.departement,
            });
            res.status(200).json(product);
            break;
    }
}

module.exports.editProduct = async (req, res) => {
    const product = await productModel.findById(req.params.id)

    if (!product) {
        res.status(400).json({ message: "Cette produit n'existe pas !" })
    }

    const updateProduct = await productModel.findByIdAndUpdate(
        product,
        req.body,
        { new: true }
    )

    res.status(200).json(updateProduct)
}

module.exports.deleteProduct = async (req, res) => {
    const product = await productModel.findById(req.params.id)

    if (!product) {
        res.status(400).json({ message: "Cette produit n'existe pas!" })
    }

    await product.deleteOne(product);
    res.status(200).json(`Suppression effectuer avec succés`)
}
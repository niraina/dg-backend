const categorieModel = require('../models/catgorie.model')

module.exports.getCategories = async (req, res) => {
    const categories = await categorieModel.find();
    res.status(200).json(categories)
}

module.exports.setCategorie = async (req, res) => {
    if( !req.body.libelle) {
        res.status(400).json({message: "Champ libelle requis"});
    } else if(!req.body.type) {
        res.status(400).json({message: "Champ type requis"});
    }

    const categorie =  await categorieModel.create({
        libelle: req.body.libelle,
        type: req.body.type,
    })

    res.status(200).json(categorie);
}

module.exports.editCategorie = async (req, res) => {
    const categorie = await categorieModel.findById(req.params.id)

    if(!categorie) {
        res.status(400).json({message: "Cette categorie n'existe pas !"})
    }

    const updateCategorie = await categorieModel.findByIdAndUpdate(
        categorie,
        req.body,
        {new: true}
    )

    res.status(200).json(updateCategorie)
}

module.exports.deleteCategorie = async (req, res) => {
    const categorie = await categorieModel.findById(req.params.id)

    if(!categorie) {
        res.status(400).json({message: "Cette catégorie n'existe pas!"})
    }

    await categorie.deleteOne(categorie);
    res.status(200).json(`Suppression effectuer avec succés`)
}
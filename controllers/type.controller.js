const typeModel = require('../models/type.model')

module.exports.getTypes = async (req, res) => {
    const types =  await typeModel.find();
    res.status(200).json(types)
}

module.exports.setType = async (req, res) => {
    if( !req.body.libelle) {
        res.status(400).json({message: "Champ requis"});
    }

    const type =  await typeModel.create({
        libelle: req.body.libelle,
    })

    res.status(200).json(type);
}

module.exports.editType = async (req, res) => {
    const type = await typeModel.findById(req.params.id)

    if(!type) {
        res.status(400).json({message: "Ce type n'existe pas !"})
    }

    const updateType = await typeModel.findByIdAndUpdate(
        type,
        req.body,
        {new: true}
    )

    res.status(200).json(updateType)
}

module.exports.deleteType = async (req, res) => {
    const type = await typeModel.findById(req.params.id)

    if(!type) {
        res.status(400).json({message: "Ce type n'existe pas!"})
    }

    await type.deleteOne(type);
    res.status(200).json(`Suppression effectuer avec succés`)
}
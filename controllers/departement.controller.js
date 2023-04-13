const departementModel = require('../models/departement.model')

module.exports.getDepartements = async (req, res) => {
    const departements = await departementModel.find();
    res.status(200).json(departements)
}

module.exports.setDepartement = async (req, res) => {
    switch (true) {
        case !req.body.code:
            res.status(400).json({ message: "Champ code requis" });
            break;
        case !req.body.description:
            res.status(400).json({ message: "Champ description requis" });
            break;
        case !req.body.contact:
            res.status(400).json({ message: "Champ contact requis" });
            break;
        case !req.body.localisation:
            res.status(400).json({ message: "Champ localisation requis" });
            break;
        default:
            const departement = await departementModel.create({
                code: req.body.code,
                description: req.body.description,
                contact: req.body.contact,
                localisation: req.body.localisation,
            });
            res.status(200).json(departement);
            break;
    }
}

module.exports.editDepartement = async (req, res) => {
    const departement = await departementModel.findById(req.params.id)

    if (!departement) {
        res.status(400).json({ message: "Cette departement n'existe pas !" })
    }

    const updateDepartement = await departementModel.findByIdAndUpdate(
        departement,
        req.body,
        { new: true }
    )

    res.status(200).json(updateDepartement)
}

module.exports.deleteDepartement = async (req, res) => {
    const departement = await departementModel.findById(req.params.id)

    if (!departement) {
        res.status(400).json({ message: "Cette departement n'existe pas!" })
    }

    await departement.deleteOne(departement);
    res.status(200).json(`Suppression effectuer avec succés`)
}
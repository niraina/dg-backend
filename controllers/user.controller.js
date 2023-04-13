const express = require('express');
const bcrypt = require('bcrypt');

const User = require('../models/user.model');

exports.getAllUsers = (req, res) => {
    User.findAll()
        .then(users => res.json({ data: users }))
        .catch(err => res.status(500).json({ message: 'Database error', error: err }))
}

exports.getUser = (req, res) => {
    //verification de l'ID
    let userId = parseInt(req.params.id)
    if (!userId) {
        return res.json(400).json({ message: "Missing Parameter" })
    }

    //Recuperation de l'utilisateur
    User.findOne({ where: { id: userId }, raw: true })
        .then(user => {
            if (user === null) {
                return res.json(404).json({ message: 'This user does not exist !' })
            }

            //Utilisateur trouvé
            return res.json({ data: user })
        })
        .catch(err => res.status(500).json({ message: 'Database error', error: err }))
}

exports.setUser = (req, res) => {
    const { firstName, lastName, pseudo, email, password, filename, path } = req.body
    // validation des données reçue
    if (!firstName || !lastName || !pseudo || !email || !password || !filename || !path) {
        return res.status(400).json({ message: 'Missing data' })
    }

    User.findOne({ where: { email: email }, raw: true })
        .then(user => {
            //Verification si l'utilisateur existe deja
            if (user !== null) {
                return res.status(409).json({ message: `This user ${nom} already exists` })
            }

            //hashage du password
            bcrypt.hash(password, parseInt(process.env.BCRYPT_SALT_ROUND))
                .then(hash => {
                    req.body.password = hash

                    //creation de l'utilisateur
                    User.create(req.body)
                        .then(user => res.json({ message: 'User Created', data: user }))
                        .catch(err => res.status(500).json({ message: 'Database error', error: err }))

                })
                .catch(err => res.status(500).json({ message: 'Hash process error', error: err }))

        })
        .catch(err => res.status(500).json({ message: 'Database error', error: err }))
}
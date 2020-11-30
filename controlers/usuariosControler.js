const express = require("express");
const router = express.Router();

const Usuarios = require('../modelos/usuario')

router.get("/",async (req,res) =>{
    const usuarios = await Usuarios.find();
    console.log("usuarios",usuarios);
    res.render("usuarios",{
        usuarios
    });
});

router.post("/add", async (req,res) => {
    const usuario = new Usuarios(req.body);
    await usuario.save();
    res.redirect("/");
});


router.get("/delete/:id", async (req,res) =>{
    const {id} = req.params;
    await Usuarios.remove({_id:id});
    res.redirect("/");
});

router.get("/update/:id", async (req,res) =>{
    const {id} = req.params;
    const usuario = await Usuarios.findById(id);
    console.log(usuario);
    res.render("usuariosUpdate",{
        usuario
    });
});

router.post("/update/:id", async (req,res) => {
    const {id} = req.params;
    await Usuarios.update({_id:id},req.body)
    res.redirect("/");
})

module.exports = router;
const detalharUsuario = async (req, res) => {
    try {
        return res.status(200).json(req.usuario);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

module.exports = detalharUsuario;

exports.saveImage = (req, res, next) => {
    return res.status(201).json({ imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}` })
}

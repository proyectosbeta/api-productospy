const mainController = (req, res) => {
  res.status(200).json({
    message: req.polyglot.t('welcome'),
  });
};

export default mainController;

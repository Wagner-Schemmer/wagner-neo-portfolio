module.exports = (req, res) => {
  res.status(200).json({ ok: true, service: "wagner-neo-portfolio", time: new Date().toISOString() });
};

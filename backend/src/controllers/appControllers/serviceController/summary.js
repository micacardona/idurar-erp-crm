module.exports = function summary(Model, req, res) {
  // Example: return a count of all documents
  Model.countDocuments({}, (err, count) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Summary error', error: err });
    }
    res.status(200).json({ success: true, summary: { count } });
  });
};
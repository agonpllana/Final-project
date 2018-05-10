var mongoose = require('mongoose');

var Kontrata = new mongoose.Schema({
  nrProkurimit: String,
  llojiProkurimit: String,
  aktivitetiProkurimit: String,
  dataInicimit: Date,
  dataPublikimit: Date,
  dataNenshkrimit: Date,
  dataImplementimit: Date,
  dataPermbylljes: Date,
  cmimiKontrates: Number,
  cmimiTotal: Number,
  emriKontratuesit: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('contracts', Kontrata);

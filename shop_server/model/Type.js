const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const typeSchema = new Schema({
    id: Schema.Types.ObjectId,
    typeId: Number,
    typeName: String
});

mongoose.model('Type', typeSchema);
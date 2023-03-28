// doctor_id
// first_name
// last_name
// specialization - {
    // Small animal medicine,
    // large animal medicine, 
    // Equine medicine,
    // Exotic animal medicine, 
    // Surgery, 
    // Internal medicine,
    // Dermatology,
    // Oncology,
    // Cardiology,
    // Neurology 
// }
// email
// phone
// address

const mongoose = require("mongoose");

const doctorSchema = mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    specialization: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    address: { type: String, required: true },
    fees: { type: Number, required: true },
});

const DoctorModel = mongoose.model("doctor", doctorSchema);

module.exports = {
    DoctorModel
}
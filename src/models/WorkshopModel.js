import { Schema, model } from "mongoose";

const workshopSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  specialties: {
  type: [String],
      required: true,
    }
});

export default model("Workshop", workshopSchema);


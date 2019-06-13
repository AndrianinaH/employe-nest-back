import * as mongoose from 'mongoose';

export const EmployeSchema = new mongoose.Schema({
  nom: String,
  prenom: String,
  poste: String,
  sexe: String,
  dateNaissance: Date,
  urlPhoto: String
});

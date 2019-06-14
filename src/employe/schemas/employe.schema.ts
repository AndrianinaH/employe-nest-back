import { Schema } from 'mongoose';

export const EmployeSchema = new Schema({
  nom: String,
  prenom: String,
  poste: String,
  sexe: String,
  dateNaissance: Date,
  urlPhoto: String
});

import { Document } from 'mongoose';

export interface Employe extends Document {
  id: string;
  nom: string;
  prenom: string;
  poste: string;
  sexe: string;
  dateNaissance: Date;
  urlPhoto: string;
}

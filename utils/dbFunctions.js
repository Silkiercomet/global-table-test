import { db } from "../firebase-config";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

export const userCollectionRef = collection(db, "users");

export const createUser = async (contact) => {
  await addDoc(userCollectionRef, contact);
};

export const updateUser = async (id, data) => {
  const userDoc = doc(db, "users", id);
  await updateDoc(userDoc, data);
};
export const deleteUser = async (id) => {
  const userDoc = doc(db, "users", id);
  await deleteDoc(userDoc);
};
export const handleDelete = (id, state, display) => {
    deleteUser(id)
    const newList = display.filter(e => e.id !== id)
    state(newList)
  }

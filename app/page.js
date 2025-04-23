import React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import { db } from "@/firebase/config";
import {
  addDoc,
  collection,
  updateDoc,
  query,
  where,
  getDocs,
  doc,
  limit,
  onSnapshot,
} from "firebase/firestore";

function page() {

  const getCollections = async () => {
    const testCollection = collection(db, "Test");
    const snapshot = await getDocs(testCollection);
    snapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
    });
  };

  getCollections();

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        Welcome to the Home Page
      </h1>
    </div>
  );
}

export default page;

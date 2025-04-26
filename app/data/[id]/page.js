"use client";

import { doc, getDoc } from "firebase/firestore";
import React from "react";
import { useEffect, useState } from "react";
import { db } from "@/firebase/config";

import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";

export default function Page({ params }) {
  const userId = "E7a0wWKwmJ6AOGvAJAXd"; // TEMP user ID, replace with actual user ID logic
  const unwrappedParams = React.use(params);
  const carId = unwrappedParams.id;
  const [car, setCar] = useState(null);

  useEffect(() => {
    fetchCar(userId, carId);
  }, []);

  const fetchCar = async () => {
    try {
      const carRef = doc(db, "users", userId, "cars", carId);
      const snapshot = await getDoc(carRef);
      const carData = snapshot.data();
      setCar(carData);
      console.log("Car data fetched:", carData);
    } catch (error) {
      console.error("No car found with the given ID");
    }
  };

  return (
    <Box sx={{ padding: "20px", textAlign: "center" }}>
      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          borderRadius: "8px",
          padding: "20px",
          display: "inline-block",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        {car ? (
          <Box>
            <Box component="h1" sx={{ fontSize: "2rem", marginBottom: "20px" }}>
              Car Details
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "20px",
                textAlign: "left",
              }}
            >
              <TextField label="Marca" value={car.marca || ""} fullWidth />
              <TextField label="Modelo" value={car.modelo || ""} fullWidth />
              <TextField label="Año" value={car.año || ""} fullWidth />
              <TextField label="Color" value={car.color || ""} fullWidth />
              <TextField label="Chasis" value={car.chasis || ""} fullWidth />
              <TextField
                label="Precio"
                value={`$${car.precio || ""}`}
                fullWidth
              />
              <TextField label="Millas" value={car.millas || ""} fullWidth />
              <TextField label="Dealer" value={car.dealer || ""} fullWidth />
              <TextField
                label="Transporte"
                value={car.transporte || ""}
                fullWidth
              />
              <TextField label="Varco" value={car.varco || ""} fullWidth />
              <TextField label="Placa" value={car.placa || ""} fullWidth />
              <TextField
                label="Impuesto"
                value={`$${car.impuesto || ""}`}
                fullWidth
              />
            </Box>
            <Box component="h2" sx={{ fontSize: "1.5rem", marginTop: "30px" }}>
              Gastos
            </Box>
            <Box component="ul" sx={{ listStyleType: "none", padding: 0 }}>
              {car.gastos && car.gastos.length > 0 ? (
                car.gastos.map((gasto, index) => (
                  <TextField
                    key={index}
                    label={gasto.tipo}
                    value={`$${gasto.precio}`}
                    fullWidth
                    sx={{ marginBottom: "10px" }}
                  />
                ))
              ) : (
                <Box sx={{ fontSize: "1.2rem" }}>
                  No gastos recorded for this car.
                </Box>
              )}
            </Box>
            <Box sx={{ marginTop: "20px", textAlign: "center" }}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => console.log("Update button clicked")}
              >
                Update
              </Button>
            </Box>
          </Box>
        ) : (
          <Box>
            <Box component="h1" sx={{ fontSize: "2rem" }}>
              Loading car details...
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}

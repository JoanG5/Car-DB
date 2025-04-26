"use client";

import { doc, getDoc } from "firebase/firestore";
import React from "react";
import { useEffect, useState } from "react";
import { db } from "@/firebase/config";

import Box from "@mui/material/Box";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";

export default function Page({ params }) {
  const userId = "E7a0wWKwmJ6AOGvAJAXd"; // TEMP user ID, replace with actual user ID logic
  const unwrappedParams = React.use(params);
  const carId = unwrappedParams.id;

  const values = [
    "marca",
    "modelo",
    "año",
    "color",
    "chasis",
    "precio",
    "millas",
    "dealer",
    "transporte",
    "varco",
    "placa",
    "impuesto",
  ];

  const [car, setCar] = useState(null);
  const [updateCar, setUpdateCar] = useState({
    marca: "",
    modelo: "",
    año: "",
    color: "",
    chasis: "",
    precio: "",
    millas: "",
    dealer: "",
    transporte: "",
    varco: "",
    placa: "",
    impuesto: "",
    gastos: [],
  });
  console.log(updateCar);

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
              {values.map((value) => (
                <Box>
                  <Box sx={{ marginBottom: "10px" }}>
                    <Box
                      component="span"
                      sx={{ fontWeight: "bold", marginRight: "10px" }}
                    >
                      {value.charAt(0).toUpperCase() + value.slice(1)}:
                    </Box>
                    <Box component="span">{car[value] || "N/A"}</Box>
                  </Box>
                  <TextField
                    label={`Update ${
                      value.charAt(0).toUpperCase() + value.slice(1)
                    }`}
                    fullWidth
                    onChange={(e) =>
                      setUpdateCar((prev) => ({
                        ...prev,
                        [value]: e.target.value,
                      }))
                    }
                  />
                </Box>
              ))}
            </Box>
            <Box component="h2" sx={{ fontSize: "1.5rem", marginTop: "30px" }}>
              Gastos
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <Box>
                <Box
                  component="span"
                  sx={{ fontWeight: "bold", marginRight: "10px" }}
                >
                  Gasto:
                </Box>
                <TextField label="Update Gasto" fullWidth></TextField>
              </Box>

              <Box>
                <Box
                  component="span"
                  sx={{ fontWeight: "bold", marginRight: "10px" }}
                >
                  Precio:
                </Box>
                <TextField label="Update Gasto" fullWidth></TextField>
              </Box>
              <Box>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => console.log(`Delete gasto ${index}`)}
                  sx={{ marginLeft: "10px" }}
                >
                  Add Gasto
                </Button>
              </Box>
            </Box>
            <Box component="ul" sx={{ listStyleType: "none", padding: 0 }}>
              {car.gastos && car.gastos.length > 0 ? (
                car.gastos.map((gasto, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr 1fr",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <Box>
                      <Box
                        component="span"
                        sx={{ fontWeight: "bold", marginRight: "10px" }}
                      >
                        Gasto {index + 1}:
                      </Box>
                      <Box component="span">{gasto.tipo || "N/A"}</Box>
                      <TextField label="Update Gasto" fullWidth></TextField>
                    </Box>
                    <Box>
                      <Box
                        component="span"
                        sx={{ fontWeight: "bold", marginRight: "10px" }}
                      >
                        Precio:
                      </Box>
                      <Box component="span">{gasto.precio || "N/A"}</Box>
                      <TextField label="Update Gasto" fullWidth></TextField>
                    </Box>
                    <Box>
                      <Button
                        color="error"
                        variant="contained"
                        onClick={() => console.log(`Delete gasto ${index}`)}
                        sx={{ marginLeft: "10px" }}
                      >
                        Delete
                      </Button>
                    </Box>
                  </Box>
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

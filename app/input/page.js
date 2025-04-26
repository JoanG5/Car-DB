"use client";

import * as React from "react";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";
import { db } from "@/firebase/config"; // Adjust the import path as necessary
import { addDoc, collection } from "firebase/firestore"; // Import Firestore functions

export default function InputField() {
  const userId = "E7a0wWKwmJ6AOGvAJAXd"; // TEMP user ID, replace with actual user ID logic
  const [car, setCar] = useState({
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
  });
  const [gasto, setGasto] = useState({
    tipo: "",
    precio: "",
  });
  const [listGastos, setListGastos] = useState([]);

  // console.log("Current car state:", car);
  // console.log("Current gasto state:", gasto);

  const addGasto = (gasto) => {
    if (!gasto.tipo || !gasto.precio) {
      alert("Please fill in both fields");
      return;
    }
    setListGastos((prev) => [...prev, gasto]);
    setGasto({ tipo: "", precio: "" });
    console.log(listGastos);
  };

  const deleteGasto = (index) => {
    setListGastos((prev) => prev.filter((_, i) => i !== index));
    console.log("Gasto deleted at index:", index);
  };

  const addCar = async (e) => {
    e.preventDefault();
    for (const key in car) {
      if (!car[key]) {
        alert(`Please fill in the ${key} field`);
        return;
      }
    }
    const newCar = {
      ...car,
      gastos: listGastos,
    };
    await addDoc(collection(db, "users", userId, "cars"), newCar)
      .then(() => {
        console.log("Car added successfully:", newCar);
        setCar({
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
        });
        setListGastos([]);
      })
      .catch((error) => {
        console.error("Error adding car:", error);
      });
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          borderRadius: "8px",
          padding: "20px",
          display: "inline-block",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Added drop shadow
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            marginBottom: "20px",
          }}
        >
          <FormControl>
            <FormLabel>Marca</FormLabel>
            <Input
              placeholder="Marca"
              value={car.marca}
              onChange={(e) =>
                setCar((prev) => ({ ...prev, marca: e.target.value }))
              }
            />
          </FormControl>
          <FormControl>
            <FormLabel>Modelo</FormLabel>
            <Input
              placeholder="Modelo"
              value={car.modelo}
              onChange={(e) =>
                setCar((prev) => ({ ...prev, modelo: e.target.value }))
              }
            />
          </FormControl>
          <FormControl>
            <FormLabel>Año</FormLabel>
            <Input
              type="number"
              placeholder="Año"
              value={car.año}
              onChange={(e) =>
                setCar((prev) => ({ ...prev, año: e.target.value }))
              }
            />
          </FormControl>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            marginBottom: "20px",
          }}
        >
          <FormControl>
            <FormLabel>Color</FormLabel>
            <Input
              placeholder="Color"
              value={car.color}
              onChange={(e) =>
                setCar((prev) => ({ ...prev, color: e.target.value }))
              }
            />
          </FormControl>
          <FormControl>
            <FormLabel>Chasis</FormLabel>
            <Input
              placeholder="Chasis"
              value={car.chasis}
              onChange={(e) =>
                setCar((prev) => ({ ...prev, chasis: e.target.value }))
              }
            />
          </FormControl>
          <FormControl>
            <FormLabel>Precio</FormLabel>
            <Input
              type="number"
              placeholder="Precio"
              value={car.precio}
              onChange={(e) =>
                setCar((prev) => ({ ...prev, precio: e.target.value }))
              }
            />
          </FormControl>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            marginBottom: "20px",
          }}
        >
          <FormControl>
            <FormLabel>Millas</FormLabel>
            <Input
              placeholder="Millas"
              type="number"
              value={car.millas}
              onChange={(e) =>
                setCar((prev) => ({ ...prev, millas: e.target.value }))
              }
            />
          </FormControl>
          <FormControl>
            <FormLabel>Dealer</FormLabel>
            <Input
              placeholder="Dealer"
              value={car.dealer}
              onChange={(e) =>
                setCar((prev) => ({ ...prev, dealer: e.target.value }))
              }
            />
          </FormControl>
          <FormControl>
            <FormLabel>Transporte</FormLabel>
            <Input
              placeholder="Transporte"
              value={car.transporte}
              onChange={(e) =>
                setCar((prev) => ({ ...prev, transporte: e.target.value }))
              }
            />
          </FormControl>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            marginBottom: "20px",
          }}
        >
          <FormControl>
            <FormLabel>Varco</FormLabel>
            <Input
              placeholder="Varco"
              value={car.varco}
              onChange={(e) =>
                setCar((prev) => ({ ...prev, varco: e.target.value }))
              }
            />
          </FormControl>
          <FormControl>
            <FormLabel>Placa</FormLabel>
            <Input
              placeholder="Modelo"
              value={car.placa}
              onChange={(e) =>
                setCar((prev) => ({ ...prev, placa: e.target.value }))
              }
            />
          </FormControl>
          <FormControl>
            <FormLabel>Impuesto</FormLabel>
            <Input
              type="number"
              placeholder="Impuesto"
              value={car.impuesto}
              onChange={(e) =>
                setCar((prev) => ({ ...prev, impuesto: e.target.value }))
              }
            />
          </FormControl>
        </Box>

        <Box
          style={{
            display: "flex",
            gap: "20px",
            marginBottom: "20px",
          }}
        >
          <FormControl style={{ flex: 1 }}>
            <FormLabel>Gasto</FormLabel>
            <Input
              placeholder="Tipo De Gasto"
              fullWidth
              value={gasto.tipo}
              onChange={(e) =>
                setGasto((prev) => ({ ...prev, tipo: e.target.value }))
              }
            />
          </FormControl>
          <FormControl style={{ flex: 1 }}>
            <FormLabel style={{ visibility: "hidden" }}>Hidden</FormLabel>
            <Input
              placeholder="Gasto"
              type="number"
              fullWidth
              value={gasto.precio}
              onChange={(e) =>
                setGasto((prev) => ({ ...prev, precio: e.target.value }))
              }
            />
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "20px" }}
            onClick={() => {
              addGasto(gasto);
            }}
          >
            Add
          </Button>
        </Box>

        {listGastos.map((item, index) => (
          <Box
            style={{
              display: "flex",
              flexDirection: "row", // Changed to row
              gap: "20px",
              marginBottom: "20px",
            }}
          >
            <FormControl key={index} style={{ flex: 1 }}>
              <Input placeholder="Gasto" fullWidth disabled value={item.tipo} />
            </FormControl>
            <FormControl style={{ flex: 1 }}>
              <Input
                placeholder="Precio"
                fullWidth
                disabled
                value={item.precio}
              />
            </FormControl>
            <Button
              variant="contained"
              color="error"
              onClick={() => deleteGasto(index)}
            >
              Delete
            </Button>
          </Box>
        ))}

        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "20px" }}
          onClick={addCar} // Call addCar function on click
        >
          Submit
        </Button>
      </Box>
    </div>
  );
}

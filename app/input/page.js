"use client";

import * as React from "react";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";
import Input from "@mui/joy/Input";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";

export default function InputField() {
  const [gasto, setGasto] = useState({
    tipo: "",
    precio: "",
  });
  const [listGastos, setListGastos] = useState([]);

  const addGasto = (gasto) => {
    if (!gasto.tipo || !gasto.precio) {
      alert("Please fill in both fields");
      return;
    }
    setListGastos((prev) => [...prev, gasto]);
    setGasto({ tipo: "", precio: "" });
    console.log(listGastos);
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
            <Input placeholder="Marca" />
          </FormControl>
          <FormControl>
            <FormLabel>Modelo</FormLabel>
            <Input placeholder="Modelo" />
          </FormControl>
          <FormControl>
            <FormLabel>Año</FormLabel>
            <Input type="number" placeholder="Año" />
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
            <Input placeholder="Color" />
          </FormControl>
          <FormControl>
            <FormLabel>Chasis</FormLabel>
            <Input placeholder="Chasis" />
          </FormControl>
          <FormControl>
            <FormLabel>Precio</FormLabel>
            <Input type="number" placeholder="Precio" />
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
            <Input placeholder="Millas" />
          </FormControl>
          <FormControl>
            <FormLabel>Dealer</FormLabel>
            <Input placeholder="Dealer" />
          </FormControl>
          <FormControl>
            <FormLabel>Transporte</FormLabel>
            <Input type="number" placeholder="Transporte" />
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
            <Input placeholder="Varco" />
          </FormControl>
          <FormControl>
            <FormLabel>Placa</FormLabel>
            <Input placeholder="Modelo" />
          </FormControl>
          <FormControl>
            <FormLabel>Impuesto</FormLabel>
            <Input type="number" placeholder="Año" />
          </FormControl>
        </Box>

        <Box
          style={{
            display: "flex",
            flexDirection: "row", // Changed to row
            gap: "20px",
            marginBottom: "20px",
          }}
        >
          <FormControl style={{ flex: 1 }}>
            <FormLabel>Gasto</FormLabel>
            <Input
              placeholder="Tipo De Gasto"
              fullWidth
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
              onChange={(e) =>
                setGasto((prev) => ({ ...prev, precio: e.target.value }))
              }
            />
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "20px" }}
            onClick={() => addGasto(gasto)}
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
              onClick={() => addGasto(gasto)}
            >
              Delete
            </Button>
          </Box>
        ))}

        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "20px" }}
        >
          Submit
        </Button>
      </Box>
    </div>
  );
}

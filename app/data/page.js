"use client";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Button } from "@mui/material";

import metadata from "../../metadata.json";
import { db } from "@/firebase/config";
import { collection, getDocs, query } from "firebase/firestore";

export default function Home() {
  const userId = "E7a0wWKwmJ6AOGvAJAXd"; // TEMP user ID, replace with actual user ID logic

  const [cars, setCars] = React.useState([]);
  const [filteredData, setFilteredData] = React.useState([]);
  const [make, setMake] = React.useState("");
  const [model, setModel] = React.useState("");
  const [year, setYear] = React.useState("");

  React.useEffect(() => {
    fetchCars();
    searchData(make, model, year);
  }, [make, model, year]);

  const fetchCars = async () => {
    try {
      // const auth = getAuth();
      // const userId = auth.currentUser?.uid;
      // if (!userId) return;

      const carsQuery = query(collection(db, "users", userId, "cars"));
      const snapshot = await getDocs(carsQuery);

      const carsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setCars(carsData);
      setFilteredData(carsData);
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  };

  const searchData = (make, model, year) => {
    setFilteredData(
      cars.filter(
        (item) =>
          (make ? item.make === make : true) &&
          (model ? item.model === model : true) &&
          (year ? item.year.toString() === year : true)
      )
    );
    console.log(filteredData);
  };

  // if (cars.length === 0 || filteredData.length === 0) {
  //   return (
  //     <div>
  //       <h1>No cars found</h1>
  //       <p>Please add a car to see the data.</p>
  //     </div>
  //   );
  // }

  // console.log("Filtered Data:", filteredData);
  console.log("Cars:", cars);

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          marginBottom: "20px",
          margin: "20px", // Added margin
        }}
      >
        <Autocomplete
          disablePortal
          options={[...new Set(cars.map((option) => option.marca))]}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Make" />}
          onChange={(event, value) => {
            setMake(value);
          }}
        />
        <Autocomplete
          disablePortal
          options={[...new Set(cars.map((option) => option.modelo))]}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Model" />}
          onChange={(event, value) => {
            setModel(value);
          }}
        />
        <Autocomplete
          disablePortal
          options={[...new Set(cars.map((option) => option.año.toString()))]}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Year" />}
          onChange={(event, value) => {
            setYear(value);
          }}
        />
        <Button color="primary" onClick={() => searchData(make, model, year)}>
          Search
        </Button>
      </Box>

      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          borderRadius: "8px",
          padding: "20px",
          margin: "20px", // Added margin
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow style={{ backgroundColor: "#f5f5f5" }}>
                <TableCell style={{ fontWeight: "bold", fontSize: "16px" }}>
                  Marca
                </TableCell>
                <TableCell
                  style={{ fontWeight: "bold", fontSize: "16px" }}
                  align="right"
                >
                  Modelo
                </TableCell>
                <TableCell
                  style={{ fontWeight: "bold", fontSize: "16px" }}
                  align="right"
                >
                  Año
                </TableCell>
                <TableCell
                  style={{ fontWeight: "bold", fontSize: "16px" }}
                  align="right"
                >
                  Color
                </TableCell>
                <TableCell
                  style={{ fontWeight: "bold", fontSize: "16px" }}
                  align="right"
                >
                  Chasis
                </TableCell>
                <TableCell
                  style={{ fontWeight: "bold", fontSize: "16px" }}
                  align="right"
                >
                  Precio
                </TableCell>
                <TableCell
                  style={{ fontWeight: "bold", fontSize: "16px" }}
                  align="right"
                >
                  Millas
                </TableCell>
                <TableCell
                  style={{ fontWeight: "bold", fontSize: "16px" }}
                  align="right"
                >
                  Dealer
                </TableCell>
                <TableCell
                  style={{ fontWeight: "bold", fontSize: "16px" }}
                  align="right"
                >
                  Transporte
                </TableCell>
                <TableCell
                  style={{ fontWeight: "bold", fontSize: "16px" }}
                  align="right"
                >
                  Varco
                </TableCell>
                <TableCell
                  style={{ fontWeight: "bold", fontSize: "16px" }}
                  align="right"
                >
                  Placa
                </TableCell>
                <TableCell
                  style={{ fontWeight: "bold", fontSize: "16px" }}
                  align="right"
                >
                  Impuesto
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.map((row) => (
                <TableRow
                  key={row.id}
                  hover
                  onClick={() => (window.location.href = `/data/${row.id}`)}
                  style={{ cursor: "pointer" }}
                >
                  <TableCell component="th" scope="row">
                    {row.marca}
                  </TableCell>
                  <TableCell align="right">{row.modelo}</TableCell>
                  <TableCell align="right">{row.año}</TableCell>
                  <TableCell align="right">{row.color}</TableCell>
                  <TableCell align="right">{row.chasis}</TableCell>
                  <TableCell align="right">{row.precio}</TableCell>
                  <TableCell align="right">{row.millas}</TableCell>
                  <TableCell align="right">{row.dealer}</TableCell>
                  <TableCell align="right">{row.transporte}</TableCell>
                  <TableCell align="right">{row.varco}</TableCell>
                  <TableCell align="right">{row.placa}</TableCell>
                  <TableCell align="right">{row.impuesto}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}

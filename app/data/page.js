import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const metadata = [
  { id: 1, make: "Toyota", model: "Corolla", year: 2020 },
  { id: 2, make: "Honda", model: "Civic", year: 2019 },
  { id: 3, make: "Ford", model: "Mustang", year: 2021 },
  { id: 4, make: "Chevrolet", model: "Camaro", year: 2018 },
  { id: 5, make: "Nissan", model: "Altima", year: 2022 },
  { id: 6, make: "BMW", model: "3 Series", year: 2020 },
  { id: 7, make: "Mercedes-Benz", model: "C-Class", year: 2021 },
  { id: 8, make: "Audi", model: "A4", year: 2019 },
  { id: 9, make: "Volkswagen", model: "Passat", year: 2020 },
  { id: 10, make: "Hyundai", model: "Elantra", year: 2021 },
  { id: 11, make: "Kia", model: "Optima", year: 2018 },
  { id: 12, make: "Subaru", model: "Impreza", year: 2022 },
  { id: 13, make: "Mazda", model: "Mazda3", year: 2020 },
  { id: 14, make: "Tesla", model: "Model 3", year: 2021 },
  { id: 15, make: "Volvo", model: "S60", year: 2019 },
];

export default function Home() {
  return (
    <div>
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
                  Make
                </TableCell>
                <TableCell
                  style={{ fontWeight: "bold", fontSize: "16px" }}
                  align="right"
                >
                  Model
                </TableCell>
                <TableCell
                  style={{ fontWeight: "bold", fontSize: "16px" }}
                  align="right"
                >
                  Year
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {metadata.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.make}
                  </TableCell>
                  <TableCell align="right">{row.model}</TableCell>
                  <TableCell align="right">{row.year}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}

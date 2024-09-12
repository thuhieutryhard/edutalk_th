import React, { useEffect } from "react";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Toolbar,
  Box,
} from "@mui/material";

import logo from "./logo.png";
import cupLogo from "./cup.png";
import badgeLogo from "./badge.png";
import { data } from "./data";
import { StyledTableCell, StyledTableCellHead } from "./styles";

function App() {
  useEffect(() => {
    document.title = "EduTalk";
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#390879",
        position: "relative",
        overflow: "hidden",
        paddingTop: 1,
        paddingBottom: 4,
        zIndex: -1,
      }}
    >
      <Box
        component="img"
        src={cupLogo}
        alt="Cup Logo"
        sx={{
          position: "absolute",
          top: "60%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: {
            xs: "170%",
            md: "70%",
          },
          height: "auto",
          opacity: 0.2,
          zIndex: -1,
        }}
      />

      <Box
        component="img"
        src={badgeLogo}
        alt="Badge Logo"
        sx={{
          position: "absolute",
          top: {
            xs: "22%",
            md: "25%",
          },
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: {
            xs: "80%",
            md: "20%",
          },
          height: "auto",
          opacity: 0.2,
          zIndex: -1,
        }}
      />

      <Container maxWidth="lg" sx={{ zIndex: 1 }}>
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            justifyContent: "center",
            alignItems: "center",
            marginTop: {
              xs: 1,
              md: 5,
            },
            marginX: {
              xs: 0,
              md: 35,
            },
            gap: 2,
          }}
        >
          <img src={logo} alt="Logo" style={{ width: "auto", height: 50, }} />
          <Typography
            variant="h6"
            component="div"
            fontWeight={700}
            color="white"
            textAlign={{ xs: "center", md: "left" }}
          >
            CÔNG TY CỔ PHẦN TƯ VẤN ĐÁNH GIÁ VÀ PHÁT TRIỂN GIÁO DỤC EDUTALK
          </Typography>
        </Toolbar>

        <Typography
          variant="h4"
          component="h1"
          align="center"
          marginTop={4}
          fontWeight={700}
          fontSize={50}
          fontStyle="italic"
          color="#f2dc87"
        >
          EDUTALK HN11
        </Typography>
        <Typography
          variant="h4"
          component="h1"
          align="center"
          fontWeight={700}
          fontSize={24}
          fontStyle="italic"
          color="white"
        >
          DÁM NGHĨ LỚN - LÀM LỚN
        </Typography>

        <Typography
          variant="h5"
          component="h2"
          align="center"
          marginTop={5}
          marginBottom={3}
          fontWeight={700}
          fontSize={45}
          color="white"
        >
          VINH DANH TÂN CẤP THÁNG 08/2024
        </Typography>

        <TableContainer
          component={Paper}
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            borderRadius: 5,
            zIndex: 100,
            overflowX: "auto",
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCellHead>HỌ VÀ TÊN</StyledTableCellHead>
                <StyledTableCellHead>VĂN PHÒNG</StyledTableCellHead>
                <StyledTableCellHead>DOANH SỐ</StyledTableCellHead>
                <StyledTableCellHead>VỊ TRÍ</StyledTableCellHead>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index}>
                  <StyledTableCell>{row.name}</StyledTableCell>
                  <StyledTableCell>{row.office}</StyledTableCell>
                  <StyledTableCell>{row.revenue}</StyledTableCell>
                  <StyledTableCell>{row.position}</StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
}

export default App;

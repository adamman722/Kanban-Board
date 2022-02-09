import React from "react";
import { Box } from "@mui/material";
import { Container } from "@mui/material";
import UnstyledButtonsSimple from "./AddStickyNoteButton";

function KanbanContainer(params) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //Content goes below here
  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundColor: "pink",
        paddingTop: "10px",
        paddingBottom: "10px",
        paddingLeft: "10px",
        paddingRight: "10px"
      }}
    >
      <UnstyledButtonsSimple />
      <Box
        sx={{
          bgcolor: "gray",
          height: "800px",
          width: "300px",
          display: "inline-block",
          border: "3px solid black"
        }}
      />
      <Box
        sx={{
          bgcolor: "blue",
          height: "800px",
          width: "300px",
          display: "inline-block",
          borderTop: "3px solid black",
          borderBottom: "3px solid black",
          paddingLeft: "5px",
          paddingRight: "5px"
        }}
      />
      <Box
        sx={{
          bgcolor: "white",
          height: "800px",
          width: "300px",
          display: "inline-block",
          borderTop: "3px solid black",
          borderBottom: "3px solid black",
          borderLeft: "3px solid black"
        }}
      />
      <Box
        sx={{
          bgcolor: "white",
          height: "800px",
          width: "300px",
          display: "inline-block",
          border: "3px solid black"
        }}
      />
    </Container>
  );
  //content goes above here
}

export default KanbanContainer;

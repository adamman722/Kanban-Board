import * as React from "react";
import Stack from "@mui/material/Stack";
import ButtonUnstyled, {
  buttonUnstyledClasses
} from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const blue = {
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2"
};
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};
const CustomButtonRoot = styled("button")`
  font-family: IBM Plex Sans, sans-serif;
  font-weight: bold;
  font-size: 0.875rem;
  background-color: ${blue[500]};
  padding: 12px 24px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: ${blue[600]};
  }

  &.${buttonUnstyledClasses.active} {
    background-color: ${blue[700]};
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1),
      0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

function CustomButton(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  function handleClick(e) {
    console.log("It clicked");
  }

  return (
    <>
      <ButtonUnstyled
        {...props}
        component={CustomButtonRoot}
        onClick={handleOpen}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            User Story #
          </Typography>
          <input type="number" name="" id="" />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <textarea
            name="stickyNoteDescription"
            id=""
            cols="40"
            rows="5"
          ></textarea>

          <button
            type="submit"
            style={{
              display: "block",
              marginTop: "5px",
              paddingTop: "5px",
              borderRadius: "10px"
            }}
          >
            Add Stickynote
          </button>
        </Box>
      </Modal>
    </>
  );
}

export default function UnstyledButtonsSimple() {
  return (
    <Stack spacing={2} direction="row">
      <CustomButton>Add Sticky Note</CustomButton>
    </Stack>
  );
}

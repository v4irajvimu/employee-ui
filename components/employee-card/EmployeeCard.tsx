import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, IconButton, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

type Props = {};

const EmployeeCard = (props: Props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://randomuser.me/api/portraits/men/92.jpg"
        title="green iguana"
      />
      <CardContent>
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="column" gap={2}>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </Stack>
          <Stack direction="row" gap={1} alignItems="flex-end">
            <Box>
              <IconButton
                size="small"
                sx={{
                  "&.MuiIconButton-root": {
                    backgroundColor: "error.main",
                  },
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
            <Box>
              <IconButton
                size="small"
                sx={{
                  "&.MuiIconButton-root": {
                    backgroundColor: "success.main",
                  },
                }}
              >
                <EditIcon />
              </IconButton>
            </Box>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default EmployeeCard;

"use client";
import {
  IconButton,
  Stack,
  Typography,
  Grid2 as Grid,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react";

export default function ItemCart({
  itemname,
  itemPrice,
  imageURL,
  handleIncremantal,
  handleDecremental,
}: {
  itemname: string;
  itemPrice: number;
  imageURL: string;
  handleIncremantal: () => void;
  handleDecremental: () => void;
}) {
  const [count, setCount] = React.useState(0);
  const [totalPrice, setTotalPrice] = React.useState(0);

  const handleAddItemClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    setTotalPrice(newCount * itemPrice);
    handleIncremantal();
  };

  const handleRemoveItemClick = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      setTotalPrice(newCount * itemPrice);
      handleDecremental();
    }
  };

  return (
<Grid container spacing={2} alignItems="center" sx={{ borderBottom: '1px solid #ddd', padding: '16px' }}>
      <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
        <img
          src={imageURL}
          alt={itemname}
          style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
        />
      </Grid>
      <Grid size={{ xs: 3, md: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{itemname}</Typography>
      </Grid>
      <Grid size={{ xs: 3, md: 4 }}>
        <Stack direction="row" spacing={2} alignItems="center" justifyContent="flex-end">
          <Stack direction="row" spacing={1} alignItems="center">
            <IconButton onClick={handleRemoveItemClick} disabled={count === 0} sx={{ color: '#f44336' }}>
              <RemoveIcon />
            </IconButton>
            <Typography variant="h6" sx={{ marginX: 1 }}>{count}</Typography>
            <IconButton onClick={handleAddItemClick} sx={{ color: '#4caf50' }}>
              <AddIcon />
            </IconButton>
          </Stack>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{totalPrice.toLocaleString()} Thb</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}
"use client";

import { IconButton, Button, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react";
import ItemCart from "./item-cart";

export default function Home() {
  const [total, setTotal] = React.useState(0);
  // add total
  const handleIncremental = (price: number) => {
    setTotal((prevTotal) => prevTotal + price);
  };
  // remove total
  const handleDecremental = (price: number) => {
    setTotal((prevTotal) => prevTotal - price);
  };
  const myItems = [
    { itemname: "iPhone15", price: 32900, imageURL: "https://www.apple.com/v/iphone/home/bv/images/overview/select/iphone_15__fm75iyqlkjau_xlarge.png"},
    { itemname: "iPhone15 Pro", price: 41900, imageURL: "https://www.apple.com/v/iphone/home/bv/images/overview/select/iphone_15_pro__bpnjhcrxofqu_xlarge.png"},
    { itemname: "iPad", price: 13900, imageURL: "https://www.apple.com/v/ipad/home/ck/images/overview/select/product-tile/pt_ipad_10th_gen__ej5p5x6yf2gm_xlarge.png"},
    { itemname: "iPad Pro", price: 39900, imageURL: "https://www.apple.com/v/ipad/home/ck/images/overview/select/product-tile/pt_ipad_pro__6bgrkek0jnm2_xlarge.png"},
    { itemname: "iPad Air", price: 23900, imageURL: "https://www.apple.com/v/ipad/home/ck/images/overview/select/product-tile/pt_ipad_air__cr381zljqdiu_xlarge.png"},
    { itemname: "iPad mini", price: 19900, imageURL: "https://www.apple.com/v/ipad/home/ck/images/overview/select/product-tile/pt_ipad_mini__f3iy3qb50gia_xlarge.png"},
    { itemname: "MacBook Air", price: 34900, imageURL: "https://www.apple.com/v/mac/home/ca/images/overview/select/product_tile_mba_13_15__fx2g3qlubdym_large.png"},
    { itemname: "Macbook Pro", price: 59900, imageURL: "https://www.apple.com/v/mac/home/ca/images/overview/select/product_tile_mbp_14_16__bkl8zusnkpw2_large.png"},
    { itemname: "iMac", price: 49900, imageURL: "https://www.apple.com/v/imac/p/images/overview/routers/trade_in__brjsvgardkgi_large.jpg"},
    { itemname: "Mac mini", price: 20900, imageURL: "https://www.apple.com/v/imac/p/images/overview/routers/compare_macmini__b7wpdul5zff6_large.png"},
    { itemname: "Mac Studio", price: 74900, imageURL: "https://www.apple.com/v/imac/p/images/overview/routers/compare_macstudio__detym2irhvma_large.png"},
  ];
  return (
    <div>
      <h1>Shopping Cart</h1>
      {/* loop all array object */}
      {myItems &&
        myItems.map((item) => (
          <ItemCart
          itemname={item.itemname}
          itemPrice={item.price}
          imageURL={item.imageURL}
          handleIncremantal={() => handleIncremental(item.price)}
          handleDecremental={() => handleDecremental(item.price)}
          />
        ))}
      <Stack direction="row" spacing={2}>
        <Typography variant="h4">Total</Typography>
        <Typography variant="h4">{total.toLocaleString()} Thb</Typography>
      </Stack>
    </div>
  );
}

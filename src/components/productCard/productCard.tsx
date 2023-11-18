"use client";

import React from "react";

import Style from "./productCard.module.scss";

import {
  Typography,
  Divider,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  CardMedia,
  Avatar,
  IconButton,
} from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import BedIcon from "@mui/icons-material/Bed";
import ShowerIcon from "@mui/icons-material/Shower";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

interface ProductCardProps {
  view: string;
}

const ProductCard = (props: ProductCardProps) => {
  return (
    <div>
      <Card
        className={Style.cardContainer}
        sx={{ flexDirection: props.view === "grid" ? "column" : "row" }}
      >
        <div className={Style.productThumb}>
          <div className={Style.productType}>
            <span className={Style.productTypeBadge}>For Sell</span>
          </div>
          <CardMedia
            className={Style.cardImg}
            component="img"
            alt="picture"
            height="240"
            image="/mike_hussy4-400x240.jpg"
          />
          <Typography className={Style.productPrice}>$ 50,000</Typography>
          <div className={Style.listingAction}>
            <IconButton aria-label="like" className={Style.actionBtn}>
              <FavoriteBorderIcon className={Style.icon} />
            </IconButton>
            <IconButton aria-label="compare" className={Style.actionBtn}>
              <CompareArrowsIcon className={Style.icon} />
            </IconButton>
          </div>
        </div>
        <div className={Style.contentWrap}>
          <CardContent>
            <Typography gutterBottom component="div" sx={{ color: "#00c194" }}>
              Commercial
            </Typography>
            <Typography
              noWrap
              gutterBottom
              variant="h3"
              component="h3"
              className={Style.title}
            >
              Countryside Modern Lake View Restaurant
            </Typography>
            <div className={Style.entryMeta}>
              <LocationOnIcon />
              <Typography gutterBottom>New Jersey</Typography>
            </div>
            <Grid container className={Style.listInformation}>
              <Grid item className={Style.productFeatures}>
                <BedIcon className={Style.productFeaturesIcon} />
                <Typography>Beds 4</Typography>
              </Grid>
              <Grid className={Style.productFeatures}>
                <ShowerIcon className={Style.productFeaturesIcon} />
                <Typography>Baths 2</Typography>
              </Grid>
              <Grid className={Style.productFeatures}>
                <AspectRatioIcon className={Style.productFeaturesIcon} />
                <Typography>2000 Sqft</Typography>
              </Grid>
            </Grid>
          </CardContent>
          <Divider className={Style.cardDivider} />
          <CardActions className={Style.cardAction}>
            <div className={Style.author}>
              <Avatar
                alt="Tom Steven"
                src="/tom_steven-150x150.jpg"
                className={Style.img}
              />
              <Typography>By Tom Steven</Typography>
            </div>
            <Button className={Style.cardButton}>Details</Button>
          </CardActions>
        </div>
      </Card>
    </div>
  );
};

export default ProductCard;

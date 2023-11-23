"use client";

import React from "react";

import { useRouter } from "next/navigation";

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
  product: {
    id: number;
    title: string;
  };
}

const product: {
  listing_id: number;
  title: string;
  price: string;
  price_type: string;
  categories: {
    term_id: number;
    name: string;
  };
  ad_type: string;
  images: {
    ID: number;
    title: string;
    url: string;
    alt: string;
  }[];
  view_count: number;
  contact: {
    locations: {
      term_id: number;
      name: string;
    };
    address: string;
    phone: string;
    whatsapp_number: string;
    email: string;
  };
  custom_fields: {
    id: number;
    label: string;
    value: string[];
    options: {
      default: string;
      choices: {
        id: string;
        name: string;
      }[];
    };
  }[];
} = {
  listing_id: 17389,
  // "author_id": 4,
  title: "Countryside Modern Lake View Restaurant",
  // "pricing_type": "price",
  price: "50,000",
  // "max_price": "0",
  price_type: "fixed",
  // "price_units": [],
  // "price_unit": "",
  categories: {
    term_id: 126,
    name: "Commercial",
    // "slug": "commercial",
    // "term_group": 0,
    // "term_taxonomy_id": 126,
    // "taxonomy": "rtcl_category",
    // "description": "",
    // "parent": 0,
    // "count": 3,
    // "filter": "raw"
  },
  ad_type: "sell",
  // "status": "publish",
  images: [
    {
      ID: 17390,
      title: "mike_hussy4",
      // "caption": "",
      url: "https://homlisti.tpblog.net/wp-content/uploads/classified-listing/2022/03/mike_hussy4.jpg",
      alt: "",
      // "src": "https://homlisti.tpblog.net/wp-content/uploads/classified-listing/2022/03/mike_hussy4-1170x640.jpg",
      // "srcset": false,
      // "sizes": {
      //     "full": {
      //         "src": "https://homlisti.tpblog.net/wp-content/uploads/classified-listing/2022/03/mike_hussy4.jpg",
      //         "width": 1240,
      //         "height": 640
      //     },
      //     "medium": {
      //         "src": "https://homlisti.tpblog.net/wp-content/uploads/classified-listing/2022/03/mike_hussy4-300x155.jpg",
      //         "width": 300,
      //         "height": 155
      //     },
      //     "thumbnail": {
      //         "src": "https://homlisti.tpblog.net/wp-content/uploads/classified-listing/2022/03/mike_hussy4-150x150.jpg",
      //         "width": 150,
      //         "height": 150
      //     }
      // },
      // "src_w": 1170,
      // "src_h": 640,
      // "srcset_sizes": "(max-width: 1170px) 100vw, 1170px"
    },
    {
      ID: 17391,
      title: "mike_hussy5",
      // "caption": "",
      url: "https://homlisti.tpblog.net/wp-content/uploads/classified-listing/2022/03/mike_hussy5.jpg",
      alt: "",
      // "src": "https://homlisti.tpblog.net/wp-content/uploads/classified-listing/2022/03/mike_hussy5.jpg",
      // "srcset": false,
      // "sizes": {
      //     "full": {
      //         "src": "https://homlisti.tpblog.net/wp-content/uploads/classified-listing/2022/03/mike_hussy5.jpg",
      //         "width": 1170,
      //         "height": 638
      //     },
      //     "medium": {
      //         "src": "https://homlisti.tpblog.net/wp-content/uploads/classified-listing/2022/03/mike_hussy5-300x164.jpg",
      //         "width": 300,
      //         "height": 164
      //     },
      //     "thumbnail": {
      //         "src": "https://homlisti.tpblog.net/wp-content/uploads/classified-listing/2022/03/mike_hussy5-150x150.jpg",
      //         "width": 150,
      //         "height": 150
      //     }
      // },
      // "src_w": 1170,
      // "src_h": 638,
      // "srcset_sizes": "(max-width: 1170px) 100vw, 1170px"
    },
  ],
  // "date_created": {
  //     "date": "2022-03-22 08:56:05.000000",
  //     "timezone_type": 1,
  //     "timezone": "+00:00"
  // },
  // "created_at": "2022-03-22 08:56:05",
  view_count: 2218,
  // "promotions": [
  //     "_top"
  // ],
  // "badges": [
  //     "is-sell",
  //     "is-top",
  //     "is-popular",
  //     "as-top"
  // ],
  contact: {
    locations: {
      term_id: 172,
      name: "New Jersey",
      // "slug": "new-jersey",
      // "term_group": 0,
      // "term_taxonomy_id": 172,
      // "taxonomy": "rtcl_location",
      // "description": "",
      // "parent": 0,
      // "count": 6,
      // "filter": "raw"
    },
    // latitude: "40.09651566037877",
    // longitude: "-74.41665248506918",
    // hide_map: false,
    // zipcode: "",
    address: "South stump tavern road, 42",
    phone: "+052015698546",
    whatsapp_number: "+052015698546",
    email: "tom_steven@gmail.com",
    // website: "https://www.radiustheme.com/",
    // geo_address: "",
  },
  // store: {
  //   id: 2640,
  //   title: "Sweet Home",
  // },
  custom_fields: [
    {
      id: 4323,
      // meta_key: "_field_4323",
      label: "Type",
      // slug: "type",
      // description: "",
      // searchable: "",
      // listable: "",
      // type: "radio",
      // icon: "flaticon-home",
      // required: true,
      // placeholder: "",
      value: ["restaurant"],
      options: {
        default: "null",
        choices: [
          {
            id: "apartment",
            name: "Apartment",
          },
          {
            id: "office",
            name: "Office",
          },
          {
            id: "restaurant",
            name: "Restaurant",
          },
        ],
      },
    },
    {
      id: 4322,
      // meta_key: "_field_4322",
      label: "Parking",
      // slug: "parking",
      // description: "",
      // searchable: "",
      // listable: "",
      // type: "radio",
      // icon: "flaticon-garage",
      // required: true,
      // placeholder: "",
      value: ["yes"],
      options: {
        default: "null",
        choices: [
          {
            id: "yes",
            name: "Yes",
          },
          {
            id: "no",
            name: "No",
          },
        ],
      },
    },
    {
      id: 4316,
      // meta_key: "_field_4316",
      label: "Bedroom",
      // slug: "bedroom",
      // description: "",
      // searchable: "1",
      // listable: "1",
      // type: "select",
      // icon: "flaticon-bed",
      // required: false,
      // placeholder: "",
      value: ["4"],
      options: {
        default: "null",
        choices: [
          {
            id: "1",
            name: "1",
          },
          {
            id: "2",
            name: "2",
          },
          {
            id: "3",
            name: "3",
          },
          {
            id: "4",
            name: "4",
          },
          {
            id: "5",
            name: "5",
          },
          {
            id: "6",
            name: "6",
          },
        ],
      },
    },
    {
      id: 4321,
      // meta_key: "_field_4321",
      label: "Bath",
      // slug: "bath",
      // description: "",
      // searchable: "1",
      // listable: "1",
      // type: "select",
      // icon: "flaticon-shower",
      // required: false,
      // placeholder: "",
      value: ["2"],
      options: {
        default: "null",
        choices: [
          {
            id: "1",
            name: "1",
          },
          {
            id: "2",
            name: "2",
          },
          {
            id: "3",
            name: "3",
          },
          {
            id: "4",
            name: "4",
          },
        ],
      },
    },
    // {
    //   id: 4317,
    //   meta_key: "_field_4317",
    //   label: "Sqft",
    //   slug: "area",
    //   description: "",
    //   searchable: "1",
    //   listable: "1",
    //   type: "number",
    //   icon: "flaticon-full-size",
    //   required: true,
    //   placeholder: "Area",
    //   value: "2000",
    //   min: "",
    //   max: "",
    //   step_size: "",
    // },
    {
      id: 4692,
      // meta_key: "_field_4692",
      label: "Purpose",
      // slug: "offer-type",
      // description: "",
      // searchable: "",
      // listable: "",
      // type: "radio",
      // icon: "empire",
      // required: false,
      // placeholder: "",
      value: ["sell"],
      options: {
        default: "null",
        choices: [
          {
            id: "sell",
            name: "For Sell",
          },
          {
            id: "buy",
            name: "For Buy",
          },
          {
            id: "rent",
            name: "For Rent",
          },
        ],
      },
    },
    // {
    //   id: 4693,
    //   meta_key: "_field_4693",
    //   label: "Location",
    //   slug: "location",
    //   description: "",
    //   searchable: "",
    //   listable: "",
    //   type: "text",
    //   icon: "flaticon-maps-and-flags",
    //   required: false,
    //   placeholder: "Location",
    //   value: "",
    // },
    // {
    //   id: 4694,
    //   meta_key: "_field_4694",
    //   label: "Build Year",
    //   slug: "year",
    //   description: "",
    //   searchable: "",
    //   listable: "",
    //   type: "text",
    //   icon: "clone",
    //   required: false,
    //   placeholder: "",
    //   value: "",
    // },
    {
      id: 4216,
      // meta_key: "_field_4216",
      label: "Amenities",
      // slug: "amenities",
      // description: "",
      // searchable: "1",
      // listable: "",
      // type: "checkbox",
      // icon: "diamond",
      // required: true,
      // placeholder: "",
      value: [
        "tv-cable",
        "air-conditioning",
        "barbeque",
        "gym",
        "swimming-pool",
        "microwave",
        "outdoor-shower",
        "lawn",
        "refrigerator",
        "sauna",
        "washer",
      ],
      options: {
        default: "null",
        choices: [
          {
            id: "tv-cable",
            name: "TV Cable",
          },
          {
            id: "air-conditioning",
            name: "Air Conditioning",
          },
          {
            id: "barbeque",
            name: "Barbeque",
          },
          {
            id: "gym",
            name: "Gym",
          },
          {
            id: "swimming-pool",
            name: "Swimming Pool",
          },
          {
            id: "laundry",
            name: "Laundry",
          },
          {
            id: "microwave",
            name: "Microwave",
          },
          {
            id: "outdoor-shower",
            name: "Outdoor Shower",
          },
          {
            id: "lawn",
            name: "Lawn",
          },
          {
            id: "refrigerator",
            name: "Refrigerator",
          },
          {
            id: "sauna",
            name: "Sauna",
          },
          {
            id: "washer",
            name: "Washer",
          },
        ],
      },
    },
  ],
};

const ProductCard = (props: ProductCardProps) => {
  const router = useRouter();

  const handleViewProductDetail = () => {
    router.push(`/property/${props.product.title}`);
  };

  return (
    <div onClick={() => handleViewProductDetail()}>
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

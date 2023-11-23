"use client";

import React, { ElementType } from "react";

import Image from "next/image";

import "../../globals.css";
import Style from "./productDetail.module.scss";

import {
  Container,
  Breadcrumbs,
  Link,
  Typography,
  Divider,
  Grid,
  IconButton,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  TextField,
  Avatar,
  Box,
} from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import VisibilityIcon from "@mui/icons-material/Visibility";
import BugReportIcon from "@mui/icons-material/BugReport";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import PrintIcon from "@mui/icons-material/Print";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import HomeIcon from "@mui/icons-material/Home";
import GarageIcon from "@mui/icons-material/Garage";
import BedIcon from "@mui/icons-material/Bed";
import ShowerIcon from "@mui/icons-material/Shower";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import GradeIcon from "@mui/icons-material/Grade";

import Carousel from "react-material-ui-carousel";
import NewsLetter from "@/components/newsLetter/newsLetter";
import ScrollToTopButton from "@/components/scrollToTopButton";

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
  created_at: string;
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
  description: string;
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
  created_at: "2022-03-22 08:56:05",
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
    {
      id: 4317,
      // meta_key: "_field_4317",
      label: "Sqft",
      // slug: "area",
      // description: "",
      // searchable: "1",
      // listable: "1",
      // type: "number",
      // icon: "flaticon-full-size",
      // required: true,
      // placeholder: "Area",
      value: ["2000"],
      // min: "",
      // max: "",
      // step_size: "",
      options: {
        default: "null",
        choices: [
          // {
          //   id: "sell",
          //   name: "For Sell",
          // },
          // {
          //   id: "buy",
          //   name: "For Buy",
          // },
          // {
          //   id: "rent",
          //   name: "For Rent",
          // },
        ],
      },
    },
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
  description:
    "Countryside Modern Lake View Restaurant only for $500000 onetime is one of the cheapest around and includes water, sewer, and garbage.\r\n\r\nThis restaurant welcomes animals. The Restaurant is on the second story of the building. For all amenities in the house, a live-in super is available.\r\n\r\nPlease get in touch if you have any more inquiries. Additionally, videos are available upon request.\r\n\r\n*** NO BROKER FEE ***\r\n\r\n \tAwesome lake beside of apartment\r\n \t3 Bedroom and 2 Baths\r\n \t24 Hours security\r\n \tAll-time CC camera coverage\r\n \tAbundant sunshine\r\n \tStylish appliances\r\n \tNear a transit hub\r\n \t2-year lease for newly refurbished\r\n \tNecessary credit and background checks\r\n \tNear a Big Hospital and Large Shopingmal\r\n",
};

const iconPriceBtn: { title: string; icon: ElementType }[] = [
  { title: "BugReportIcon", icon: BugReportIcon },
  { title: "ShareIcon", icon: ShareIcon },
  { title: "FavoriteBorderIcon", icon: FavoriteBorderIcon },
  { title: "CompareArrowsIcon", icon: CompareArrowsIcon },
  { title: "PrintIcon", icon: PrintIcon },
];

const overviewIcon: { icon: ElementType }[] = [
  { icon: HomeIcon },
  { icon: GarageIcon },
  { icon: BedIcon },
  { icon: ShowerIcon },
  { icon: AspectRatioIcon },
  { icon: GradeIcon },
];

const getAmenityValue = (value: string): string => {
  let result = product.custom_fields[
    product.custom_fields.length - 1
  ].options.choices.find((object) => {
    return object.id === value;
  });

  return result ? result.name : "";
};

const splitDescription = () => {
  let arr1 = product.description.split("\r\n\r\n");
  let arr2 = arr1[arr1.length - 1].split("\r\n");

  arr1.splice(-1);

  return arr1.concat(arr2);
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#00a47e", // Replace with your preferred color
    },
  },
});

const ProductDetail = ({ params }: { params: { productID: string } }) => {
  const Item = (props: any) => {
    return (
      <Image
        src={props.item.url}
        height={450}
        width={780}
        alt={props.item.alt}
        className={Style.productImage}
      />
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <ScrollToTopButton />
      <div className={Style.wrapper}>
        {/* Breadcrumbs */}
        <Container maxWidth="xl">
          <Breadcrumbs
            separator="›"
            aria-label="breadcrumb"
            className={Style.breadcrumbsBanner}
          >
            <Link
              underline="none"
              color="inherit"
              href="/"
              className={Style.breadCrumbsLink}
            >
              Home
            </Link>
            <Link
              underline="none"
              color="inherit"
              href="/"
              className={Style.breadCrumbsLink}
            >
              Commercial
            </Link>
            <Typography color="var(--primary-color)">
              {product.title}
            </Typography>
          </Breadcrumbs>
        </Container>

        <Divider />
        <Container maxWidth="xl">
          {/* Heading */}
          <Grid container spacing={2} className={Style.productHeading}>
            <Grid item xs={12} sm={12} md={8} lg={8}>
              <div className={Style.productCondition}>For Sell</div>
              <Typography
                variant="h2"
                component="h2"
                className={Style.productTitle}
              >
                {product.title}
              </Typography>
              <Breadcrumbs className={Style.productHeaderInfo}>
                <div>
                  <LocationOnIcon />
                  <Typography>{product.contact.address}</Typography>
                </div>
                <div>
                  <VisibilityIcon />
                  <Typography>Views: {product.view_count}</Typography>
                </div>
              </Breadcrumbs>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <div className={Style.productPriceWrap}>
                <Typography className={Style.productPrice}>
                  ${product.price}
                </Typography>
                <Typography className={Style.productPriceType}>
                  {"("}
                  {product.price_type}
                  {")"}
                </Typography>
              </div>
              <div className={Style.btnArea}>
                {iconPriceBtn.map((item) => (
                  <IconButton key={item.title} className={Style.iconBtn}>
                    <item.icon className={Style.icon} />
                  </IconButton>
                ))}
              </div>
            </Grid>
          </Grid>

          <Grid container spacing={2} className={Style.listingContentArea}>
            <Grid
              item
              className={Style.listingContent}
              xs={12}
              sm={12}
              md={8}
              lg={8}
            >
              {/* Image slider */}
              <div className={Style.sliderWrapper}>
                <Carousel
                  interval={6000}
                  indicatorIconButtonProps={{
                    style: {
                      marginRight: "5px",
                      color: "gray",
                      opacity: "0.6",
                    },
                  }}
                  activeIndicatorIconButtonProps={{
                    style: {
                      opacity: "1",
                    },
                  }}
                  indicatorContainerProps={{
                    style: {
                      marginTop: "12px",
                      textAlign: "left",
                    },
                  }}
                  IndicatorIcon={product.images.map((item, i) => (
                    <Image
                      key={i}
                      src={item.url}
                      height={100}
                      width={125}
                      alt={item.alt}
                      className={Style.productImage}
                    />
                  ))}
                >
                  {product.images.map((item, i) => (
                    <Item key={i} item={item} />
                  ))}
                </Carousel>
              </div>

              {/* Overview */}
              <Card variant="outlined" className={Style.productOverview}>
                <CardContent>
                  <Typography
                    variant="h3"
                    component="h3"
                    className={Style.itemHeading}
                  >
                    Overview
                  </Typography>
                  <Grid container spacing={2} rowSpacing={6}>
                    <Grid item xs={12} sm={4} md={4} lg={3}>
                      <div className={Style.amenitiesList}>
                        <div className={Style.amenitiesIcon}>
                          <LocalOfferIcon />
                        </div>
                        <div className={Style.amenitiesContent}>
                          <Typography className={Style.headingTitle}>
                            ID No
                          </Typography>
                          <Typography className={Style.value}>
                            {product.listing_id}
                          </Typography>
                        </div>
                      </div>
                    </Grid>
                    {overviewIcon.map((item, i) => (
                      <Grid key={i} item xs={12} sm={4} md={4} lg={3}>
                        <div className={Style.amenitiesList}>
                          <div className={Style.amenitiesIcon}>
                            <item.icon />
                          </div>
                          <div className={Style.amenitiesContent}>
                            <Typography className={Style.headingTitle}>
                              {product.custom_fields[i].label}
                            </Typography>
                            <Typography className={Style.value}>
                              {product.custom_fields[i].value}
                            </Typography>
                          </div>
                        </div>
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </Card>

              {/* About */}
              <Card variant="outlined">
                <CardContent>
                  <Typography
                    variant="h3"
                    component="h3"
                    className={Style.itemHeading}
                  >
                    About This Listing
                  </Typography>
                  {splitDescription().map((item, i) => (
                    <Typography key={i} component="p" gutterBottom>
                      {item}
                    </Typography>
                  ))}
                </CardContent>
              </Card>

              {/* Amenities */}
              <Card variant="outlined">
                <CardContent>
                  <Typography
                    variant="h3"
                    component="h3"
                    className={Style.itemHeading}
                  >
                    Features & Amenities
                  </Typography>
                  <Grid container spacing={2}>
                    {product.custom_fields[
                      product.custom_fields.length - 1
                    ].value.map((item, i) => (
                      <Grid key={i} item xs={6} sm={4} md={4} lg={4}>
                        <FormControlLabel
                          label={getAmenityValue(item)}
                          control={
                            <Checkbox checked className={Style.amenityValue} />
                          }
                          className={Style.amenityValue}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </Card>

              {/* Feedback */}
              <Card variant="outlined">
                <CardContent>
                  <Typography
                    variant="h3"
                    component="h3"
                    className={Style.itemHeading}
                  >
                    Leave feedback about this
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="Comment *"
                        multiline
                        rows={10}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="Name *"
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="Emal *"
                      />
                    </Grid>

                    <Grid item xs={3} sm={3} md={3} lg={3}>
                      <Button variant="contained" className={Style.submitBtn}>
                        Submit Review
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            <Grid
              item
              className={Style.listingSidebar}
              xs={12}
              sm={12}
              md={4}
              lg={4}
            >
              <Card className={Style.listingUserInfo}>
                <CardContent>
                  <Typography
                    variant="h3"
                    component="h3"
                    className={Style.heading}
                  >
                    Contact Listing Owner
                  </Typography>
                  <Box component="form">
                    <Grid container spacing={2} rowSpacing={2}>
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={4}
                        className={Style.userAva}
                      >
                        <Avatar
                          sx={{ width: 88, height: 88 }}
                          src="/tom_steven-150x150.jpg"
                        ></Avatar>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={8}>
                        <Typography
                          variant="h5"
                          component="h5"
                          className={Style.userName}
                        >
                          Tom Steven
                        </Typography>
                        <Typography>+052015698546</Typography>
                        <Typography>+052015698546</Typography>
                      </Grid>

                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        <TextField
                          fullWidth
                          required
                          type="text"
                          variant="outlined"
                          placeholder="Name*"
                          // helperText="This field is required."
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        <TextField
                          fullWidth
                          required
                          type="email"
                          variant="outlined"
                          placeholder="Email*"
                          // helperText="This field is required."
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        <TextField
                          fullWidth
                          required
                          type="phone"
                          variant="outlined"
                          placeholder="Phone*"
                          // helperText="This field is required."
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        <TextField
                          fullWidth
                          required
                          variant="outlined"
                          placeholder="Message*"
                          // helperText="This field is required."
                          multiline
                          rows={4}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Button
                          fullWidth
                          type="submit"
                          variant="contained"
                          sx={{ height: "50px" }}
                        >
                          Send Message
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
        <NewsLetter />
      </div>
    </ThemeProvider>
  );
};

export default ProductDetail;

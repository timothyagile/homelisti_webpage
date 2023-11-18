"use client";

import { useState, useEffect } from "react";

import Image from "next/image";

import api from "../api/client";
import Homestyle from "./home.module.scss";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Alert, CardActionArea, FormControl } from "@mui/material";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useMediaQuery } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";

import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BedIcon from "@mui/icons-material/Bed";
import ShowerIcon from "@mui/icons-material/Shower";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import KeyIcon from "@mui/icons-material/Key";
import PhoneIcon from "@mui/icons-material/Phone";
import GroupsIcon from "@mui/icons-material/Groups";
import ProductCard from "@/components/productCard/productCard";

const categories: string[] = [
  "Apartments",
  "Commercial",
  "Office",
  "Restaurant",
  "Studio Home",
  "Villa",
];

const types: string[] = ["Sell", "Buy", "Rent"];

const locations: string[] = [
  "California",
  "Claremont",
  "Kansas",
  "Abliene",
  "Louisiana",
  "New Jersey",
];

let logos: { id: number; title: string; link: string }[] = [
  {
    id: 1,
    title: "client-logo-1",
    link: "/client-logo-1.svg",
  },
  {
    id: 2,
    title: "client-logo-2",
    link: "/client-logo-2.svg",
  },
  {
    id: 3,
    title: "client-logo-3",
    link: "/client-logo-3.svg",
  },
  {
    id: 4,
    title: "client-logo-4",
    link: "/client-logo-4.svg",
  },
  {
    id: 5,
    title: "client-logo-5",
    link: "/client-logo-5.svg",
  },
  {
    id: 6,
    title: "client-logo-6",
    link: "/client-logo-6.svg",
  },
];

const temp: string[] = ["1", "2", "3", "4", "5", "6"];

const locationImgs: { img: string; title: string; properties: number }[] = [
  {
    img: "/location-1.jpg",
    title: "California",
    properties: 4,
  },
  {
    img: "/location-2.jpg",
    title: "Claremont",
    properties: 4,
  },
  {
    img: "/location-3.jpg",
    title: "Kansas",
    properties: 2,
  },
  {
    img: "/location-4.jpg",
    title: "Louisiana",
    properties: 1,
  },
  {
    img: "/location-5.jpg",
    title: "Abilene",
    properties: 2,
  },
];

let agents: {
  id: number;
  ava: string;
  count: number;
  name: string;
  subTitle: string;
  phone: string;
}[] = [
  {
    id: 1,
    ava: "/rosy_janner.jpg",
    count: 2,
    name: "Rosy Janner",
    subTitle: "Sunshine",
    phone: "+442037691880",
  },
  {
    id: 2,
    ava: "/david_lee.jpg",
    count: 4,
    name: "David Lee",
    subTitle: "Sunshine",
    phone: "+182137121886",
  },
  {
    id: 3,
    ava: "/mike_hussy-1.jpg",
    count: 1,
    name: "Mike Hussy",
    subTitle: "Eco Builders",
    phone: "+442037691880",
  },
  {
    id: 4,
    ava: "/tom_steven.jpg",
    count: 2,
    name: "Tom Steven",
    subTitle: "Sweet Home",
    phone: "+052015698546",
  },
];

const Home = () => {
  const matches = useMediaQuery("(min-width:600px)");

  const [initial, setInitial] = useState(true);
  const [listingTypes, setListingTypes] = useState([]);
  const [selectedListingType, setSelectedListingType] = useState("");

  interface ListingTypes {
    id: string;
    name: string;
  }

  useEffect(() => {
    getListingTypes();
  }, []);

  const getListingTypes = () => {
    api
      .get("ListingTypes")
      .then((res) => {
        setListingTypes(res.data);
        console.log(listingTypes);
        setInitial(true);
      })
      .catch((error) => {
        // alert(error);
      });
  };

  const handleSelectedListingType = (event: SelectChangeEvent) => {
    setSelectedListingType(event.target.value as string);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
      }}
    >
      {/* container 1 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundSize: "cover",
          backgroundImage: `url('https://homlisti.tpblog.net/wp-content/uploads/2021/08/home-3-main-banner.jpg')`,
          borderBottomLeftRadius: "50% 20%",
          borderBottomRightRadius: "50% 20%",
          minHeight: "732px",
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              margin: "auto",
              width: "80%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h2"
              component="h2"
              sx={{
                padding: "10px 0 10px 0",
                fontWeight: "bold",
                color: "white",
                fontSize: "54px",
                textAlign: "center",

                "@media (max-width:800px)": {
                  fontSize: "24px",
                },
              }}
            >
              Find the perfect place to <br /> live with your family
            </Typography>
            <ButtonGroup variant="text" sx={{ padding: "10px 0 10px 0" }}>
              <Grid
                container
                sx={{ alignItems: "center", justifyContent: "center" }}
              >
                {categories.map((category) => (
                  <Grid item key={category}>
                    <Button
                      startIcon={<SearchIcon />}
                      sx={{
                        textTransform: "none",
                        color: "white",
                        padding: "8px",

                        "&:hover": { color: "#00C194" },
                        "&:not(:last-child)": {
                          borderRight: "none",
                        },
                      }}
                    >
                      {category}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </ButtonGroup>
            <Grid container rowSpacing={1}>
              <Grid item xs={12} sm={12} md={3} lg={3}>
                <TextField
                  label="Enter Keyword here ..."
                  sx={{ backgroundColor: "white", width: "100%" }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={3} lg={3}>
                <FormControl
                  sx={{
                    backgroundColor: "white",
                  }}
                  fullWidth
                >
                  {/* <InputLabel id="demo-simple-select-label">
                    Select Type
                  </InputLabel> */}
                  <Select
                    // labelId="demo-simple-select-label"
                    value={selectedListingType}
                    onChange={handleSelectedListingType}
                  >
                    <MenuItem value="">
                      <em>Placeholder</em>
                    </MenuItem>
                    {listingTypes.length > 0
                      ? listingTypes.map((type: ListingTypes) => (
                          <MenuItem key={type.id} value={type.id}>
                            {type.name}
                          </MenuItem>
                        ))
                      : types.map((type) => (
                          <MenuItem key={type} value={type}>
                            {type}
                          </MenuItem>
                        ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} md={3} lg={3}>
                <TextField
                  label="Select Location"
                  select
                  sx={{ backgroundColor: "white", width: "100%" }}
                >
                  {locations.map((location) => (
                    <MenuItem key={location}>{location}</MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={12} md={3} lg={3}>
                <Button
                  variant="contained"
                  endIcon={<SearchIcon />}
                  sx={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#00C194",

                    "&:hover": {
                      backgroundColor: "#00A47E",
                    },
                  }}
                >
                  Search
                </Button>
              </Grid>
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  color: "white",
                  padding: "10px 0 10px 0",
                  textAlign: "center",
                }}
              >
                We have more than 54,000 apartments, place & plot.
              </Typography>
            </Grid>
          </Box>
        </Container>
      </div>
      {/* container 2 */}
      <Box
        sx={{
          margin: "90px 0 90px 0",
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={2} rowSpacing={2} columnSpacing={2}>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              sx={{ justifyContent: "center" }}
            >
              <Typography
                variant="h6"
                sx={{ color: "#00C194", textTransform: "uppercase" }}
                gutterBottom
              >
                Our clients
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "800",
                  fontSize: "32px",
                  lineHeight: "1.2",
                  textTransform: "uppercase",
                }}
                gutterBottom
              >
                {"We're going to became"}
                {<br />}
                {"partners for the long run"}
              </Typography>
              <Typography gutterBottom>
                Ghen an unknown printer took a galley of type andscr ambledit to
                make a type specimen book has survived not only five centuries
                but also.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8}>
              <Grid
                container
                rowSpacing={2}
                columnSpacing={2}
                sx={{ alignItems: "center", justifyContent: "center" }}
              >
                {logos.map((logo) => (
                  <Grid item key={logo.id} xs={12} sm={4} md={4} lg={4}>
                    <Box
                      sx={{
                        "&:hover .home-logo": {
                          cursor: "pointer",
                          filter: "none !important",
                        },
                      }}
                    >
                      <Image
                        className="home-logo"
                        alt={logo.title}
                        src={logo.link}
                        width={200}
                        height={117}
                        style={{
                          display: "flex",
                          filter: "grayscale(100%)",
                          margin: "auto",
                        }}
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* container 3 */}
      <Box className={Homestyle.container3}>
        <Container maxWidth="xl">
          <Grid container className={Homestyle.sectionTitle}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Typography className={Homestyle.subTitle}>
                Our properties
              </Typography>
              <Typography variant="h2" className={Homestyle.mainTitle}>
                Latest properties
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              sx={{ display: "flex", justifyContent: "end" }}
            >
              <ButtonGroup variant="text" sx={{ padding: "10px 0 10px 0" }}>
                <Grid container spacing={2}>
                  {types.map((type) => (
                    <Grid item key={type}>
                      <Button
                        variant="contained"
                        sx={{
                          textTransform: "none",
                          color: "black",
                          backgroundColor: "transparent",
                          padding: "6px 35px",
                          borderRadius: "24px",
                          border: "1px solid #00C194",

                          "&:hover": {
                            color: "white",
                            backgroundColor: "#00C194",
                          },
                          "&:not(:last-child)": {
                            borderRight: "none",
                          },
                        }}
                      >
                        {type}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              </ButtonGroup>
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            {temp.map((temp) => (
              <Grid key={temp} item xs={12} sm={12} md={4} lg={4}>
                <ProductCard view="grid" />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* container 4 */}
      <Box className={Homestyle.container4}>
        <Container maxWidth="xl">
          <div className={Homestyle.title}>
            <Typography className={Homestyle.subTitle}>
              Our working proccess
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              className={Homestyle.mainTitle}
            >
              How it works
            </Typography>
            <Typography className={Homestyle.description}>
              Make a type specimen book. It has survived not only five
              centuries, but also
              <br /> the leap into electronic typesetting, remaining.
            </Typography>
          </div>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Paper variant="outlined" className={Homestyle.serviceBox}>
                <div className={Homestyle.imgWrap}>
                  <div className={Homestyle.hoverBackground} />
                  <HomeIcon className={Homestyle.icon} />
                </div>
                <div className={Homestyle.content}>
                  <Typography
                    variant="h3"
                    component="h3"
                    className={Homestyle.mainTitle}
                  >
                    Find property
                  </Typography>
                  <Typography className={Homestyle.description}>
                    Odales mauris quis tellus facilis wisvel mattis magna
                    interdumr awabitur aweeget aliquam elit.
                  </Typography>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Paper variant="outlined" className={Homestyle.serviceBox}>
                <div className={Homestyle.imgWrap}>
                  <div className={Homestyle.hoverBackground} />
                  <ArticleIcon className={Homestyle.icon} />
                </div>
                <div className={Homestyle.content}>
                  <Typography
                    variant="h3"
                    component="h3"
                    className={Homestyle.mainTitle}
                  >
                    Make a Deal
                  </Typography>
                  <Typography className={Homestyle.description}>
                    Odales mauris quis tellus facilis wisvel mattis magna
                    interdumr awabitur aweeget aliquam elit.
                  </Typography>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Paper variant="outlined" className={Homestyle.serviceBox}>
                <div className={Homestyle.imgWrap}>
                  <div className={Homestyle.hoverBackground} />
                  <KeyIcon className={Homestyle.icon} />
                </div>
                <div className={Homestyle.content}>
                  <Typography
                    variant="h3"
                    component="h3"
                    className={Homestyle.mainTitle}
                  >
                    Get your keys
                  </Typography>
                  <Typography className={Homestyle.description}>
                    Odales mauris quis tellus facilis wisvel mattis magna
                    interdumr awabitur aweeget aliquam elit.
                  </Typography>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Container 5 */}
      <Box className={Homestyle.container5}>
        <ImageList cols={matches ? 5 : 1} gap={0}>
          {locationImgs.map((location) => (
            <ImageListItem key={location.img}>
              <div className={Homestyle.imgContainer}>
                <div className={Homestyle.overlay}></div>
                <Image
                  layout="fill"
                  objectFit="cover"
                  src={location.img}
                  alt={location.title}
                  loading="lazy"
                  className={Homestyle.img}
                />
                <div className={Homestyle.content}>
                  <Typography
                    variant="h3"
                    component="h3"
                    className={Homestyle.title}
                  >
                    {location.title}
                  </Typography>
                  <div className={Homestyle.count}>
                    <Typography className={Homestyle.text}>
                      {location.properties}{" "}
                      {location.properties > 1 ? "Properties" : "Property"}
                    </Typography>
                  </div>
                </div>
              </div>
            </ImageListItem>
          ))}
        </ImageList>
      </Box>

      {/* Container 6 */}
      <Box className={Homestyle.container6}>
        <Container maxWidth="xl">
          <div className={Homestyle.title}>
            <Typography className={Homestyle.subTitle}>
              EXPERTISE IS HERE
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              className={Homestyle.mainTitle}
            >
              Our Exclusive Agents
            </Typography>
          </div>
          <Grid container spacing={2} className={Homestyle.wrap}>
            {agents.map((agent) => (
              <Grid key={agent.id} item xs={6} sm={6} md={3} lg={3}>
                <Card className={Homestyle.agentBlock}>
                  <CardActionArea className={Homestyle.agentContainer}>
                    <Box className={Homestyle.agentImgContainer}>
                      <CardMedia
                        className={Homestyle.agentImg}
                        component="img"
                        height="255"
                        image={agent.ava}
                        alt={agent.name}
                      />
                      <Box className={Homestyle.categoryBox}>
                        <Typography className={Homestyle.itemCategory}>
                          {agent.count} Listings
                        </Typography>
                      </Box>
                    </Box>
                    <CardContent className={Homestyle.itemContent}>
                      <Typography
                        gutterBottom
                        variant="h3"
                        component="h3"
                        className={Homestyle.itemName}
                      >
                        {agent.name}
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h4"
                        component="h4"
                        className={Homestyle.itemSubtitle}
                      >
                        {agent.subTitle}
                      </Typography>
                      <Box className={Homestyle.itemContact}>
                        <PhoneIcon className={Homestyle.itemIcon} />
                        <Typography
                          gutterBottom
                          className={Homestyle.itemPhone}
                        >
                          Call: {agent.phone}
                        </Typography>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Box className={Homestyle.elementorWrap}>
              <Box className={Homestyle.elementorContainer}>
                <GroupsIcon className={Homestyle.iconHolder} />
                <Box className={Homestyle.contentHolder}>
                  <Typography
                    gutterBottom
                    variant="h3"
                    component="h3"
                    className={Homestyle.infoTitle}
                  >
                    Become an Agent
                  </Typography>
                  <Typography sx={{ color: "#70778B", fontSize: "16px" }}>
                    Agent hen an unknown printer took a galley scramble
                  </Typography>
                </Box>
              </Box>
              <Box className={Homestyle.btnWrap}>
                <Button variant="contained" className={Homestyle.btn}>
                  Join Now
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Home;

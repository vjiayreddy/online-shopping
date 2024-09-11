"use client";
import React, { Fragment, useEffect } from "react";
import { Container } from "@mui/material";
import HomeSwiperSliderComponent from "@/components/swiperSliders/homeSwiperSlider";
import HomeProductsContainer from "@/containers/pages/home/categories";
import SectionContainer from "@/components/utils/SectionContainer";
import { OurServices } from "@/containers/pages/home/our-services/OurServices";
import Achievements from "@/containers/pages/home/achievement/Achievements";
import HomeOccasionContainer from "@/containers/pages/home/occasions/Occasions";
import HomeDiscoverContainer from "@/containers/pages/home/discover/Discover";
import TalkToStylist from "@/containers/pages/home/talk-to-stylist/TalkToStylist";
import HomeFaq from "@/containers/pages/home/faq/Faq";
import HomeFindStylist from "@/containers/pages/home/find-stylist/FindStylist";
import ShopByLook from "@/containers/pages/home/shop-by-look/ShopByLook";
import HomeTestimonials from "@/containers/pages/home/testimonials/Testimonials";
import HomeMediaPress from "@/containers/pages/home/media-press/MediaPress";
import HomeMostLoved from "@/containers/pages/home/most-loved/MostLoved";
import HomeEvents from "@/containers/pages/home/events/Events";
import HappyClients from "@/containers/pages/home/happy-clients/HappyClients";

const cdn = "https://cdn.lightwidget.com/widgets/lightwidget.js";
const lightWidget =
  "https://lightwidget.com/widgets/2c5e957b1e0d56cdb7ed1cf9ef0d3092.html";

const HomePage = () => {
  useEffect(() => {
    // Load the Lightwidget script after component mounts
    const script = document.createElement("script");
    script.src = cdn;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Fragment>
      <Container disableGutters maxWidth="xl">
        <HomeSwiperSliderComponent />
      </Container>
      <Container disableGutters maxWidth="xl">
        <OurServices />
      </Container>
      <SectionContainer disableGutters maxWidth="xl">
        <Achievements />
      </SectionContainer>
      <SectionContainer maxWidth="lg">
        <HomeProductsContainer title="Shop By Categories" />
      </SectionContainer>
      <SectionContainer maxWidth="xl">
        <Container maxWidth="lg" disableGutters>
          <HomeOccasionContainer title="Shop By Occasions" />
        </Container>
      </SectionContainer>
      <SectionContainer maxWidth="xl">
        <HomeDiscoverContainer />
      </SectionContainer>
      <TalkToStylist />
      <SectionContainer maxWidth="xl">
        <Container maxWidth="lg" disableGutters>
          <HomeFindStylist />
        </Container>
      </SectionContainer>
      <SectionContainer sx={{ paddingBottom: 0 }} maxWidth="xl" disableGutters>
        <ShopByLook />
      </SectionContainer>
      <SectionContainer maxWidth="lg" disableGutters>
        <HomeEvents />
      </SectionContainer>
      <SectionContainer maxWidth="xl" disableGutters>
        <HomeTestimonials />
      </SectionContainer>
      <SectionContainer maxWidth="xl" disableGutters>
        <HomeMostLoved />
      </SectionContainer>
      <SectionContainer maxWidth="sm" disableGutters>
        <HappyClients />
      </SectionContainer>
      <SectionContainer maxWidth="xl" disableGutters>
        <HomeMediaPress />
      </SectionContainer>
      <SectionContainer maxWidth="md">
        <HomeFaq />
      </SectionContainer>
      <iframe
        title="Instagram Feed"
        src={lightWidget}
        scrolling="no"
        allowTransparency={true}
        className="lightwidget-widget"
        style={{
          width: "100%",
          border: "0",
          overflow: "hidden",
          height: "600px",
        }}
      ></iframe>
    </Fragment>
  );
};

export default HomePage;

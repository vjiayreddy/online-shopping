"use client";
import React from "react";
import MainLayoutContainer from "@/containers/layouts/mainLayout";
import { Container } from "@mui/material";
import HomeSwiperSliderComponent from "@/components/swiperSliders/homeSwiperSlider";
import HomeProductsContainer from "@/containers/pages/home/categories";
import ProductsSliderComponent from "@/containers/pages/home/productsSlider";

const HomePage = () => {
  return (
    <MainLayoutContainer>
      <Container maxWidth="lg">
        <HomeSwiperSliderComponent />
      </Container>
      <Container maxWidth="lg">
        <HomeProductsContainer title="Categories" />
      </Container>
      <Container maxWidth="lg">
        <ProductsSliderComponent title="Popular Products" data={[]} />
      </Container>
      <Container maxWidth="lg">
        <ProductsSliderComponent title="Top Selling Products" data={[]} />
      </Container>
    </MainLayoutContainer>
  );
};

export default HomePage;

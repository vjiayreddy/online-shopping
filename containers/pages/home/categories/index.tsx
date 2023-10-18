import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CategoryCardComponent from "@/components/cards/categoryCard";
import ProductSwiperSliderComponent from "@/components/swiperSliders/productSwipeSlider";
import { SwiperSlide } from "swiper/react";
import { PRODUCTS_CATEGORIES } from "@/utils/constants";

interface HomeCategoriesContainerProps {
  title: string;
}

const HomeCategoriesContainer = ({ title }: HomeCategoriesContainerProps) => {
  return (
    <Box mb={5}>
      <Box mt={5} mb={5}>
        <Typography fontWeight={700} variant="h4">
          {title}
        </Typography>
      </Box>
      <Box>
        <ProductSwiperSliderComponent>
          {PRODUCTS_CATEGORIES.map((product) => (
            <SwiperSlide key={product.name}>
              <CategoryCardComponent data={product} />
            </SwiperSlide>
          ))}
        </ProductSwiperSliderComponent>
      </Box>
    </Box>
  );
};

export default HomeCategoriesContainer;

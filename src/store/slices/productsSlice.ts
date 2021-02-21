import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { service } from "../../api/services";
import { IProduct } from "../../interfaces/IProduct";
import { ICarouselItem } from "../../interfaces/ICarouselItem";

interface IProductsState {
  value: number;
  productList: IProduct[];
  carouselItems: ICarouselItem[];
}

const initialState: IProductsState = {
  value: 0,
  productList: [],
  carouselItems: [],
};

export const fetchProductsByCategory = createAsyncThunk<IProduct[], string>(
  "products/fetchProductsByCategory",
  async (category: string) => {
    const response = service.fetchProductsByCategory(category);
    return response as IProduct[];
  }
);

export const fetchFeaturedProducts = createAsyncThunk<IProduct[], null>(
  "products/fetchFeaturedProducts",
  async () => {
    const response = service.fetchFeaturedProducts();
    return response as IProduct[];
  }
);

export const fetchCarouselItems = createAsyncThunk<ICarouselItem[], null>(
  "products/fetchCarouselItems",
  async () => {
    const response = service.fetchCarouselItems();
    return response as ICarouselItem[];
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    incrementByAmount: () => {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductsByCategory.fulfilled, (state, action) => {
      state.productList = action.payload;
    });
    builder.addCase(fetchFeaturedProducts.fulfilled, (state, action) => {
      state.productList = action.payload;
    });
    builder.addCase(fetchCarouselItems.fulfilled, (state, action) => {
      state.carouselItems = action.payload;
    });
  },
});

export const { incrementByAmount } = productsSlice.actions;

export default productsSlice.reducer;

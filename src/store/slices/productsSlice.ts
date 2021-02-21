import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { service } from "../../api/services";
import { IProduct } from "../../interfaces/IProduct";

interface IProductsState {
  value: number;
  productList: IProduct[];
}

const initialState: IProductsState = {
  value: 0,
  productList: [],
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
  },
});

export const { incrementByAmount } = productsSlice.actions;

export default productsSlice.reducer;

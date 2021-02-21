import { products } from "./dummyData/products";
import { featuredProducts } from "./dummyData/featuredProducts";
import { carouselItems } from "./dummyData/carouselItems";

const fetchProductById = (id: string) => {
  const product = products.find((product) => product.id === id);

  if (!product) {
    return null;
  }

  return product;
};

const fetchProductsByCategory = (category: string) => {
  return products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );
};

const fetchFeaturedProducts = () => {
  return products.filter((product) => featuredProducts.includes(product.id));
};

const fetchCarouselItems = () => {
  return carouselItems.map((item) => {
    const productList = item.products.map((id) => fetchProductById(id));
    return { ...item, products: productList };
  });
};

export const service = {
  fetchProductsByCategory: fetchProductsByCategory,
  fetchFeaturedProducts: fetchFeaturedProducts,
  fetchCarouselItems: fetchCarouselItems,
  fetchProductById: fetchProductById,
};

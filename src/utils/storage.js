import { Bounce, toast } from "react-toastify";

const getProduct = () => {
  const allProduct = localStorage.getItem("Product");
  return allProduct ? JSON.parse(allProduct) : [];
};
const getProduct2 = () => {
  const allProduct = localStorage.getItem("wishlist");
  return allProduct ? JSON.parse(allProduct) : [];
};

const setProductToLocalStoreg = (details) => {
  const product = getProduct();
  toast.success("Success to added a product!", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });

  product.push(details);
  localStorage.setItem("Product", JSON.stringify(product));
};

const setProductToWishlist = (details) => {
  const product = getProduct2();
  const findItem = product.find((p) => p.id == details.id);
  if (findItem)
    return toast.error("You can not added a same product!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  product.push(details);
  localStorage.setItem("wishlist", JSON.stringify(product));
};

export {
  setProductToLocalStoreg,
  getProduct,
  setProductToWishlist,
  getProduct2,
};

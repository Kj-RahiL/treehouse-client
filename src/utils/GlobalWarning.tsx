import { useEffect } from "react";
import { useAppSelector } from "../redux/hooks";

const GlobalWarning = () => {
  const { products } = useAppSelector((store) => store.cart);
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (products.length > 0) {
        event.preventDefault();
        event.returnValue = ""; // This is required to trigger the browser's confirmation dialog
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [products]);
  return null;
};

export default GlobalWarning;

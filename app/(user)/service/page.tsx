import React from "react";
import CardProducts from "../card/CardProducts";

export default function page() {
  return (
    <div className=" object-contain mx-auto h-full w-auto  my-20 m-auto overflow-hidden  grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4">
      <CardProducts />
    </div>
  );
}

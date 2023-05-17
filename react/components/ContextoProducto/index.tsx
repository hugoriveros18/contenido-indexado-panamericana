import React from 'react';
import { useProduct } from 'vtex.product-context';

export default function ContextoProducto() {

  //PRODUCT CONTEXT
  const productContext = useProduct();

  //JSX
  return(
    <>
      <div style={{display: "none"}} id='product-context-ean'>{productContext?.selectedItem.ean}</div>
      <div style={{display: "none"}} id='product-context-brand'>{productContext?.product.brand}</div>
    </>
  )
}


import React, { useEffect } from 'react';
// import React, { useEffect, useState } from 'react';
import { useProduct } from 'vtex.product-context';
import { canUseDOM } from 'vtex.render-runtime';
import { useCssHandles } from 'vtex.css-handles';
import './styles.css';

const CSS_HANDLES = [
  "hpContentContainer"
]

export default function ContenidoIndexadoHP() {

  //PRODUCT CONTEXT
  const productContext = useProduct();

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //EFFECTS
  useEffect(() => {
    if(canUseDOM) {
      let initialScript = document.getElementById('contenido-indexado-hp');
      try {
        // @ts-ignore
        if(productContext.selectedItem.ean && initialScript && PMBox) {
          // @ts-ignore
          PMBox.loadContentByEan(productContext.selectedItem.ean)
        }
      } catch (error) {
        console.error(error);
      }
    }

  }, [productContext, canUseDOM])

  return (
    <>
      <div id='contenidoIndexado' className={handles.hpContentContainer}></div>
    </>
  )
}

import React, { useEffect } from 'react';
import { useProduct } from 'vtex.product-context';
import { CustomHTMLSchema } from '../../schema/CustomHTMLSchema';

export default function CustomHTML({htmlElements = []}:CustomHTMLProps){

  //PRODUCT CONTEXT
  const productContext = useProduct();

  //EFFECTS
  useEffect(() => {
    let isActive = false;
    const content = document.getElementById('customHTLM__container');
    if(content) {
      for(let i = 0; i < htmlElements.length; i++) {
        if(htmlElements[i].skuId === productContext.selectedItem.itemId) {
          content.innerHTML = htmlElements[i].iframe;
          isActive = true;
          break;
        }
      }

      if(!isActive) {
        content.innerHTML = '';
      }
    }

  },[productContext, htmlElements])

  //JSX
  return (
    <div id="customHTLM__container"></div>
  )
}

CustomHTML.schema = CustomHTMLSchema;


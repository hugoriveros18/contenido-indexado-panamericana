import React, { useEffect } from 'react'
import { Helmet } from 'vtex.render-runtime'


type Props = {
  scriptJS: string
  htmlCode: string
  stylesCSS: string
}

const CustomHTMLComponent = ({
  scriptJS = 'console.log("hola mundo")',
  htmlCode = '<h1 class="prueba">Hola</h1>',
  stylesCSS = '.prueba {color: red;}'
}:Props) => {

  useEffect(
    () => {
      const content = document.getElementById('contentContainer')
      if(content) content.innerHTML = htmlCode
    },[htmlCode]
  )
    return (
      <>
        {
          scriptJS.length > 0 &&
          <Helmet
            script={
              [
                {
                  type: 'text/javascript',
                  innerHTML: `${scriptJS}`
                }
              ]
            }
          />
        }
        <div className='customComponent__container'>
          {stylesCSS.length > 0 && <style>{stylesCSS}</style>}
          <div id="contentContainer" className="customComponent__content">

          </div>
        </div>
      </>
    )
}

export default CustomHTMLComponent

CustomHTMLComponent.schema = {
  title: 'Custom HTML Component',
  description: 'Permite agregar contenido html, css y javascript a la estructura',
  type: 'object',
  properties: {
    scriptJS: {
      title: 'JS Script',
      description: 'Scripts para landigns pages',
      type: 'string',
      format: 'RichText',
      default: 'console.log("hola mundo")',
    },
    htmlCode: {
      title: 'Contenido',
      description: 'Contenido en html',
      type: 'string',
      format: 'RichText',
      default: '<h1 class="prueba">Landing Page</h1>',
    },
    stylesCSS: {
      title: 'Estilos',
      description: 'Estilos en css',
      type: 'string',
      format: 'RichText',
      default: '.prueba{color:green;font-size: 32px;}',
    },
  }
}

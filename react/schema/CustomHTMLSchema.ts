const CustomHTMLSchema = {
  title: 'Custom HTML',
  description: 'Permite agregar contenido html en la pagina de producto',
  type: 'object',
  properties: {
    htmlElements: {
      title: 'Lista de Elementos HTML',
      type: 'array',
      items: {
        properties: {
          __editorItemTitle: {
            title: "Nombre Del Elemento",
            type: "string",
            default: ''
          },
          iframe: {
            title: 'Iframe',
            type: 'string',
            default: '',
            widget: {
              "ui:widget": "textarea"
            }
          },
          skuId: {
            title: 'Sku Id',
            type: 'string',
            default: ''
          }
        }
      }
    }
  }
}

export { CustomHTMLSchema }

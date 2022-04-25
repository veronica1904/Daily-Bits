import { pJavaScript, pCss, pHtml, pFigma, pUx } from './Preguntas'

const Categoria = (categ) => {

    let preguntas = []

    if(categ.includes("js")){
        preguntas = pJavaScript
    } if(categ.includes("css")){
        preguntas = pCss
    }if(categ.includes("html")){
        preguntas = pHtml
    }if(categ.includes("figma")){
        preguntas = pFigma
    }if(categ.includes("ux")){
        preguntas = pUx
    }

  return preguntas

}

export default Categoria
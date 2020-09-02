import { LIST_MEDIA } from '../contants'

const medias = {
  [LIST_MEDIA.xs]: (styles) => `
    @media only screen and (max-width: 480px){
        ${styles}
    }
`,
}

export default medias

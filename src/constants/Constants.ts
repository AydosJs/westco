export const regHttp = /https/gm
export const regImg = /img/gm

export const imgUrlController = (link: string) => {
  const defaultImgeLink = 'https://www.sicilywelcome.com/assets/images/placeholders/no-img-placeholder.png'

  if( link === undefined) {
    return defaultImgeLink
  } 
  
  if((link).match(regHttp)){
    return link
  } else if((link).match(regImg)){
    // console.log("get link", `https://coursesnodejs.herokuapp.com/${link}`)
    return `https://coursesnodejs.herokuapp.com/${link}`
  } else {
    return defaultImgeLink
  }
}

export const PAGE_LIMIT = 8
export const DEFAULT_FILTER = { page: 1, limit: PAGE_LIMIT }
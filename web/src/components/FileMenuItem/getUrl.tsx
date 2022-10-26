// get the url for the button to redirect to
export function getUrl (l: string, s: string, n: number): string {
  if ((l === '/' || n === 1) && l.split('/')[1] !== s) {
    // top button, not chosen yet
    return `/${s}`
  } else if ((l === '/' || n === 1) && l.split('/')[1] === s) {
    // top button, already chosen
    return '/'
  } else if (n === 2) {
    // bottom button
    const list = l.split('/')
    if (list[list.length - 1] === s) return `/${list[1]}` // already chosen

    // not chosen yet
    list[2] = 'to'
    list[3] = s
    return list.join('/')
  } else return '/'
}

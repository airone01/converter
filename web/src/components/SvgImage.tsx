interface Props {
  image: 'document' | 'image',
  color?: string
}

export default function SvgImage({ image, color }: Props) {
  color = color || "currentColor"

  return (
    <main style={{ width: "5rem", height: "5rem" }}>
      { image === 'document' ?
        (<svg className="w-6 h-6" fill="none" stroke={color} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>) :
        (<svg className="w-6 h-6" fill="none" stroke={color} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>)
      }
    </main>
  )
}
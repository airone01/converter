import { PrimitiveAtom } from 'jotai'
import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import './UploadButton.css'

type Props = {
  atom: PrimitiveAtom<ArrayBuffer>
}

export default function UploadButton({ atom: fileAtom }: Props) {
  const onDrop = useCallback((files: File[]) => {
      console.log(files.map((f) => f.arrayBuffer));
    }, [])
  const {
    getRootProps,
    getInputProps,
    isDragActive
  } = useDropzone({onDrop})
  

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>drop here</p> :
          <p>upload</p>
      }
    </div>
  )
}
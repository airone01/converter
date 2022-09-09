import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import './UploadButton.css'

type Props = {
  addFiles: (a: ArrayBuffer) => void
}

export default function UploadButton({ addFiles }: Props) {
  const onDrop = useCallback((acceptedFiles: any) => {
    acceptedFiles.forEach((file: any) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('Upload aborted')
      reader.onerror = () => console.log('Upload failed')
      reader.onload = () => {
        const binaryStr: ArrayBuffer = reader.result as ArrayBuffer
        console.log(binaryStr)
      }
      (async () => {
        reader.readAsArrayBuffer(file)
      })()
    });
    }, [])
  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <div className="uploadButton-wrapper" {...getRootProps()}>
      <button className="uploadButton">
        <p>UPLOAD</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#AAAAAA" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
        </svg>
      </button>
      <input
        name="upload"
        type="file"
        placeholder="UPLOAD"
        {...getInputProps()}
      />
    </div>
  )
}
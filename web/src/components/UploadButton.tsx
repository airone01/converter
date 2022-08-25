import { ChangeEvent, Dispatch, SetStateAction, useRef } from 'react'
import './UploadButton.css'

type Props = {
  setFiles: (u: SetStateAction<FileList>) => void
}

export default function UploadButton({ setFiles }: Props) {
  function uploadFiles(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files !== null && e.target.files.length > 0) {
      const test = e.target.files
      setFiles(() => test)
    }
  }

  const inputFile = useRef<HTMLInputElement>(null)

  return (
    <div className="uploadButton-wrapper">
      <button className="uploadButton" onClick={() => inputFile.current?.click()}>
        <p>UPLOAD</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#AAAAAA" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
        </svg>
      </button>
      <input
        name="upload"
        type="file"
        ref={inputFile}
        onChange={() => setFiles}
        placeholder="UPLOAD"
      />
    </div>
  )
}
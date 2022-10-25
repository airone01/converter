import { Link } from 'react-router-dom';

export default function About() {
  return (<p>
    <h1>about</h1>
    <h2 className='mt-2 text-xl font-extrabold'>why should i use this site ?</h2>
    <ul className='list-inside list-disc'>
      <li>there are no ads</li>
      <li>nothing to download</li>
      <li>it doesn't store any infos on you</li>
      <li>no cookies either</li>
      <li className='font-bold underline decoration-1'>the file processing is done on your machine,<br />so your files aren't uploaded or transfered somewhere</li>
    </ul>
    <h2 className='mt-2 text-xl font-extrabold'>who made this ?</h2>
    <p>me, airone01<br />
    i'm an IT student with a little time off</p>
    <a href='https://github.com/AirOne01'><img className='mx-auto' alt='Check my stuff out on Github' src="https://img.shields.io/badge/check%20my%20stuff%20out-242424?style=for-the-badge&logo=github&logoColor=white" crossOrigin='anonymous'/></a>
    <h2 className='mt-2 text-xl font-extrabold'>will you use next.js...</h2>
    <p>...or any other cool new js thingy ?</p>
    <p>no. simple is most of the time better.<br />
      this project is just a file converter over WASM</p>
    <h2 className='mt-2 text-xl font-extrabold'>do you pay for this ?</h2>
    <p className="mb-2">yes, i do pay for the server<br />
    i'm planning to move all this to Linode eventually</p>
    <Link to="/">go back converting</Link>
  </p>);
}
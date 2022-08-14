import { Link } from 'react-router-dom';
import './about.css'

export default function About() {
  return (<>
    <h1>about</h1>
    <h2>why should i use this site ?</h2>
    <ul>
      <li>there are no ads</li>
      <li>nothing to download</li>
      <li>it doesn't store any infos on you</li>
      <li>no cookies either</li>
      <li style={{ fontWeight: 'bold', textDecoration: 'underline' }}>the file processing is done on your machine,<br />so your files aren't uploaded or transfered somewhere</li>
    </ul>
    <h2>who made this ?</h2>
    <p>me, airone01<br />
    i'm an IT student with a little time off</p>
    <a href='https://github.com/AirOne01'><img src="https://img.shields.io/badge/check%20my%20stuff%20out-242424?style=for-the-badge&logo=github&logoColor=white" /></a>
    <h2>will you use next.js...</h2>
    <p>...or any other cool new js thingy ?</p>
    <p>no. simple is most of the time better.<br />
      this project is just a file converter over WASM</p>
    <h2>do you pay for this ?</h2>
    <p>yes, i do pay for the server<br />
    i'm planning to move all this to Linode eventually</p>
    <Link to="/" className="card">go back converting</Link>
  </>);
}
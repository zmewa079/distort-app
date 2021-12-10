import SearchForm from '../../components/SearchForm/SearchForm'
import './Landing.css'
import { Link } from 'react-router-dom';

const Landing = ({ user }) => {
  var str1 = "Tupac Amaru Shakur ( TOO-pahk shə-KOOR; born Lesane Parish Crooks, June 16, 1971 – September 13, 1996), better known by his stage name 2Pac and by his alias Makaveli, was an American rapper, songwriter, and actor. He is widely considered to be one of the most influential rappers of all time. Much of Shakur's work has been noted for addressing contemporary social issues that plagued inner cities, and he has often been considered a symbol of activism against inequality.Shakur was born in Manhattan...";

  var str2 = 'Deadpool is a 2016 American superhero film based on the Marvel Comics character of the same name. Distributed by 20th Century Fox, it is the eighth film in the X-Men film series. Directed by Tim Miller from a screenplay by Rhett Reese and Paul Wernick, it stars Ryan Reynolds in the title role alongside Morena Baccarin, Ed Skrein, T. J. Miller, Gina Carano, and Brianna Hildebrand. In the film, Wade Wilson hunts the man who gave him mutant abilities and a scarred physical appearance, becoming the ...'

  var str3 = "Bad Friends (バッド・フレンズ, Baddo Furenzu) is a 2009 tribute album, featuring a variety of artists covering songs written by Yū Aku for the Japanese duo Pink Lady. It was released on December 16, 2009. The album's name comes from Akuyū (悪友), which translates to \"Bad friend\" and is the origin of Yū Aku's name.The final track, \"Kawahara no Ishikawa Goemon\" was originally recorded by Eiichi Ohtaki (under the pseudonym \"Niagara Fallin' Stars\") on his 1978 album Let's Ondo Again. This version is performed..."

  var res1 = str1.substring(0, 1000);
  var res2 = str2.substring(0, 1000);
  var res3 = str3.substring(0, 1000);

  return (
    <div>
      <main class='main'>
        <h1>
          hello, {user ? user.name : "friend"}
        </h1>
        <SearchForm />
      </main>
      <body class='showcards'>
        <div class='finalbox'>

        </div>
        <div class='testBox'>
          <h3 class='testArtist'>
            Tupac
          </h3>

          <a
            class='testYoutube'
            href="https://www.youtube.com/channel/UCMIdeeBjp_60Jv7ROpRxK6Q">
            Link to artist Youtube
          </a>
          <p class='testDescription'>
            {res1}...
          </p>
          <br />
          <button id='navbtn'>
            <Link to="/movies" id="link" >Movies</Link>
          </button>
        </div>
        <div class='finalbox'>

        </div>
        <div class='testBox'>
          <h3 class='testArtist'>
            Deadpool
          </h3>

          <a
            class='testYoutube'
            href="https://www.youtube.com/">
            Link to artist Youtube
          </a>
          <p class='testDescription'>
            {res2}...
          </p>
          <br />
          <button id='navbtn'>
            <Link to="/music" id="link" >Search Music Suggestions</Link>
          </button>
        </div>
        <div class='finalbox'>

        </div>
        <div class='testBox'>
          <h3 class='testArtist'>
            Bad Friends
          </h3>

          <a
            class='testYoutube'
            href="https://www.youtube.com/">
            Link to artist Youtube
          </a>
          <p class='testDescription'>
            {res3}...
          </p>
          <br />
          <button id='navbtn'>
            <Link to="/Podcasts" id="link" >Search Podcasts Suggestions</Link>
          </button>
        </div>
      </body>
    </div>
  )
}

export default Landing
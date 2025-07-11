import './App.css';

function App() {
  return (
    <div className="landing">
      {/* Header */}
      <header id="header" className="alt">
        <h1><a href="index.html">Ancient Egypt</a></h1>
        <a href="#nav">Menu</a>
      </header>

      {/* Nav */}
      <nav id="nav">
        <ul className="links">
          <li><a href="index.html">Home</a></li>
          <li><a href="timeline.html">Timeline</a></li>
          <li><a href="hieroglif.html">Hieroglif</a></li>
          <li><a href="invention.html">Invention</a></li>
          <li><a href="video.html">More Videos</a></li>
          <li><a href="others.html">Activities</a></li>
          <li><a href="about.html">About Us</a></li>
        </ul>
      </nav>

      {/* Banner */}
      <section id="banner">
        <i className="fas fa-crown"></i>
        <div className="inner">
          <h2>Egypt History</h2>
          <p>Preserving and sharing Egypt's rich heritage with the world</p>
        </div>
        <h2>Know more about Egypt</h2>
        <p>The most historical history in the world</p>
        <ul className="actions">
          <li>
            <a
              href="https://youtu.be/CskfvgEItPA?si=IHcEYjHKtdTHHNhF"
              className="button big special"
            >
              Learn More
            </a>
          </li>
        </ul>
      </section>

      <section id="one" className="wrapper style1">
        <div className="inner">
          <article className="feature left">
            <span className="image">
              <img src="images/pic01.jpg" alt="" width="376" />
            </span>
            <div className="content">
              <h2>Who is Firaun?</h2>
              <p>
                Firaun was the title given to the kings of ancient Egypt,
                particularly during the New Kingdom period, but the term is
                often used broadly to refer to Egyptian rulers throughout
                history. The word "Firaun" is derived from the biblical Hebrew
                term "Par'oh," which in turn has roots in earlier Semitic
                languages.
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="https://www.rekhta.org/allusions/firaun-and-musa-pharaoh-and-moses#:~:text=Firaun%20(Pharaoh)%20is%20the%20term,would%20bring%20about%20Firaun's%20death."
                    className="button alt"
                  >
                    More
                  </a>
                </li>
              </ul>
            </div>
          </article>
          <article className="feature right">
            <span className="image">
              <img src="images/pic02.jpg" alt="" width="576" height="358" />
            </span>
            <div className="content">
              <h2>The Great Sphinx Of Giza</h2>
              <p>
                The Great Sphinx has the body of a lion and the head of a human,
                believed to represent Pharaoh Khafre. It is carved directly from
                the bedrock of the Giza Plateau and is one of the largest and
                oldest statues in the world.
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="https://www.britannica.com/topic/Great-Sphinx"
                    className="button alt"
                  >
                    More
                  </a>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section id="two" className="wrapper special">
        <div className="inner">
          <header className="major narrow">
            <h2>Beautiful Scenery of Egypt</h2>
            <p>
              The people in Egypt use their intelligence to build those
              beautiful sceneries that are found in Egypt.
            </p>
          </header>
          <div className="image-grid">
            <button type="button" className="image" style={{ border: 'none', background: 'none', padding: 0 }}>
              <img src="images/pic03.jpg" alt="" width="299" height="200" />
            </button>
            <button type="button" className="image" style={{ border: 'none', background: 'none', padding: 0 }}>
              <img src="images/pic04.jpg" alt="" width="299" height="200" />
            </button>
            <button type="button" className="image" style={{ border: 'none', background: 'none', padding: 0 }}>
              <img src="images/pic05.jpg" alt="" width="300" height="200" />
            </button>
            <button type="button" className="image" style={{ border: 'none', background: 'none', padding: 0 }}>
              <img src="images/pic06.jpg" alt="" width="300" height="200" />
            </button>
            <button type="button" className="image" style={{ border: 'none', background: 'none', padding: 0 }}>
              <img src="images/pic07.jpg" alt="" width="300" height="200" />
            </button>
            <button type="button" className="image" style={{ border: 'none', background: 'none', padding: 0 }}>
              <img src="images/pic08.jpg" alt="" width="300" height="200" />
            </button>
            <button type="button" className="image" style={{ border: 'none', background: 'none', padding: 0 }}>
              <img src="images/pic09.jpg" alt="" width="300" height="200" />
            </button>
            <button type="button" className="image" style={{ border: 'none', background: 'none', padding: 0 }}>
              <img src="images/pic10.jpg" alt="" width="300" height="200" />
            </button>
          <ul className="actions">
            <li>
              <a
                href="https://www.gokitetours.com/egypt-tourist-attractions-you-cant-miss-on-your-journey/"
                className="button big alt"
              >
                Learn More
              </a>
            </li>
          </ul>
        </div>
      </div>
      </section>

      <section id="three" className="wrapper style3 special">
        <div className="inner">
          <header className="major narrow">
            <h2>History is important</h2>
            <p>It is important to learn from the people in ancient times.</p>
          </header>
          <ul className="actions">
            <li>
              <a href="index.html" className="button big alt">
                I'm ready
              </a>
            </li>
          </ul>
        </div>
      </section>

      <footer id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <a
                href="https://www.facebook.com/"
                className="icon fa-facebook"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://x.com/" className="icon fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                className="icon fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/"
                className="icon fa fa-youtube"
              >
                <span className="label">Youtube</span>
              </a>
            </li>
          </ul>
          <ul className="copyright">
            <li>&copy; 2025 Egypt Timeline. All rights reserved.</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;

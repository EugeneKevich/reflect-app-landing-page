/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import f1 from './images/f1.avif';
import f2 from './images/f2.avif';
import f3 from './images/f3.avif';
import f4 from './images/f4.jpg';
import f5 from './images/f5.avif';
import f6 from './images/f6.avif';
import f7 from './images/f7.avif';
import f8 from './images/f8.avif';
import f9 from './images/f9.avif';
import heroBg from './images/heroBg.png';
import image1 from './images/image1.svg';
import image10 from './images/image10.svg';
import image2 from './images/image2.svg';
import image3 from './images/image3.svg';
import image4 from './images/image4.svg';
import image5 from './images/image5.svg';
import image6 from './images/image6.svg';
import image7 from './images/image7.svg';
import image8 from './images/image8.svg';
import image9 from './images/image9.svg';
import logo from './images/logo.png';
import product from './images/product.png';
import productAvatar from './images/productAvatar.png';
import productCompany from './images/productCompany.png';
import productDots from './images/productDots.png';

const mainStyles = css``;

const headerStyles = css`
  background-color: #0c0f27;
  opacity: 0.6;
  position: fixed;
  display: flex;
  height: 80px;
  width: 100%;
  z-index: 1;
`;

const logotype = css`
  font-weight: normal;
  font-size: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 140px;
  height: 20px;
  padding: 10px;
`;

const headerContainer = css`
  margin-left: 350px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 0;
  width: 1115px;
  font-size: 14px;
  font-weight: 600;
`;

const navStyles = css`
  margin-left: 50px;
  a {
    margin-right: 20px;
  }
  &:last-child {
    margin-right: 0px;
  }
`;

const loginBlock = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 180px;
  height: 50px;
`;
const buttonStyles = css`
  background: linear-gradient(to bottom, #844be0, #221c86);
  padding: 8px 14px;
  width: 123px;
  height: 35px;
  border-radius: 8px;
`;

const backgroundStyles = css`
  position: absolute;

  img:nth-child(1) {
    width: 100%;
  }
`;
const topicBlock = css`
  position: absolute;
  margin-top: 154px;
  width: 100%;
  opacity: 0.7;

  > div {
    text-align: center;
  }

  p {
    font-size: 20px;
    font-weight: 500;
  }
`;

const videoStyles = css`
  display: flex;
  justify-content: center;
  justify-items: center;
  position: absolute;
  margin-top: 380px;
  width: 100%;

  > video {
    box-shadow: 0 0 100px 50px rgb(16, 60, 119);
  }
`;
const optionsSection = css`
  width: 100%;
  height: 312px;
  position: absolute;
  display: flex;
  justify-content: center;
  margin-top: 990px;
`;

const optionsBlock = css`
  width: 944px;
  height: 312px;
  display: grid;
  grid-template-columns: 224px 224px 224px 224px;
  grid-template-rows: 136px 136px;
  row-gap: 44px;
  column-gap: 18px;
`;

const optionsStyles = css`
  height: 136px;
  text-align: center;
  font-size: 16px;
  margin: 0px;
  color: #e0e5e9;
`;

const footer = css`
  position: absolute;
  margin-top: 2000px;
`;

const notetakingStyles = css`
  display: flex;
  justify-content: center;

  width: 100%;
`;
const purpleBlock = css`
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 1450px;
  width: 1152px;
  height: 536px;
  border-radius: 30px;
  background: linear-gradient(to bottom, #4e28b7, #9726d5);
`;
const purpleLeftBlock = css`
  width: 576px;
  left: 536px;
  padding: 60px;

  p {
    font-size: 18px;
    font-weight: 600;
    color: #d1bcff;
  }

  &:last-child {
    font-size: 30px;
  }

  h3 {
    margin: 0;
  }
`;
const purpleLeftList = css`
  display: grid;
  margin-top: 30px;
`;

const productDotsStyles = css`
  position: relative;
  bottom: 300px;
  width: 576px;
  height: 402px;
`;

const productGridStyles = css`
  position: relative;

  left: 30px;
  top: 70px;
  height: 293;
`;
const purpleOptionsStyles = css`
  width: 500px;
  display: flex;
  justify-content: flex-start;

  h5 {
    margin: 0;
    padding-left: 20px;
  }

  p {
    font-size: 16px;
    padding-left: 20px;
  }
`;

const userBlock = css`
  display: grid;
  width: 224px;
  height: 130px;
  background: #6b46d7;
  border-radius: 8px;
  position: relative;
  bottom: 390px;
  left: 230px;
`;

const avatarStyles = css`
  position: relative;
  display: flex;
  justify-content: flex-start;
  margin: 10px 0 0 10px;

  h6 {
    margin-left: 10px;
    padding-left: 30px;
    margin: 0;
    font-size: 14px;
  }

  p {
    font-size: 14px;

    margin-left: 10px;
    padding-left: 30px;
    margin: 0;
  }
`;

const feedbacksMain = css`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const feedbacksBlock = css`
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  width: 1190px;
  height: 680px;
`;

const feedbacksRows = css``;
const feedback = css`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 16px;
  padding: 16px;
  width: 384px;
  background: #181636;
  box-shadow: 0 -0.5px 0px 0px rgb(224, 229, 233);
  border-radius: 10px;
`;

const feedbackImage = css`
  padding-top: 5px;
  img {
    border-radius: 50%;
    width: 32px;
    height: 32px;
  }
`;
const feedbackText = css`
  padding-left: 16px;

  h5 {
    margin: 0px;
    padding-top: 0;
  }

  p {
    color: #5f5f85;
    font-weight: 500;
    line-height: 25px;
  }
`;
export default function App() {
  return (
    <div css={mainStyles}>
      <header css={headerStyles}>
        <div css={headerContainer}>
          <div css={logotype}>
            <img src={logo} alt="Reflect logo" width="38px" height="38px" />{' '}
            <a href="#abc">Reflect</a>
          </div>
          <nav css={navStyles}>
            <a href="#abc">Product</a>
            <a href="#abc">Pricing</a>
            <a href="#abc">Company</a>
          </nav>
          <div css={loginBlock}>
            <a href="#abc">Login</a>
            <a href="#abc" css={buttonStyles}>
              Start Free Trial
            </a>
          </div>
        </div>
      </header>

      <main>
        <section>
          <div css={backgroundStyles}>
            <img src={heroBg} alt="back" />
          </div>

          <div css={topicBlock}>
            <div>
              <h1>Think better with Reflect</h1>
              <p>Keep track of your notes, books and meeting</p>
            </div>
          </div>
          <div css={videoStyles}>
            <video
              preload="auto"
              autoPlay
              loop
              src="https://cleanshot-cloud-fra.accelerator.net/media/15712/Wz2lWJffWyHHBGWDE8CW3Dqd3Dcv5C7wfDqxVjES.mp4"
              width="1000px"
            >
              <track kind="captions" />
            </video>
          </div>
        </section>
        <section css={optionsSection}>
          <div css={optionsBlock}>
            <div css={optionsStyles}>
              <img src={image1} alt="" />
              <h5>Built for speed</h5>
              <p>Synchronized in real-time between all your devices.</p>
            </div>
            <div css={optionsStyles}>
              <img src={image2} alt="" />
              <h5>Networked notes</h5>
              <p>Backlink notes to each other to form a graph of ideas.</p>
            </div>
            <div css={optionsStyles}>
              <img src={image3} alt="" />
              <h5>iOS app</h5>
              <p>Capture ideas on the go, online or offline.</p>
            </div>
            <div css={optionsStyles}>
              <img src={image4} alt="" />
              <h5>End-to-end encryption</h5>
              <p>Super secure. Only you have access to your data.</p>
            </div>
            <div css={optionsStyles}>
              <img src={image5} alt="" />
              <h5>Calendar integration</h5>
              <p>Add people and meetings from Google Calendar.</p>
            </div>
            <div css={optionsStyles}>
              <img src={image6} alt="" />
              <h5>Publishing</h5>
              <p>One-click publishing to the web.</p>
            </div>
            <div css={optionsStyles}>
              <img src={image7} alt="" />
              <h5>Kindle import</h5>
              <p>Sync your book highlights and notes.</p>
            </div>
            <div css={optionsStyles}>
              <img src={image8} alt="" />
              <h5>In your browser</h5>
              <p>Capture snippets from Safari and Chrome.</p>
            </div>
          </div>
        </section>

        <section>
          <div css={notetakingStyles}>
            <div css={purpleBlock}>
              <div css={purpleLeftBlock}>
                <p>Networked notetaking</p>
                <h3> Give your brain superpowers</h3>
                <p>
                  Associate notes using backlinks, mirroring the way your mind
                  works. Trace associations to give you instant recall.
                </p>
                <div css={purpleLeftList}>
                  <div css={purpleOptionsStyles}>
                    <div>
                      <img src={image9} alt="" />
                    </div>
                    <div>
                      <h5>Your thoughts connected</h5>
                      <p>
                        Use backlinking technology to link and recall notes.
                      </p>
                    </div>
                  </div>
                  <div css={purpleOptionsStyles}>
                    <div>
                      <img src={image10} alt="" />
                    </div>
                    <div>
                      <h5>With instant access</h5>
                      <p>
                        Retrieve and search your notes instantly. Online or
                        offline.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div css={productGridStyles}>
                  <img src={product} alt="" width="470px" height="293px" />
                </div>
                <div css={productDotsStyles}>
                  <img src={productDots} alt="" width="576px" height="402px" />
                </div>
                <div css={userBlock}>
                  <div css={avatarStyles}>
                    <div>
                      <img src={productAvatar} alt="" width="32" height="32" />
                    </div>
                    <div>
                      <h6>Alex McCaw</h6>
                      <p>Chairman</p>
                    </div>
                  </div>

                  <div css={avatarStyles}>
                    <div>
                      <img src={productCompany} alt="" width="32" height="32" />
                    </div>
                    <div>
                      <h6>Clearbit</h6>
                      <p>Know your customers. Win your market.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div css={feedbacksMain}>
            <div css={feedbacksBlock}>
              <div css={feedbacksRows}>
                <div css={feedback}>
                  <div css={feedbackImage}>
                    <img src={f1} alt="" />
                  </div>
                  <div css={feedbackText}>
                    <h5>Flour storm</h5>
                    <p>
                      @maccaw holy shit reflect app design is so good my writing
                      and introspective ability went up 10x since i got it. was
                      using bear/notion before but the simplicity of reflect is
                      beautiful.
                    </p>
                  </div>
                </div>
                <div css={feedback}>
                  <div css={feedbackImage}>
                    <img src={f2} alt="" />
                  </div>
                  <div css={feedbackText}>
                    <h5>demetria r giles</h5>
                    <p>
                      Playing around with @reflectnotes. I’m back logging key
                      thoughts, details and soundbites from episodes, books,
                      meetings, articles, etc from the past week. So far, it’s a
                      knowledge worker’s dream come true. 🧠👍🏽
                    </p>
                  </div>
                </div>
                <div css={feedback}>
                  <div css={feedbackImage}>
                    <img src={f3} alt="" />
                  </div>
                  <div css={feedbackText}>
                    <h5>Jonathan Simcoe</h5>
                    <p>
                      All righty. I have to give a massive shout-out to @maccaw
                      for pioneering @reflectnotes. It has already matured to a
                      point where it is a daily driver for me. The speed, focus,
                      and attention to detail (especially perfect bits of
                      structured data) is superb.
                    </p>
                  </div>
                </div>
              </div>
              <div css={feedbacksRows}>
                <div css={feedback}>
                  <div css={feedbackImage}>
                    <img src={f4} alt="" />
                  </div>
                  <div css={feedbackText}>
                    <h5>Sam Jenkins</h5>
                    <p>
                      @reflectnotes is probably the best new product I've used
                      this year. Clearly made by a team that understand product.
                      The little nuances, the simplicity and the automation of
                      common daily workflows is life-changing. Well played
                      @maccaw this is a sensational product 🙌
                    </p>
                  </div>
                </div>
                <div css={feedback}>
                  <div css={feedbackImage}>
                    <img src={f5} alt="" />
                  </div>
                  <div css={feedbackText}>
                    <h5>Jeremy McPeak</h5>
                    <p>
                      I just received an invite to @reflectnotes, and holy crap!
                      It is well thought out, and I can see this being my
                      note-taking platform going forward. Well done! I'm looking
                      forward to seeing how the app progresses.
                    </p>
                  </div>
                </div>
                <div css={feedback}>
                  <div css={feedbackImage}>
                    <img src={f6} alt="" />
                  </div>
                  <div css={feedbackText}>
                    <h5>Ryan Delk</h5>
                    <p>Don’t take it from me: @reflectnotes is magic.</p>
                  </div>
                </div>
              </div>
              <div css={feedbacksRows}>
                <div css={feedback}>
                  <div css={feedbackImage}>
                    <img src={f7} alt="" />
                  </div>
                  <div css={feedbackText}>
                    <h5>Chris</h5>
                    <p>
                      Absolutely loving @reflectnotes. The visualisation of the
                      neural network is superb and seeing it develop makes me
                      want to take daily notes. The back-linking makes
                      associations effortless. Hats off to @maccaw and his team,
                      it’s exactly what I’ve been looking for🙏
                    </p>
                  </div>
                </div>
                <div css={feedback}>
                  <div css={feedbackImage}>
                    <img src={f8} alt="" />
                  </div>
                  <div css={feedbackText}>
                    <h5>Sean Rose</h5>
                    <p>
                      Really, really liking @reflectnotes so far. It's just the
                      right amount of simple/fast for a personal note taking app
                      and does most of the hard work of organizing in the
                      background.
                    </p>
                  </div>
                </div>
                <div css={feedback}>
                  <div css={feedbackImage}>
                    <img src={f9} alt="" />
                  </div>
                  <div css={feedbackText}>
                    <h5>Fabrizio Rinaldi</h5>
                    <p>
                      I’m keeping @reflectnotes open *all* the time, and I’m
                      using both for simple journaling, and long form writing.
                      It’s rare to see a single app work so well for both.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div>
        <br />
        <br />
        <br />
        <br />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div css={footer}>footer</div>
    </div>
  );
}

import img from '../images/bgyellow.png';

function Footer() {
  return (
    <div className="Footer">
      <h3>Forums:</h3>
      <div className="link">
        <ul>
          <li>
            <a href="https://untappd.com/" target="blank">
              Untappd
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCwzxu1j19ICnfW5zrBvUw-w"
              target="blank"
            >
              Une bière et Jivay
            </a>
          </li>
          <li>
            <a
              href="https://www.happybeertime.com/blog/2017/11/02/guide-complet-faire-1ere-biere-a-maison/"
              target="blank"
            >
              Comment Brasser sa bière
            </a>
          </li>
        </ul>
      </div>
      <ul>
        <img src={img} alt="title" className="imageFooter" />
        <li>Our Networks</li>
        <li>Untappd:</li>
      </ul>
    </div>
  );
}
export default Footer;

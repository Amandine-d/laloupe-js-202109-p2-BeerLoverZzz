import img from '../images/bgyellow.png';

function Footer() {
  return (
    <div className="Footer">
      <ul>
        <img src={img} alt="title" className="imageFooter" />
        <li>Our Networks</li>
        <li>Untappd:</li>
      </ul>
    </div>
  );
}
export default Footer;

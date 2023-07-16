import '../styles/footerbrowse.css'
import '../styles/fonts.css'
import { TbBrandInstagram, TbBrandFacebook, TbBrandTwitter, TbBrandYoutube} from "react-icons/tb";

const FooterBrowse = () => {
  return (
    <div className='browse-footer-wrapper'>
      <div className="social-links">
        <a href="#/"><TbBrandFacebook /></a>
        <a href="#/"><TbBrandInstagram /></a>
        <a href="#/"><TbBrandTwitter /></a>
        <a href="#/"><TbBrandYoutube /></a>
      </div>
      <div className="footer-links">
        <div className="footer-item"><a href="#/">Audio Description</a></div>
        <div className="footer-item"><a href="#/">Help Center</a></div>
        <div className="footer-item"><a href="#/">Gift Cards</a></div>
        <div className="footer-item"><a href="#/">Media Center</a></div>
        <div className="footer-item"><a href="#/">Investor Relations</a></div>
        <div className="footer-item"><a href="#/">Jobs</a></div>
        <div className="footer-item"><a href="#/">Terms of Use</a></div>
        <div className="footer-item"><a href="#/">Privacy</a></div>
        <div className="footer-item"><a href="#/">Legal Notices</a></div>
        <div className="footer-item"><a href="#/">Cookie Preferences</a></div>
        <div className="footer-item"><a href="#/">Corporate Information</a></div>
        <div className="footer-item"><a href="#/">Contact Us</a></div>
      </div>
      <div className="service">
        <a href="#/">Service Code</a>
      </div>
      <div className="copyright">
        <span>© 1997-2023 Netflix, Inc.</span>
      </div>
    </div>
  )
}

export default FooterBrowse
import { Link } from "react-router-dom"
import "./Logo.css"

function Logo({link, url, alt}: {link: string, url: string, alt: string}) {
  return (
    <div data-testid="test-logo" className='logo'>
        <Link to={link}>
            <img className="lazyload logo-img" src={url} alt={alt}/>
        </Link>
    </div>
  )
}

export default Logo
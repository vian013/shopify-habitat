import "./Logo.css"

function Logo({link, url, alt}: {link: string, url: string, alt: string}) {
  return (
    <div data-testid="test-logo" className='logo'>
        <a href={link}>
            <img src={url} alt={alt} className="logo-img"/>
        </a>
    </div>
  )
}

export default Logo
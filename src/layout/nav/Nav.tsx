import Logo from '../logo/Logo'
import Menu from '../menu/Menu'
import './Nav.css'

const tabList: {link: string, title: string}[] = [
    {
        link: "",
        title: "Home"
    },
    {
        link: "",
        title: "Shop"
    },
    {
        link: "",
        title: "Blog"
    },
    {
        link: "",
        title: "About"
    },
    {
        link: "",
        title: "Contact"
    },
    {
        link: "",
        title: "FAQ"
    }
]

function Nav() {
  return (
    <div id='nav' data-testid="test-nav">
        <Logo link='/' url='https://cdn.shopify.com/s/files/1/0605/2616/6208/files/logo2x_cd201b14-28a7-4705-a566-06dcc9fd008a.png?v=1652124057' alt='logo'/>
        <Menu tabList={tabList}/>
        {/* <NavIcons /> */}
    </div>
  )
}

export default Nav
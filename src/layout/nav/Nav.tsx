import Logo from '../logo/Logo'
import Menu from '../menu/Menu'
import NavIcons from '../nav-icons/NavIcons'
import './Nav.css'
import tabList from '../../messages/tab-list'

function Nav({toggleSearch, openCart}: {toggleSearch: ()=>void, openCart: ()=>void}) {
  return (
    <div id='nav' data-testid="test-nav">
        <Logo link='/' url='https://cdn.shopify.com/s/files/1/0605/2616/6208/files/logo2x_cd201b14-28a7-4705-a566-06dcc9fd008a.png?v=1652124057' alt='logo'/>
        <Menu tabList={tabList}/>
        <NavIcons toggleSearch={toggleSearch} openCart={openCart}/>
    </div>
  )
}

export default Nav
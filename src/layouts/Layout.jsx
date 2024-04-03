import Header from './Header'
import Aside from './Aside'
import Footer from './Footer'
function Layout({children}) {
    return (
        <>
            <Header /> 
            {children}
            <Footer/>
        </>
    )
}

export default Layout
import './Footer.css'
import FooterBottom from './footerBottom/FooterBottom'
import FooterNavCat from "./footerNavCat/FooterNavCat"
import Subscribe from "./subscribe/Subscribe"

const footerCategories = [
    { id: 1, path: 'men/', title: 'Men' },
    { id: 2, path: 'women/', title: 'Women' },
    { id: 3, path: 'accessories/', title: 'Accessories' },
    { id: 4, path: 'beauty/', title: 'Beauty' },
]
const footerInfo = [
    { id: 5, path: 'about/', title: 'About US' },
    { id: 6, path: 'contact/', title: 'Contact Us' },
    { id: 7, path: 'blog/', title: 'Blog' },
    { id: 8, path: 'faq/', title: 'FAQs' },
]
const footerUsefulLinks = [
    { id: 1, path: 'terms/', title: 'Terms & Conditions' },
    { id: 2, path: 'return/', title: 'Returns & Exchanges' },
    { id: 3, path: 'shipping/', title: 'Shipping & Delivery' },
    { id: 4, path: 'privacy/', title: 'Privacy Policy' },
]
const footerContact = [
    { id: 5, path: 'location/', title: 'Belarus, Gomel, Lange 17', icon: 'location' },
    { id: 6, path: 'phone/', title: '+375 29 100 20 30', icon: 'phone' },
    { id: 7, path: 'clock/', title: 'All week 24/7', icon: 'clock' },
    { id: 8, path: 'mail/', title: 'info@clevertec.ru', icon: 'mail', underline: 'underline' },
]

const footerLists = [
    { name: 'Categories', list: footerCategories },
    { name: 'Information', list: footerInfo },
    { name: 'Useful Links', list: footerUsefulLinks },
    { name: 'Contact Us', list: footerContact }]

const Footer = () => {
    return (
        <footer className="footer" data-test-id="footer">
            <Subscribe />  <div className="container">
                <div className="footer__nav">
                    <FooterNavCat footerLists={footerLists} />
                </div>  </div>
            <FooterBottom />

        </footer>
    )
}

export default Footer
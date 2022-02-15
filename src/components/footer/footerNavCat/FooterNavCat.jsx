import FooterLink from "../footerLink/FooterLink"
import './FooterNavCat.css'

const FooterNavCat = ({ footerLists }) => {

    return (
        footerLists.map(({ name, list }) => (
            <div className="footer__nav_cat" key={name}>
                <h3 className="footer__nav_title">{name}</h3>
                <FooterLink list={list} />
            </div>
        ))
    )

}

export default FooterNavCat
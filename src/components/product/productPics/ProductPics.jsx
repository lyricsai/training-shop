
import './ProductPics.css'


const ProductPics = ({ previewBig, prevs }) => {

    return (
        <div className="product__pics">
            <div className="product__pics_previews">
                <div className="product__pics_controls">
                    <span className='button-up'> <i className='icon-arrow'></i></span>
                    <span className='button-down'> <i className='icon-arrow'></i></span>
                </div>
                <ul className="product__pics_little">
                    {prevs.map(item => <li key={item.id}><img src={item.src} alt="prev" /></li>)}
                </ul>
            </div>
            <div className="product__pics_big">
                <img src={previewBig.src} alt="pic" />
                <span className="button-left" style={{ left: '3.2%' }}><i className='icon-arrow'></i></span>
                <span className="button-right" style={{ right: '3.2%' }}><i className='icon-arrow'></i></span>
            </div>
        </div>
    )
}

export default ProductPics
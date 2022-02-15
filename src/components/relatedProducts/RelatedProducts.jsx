import CardItem from '../cardItem/CardItem'
import './RelatedProducts.css'

const RelatedProducts = ({ related, productType }) => {
    return (
        <section className='products__related'>
            <div className="container">
                <div className='related__top'>
                    <h3 className="product__related_title">Related Products</h3>
                    <div className='related__top_btn'>
                        <span className="button-left" style={{ left: '3.2%' }}><i className='icon-arrow'></i></span>
                        <span className="button-right" style={{ right: '3.2%' }}><i className='icon-arrow'></i></span>
                    </div></div>
                <ul className="product__related">

                    {related.map(item => (<li
                        key={`${item.id}-${productType}`}
                    >
                        <CardItem
                            key={`${item.id}-${productType}`}
                            item={item}
                            productType={productType}
                        />
                    </li>))}
                </ul>
            </div>
        </section>
    )
}

export default RelatedProducts
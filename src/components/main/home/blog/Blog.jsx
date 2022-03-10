import Article from './article/Article'
import './Blog.css'

import news1 from '../../../../assets/static/news1.jpg'
import news2 from '../../../../assets/static/news2.jpg'
import news3 from '../../../../assets/static/news3.jpg'

const articles = [
    { id: 1, title: 'The Easiest Way to Break', text: 'But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor', src: news1 },
    { id: 2, title: 'Wedding Season', text: 'But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor', src: news2 },
    { id: 3, title: 'Recent Favorites On Repeat', text: 'But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor', src: news3 }
]


const Blog = () => {
    return (
        <section className='blog'>
            <div className='blog__heading'>
                <h2 className='blog__latest'>Latest from blog</h2>
                <span>see all</span>
            </div>
            <div className='blog__articles'>
                <Article articles={articles} />
            </div>
        </section>
    )
}

export default Blog
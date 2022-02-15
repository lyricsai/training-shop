import './Article.css'

const Article = ({ articles }) => {
    return (
        articles.map((article) => (
            <section className='blog__article' key={article.id}>
                <img src={article.src} alt="pic" />
                <div className='blog__article_container'>
                    <h5 className='blog__article_title'>{article.title}</h5>
                    <p className='blog__article_text'>{article.text}</p>
                </div>
            </section>))
    )
}
export default Article
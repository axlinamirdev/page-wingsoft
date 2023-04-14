import CardBlog from '@/components/home/Blog/CardBlog';

const SectionBlog = ({ listPostBlogs }) => {

    return (
        <section className="blog__container__bottom">
            <section className="home-grid">
                <h3 className="blog__container__bottom__title">
                    Blog                
                </h3>
                <hr className="home__line" />
                <section className="blog_carrousel">
                    {
                        listPostBlogs.length > 0 &&
                        listPostBlogs.map((post, key)  =>
                            <CardBlog key={key} {...post} /> 
                        )
                    } 
                </section>
            </section>
        </section>
    );
};

export default SectionBlog;
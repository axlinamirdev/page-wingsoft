import Header from '@/components/Header.js';
import ContactForm from '@/components/ContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons'
import { getArticle } from '@/apis/blog.api';

export default function BlogArticle({ data }) {
    return (
        <>
            <Header />
            <div className="blog_container">
                <div className="blog_container_grid">
                    <div className='blog_container_grid_header'>
                        <img src={data.file.fullPath ?? 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'} alt="img-article" />
                        <div className='blog_container_grid_header_date'>
                            <p>Lunes 20 de marzo, 2023</p>
                            <div className='blog_container_grid_header_date_share'>
                                <FontAwesomeIcon icon={faShareNodes} />
                            </div>
                        </div>
                    </div>
                    <div className='blog_container_grid_text'>
                        <h2>{data.title}</h2>
                        <p>{data.body}</p>
                    </div>
                    <div className='blog_container_grid_extras'>
                        <div className='blog_container_grid_extras_card'>
                            <div className='blog_container_grid_extras_card_imgbx'>
                                <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80" alt="" />
                            </div>
                            <div className='blog_container_grid_extras_card_description'>
                                <h4>Lorem ipsum dolor sit amet.</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, possimus? </p>
                            </div>
                            <div className='blog_container_grid_extras_card_read_more'>
                                <p>+Leer más</p>
                            </div>
                        </div>
                        <div className='blog_container_grid_extras_card'>
                            <div className='blog_container_grid_extras_card_imgbx'>
                                <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80" alt="" />
                            </div>
                            <div className='blog_container_grid_extras_card_description'>
                                <h4>Lorem ipsum dolor sit amet.</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, possimus? </p>
                            </div>
                            <div className='blog_container_grid_extras_card_read_more'>
                                <p>+Leer más</p>
                            </div>
                        </div>
                        <div className='blog_container_grid_extras_card'>
                            <div className='blog_container_grid_extras_card_imgbx'>
                                <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80" alt="" />
                            </div>
                            <div className='blog_container_grid_extras_card_description'>
                                <h4>Lorem ipsum dolor sit amet.</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, possimus? </p>
                            </div>
                            <div className='blog_container_grid_extras_card_read_more'>
                                <p>+Leer más</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ContactForm />
        </>
    )
}

export async function getServerSideProps({ params }) {
    const data = await getArticle(params.slug);
    return { props: { data } }
}

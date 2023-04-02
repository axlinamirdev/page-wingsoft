import Header from "@/components/Header";
import CardBlog from "@/components/CardBlog";
import ContactForm from "@/components/ContactForm";
import CardTemplateCarousel from "@/components/custom/Carousel/CardTemplateCarousel";
import { SwiperSlide } from 'swiper/react';
import Footer from "@/components/Footer";


export default function Ariticles() {
  return (
    <>
      <Header />
      <div className="blog_home_container">
        <div className="blog_home_container_carousel">
          <div className="blog_home_container_carousel_project">
            <img src="/images/wingsoft-w.svg" alt="wingsoft-logo" />
            <h3 className="home_type_project_title">Tipos de Proyectos que realizamos</h3>
            <p className="home_type_project_description">Egestas eget vestibulum non fermentum vitae eu condimentum neque. Turpis id in convallis et nulla tempor. Nec semper volutpat tortor eget amet nunc viverra ipsum. Non tortor lacus orci quam in leo. Mattis facilisi ipsum viverra volutpat sem scelerisque tellus id.</p>
          </div>
          <div className="blog_home_container_carousel_slider">
            <CardTemplateCarousel>
              <SwiperSlide>
                <SliderItem />
              </SwiperSlide>
              <SwiperSlide>
                <SliderItem />
              </SwiperSlide>
              <SwiperSlide>
                <SliderItem />
              </SwiperSlide>
            </CardTemplateCarousel>
          </div>
        </div>
        <div className="blog_home_container_popular_articles">
          <h2 className="blog_home_container_popular_articles_title_section">Artículos más populares</h2>
          <div className="blog_home_container_popular_articles_cards">
            <div className="blog_home_container_popular_articles_cards_first">
              <img src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
              <div className="blog_home_container_popular_articles_cards_first_text">
                <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, ab.</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo commodi qui, fugiat earum eligendi numquam assumenda in nisi cupiditate molestiae? Explicabo beatae veniam officiis ratione quisquam modi voluptates ipsa officia suscipit, in tempore neque facere ad consectetur iusto eius aut nobis ex odit aperiam non molestias laudantium sed. Unde cum, debitis nemo sit mollitia consequuntur tempora, tempore asperiores dolores assumenda, nam veniam ipsum quasi repellendus exercitationem dolorem! Culpa excepturi saepe quis unde a asperiores itaque voluptatem incidunt quia perspiciatis quo repellendus earum, suscipit, consectetur ipsa doloremque eos? Nam animi praesentium sequi eum veritatis, culpa unde obcaecati deserunt quam non ipsa saepe accusamus quis in porro corporis, fugit impedit dicta sunt suscipit eveniet. Hic ullam id, nam itaque eum aliquam, delectus vitae, nostrum dignissimos quod cum? Obcaecati ullam, saepe molestias accusamus voluptate expedita consectetur repellat laudantium dignissimos numquam quia ducimus consequuntur rerum et nesciunt laboriosam perferendis! Rem, quos cum! Impedit at porro eaque enim, optio suscipit inventore dolorem cumque. Ea voluptas ex aliquam, consequatur quo possimus et fuga blanditiis corrupti sequi ipsa iste, sed placeat? Ratione quas numquam sit eaque, itaque voluptatibus debitis vitae suscipit, rem, illo hic ullam quod tempora possimus modi sunt odio iure aliquam placeat maiores labore tempore?</p>
              </div>
              <div className="blog_home_container_popular_articles_cards_first_read_more">+Leer más</div>
            </div>
            <CardBlog />
            <CardBlog />
            <CardBlog />
          </div>
        </div>
        <div className="blog_home_container_category">
          <h2 className="blog_home_container_category_title_section">¿Qué temas te interesan?</h2>
          <div className="blog_home_container_category_items">
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
          </div>
        </div>
        <div className="blog_home_container_news">
          <h2 className="blog_home_container_news_title_section">Lo mas reciente</h2>
          <div className="blog_home_container_news_items">
            <NewCards />
            <NewCards />
            <NewCards />
            <NewCards />
            <NewCards />
            <NewCards />
          </div>
        </div>
      </div>
      <ContactForm />
      <Footer/>
    </>
  )
}

function Category({ img, name }) {
  return (
    <div className="category_item">
      <img src="https://images.unsplash.com/photo-1563207153-f403bf289096?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="" />
      <span>I.A</span>
    </div>
  )
}

function NewCards() {
  return (
    <div className="news_card">
      <img src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
      <div className="news_card_text">
        <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, ab.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo commodi qui, fugiat earum eligendi numquam assumenda in nisi cupiditate molestiae? Explicabo beatae veniam officiis ratione quisquam modi voluptates ipsa officia suscipit, in tempore neque facere ad consectetur iusto eius aut nobis ex odit aperiam non molestias laudantium sed. Unde cum, debitis nemo sit mollitia consequuntur tempora, tempore asperiores dolores assumenda, nam veniam ipsum quasi repellendus exercitationem dolorem! Culpa excepturi saepe quis unde a asperiores itaque voluptatem incidunt quia perspiciatis quo repellendus earum, suscipit, consectetur ipsa doloremque eos? Nam animi praesentium sequi eum veritatis, culpa unde obcaecati deserunt quam non ipsa saepe accusamus quis in porro corporis, fugit impedit dicta sunt suscipit eveniet. Hic ullam id, nam itaque eum aliquam, delectus vitae, nostrum dignissimos quod cum? Obcaecati ullam, saepe molestias accusamus voluptate expedita consectetur repellat laudantium dignissimos numquam quia ducimus consequuntur rerum et nesciunt laboriosam perferendis! Rem, quos cum! Impedit at porro eaque enim, optio suscipit inventore dolorem cumque. Ea voluptas ex aliquam, consequatur quo possimus et fuga blanditiis corrupti sequi ipsa iste, sed placeat? Ratione quas numquam sit eaque, itaque voluptatibus debitis vitae suscipit, rem, illo hic ullam quod tempora possimus modi sunt odio iure aliquam placeat maiores labore tempore?</p>
      </div>
      <div className="news_card_read_more">+Leer más</div>
    </div>
  )
}

function SliderItem() {
  return (
    <div className="blog_home_container_carousel_slider_item">
      <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" alt="" />
      <div className="blog_home_container_carousel_slider_item_info">
        <span className="date">23 de Enero, 2023</span>
        <h3>Lorem aenean cras amet mi donec lorem interdum</h3>
        <p>Scelerisque urna sit lectus non mi neque vestibulum blandit tellus. Convallis orci et pretium sed scelerisque ut. Cras quisque ut ac id in viverra.</p>
        <div className="blog_home_container_carousel_slider_item_info_author">
          <img src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
          <p>Juan Pérez</p>
        </div>
        <button>
          <span>Leer más</span>
        </button>
      </div>
    </div>
  )
}
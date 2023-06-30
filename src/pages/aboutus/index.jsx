import React from 'react' 
import './style.scss' 
import { Link } from 'react-router-dom'
 
const Aboutuspage = () => { 
  return (
    <div className = {'Aboutus'}>
        <div className = {'Aboutus__group1'}>
          <div className = {'Aboutus__group1__img1'}> <img className = "aboutus_m" src = {"/about/aboutus.svg"}/></div>
          <div className = {'Aboutus__group1__text'}>ABOUT US</div>
        </div>

        <div className = {'Aboutus__group2'}>
          <div class = {'Aboutus__group2__right'}>
            <div class = {'Aboutus__group2__right__head'}>
              <div class = {'Aboutus__group2__right__head__text1'}> Наш бариста </div> 
              <div class = {'Aboutus__group2__right__head__text2'}> Meet Our Professional Baker </div>
            </div>
            <div class = {'Aboutus__group2__right__alltext'}>
              <div class = {'Aboutus__group2__right__alltext__text1'}> Кира Лапшина</div>
              <div class = {'Aboutus__group2__right__alltext__text2'}> Кира – профессионал своего дела! Она приготовит для Вас лучшую выпечку и сварит самый вкусный кофе в вашей жизни. Кира вкладывает всю душу в приготовление десертов!</div>

            </div>
            </div>
            <div class = {'Aboutus__group2__left'}>
              <div class = {'Aboutus__group2__left__img'}><img className = "kira_m" src = {"/about/kira.svg"}/></div>
            </div>
          
        </div>
        <div className = {'Aboutus__group3'}>
          <div className = {'Aboutus__group3__left'}><img className = "kruasan_m" src = {"/about/kruasan.svg"}/></div>
          <div className = {'Aboutus__group3__right'}>
          <div className = {'Aboutus__group3__right__head'}>
            <div className = {'Aboutus__group3__right__head__text1'}>Get in Touch</div>
            <div className = {'Aboutus__group3__right__head__text2'}>Contact With Us</div>
          </div>

          <div className = {'Aboutus__group3__right__elem'}>
            <div className = {'Aboutus__group3__right__elem__img'}><img className = "plas_m" src = {"/about/plas.svg"}/></div>
            
            <div className = {'Aboutus__group3__right__elem__text'}>
              <div className = {'Aboutus__group3__right__elem__text__chi'}>01</div>
              <div className = {'Aboutus__group3__right__elem__text__textpro1'}>Address</div>
              <div className = {'Aboutus__group3__right__elem__text__textpro11'}>ул. Попова 127, офис 127</div>
            </div>
            <div className = {'Aboutus__group3__right__elem__img'}><img className = "num_m" src = {"/about/num.svg"}/></div>
            
            <div className = {'Aboutus__group3__right__elem__text'}>
              <div className = {'Aboutus__group3__right__elem__text__chi'}>02</div>
              <div className = {'Aboutus__group3__right__elem__text__textpro1'}>Phone</div>
              <div className = {'Aboutus__group3__right__elem__text__textpro11'}>+7 (906) 962-25-58</div>
            </div>
            </div>
          </div>
          </div>
          <div className="footer">
    <div class = {'footer__link'}>
    <div class = {'footer__link__Frigost_t'}> Frogist </div> 
    <div class = {'footer__link__menufooter'}> 
    <div class = {'footer__link__menufooter__text'}> <Link to={'/menu'}>Menu</Link> </div> </div>
    <div class = {'footer__link__menufooter'}> 
    <div class = {'footer__link__menufooter__text'}> contact </div>  
    <div class = {'footer__link__menufooter__prim'}>eli.miroevskaya@gmail.com </div>
    </div>
    </div>
    <div className= {'footer__backfooter'} ><img className = "backfooter_m" src = {"/home/backfooter.svg"}/> </div>
    
    </div>
        </div>
    
)
}
export default Aboutuspage
import React from 'react' 
import './style.scss' 
import { Link } from 'react-router-dom'
 
const Homepage = () => { 
  return (
    <div className = {'Home'}>

      <div class = {'Home__group1'}>
      <div class = {'Home__group1__alltext'}>
        <div class = {'Home__group1__alltext__text'}>
        <div class = {'Home__group1__alltext__text__text2'}> since 2023 </div> 
        <div class = {'Home__group1__alltext__text__text1'}> Fresh Your Morning </div> 
        <div class = {'Home__group1__alltext__text__text3'}> Мы рады видеть, как вы рады нашему кофе. </div> 
        </div></div>
        <div className= {'Home__group1__pic1man'} ><img className = "pic1man_m" src = {"/home/pic1man.svg"}/> </div>
      </div>

      <div class = {'Home__group2'}>
      <div class = {'Home__group2__head1'}>
        <div class = {'Home__group2__head1__text4'}> немного о нас </div> 
        <div class = {'Home__group2__head1__text5'}> Let’s talk about coffee </div>
      </div>
      <div class = {'Home__group2__pictext'}> 
        <div class = {'Home__group2__pictext__alltext'}>  
          <div class = {'Home__group2__pictext__alltext__text6'}> Приготовим для вас идеальный кофе </div> 
          <div class = {'Home__group2__pictext__alltext__text7'}> Если вы ищите что-нибудь новое, чтобы согреть свою кружку, то вы попали по адресу! </div> 
          <div class = {'Home__group2__pictext__alltext__text8'}> Кофе для любителей классики </div> 
          <div class = {'Home__group2__pictext__alltext__text8'}> Собранные с любовью смеси для домашнего приготовления </div> 
          <div class = {'Home__group2__pictext__alltext__text8'}> Наши самые редкие предложения для искателей приключений </div>
        </div>
        <div className= {'Home__group2__pictext__clac'} ><img className = "clac_m" src = {"/home/clac.svg"}/> </div>
        </div>
      </div>

      <div class = {'Home__group3'}></div>
        <div class = {'Home__group3__head2'}>
          <div class = {'Home__group3__head2__text31'}> Путешествие в твоей чашке </div>
          <div class = {'Home__group3__head2__text32'}> From all over the world </div>
        </div>
        <div class = {'Home__group3__groupof3'}>
          <div class = {'Home__group3__groupof3__costa'}>
            <div className= {'Home__group3__groupof3__costa__cofeorange'} ><img className = "cofeorange_m" src = {"/home/cofeorange.svg"}/> </div>
            <div class = {'Home__group3__groupof3__costa__textcosta'}> Costa Rica Naranjo </div>
            <div class = {'Home__group3__groupof3__costa__textcosta1'}> Для ценителей. Подойдет для особенно искушенных.  </div>
          </div>
          <div class = {'Home__group3__groupof3__costa'}>
            <div className= {'Home__group3__groupof3__costa__cofeorange'} ><img className = "cakeorange_m" src = {"/home/cakeorange.svg"}/> </div>
            <div class = {'Home__group3__groupof3__costa__textcosta'}> Ecuador Loja </div>
            <div class = {'Home__group3__groupof3__costa__textcosta1'}> Собранный по сезону, аккуратно обжаренный в жаровнях и тщательно отобранный  </div>
          </div>
          <div class = {'Home__group3__groupof3__costagreen'}>
            <div className= {'Home__group3__groupof3__costagreen__cofeorange'} ><img className = "cofewhite_m" src = {"/home/cofewhite.svg"}/> </div>
            <div class = {'Home__group3__groupof3__costagreen__textcosta'}> Papua New Guinea Moanti </div>
            <div class = {'Home__group3__groupof3__costagreen__textcosta1'}> Все еще не определились? Самый редкий кофе, который мы можем предложить!  </div>
          </div>
        </div>


      <div className= {'Home__story'} ><img className = "story_m" src = {"/home/story.svg"}/> </div>

      <div class = {'Home__group4'}>
        <div class = {'Home__group4__head'}>
          <div class = {'Home__group4__head__text41'}> Testimonials </div>
          <div class = {'Home__group4__head__text42'}> Reviews of our visitors </div>
        </div>
        <div class = {'Home__group4__report'}>
        <div class = {'Home__group4__report__onereport'}>
          <div class = {'Home__group4__report__onereport__pic'}>
            <div className= {'Home__group4__report__onereport__pic__star1'} ><img className = "star_m" src = {"/home/star.svg"}/> </div>
            <div className= {'Home__group4__report__onereport__pic__peopl13'} ><img className = "peopl1_m" src = {"/home/peopl1.svg"}/> </div>
          </div>
          <div class = {'Home__group4__report__onereport__text'}>
            <div class = {'Home__group4__report__onereport__text__peopl1'}> Очень-очень вкусно</div>
            <div class = {'Home__group4__report__onereport__text__peopl12'}> Кофе, который варят в этой кофейне, отличается особым вкусом! Невероятно вкусно! Советую всем!</div>
          </div>
        </div>

        <div class = {'Home__group4__report__onereportgreen'}>
          <div class = {'Home__group4__report__onereportgreen__pic'}>
            <div className= {'Home__group4__report__onereportgreen__pic__star1'} ><img className = "star_m" src = {"/home/star.svg"}/> </div>
            <div className= {'Home__group4__report__onereportgreen__pic__peopl13'} ><img className = "peopl2_m" src = {"/home/peopl2.svg"}/> </div>
          </div>
          <div class = {'Home__group4__report__onereportgreen__text'}>
            <div class = {'Home__group4__report__onereportgreen__text__peopl1'}> Лучшая кофейня в городе</div>
            <div class = {'Home__group4__report__onereportgreen__text__peopl12'}> Отличный интерьер, вежливые сотрудники, быстрый сервис, а самое главное вкусный кофе!</div>
          </div>
        </div>


        <div class = {'Home__group4__report__onereport'}>
          <div class = {'Home__group4__report__onereport__pic'}>
            <div className= {'Home__group4__report__onereport__pic__star1'} ><img className = "star_m" src = {"/home/star.svg"}/> </div>
            <div className= {'Home__group4__report__onereport__pic__peopl13'} ><img className = "peopl3_m" src = {"/home/peopl3.svg"}/> </div>
          </div>
          <div class = {'Home__group4__report__onereport__text'}>
            <div class = {'Home__group4__report__onereport__text__peopl1'}> Отличная организация</div>
            <div class = {'Home__group4__report__onereport__text__peopl12'}> Невероятно милые и доброжелательные сотрудники, которые отлично справляются со своей работой!</div>
          </div>
        </div>
      </div>
      </div>


      <div class = {'Home__group5'}>
        <div class = {'Home__group5__head'}>
          <div class = {'Home__group5__head__text1'}> Our Process </div>
          <div class = {'Home__group5__head__text2'}> Our working process </div>
        </div>
          <div class = {'Home__group5__allbloc'}>
            <div class = {'Home__group5__allbloc__bloc'}>
              <div class = {'Home__group5__allbloc__bloc__chi'}> 01 </div>
              <div class = {'Home__group5__allbloc__bloc__textpro1'}> Contact </div>
              <div class = {'Home__group5__allbloc__bloc__textpro11'}> Доброжелательное общение с клиентами </div>
            </div>
            <div class = {'Home__group5__allbloc__blocgreen'}>
              <div class = {'Home__group5__allbloc__blocgreen__spgreen'}>
                <div class = {'Home__group5__allbloc__blocgreen__spgreen__chi'}> 02 </div>
                <div className= {'Home__group5__allbloc__blocgreen__spgreen__baking'} ><img className = "baking_m" src = {"/home/baking.svg"}/> </div>
              </div>
              <div class = {'Home__group5__allbloc__blocgreen__textpro1'}> Baking </div>
              <div class = {'Home__group5__allbloc__blocgreen__textpro11'}> Приготовление Ваших напитков и десертов </div>
            </div>
            <div class = {'Home__group5__allbloc__bloc'}>
              <div class = {'Home__group5__allbloc__bloc__chi'}> 03 </div>
              <div class = {'Home__group5__allbloc__bloc__textpro1'}> Delivery </div>
              <div class = {'Home__group5__allbloc__bloc__textpro11'}> Доставка кофе и десертов туда, куда Вам удобно. </div>
            </div>
            <div class = {'Home__group5__allbloc__bloc'}>
              <div class = {'Home__group5__allbloc__bloc__chi'}> 04 </div>
              <div class = {'Home__group5__allbloc__bloc__textpro1'}> Tasty </div>
              <div class = {'Home__group5__allbloc__bloc__textpro11'}> Дальше дело за Вами! Пробуйте и наслаждайтесь! </div>
            </div>
        </div>
      </div>

    <div className={'footer'}>
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
export default Homepage
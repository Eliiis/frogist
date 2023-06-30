import React from 'react' 
import './style.scss' 
import { Link } from 'react-router-dom'
 
const Aboutcofepage = () => { 
  return (
    <div className = {'Aboutcofe'}>
        <div class = {'Aboutcofe__group1'}>
      <div class = {'Aboutcofe__group1__alltext'}>
        <div class = {'Aboutcofe__group1__alltext__text'}>
        <div class = {'Aboutcofe__group1__alltext__text__text2'}> Since 850 </div> 
        <div class = {'Aboutcofe__group1__alltext__text__text1'}> What About Coffee? </div> 
        <div class = {'Aboutcofe__group1__alltext__text__text3'}> Хм... А что же вы знаете о кофе? </div> 
        </div></div>
        <div className= {'Home__group1__pic1man'} ><img className = "cofe1_m" src = {"/cofe/cofe1.svg"}/> </div>
      </div>

      <div className = {'Aboutcofe__group2'}>
          <div class = {'Aboutcofe__group2__right'}>
            <div class = {'Aboutcofe__group2__right__head'}>
              <div class = {'Aboutcofe__group2__right__head__text1'}> немного о кофе </div> 
              <div class = {'Aboutcofe__group2__right__head__text2'}> Let’s talk about coffee </div>
            </div>
            <div class = {'Aboutcofe__group2__right__alltext'}>
              <div class = {'Aboutcofe__group2__right__alltext__text1'}> История</div>
              <div class = {'Aboutcofe__group2__right__alltext__text2'}> Согласно самой распространенной легенде, тонизирующие свойства кофе были открыты эфиопским пастухом, заметившим, что козы, наевшись днем плотных листьев и темно-красных плодов кофейного дерева, перестали спать ночью. Он рассказал об этом странном случае настоятелю монастыря, тот решил испробовать на себе действие необычных зерен и был поражен силой воздействия напитка!
</div>
              <div class = {'Aboutcofe__group2__right__alltext__text3'}> Кофе — это вкуснейший напиток, достойный восхищения, а различные методы его заваривания и получаемые ароматы могут удивить даже самого придирчивого ценителя. Стоит подарить себе удовольствие и насладитесь моментом, когда все вокруг пахнет любимым напитком.</div>

            </div>
            </div>
            <div class = {'Aboutcofe__group2__left'}>
              <div class = {'Aboutcofe__group2__left__img'}><img className = "cofe2_m" src = {"/cofe/cofe2.svg"}/></div>
            </div>
            </div>

            <div class = {'Aboutcofe__group3'}>
        <div class = {'Aboutcofe__group3__head2'}>
          <div class = {'Aboutcofe__group3__head2__text31'}> плюс в каждом глотке</div>
          <div class = {'Aboutcofe__group3__head2__text32'}> Benifit </div>
        </div>
        <div class = {'Aboutcofe__group3__groupof3'}>
          <div class = {'Aboutcofe__group3__groupof3__costa'}>
            <div className= {'Aboutcofe__group3__groupof3__costa__cofeorange'} ><img className = "cofeblack_m" src = {"/cofe/cofeblack.svg"}/> </div>
            <div class = {'Aboutcofe__group3__groupof3__costa__textcosta'}> Performance improvement </div>
            <div class = {'Aboutcofe__group3__groupof3__costa__textcosta1'}> Напиток расщепляет жиры и преобразует их в свободные жирные кислоты. Это дает организму дополнительные силы и повышает физическую и умственную работоспособность.  </div>
          </div>
          <div class = {'Aboutcofe__group3__groupof3__costagreen'}>
            <div className= {'Aboutcofe__group3__groupof3__costagreen__cofeorange'} ><img className = "zerno_m" src = {"/cofe/zerno.svg"}/> </div>
            <div class = {'Aboutcofe__group3__groupof3__costagreen__textcosta'}> Nutritional value </div>
            <div class = {'Aboutcofe__group3__groupof3__costagreen__textcosta1'}>В составе кофе есть большое количество органических кислот, активных питательных веществ. Наиболее полезным в кофе является кофеин и ряд эфирных масел.</div>
          </div>
          <div class = {'Aboutcofe__group3__groupof3__costa'}>
            <div className= {'Aboutcofe__group3__groupof3__costa__cofeorange'} ><img className = "spis_m" src = {"/cofe/spis.svg"}/> </div>
            <div class = {'Aboutcofe__group3__groupof3__costa__textcosta'}> Natural energy</div>
            <div class = {'Aboutcofe__group3__groupof3__costa__textcosta1'}> Кофеин помогает проснуться с утра и активизирует память, улучшает бдительность, внимание.</div>
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

export default Aboutcofepage
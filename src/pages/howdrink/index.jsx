import React from 'react' 
import './style.scss' 
import { Link } from 'react-router-dom'

 
const HowDrinkPage = () => { 
  return (
    <div className = {'Howdrink'}>
        <div class = {'Howdrink__group1'}>
        <div class = {'Howdrink__group1__text'}>How to drink coffee?</div>
        </div>

        <div class = {'Howdrink__group2'}>
        <div class = {'Howdrink__group2__text'}>Useful Tips</div>
        <div class = {'Howdrink__group2__clac'}><img className = "clac_m" src = {"/how/clac.svg"}/></div>
        <div class = {'Howdrink__group2__tochi'}><img className = "tochi_m" src = {"/how/tochi.svg"}/></div>
        </div>
        
        <div class = {'Howdrink__group3'}>
        <div class = {'Howdrink__group3__groupof3'}>

          <div class = {'Howdrink__group3__groupof3__costa'}>
            <div className= {'Howdrink__group3__groupof3__costa__cofeorange'} ><img className = "cup_m" src = {"/how/cup.svg"}/> </div>
            <div class = {'Howdrink__group3__groupof3__costa__textcosta'}> Не пейте кофе во время еды </div>
            <div class = {'Howdrink__group3__groupof3__costa__textcosta1'}> Кофе, как кофеин - и танинсодержащий напиток, связывает большое количество полезных веществ, мешая их усвоению из пищи. </div>
          </div>
          <div class = {'Howdrink__group3__groupof3__costagreen'}>
            <div class = {'Howdrink__group3__groupof3__costagreen__textcosta'}> Не больше 1–2 чашек в день </div>
            <div class = {'Howdrink__group3__groupof3__costagreen__textcosta1'}>Переизбыток кофеина провоцирует повышенную нервозность, тревожность и ухудшает сон.</div>
          </div>
          <div class = {'Howdrink__group3__groupof3__costa'}>
            <div className= {'Howdrink__group3__groupof3__costa__cofeorange'} ><img className = "cup2_m" src = {"/how/cup2.svg"}/> </div>
            <div class = {'Howdrink__group3__groupof3__costa__textcosta'}> Не пить натощак </div>
            <div class = {'Howdrink__group3__groupof3__costa__textcosta1'}>Хлорогеновая кислота, попадая в желудок, стимулирует выработку желудочного сока и соляной кислоты. Так как орган пуст, в нем образуется агрессивная среда, соляная кислота начинает раздражать стенки желудка и может привести к образованию язвы. </div>
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

export default HowDrinkPage
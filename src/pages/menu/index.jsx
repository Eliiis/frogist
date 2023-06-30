import React from 'react' 
import './style.scss' 
import { Link } from 'react-router-dom'

const Menu = () => { 
    return (
      <div className = {'Menu'}>
        <div className = {'Menu__group1'}>
        <div className = {'Menu__group1__text'}>Menu</div>
        <div className = {'Menu__group1__text12'}>
        <div className = {'Menu__group1__text12__text2'}>Классический кофе</div>
        <div className = {'Menu__group1__text12__text2'}>Авторский кофе</div>
        <div className = {'Menu__group1__text12__text2'}>Авторский чай</div>
        <div className = {'Menu__group1__text12__text2'}>Десерты </div>
        <div className = {'Menu__group1__text12__text2'}>Сендвич</div>
        </div>
        </div>
        <div className = {'Menu__group2'}>
        <div className = {'Menu__group2__top'}>
        <div className = {'Menu__group2__top__head1'}> 
        <div className = {'Menu__group2__top__head1__text4'}>Our Products</div>
        <div className = {'Menu__group2__top__head1__text5'}>CLASSIC COFFEE</div>
        </div>
        <div class = {'Menu__group2__top__tochi'}><img className = "tochi_m" src = {"/menu/tochi.svg"}/></div>
        </div>
        <div className = {'Menu__group2__botom'}>
        <div className = {'Menu__group2__botom__pictext'}>
        <div className = {'Menu__group2__botom__pictext__pic'}><img className = "cofe1_m" src = {"/menu/cofe1.svg"}/></div>
        <div className = {'Menu__group2__botom__pictext__text'}>
        <div className = {'Menu__group2__botom__pictext__text__text1'}>favorite coffee</div>
        <div className = {'Menu__group2__botom__pictext__text__text2'}>Homemade Coffee</div>
        <div className = {'Menu__group2__botom__pictext__text__text3'}>Мы сами перемалываем зернаа, чтобы в вашей чашке было самое вкусное и согревающее кофе.</div>
        </div>
        </div>
        <div className = {'Menu__group2__botom__right'}>
        <div className = {'Menu__group2__botom__right__text1'}>Classic</div>
        <div className = {'Menu__group2__botom__right__rb'}>
        <div className = {'Menu__group2__botom__right__rb__cofecost'}>
        <div className = {'Menu__group2__botom__right__rb__cofecost__cofe'}>Эспрессо</div>
        <div className = {'Menu__group2__botom__right__rb__cofecost__cost'}>80 ₽</div>
        </div>
        <div className = {'Menu__group2__botom__right__rb__cofecost'}>
        <div className = {'Menu__group2__botom__right__rb__cofecost__cofe'}>Американо</div>
        <div className = {'Menu__group2__botom__right__rb__cofecost__cost'}>120 ₽</div>
        </div>
        <div className = {'Menu__group2__botom__right__rb__cofecost'}>
        <div className = {'Menu__group2__botom__right__rb__cofecost__cofe'}>Капучино</div>
        <div className = {'Menu__group2__botom__right__rb__cofecost__cost'}>140 ₽</div>
        </div>
        <div className = {'Menu__group2__botom__right__rb__cofecost'}>
        <div className = {'Menu__group2__botom__right__rb__cofecost__cofe'}>Латте</div>
        <div className = {'Menu__group2__botom__right__rb__cofecost__cost'}>140 ₽</div>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div className = {'Menu__group3'}>
        <div className = {'Menu__group3__head2'}>
        <div className = {'Menu__group3__head2__text31'}>Насладитесь не только кофе, но и выпечкой!</div>
        <div className = {'Menu__group3__head2__text32'}>Desert</div>
          </div>
          <div className = {'Menu__group3__groupof3'}>
          <div className = {'Menu__group3__groupof3__desert'}>
          <div className = {'Menu__group3__groupof3__desert__pic'}><img className = "green_m" src = {"/menu/green.svg"}/></div>
          <div className = {'Menu__group3__groupof3__desert__name'}>Пирожное “Эмоция”</div>
          <div className = {'Menu__group3__groupof3__desert__costgram'}>
          <div className = {'Menu__group3__groupof3__desert__costgram__gram'}>100 гр</div>
          <div className = {'Menu__group3__groupof3__desert__costgram__cost'}>210 ₽</div>
          </div>
          <div className = {'Menu__group3__groupof3__desert__text'}>Какие бы эмоции вы не испытывали в данный момент, эта будет точно положительная! </div>
          </div>
          <div className = {'Menu__group3__groupof3__desert'}>
          <div className = {'Menu__group3__groupof3__desert__pic'}><img className = "des2_m" src = {"/menu/des2.svg"}/></div>
          <div className = {'Menu__group3__groupof3__desert__name'}>Классический чизкейк</div>
          <div className = {'Menu__group3__groupof3__desert__costgram'}>
          <div className = {'Menu__group3__groupof3__desert__costgram__gram'}>124 гр</div>
          <div className = {'Menu__group3__groupof3__desert__costgram__cost'}>159 ₽</div>
          </div>
          <div className = {'Menu__group3__groupof3__desert__text'}>Творожная крем-масса с крем-фрешем собственного приготовления, выложенная на песочной крошке Грехем; ганаш из белого шоколада. </div>
          </div>
          <div className = {'Menu__group3__groupof3__desert'}>
          <div className = {'Menu__group3__groupof3__desert__pic'}><img className = "des3_m" src = {"/menu/des3.svg"}/></div>
          <div className = {'Menu__group3__groupof3__desert__name'}>Шоколадное печенье  с клюквой</div>
          <div className = {'Menu__group3__groupof3__desert__costgram'}>
          <div className = {'Menu__group3__groupof3__desert__costgram__gram'}>100 гр</div>
          <div className = {'Menu__group3__groupof3__desert__costgram__cost'}>110 ₽</div>
          </div>
          <div className = {'Menu__group3__groupof3__desert__text'}>Фундучное печенье с кусочками белого шоколада и клюквой. </div>
          </div>
          </div>

          </div>
        
        <div className = {'Menu__group4'}> 
        <div className = {'Menu__group4__fon'}> <img className = "fon_m" src = {"/menu/fon.svg"}/> </div>
        <div className = {'Menu__group4__head'}>
        <div className = {'Menu__group4__head__text4'}>Уникальные сочетания</div>
        <div className = {'Menu__group4__head__text5'}>Our at-home coffee</div> 
        </div>
        <div className = {'Menu__group4__content'}>
        <div className = {'Menu__group4__content__right'}>
        <div className = {'Menu__group4__content__right__pic'}> <img className = "athome1_m" src = {"/menu/athome1.svg"}/></div>
        <div className = {'Menu__group4__content__right__alltext'}>
        <div className = {'Menu__group4__content__right__alltext__text1'}>Your Coffee</div>
        <div className = {'Menu__group4__content__right__alltext__text2'}>Delicious raf coffee</div>
        <div className = {'Menu__group4__content__right__alltext__text3'}>Сырный раф наполнит ваш день нежностью и подарит заряд бодрости</div>
        <div className = {'Menu__group4__content__right__alltext__cost'}> 400ml/159 ₽</div>
        </div>
        </div>
        <div className = {'Menu__group4__content__left'}>
        <div className = {'Menu__group4__content__left__desert'}>
        <div className = {'Menu__group4__content__left__desert__pic'}><img className = "athome2_m" src = {"/menu/athome2.svg"}/></div>
        <div className = {'Menu__group4__content__left__desert__alltext'}>
        <div className = {'Menu__group4__content__left__desert__alltext__text'}>Молотый кофе с кокосовой стружкой и натуральным вкусом мокко.</div>
        <div className = {'Menu__group4__content__left__desert__alltext__cost'}>400ml/159 ₽</div>
        </div>
        </div>
        <div className = {'Menu__group4__content__left__desert'}>
        <div className = {'Menu__group4__content__left__desert__pic'}><img className = "athome5_m" src = {"/menu/athome5.svg"}/></div>
        <div className = {'Menu__group4__content__left__desert__alltext'}>
        <div className = {'Menu__group4__content__left__desert__alltext__text'}>Шоколадный торт с арахисовым маслом</div>
        <div className = {'Menu__group4__content__left__desert__alltext__cost'}>400ml/159 ₽</div>
        </div>
        </div>
        </div>
        <div className = {'Menu__group4__content__left'}>
        <div className = {'Menu__group4__content__left__desert'}>
        <div className = {'Menu__group4__content__left__desert__pic'}><img className = "athome3_m" src = {"/menu/athome3.svg"}/></div>
        <div className = {'Menu__group4__content__left__desert__alltext'}>
        <div className = {'Menu__group4__content__left__desert__alltext__text'}>Апельсиновый раф с добавлением молотого арахиса и шоколадным сиропом</div>
        <div className = {'Menu__group4__content__left__desert__alltext__cost'}>400ml/159 ₽</div>
        </div>
        </div>
        <div className = {'Menu__group4__content__left__desert'}>
        <div className = {'Menu__group4__content__left__desert__pic'}><img className = "athome4_m" src = {"/menu/athome4.svg"}/></div>
        <div className = {'Menu__group4__content__left__desert__alltext'}>
        <div className = {'Menu__group4__content__left__desert__alltext__text'}>Вишня прекрасно сочетается с шоколадом и дополняет классический капучино новым вкусом</div>
        <div className = {'Menu__group4__content__left__desert__alltext__cost'}>400ml/159 ₽</div>
        </div>
        </div>
        </div>

        
        </div>

        </div>

        <div className = {'Menu__group5'}> 
        <div className = {'Menu__group5__top'}>
        <div className = {'Menu__group5__top__head1'}> 
        <div className = {'Menu__group5__top__head1__text4'}>Our Products</div>
        <div className = {'Menu__group5__top__head1__text5'}>Baked Fresh Every Morning</div>
        </div>
        <div class = {'Menu__group5__top__tochi'}><img className = "tochi1_m" src = {"/menu/tochi1.svg"}/></div>
        </div>
        <div className = {'Menu__group5__allbotom'}>
        <div className = {'Menu__group5__allbotom__botom'}>
        <div className = {'Menu__group5__allbotom__botom__pictext'}>
        <div className = {'Menu__group5__allbotom__botom__pictext__pic'}><img className = "bread_m" src = {"/menu/bread.svg"}/></div>
        <div className = {'Menu__group5__allbotom__botom__pictext__text'}>
        <div className = {'Menu__group5__allbotom__botom__pictext__text__text1'}>favorite coffee</div>
        <div className = {'Menu__group5__allbotom__botom__pictext__text__text2'}>Homemade Coffee</div>
        <div className = {'Menu__group5__allbotom__botom__pictext__text__costas'}>
        <div className = {'Menu__group5__allbotom__botom__pictext__text__costas__text'}>Мы сами перемалываем зернаа, чтобы в вашей чашке было самое вкусное и согревающее кофе.</div>
        <div className = {'Menu__group5__allbotom__botom__pictext__text__costas__cost'}>179 ₽</div>
        </div>
        </div>
        </div>
        <div className = {'Menu__group5__allbotom__botom__product'}>
        <div className = {'Menu__group5__allbotom__botom__product__desert'}>
        <div className = {'Menu__group5__allbotom__botom__product__desert__pic'}><img className = "cake1_m" src = {"/menu/cake1.svg"}/></div>
        <div className = {'Menu__group5__allbotom__botom__product__desert__alltext'}>
        <div className = {'Menu__group5__allbotom__botom__product__desert__alltext__text'}>
        <div className = {'Menu__group5__allbotom__botom__product__desert__alltext__text__text1'}>Капкейк</div>
        <div className = {'Menu__group5__allbotom__botom__product__desert__alltext__text__text2'}>Со свежими ягодами</div>
        </div>
        <div className = {'Menu__group5__allbotom__botom__product__desert__alltext__cost'}>75 ₽</div>
        </div>
        </div>

        <div className = {'Menu__group5__allbotom__botom__product__desert'}>
        <div className = {'Menu__group5__allbotom__botom__product__desert__pic'}><img className = "cake2_m" src = {"/menu/cake2.svg"}/></div>
        <div className = {'Menu__group5__allbotom__botom__product__desert__alltext'}>
        <div className = {'Menu__group5__allbotom__botom__product__desert__alltext__text'}>
        <div className = {'Menu__group5__allbotom__botom__product__desert__alltext__text__text1'}>Бисквит</div>
        <div className = {'Menu__group5__allbotom__botom__product__desert__alltext__text__text2'}>Бисквитное печенье с шоколадной глазурью</div>
        </div>
        <div className = {'Menu__group5__allbotom__botom__product__desert__alltext__cost'}>75 ₽</div>
        </div>

        
        </div>
        </div>
        </div>

        <div className = {'Menu__group5__allbotom__botom'}>

        <div className = {'Menu__group5__allbotom__botom__productgorizont'}>
        <div className = {'Menu__group5__allbotom__botom__productgorizont__desert'}>
        <div className = {'Menu__group5__allbotom__botom__productgorizont__desert__pic'}><img className = "cake4_m" src = {"/menu/cake4.svg"}/></div>
        <div className = {'Menu__group5__allbotom__botom__productgorizont__desert__alltext'}>
        <div className = {'Menu__group5__allbotom__botom__productgorizont__desert__alltext__text'}>
        <div className = {'Menu__group5__allbotom__botom__productgorizont__desert__alltext__text__text1'}>Злаковый хлеб</div>
        <div className = {'Menu__group5__allbotom__botom__productgorizont__desert__alltext__text__text2'}>Полезные злаки, семена льна </div>
        </div>
        <div className = {'Menu__group5__allbotom__botom__productgorizont__desert__alltext__cost'}>149 ₽</div>
        </div>
        </div>
        
        <div className = {'Menu__group5__allbotom__botom__productgorizont__desert'}>
        <div className = {'Menu__group5__allbotom__botom__productgorizont__desert__pic'}><img className = "cake3_m" src = {"/menu/cake3.svg"}/></div>
        <div className = {'Menu__group5__allbotom__botom__productgorizont__desert__alltext'}>
        <div className = {'Menu__group5__allbotom__botom__productgorizont__desert__alltext__text'}>
        <div className = {'Menu__group5__allbotom__botom__productgorizont__desert__alltext__text__text1'}>Бриошь</div>
        <div className = {'Menu__group5__allbotom__botom__productgorizont__desert__alltext__text__text2'}>Сдобная булочка со сливочным маслом</div>
        </div>
        <div className = {'Menu__group5__allbotom__botom__productgorizont__desert__alltext__cost'}>75 ₽</div>
        </div>
        </div>
        
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

export default Menu
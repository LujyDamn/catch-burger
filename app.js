'use strict';
const menu=[
{id:'cheeseburger',name:'Cheeseburger',ar:'تشيز برجر',category:'mains',prices:[20,27],visual:['real'],description:'The Catch cheeseburger. Choose your size, then make it yours.'},
{id:'double',name:'Double Cheeseburger',ar:'دبل تشيز برجر',category:'mains',prices:[26,33],visual:['extras',100,100],description:'Double cheeseburger. Available in two sizes.'},
{id:'crispy',name:'Crispy Chicken',ar:'كريسبي تشكن',category:'mains',prices:[20,27],visual:['food',0,0],description:'Crispy chicken burger. Available in two sizes.'},
{id:'hotdog',name:'Chicken Hot Dog',ar:'هوت دوج',category:'mains',prices:[16,23],visual:['food',50,0],description:'Chicken hot dog. Available in two sizes.'},
{id:'fries',name:'Fries',ar:'فرايز',category:'sides',prices:[7],visual:['food',100,0]},
{id:'catchfries',name:'Catch Fries',ar:'كاتش فرايز',category:'sides',prices:[12],visual:['food',0,50]},
{id:'chickenfries',name:'Chicken Fries',ar:'تشيكن فرايز',category:'sides',prices:[17],visual:['food',50,50]},
{id:'mozzarella',name:'Mozzarella Sticks',ar:'أصابع موزاريلا',category:'sides',prices:[12],visual:['food',100,50]},
{id:'cheddar',name:'Cheddar Cheese Bites',ar:'جبنة التشيدر',category:'sides',prices:[13],visual:['food',0,100]},
{id:'jalapeno',name:'Jalapeño Cheese Bites',ar:'جبنة الهالبينو',category:'sides',prices:[9],visual:['food',50,100]},
{id:'catchsauce',name:'Catch Sauce',ar:'كاتش صوص',category:'sauces',prices:[2],visual:['extras',0,0]},
{id:'honey',name:'Honey Mustard',ar:'هني مسترد',category:'sauces',prices:[2],visual:['extras',50,0]},
{id:'cheesesauce',name:'Cheese Sauce',ar:'تشيز صوص',category:'sauces',prices:[2],visual:['extras',100,0]},
{id:'bbq',name:'Barbecue Sauce',ar:'باربيكيو صوص',category:'sauces',prices:[2],visual:['extras',0,50]},
{id:'tartar',name:'Tartar Sauce',ar:'تارتر صوص',category:'sauces',prices:[2],visual:['extras',50,50]},
{id:'softdrink',name:'Soft Drink',ar:'مشروب غازي',category:'drinks',prices:[3],visual:['extras',100,50]},
{id:'orange',name:'Orange Juice',ar:'عصير برتقال',category:'drinks',prices:[3],visual:['extras',0,100]},
{id:'water',name:'Water',ar:'ماء',category:'drinks',prices:[1],visual:['extras',50,100]}
];
const copy={
  "ar": {
    "home": "كاتش برجر - الرئيسية",
    "navMenu": "القائمة",
    "brand": "كاتش برجر",
    "heroTitle": "من أول لقمة،<br> <em>لك رجعة.</em>",
    "explore": "اكتشف القائمة",
    "burgerScene": "حرّك المؤشر أو المس البرجر لتحريك الطبقات",
    "sceneWord": "كاتش",
    "menuTitle": "قائمة كاتش<span>.</span>",
    "categories": "أقسام القائمة",
    "mains": "البرجر",
    "sides": "الطلبات الجانبية",
    "sauces": "الصوصات",
    "drinks": "المشروبات",
    "currency": "ر.س",
    "restaurantPhoto": "واجهة كاتش برجر المضيئة والديكور الداخلي الدافئ",
    "nightTitle": "البرجر من كاتش،<br><em>واللّمة عليكم.</em>",
    "closeProduct": "إغلاق المنتج",
    "small": "صغير",
    "large": "كبير",
    "standard": "عادي",
    "choose": "تفاصيل",
    "chooseSize": "الأحجام والأسعار",
    "languageLabel": "لغة الموقع",
    "ingredients": "المكونات المؤكدة",
    "recipeNote": "باقي تفاصيل الوصفة قيد التأكيد.",
    "whatsapp": "واتساب",
    "whatsappLabel": "تواصل عبر واتساب",
    "greeting": "السلام عليكم، حاب أطلب من كاتش."
  },
  "en": {
    "home": "Catch Burger home",
    "navMenu": "Menu",
    "brand": "CATCH BURGER",
    "heroTitle": "One bite.<br> <em>You’ll be back.</em>",
    "explore": "Explore the menu",
    "burgerScene": "Move the pointer or tap the burger to play with its layers",
    "sceneWord": "CATCH",
    "menuTitle": "On the menu<span>.</span>",
    "categories": "Menu categories",
    "mains": "Burgers & more",
    "sides": "Sides",
    "sauces": "Sauces",
    "drinks": "Drinks",
    "currency": "SAR",
    "restaurantPhoto": "Catch Burger’s illuminated storefront and warm interior",
    "nightTitle": "Bring your people.<br><em>Make it a Catch night.</em>",
    "closeProduct": "Close product",
    "small": "Small",
    "large": "Large",
    "standard": "Standard",
    "choose": "View",
    "chooseSize": "Sizes and prices",
    "languageLabel": "Site language",
    "ingredients": "Confirmed ingredients",
    "recipeNote": "Remaining recipe details are to be confirmed.",
    "whatsapp": "WhatsApp",
    "whatsappLabel": "Contact on WhatsApp",
    "greeting": "Hello, I’d like to order from Catch Burger."
  }
};
const $=s=>document.querySelector(s),productById=id=>menu.find(p=>p.id===id),productDialog=$('#productDialog'),motionQuery=matchMedia('(prefers-reduced-motion: reduce)');
let lang='ar',selected=null,category='mains',reduced=motionQuery.matches;
try{if(localStorage.getItem('catch-language')==='en')lang='en'}catch{}
const t=key=>copy[lang][key],nameOf=p=>lang==='ar'?p.ar:p.name,otherName=p=>lang==='ar'?p.name:p.ar,money=n=>n.toFixed(0)+' '+t('currency'),priceHTML=n=>'<bdi>'+money(n)+'</bdi>';
function imageHTML(p,eager=false){const heights={catchsauce:391,honey:391,cheesesauce:391,bbq:395,tartar:395,softdrink:395,orange:468,water:468,double:468,cheeseburger:449},w=p.id==='cheeseburger'?449:418,h=heights[p.id]||418;return '<img class="food-image" src="assets/menu/'+p.id+'.webp" alt="'+nameOf(p)+'" width="'+w+'" height="'+h+'" loading="'+(eager?'eager':'lazy')+'" decoding="async">'}
function sizeName(p,size){return p.prices.length>1?t(size?'large':'small'):t('standard')}
function renderMenu(next=category){category=next;$('#products').dataset.category=category;$('#products').innerHTML=menu.filter(p=>p.category===category).map((p,i)=>'<button class="menu-card" data-product="'+p.id+'" aria-label="'+t('choose')+' '+nameOf(p)+'" style="--delay:'+i*.085+'s"><span class="photo-frame">'+imageHTML(p)+'<span class="photo-edge" aria-hidden="true"></span></span><span class="card-info"><span><span class="card-name">'+nameOf(p)+'</span><span class="card-ar" lang="'+(lang==='ar'?'en':'ar')+'" dir="'+(lang==='ar'?'ltr':'rtl')+'">'+otherName(p)+'</span></span><span class="card-price"><span><bdi>'+p.prices.join(' / ')+'</bdi><small>'+t('currency')+'</small></span><span class="card-arrow" aria-hidden="true">↗</span></span></span></button>').join('');document.querySelectorAll('.menu-card').forEach(card=>revealObserver.observe(card));moveTabIndicator()}
const confirmedIngredients={
cheeseburger:{ar:['خبز بالسمسم','قطعة برجر','جبن','مخلل'],en:['Sesame bun','Burger patty','Cheese','Pickles']},
double:{ar:['خبز برجر','قطعتا برجر','جبن'],en:['Burger bun','Two burger patties','Cheese']},
crispy:{ar:['خبز برجر','دجاج مقرمش'],en:['Burger bun','Crispy chicken']},
hotdog:{ar:['خبز هوت دوغ','نقانق'],en:['Hot dog bun','Sausage']}
};
function ingredientHTML(p){const list=confirmedIngredients[p.id];if(!list)return '';return '<section class="ingredients"><h3>'+t('ingredients')+'</h3><p>'+list[lang].join(lang==='ar'?'، ':', ')+'</p><small>'+t('recipeNote')+'</small></section>'}
function renderProduct(){if(!selected)return;const p=productById(selected.id);$('#productContent').innerHTML='<div class="product-media"><div class="product-preview">'+imageHTML(p,true)+'</div>'+ingredientHTML(p)+'</div><div class="product-body"><h2 id="productTitle">'+nameOf(p)+'</h2><span class="arabic-name" lang="'+(lang==='ar'?'en':'ar')+'" dir="'+(lang==='ar'?'ltr':'rtl')+'">'+otherName(p)+'</span>'+(p.prices.length>1?'<div class="size-options size-prices" role="group" aria-label="'+t('chooseSize')+'">'+p.prices.map((v,i)=>'<div class="size-option">'+sizeName(p,i)+'<b>'+priceHTML(v)+'</b></div>').join('')+'</div>':'<div class="item-price">'+priceHTML(p.prices[0])+'</div>')+'</div>'}
function openProduct(id){if(!productById(id))return;selected={id};renderProduct();productDialog.showModal()}
function moveTabIndicator(){requestAnimationFrame(()=>{const tab=document.querySelector('[data-filter].active'),bar=$('.menu-tabs'),indicator=$('.tab-indicator');if(tab&&indicator){indicator.style.width=tab.offsetWidth+'px';indicator.style.left=tab.offsetLeft+'px'}})}
function setLanguage(next){lang=next;document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';document.title=lang==='ar'?'كاتش برجر | القائمة':'Catch Burger | Menu';document.querySelectorAll('[data-i18n]').forEach(el=>el.textContent=t(el.dataset.i18n));document.querySelectorAll('[data-i18n-html]').forEach(el=>el.innerHTML=t(el.dataset.i18nHtml));document.querySelectorAll('[data-i18n-label]').forEach(el=>el.setAttribute('aria-label',t(el.dataset.i18nLabel)));document.querySelectorAll('[data-i18n-alt]').forEach(el=>el.alt=t(el.dataset.i18nAlt));document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>el.placeholder=t(el.dataset.i18nPlaceholder));document.querySelectorAll('[data-language]').forEach(button=>{const active=button.dataset.language===lang;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active))});$('#whatsappLink').href='https://wa.me/966508868265?text='+encodeURIComponent(t('greeting'));renderMenu();if(productDialog.open)renderProduct();document.body.classList.remove('language-enter');void document.body.offsetWidth;document.body.classList.add('language-enter')}
document.querySelectorAll('[data-language]').forEach(button=>button.onclick=()=>{setLanguage(button.dataset.language);try{localStorage.setItem('catch-language',lang)}catch{}});
document.addEventListener('click',e=>{const product=e.target.closest('[data-product]');if(product)openProduct(product.dataset.product)})
function changeCategory(next){if(next===category)return;document.querySelectorAll('[data-filter]').forEach(a=>{a.classList.toggle('active',a.dataset.filter===next);a.setAttribute('aria-pressed',String(a.dataset.filter===next))});const update=()=>{renderMenu(next);document.querySelectorAll('.menu-card').forEach(card=>card.classList.add('visible'))};if(!reduced&&document.startViewTransition){try{const transition=document.startViewTransition(update);transition.finished.catch(()=>{});return}catch{}}update();if(!reduced)$('#products').animate([{opacity:.15,transform:'translateY(14px)'},{opacity:1,transform:'none'}],{duration:460,easing:'cubic-bezier(.2,.8,.2,1)'})}
document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>changeCategory(b.dataset.filter));
if(matchMedia('(pointer:fine)').matches){$('#products').addEventListener('pointermove',event=>{const card=event.target.closest('.menu-card');if(!card||reduced)return;const r=card.querySelector('.photo-frame').getBoundingClientRect(),px=Math.max(0,Math.min(1,(event.clientX-r.left)/r.width)),py=Math.max(0,Math.min(1,(event.clientY-r.top)/r.height));card.style.setProperty('--tilt-x',(0.5-py)*5+'deg');card.style.setProperty('--tilt-y',(px-0.5)*6+'deg');card.style.setProperty('--shine-x',px*100+'%');card.style.setProperty('--shine-y',py*100+'%')});$('#products').addEventListener('pointerout',event=>{const card=event.target.closest('.menu-card');if(card&&!card.contains(event.relatedTarget)){card.style.setProperty('--tilt-x','0deg');card.style.setProperty('--tilt-y','0deg')}})}

$('#closeProduct').onclick=()=>productDialog.close();
document.querySelectorAll('dialog').forEach(d=>d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close()}}));
function setMotion(){reduced=motionQuery.matches;document.body.classList.toggle('reduced',reduced);document.documentElement.style.scrollBehavior=reduced?'auto':'';document.dispatchEvent(new CustomEvent('catch-motion',{detail:{reduced}}))}setMotion();motionQuery.addEventListener('change',setMotion);
const revealObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');revealObserver.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>revealObserver.observe(e.target||e));setLanguage(lang);
let scrollFrame=0;function updateScroll(){scrollFrame=0;const y=scrollY,max=document.documentElement.scrollHeight-innerHeight;document.body.classList.toggle('nav-scrolled',y>24);document.documentElement.style.setProperty('--page-progress',max?y/max:0);const hero=$('.hero'),night=$('.night-image'),rect=night.getBoundingClientRect();if(!reduced){hero.style.setProperty('--hero-scroll',Math.min(y/innerHeight,1));if(rect.bottom>0&&rect.top<innerHeight)night.style.setProperty('--parallax',((innerHeight/2-(rect.top+rect.height/2))*.055)+'px')}}addEventListener('scroll',()=>{if(!scrollFrame)scrollFrame=requestAnimationFrame(updateScroll)},{passive:true});addEventListener('resize',()=>{moveTabIndicator();updateScroll()});updateScroll();if(document.fonts)document.fonts.ready.then(moveTabIndicator);

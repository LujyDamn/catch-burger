'use strict';
const menu = [
  {id:'cheeseburger',name:'Cheeseburger',ar:'تشيز برجر',category:'mains',prices:[20,27]},
  {id:'double',name:'Double Cheeseburger',ar:'دبل تشيز برجر',category:'mains',prices:[26,33]},
  {id:'crispy',name:'Crispy Chicken',ar:'كريسبي تشكن',category:'mains',prices:[20,27]},
  {id:'hotdog',name:'Chicken Hot Dog',ar:'هوت دوج',category:'mains',prices:[16,23]},
  {id:'fries',name:'Fries',ar:'فرايز',category:'sides',prices:[7]},
  {id:'catchfries',name:'Catch Fries',ar:'كاتش فرايز',category:'sides',prices:[12]},
  {id:'chickenfries',name:'Chicken Fries',ar:'تشيكن فرايز',category:'sides',prices:[17]},
  {id:'mozzarella',name:'Mozzarella Sticks',ar:'أصابع موزاريلا',category:'sides',prices:[12]},
  {id:'cheddar',name:'Cheddar Cheese Bites',ar:'جبنة التشيدر',category:'sides',prices:[13]},
  {id:'jalapeno',name:'Jalapeño Cheese Bites',ar:'جبنة الهالبينو',category:'sides',prices:[9]},
  {id:'catchsauce',name:'Catch Sauce',ar:'كاتش صوص',category:'sauces',prices:[2]},
  {id:'honey',name:'Honey Mustard',ar:'هني مسترد',category:'sauces',prices:[2]},
  {id:'cheesesauce',name:'Cheese Sauce',ar:'تشيز صوص',category:'sauces',prices:[2]},
  {id:'bbq',name:'Barbecue Sauce',ar:'باربيكيو صوص',category:'sauces',prices:[2]},
  {id:'tartar',name:'Tartar Sauce',ar:'تارتر صوص',category:'sauces',prices:[2]},
  {id:'softdrink',name:'Soft Drink',ar:'مشروب غازي',category:'drinks',prices:[3]},
  {id:'orange',name:'Orange Juice',ar:'عصير برتقال',category:'drinks',prices:[3]},
  {id:'water',name:'Water',ar:'ماء',category:'drinks',prices:[1]}
];
const copy = {
  ar:{
    home:'كاتش برجر - الرئيسية',navigation:'التنقل الرئيسي',navMenu:'القائمة',navContact:'تواصل معنا',
    languageLabel:'لغة الموقع',brand:'كاتش برجر',heroTitle:'من أول لقمة،<br><em>لك رجعة.</em>',
    heroSub:'برجرك، بطاطسك، ولحظة على مزاجك.',explore:'اكتشف القائمة',heroCaption:'تشيز برجر كاتش',
    burgerPhoto:'تشيز برجر كاتش على طبق أسود',menuEyebrow:'اختيارك. على ذوقك.',
    menuTitle:'قائمة كاتش<span>.</span>',menuSub:'الأسعار بالريال السعودي.',
    menuHint:'اضغط على الصنف للتفاصيل',categories:'أقسام القائمة',
    mains:'البرجر',sides:'الطلبات الجانبية',sauces:'الصوصات',drinks:'المشروبات',currency:'ر.س',
    small:'صغير',large:'كبير',standard:'السعر',details:'تفاصيل',closeProduct:'إغلاق التفاصيل',
    ingredients:'المكونات المؤكدة',recipeNote:'باقي تفاصيل الوصفة قيد التأكيد.',
    detailsPending:'لتفاصيل المكونات أو أي استفسار عن الحساسية، تواصل مع المطعم عبر واتساب.',
    extras:'إضافات',cheeseExtra:'جبنة إضافية',pattyExtra:'قطعة برجر إضافية',
    restaurantPhoto:'واجهة كاتش برجر المضيئة والديكور الداخلي الدافئ',photoCaption:'كاتش بعد الغروب',
    nightTitle:'البرجر من كاتش،<br><em>واللّمة عليكم.</em>',
    contactIntro:'للطلب والاستفسار، كلمنا على واتساب.',whatsapp:'للطلب عبر واتساب',
    contactNote:'يفتح واتساب؛ أرسل رسالتك من هناك.',footerNote:'قائمة الطعام · الطلب مباشرة من المطعم عبر واتساب',
    greeting:'السلام عليكم، حاب أطلب من كاتش.'
  },
  en:{
    home:'Catch Burger home',navigation:'Main navigation',navMenu:'Menu',navContact:'Contact',
    languageLabel:'Site language',brand:'CATCH BURGER',heroTitle:'One bite.<br><em>You’ll be back.</em>',
    heroSub:'Your burger. Your fries. Your moment.',explore:'Explore the menu',heroCaption:'THE CATCH CHEESEBURGER',
    burgerPhoto:'Catch cheeseburger on a black plate',menuEyebrow:'SOMETHING FOR YOUR CRAVING.',
    menuTitle:'On the menu<span>.</span>',menuSub:'All prices in Saudi riyals.',
    menuHint:'Tap a dish for details',categories:'Menu categories',
    mains:'Burgers & more',sides:'Sides',sauces:'Sauces',drinks:'Drinks',currency:'SAR',
    small:'Small',large:'Large',standard:'Price',details:'Details for',closeProduct:'Close details',
    ingredients:'Confirmed ingredients',recipeNote:'Remaining recipe details are to be confirmed.',
    detailsPending:'Contact the restaurant on WhatsApp for ingredient details or allergy questions.',
    extras:'Extras',cheeseExtra:'Extra cheese',pattyExtra:'Extra patty',
    restaurantPhoto:'Catch Burger’s illuminated storefront and warm interior',photoCaption:'CATCH AFTER DARK',
    nightTitle:'Bring your people.<br><em>Make it a Catch night.</em>',
    contactIntro:'For orders and questions, talk to us on WhatsApp.',whatsapp:'Order via WhatsApp',
    contactNote:'Opens WhatsApp. Send your message there.',footerNote:'The menu · Order directly with the restaurant on WhatsApp',
    greeting:'Hello, I’d like to order from Catch Burger.'
  }
};
const confirmedIngredients = {
  cheeseburger:{ar:['خبز بالسمسم','قطعة برجر','جبن','مخلل'],en:['Sesame bun','Burger patty','Cheese','Pickles']},
  double:{ar:['خبز برجر','قطعتا برجر','جبن'],en:['Burger bun','Two burger patties','Cheese']},
  crispy:{ar:['خبز برجر','دجاج مقرمش'],en:['Burger bun','Crispy chicken']},
  hotdog:{ar:['خبز هوت دوغ','نقانق'],en:['Hot dog bun','Sausage']}
};
const $ = selector => document.querySelector(selector);
const productDialog = $('#productDialog');
const motionQuery = matchMedia('(prefers-reduced-motion: reduce)');
let lang='ar', category='mains', selected=null, categoryChange=0;
try { if(localStorage.getItem('catch-language')==='en') lang='en'; } catch {}
const t = key => copy[lang][key];
const nameOf = product => lang==='ar'?product.ar:product.name;
const otherName = product => lang==='ar'?product.name:product.ar;
const priceLabel = (product,index) => product.prices.length>1?t(index?'large':'small'):t('standard');

function priceMarkup(product,detail=false) {
  return product.prices.map((price,index) => detail
    ? '<div class="detail-price"><span>'+priceLabel(product,index)+'</span><bdi>'+price+' <small>'+t('currency')+'</small></bdi></div>'
    : '<span class="menu-price"><span class="price-label">'+priceLabel(product,index)+'</span><strong dir="ltr">'+price+'</strong><small>'+t('currency')+'</small></span>'
  ).join('');
}
function renderMenu() {
  const products=menu.filter(product=>product.category===category);
  $('#products').dataset.category=category;
  $('#products').innerHTML=products.map((product,index)=>
    '<div class="menu-entry" role="listitem" style="--index:'+index+'"><button class="menu-card" data-product="'+product.id+'" aria-label="'+t('details')+' '+nameOf(product)+'">'+
    '<span class="item-index" aria-hidden="true">'+String(index+1).padStart(2,'0')+'</span>'+
    '<span><span class="card-name">'+nameOf(product)+'</span><span class="card-secondary" lang="'+(lang==='ar'?'en':'ar')+'" dir="'+(lang==='ar'?'ltr':'rtl')+'">'+otherName(product)+'</span></span>'+
    '<span class="card-prices">'+priceMarkup(product)+'</span><span class="card-chevron" aria-hidden="true">↗</span></button></div>'
  ).join('');
  moveTabIndicator();
}
function renderProduct() {
  const product=menu.find(item=>item.id===selected);
  if(!product) return;
  const ingredients=confirmedIngredients[product.id];
  $('#productContent').innerHTML='<span class="eyebrow">'+t('brand')+'</span><h2 id="productTitle">'+nameOf(product)+'</h2>'+
    '<span class="detail-secondary" lang="'+(lang==='ar'?'en':'ar')+'" dir="'+(lang==='ar'?'ltr':'rtl')+'">'+otherName(product)+'</span>'+
    '<div class="detail-prices '+(product.prices.length===1?'single-price':'')+'">'+priceMarkup(product,true)+'</div>'+
    (ingredients?'<section class="ingredients"><h3>'+t('ingredients')+'</h3><p>'+ingredients[lang].join(lang==='ar'?'، ':', ')+'</p><small>'+t('recipeNote')+'</small></section>':'')+
    '<p class="detail-note">'+t('detailsPending')+'</p>';
}
function moveTabIndicator() {
  requestAnimationFrame(()=>{
    const active=document.querySelector('[data-filter].active'),indicator=$('.tab-indicator');
    if(active&&indicator) {indicator.style.width=active.offsetWidth+'px';indicator.style.left=active.offsetLeft+'px';}
  });
}
async function changeCategory(next) {
  if(next===category) return;
  const change=++categoryChange;
  category=next;
  document.querySelectorAll('[data-filter]').forEach(button=>{
    const active=button.dataset.filter===next;
    button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));
  });
  moveTabIndicator();
  const catalog=$('#products');
  if(!motionQuery.matches) {
    await catalog.animate([{opacity:1},{opacity:0}],{duration:130,easing:'ease'}).finished.catch(()=>{});
  }
  if(change!==categoryChange) return;
  catalog.classList.remove('catalog-enter');
  renderMenu();
  void catalog.offsetWidth;
  catalog.classList.add('catalog-enter');
}
function setLanguage(next) {
  lang=next;
  categoryChange++;
  document.documentElement.lang=lang;
  document.documentElement.dir=lang==='ar'?'rtl':'ltr';
  document.title=lang==='ar'?'كاتش برجر | القائمة':'Catch Burger | Menu';
  document.querySelectorAll('[data-i18n]').forEach(element=>element.textContent=t(element.dataset.i18n));
  document.querySelectorAll('[data-i18n-html]').forEach(element=>element.innerHTML=t(element.dataset.i18nHtml));
  document.querySelectorAll('[data-i18n-label]').forEach(element=>element.setAttribute('aria-label',t(element.dataset.i18nLabel)));
  document.querySelectorAll('[data-i18n-alt]').forEach(element=>element.alt=t(element.dataset.i18nAlt));
  document.querySelectorAll('[data-language]').forEach(button=>{
    const active=button.dataset.language===lang;
    button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));
  });
  $('#whatsappLink').href='https://wa.me/966508868265?text='+encodeURIComponent(t('greeting'));
  renderMenu();
  if(productDialog.open)renderProduct();
}
document.querySelectorAll('[data-language]').forEach(button=>button.addEventListener('click',()=>{
  setLanguage(button.dataset.language);
  try {localStorage.setItem('catch-language',lang);} catch {}
}));
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>changeCategory(button.dataset.filter)));
$('#products').addEventListener('click',event=>{
  const button=event.target.closest('[data-product]');
  if(!button)return;
  selected=button.dataset.product;renderProduct();productDialog.showModal();
});
$('#closeProduct').addEventListener('click',()=>productDialog.close());
productDialog.addEventListener('click',event=>{
  if(event.target!==productDialog)return;
  const rect=productDialog.getBoundingClientRect();
  if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)productDialog.close();
});
const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target);}
}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(element=>revealObserver.observe(element));
function updateHeader(){document.body.classList.toggle('nav-scrolled',scrollY>24);}
addEventListener('scroll',updateHeader,{passive:true});
addEventListener('resize',moveTabIndicator);
setLanguage(lang);updateHeader();
if(document.fonts)document.fonts.ready.then(moveTabIndicator);

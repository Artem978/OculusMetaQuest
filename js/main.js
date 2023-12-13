function main(){
    const featureBtn = document.querySelectorAll('.feature-content-button');
    const featureItm = document.querySelectorAll('.feature-content-item');

    featureBtn.forEach((btn) =>{
      btn.addEventListener('click',() =>{
       featureBtn.forEach((item)=>{
        item.classList.remove('feature-content-button-active')
       })
       featureItm.forEach((item)=>{
        item.classList.remove('feature-content-item-active')
       })
       btn.classList.add('feature-content-button-active');
       const currentFeatureItem = document.getElementById(btn.dataset.button);
       currentFeatureItem.classList.add('feature-content-item-active')
      })
    })

    const headerMobBtn = document.querySelector('.header-mobile-menu');
    const headerMenu = document.querySelector('.header-menu');

    headerMobBtn.addEventListener('click', () => {
      headerMenu.classList.toggle('header-menu-active')
    })
}
main()
class Menu {
  constructor() {
    this.menuHeader = document.getElementById('menu');
    this.headerLinks = document.querySelector('.links ul');
    this.togglemenu = document.querySelector('.togglebtn');
    this.header = document.querySelector('header');
    this.addEventListeners();
  }

  addEventListeners() {
    this.menuHeader.addEventListener('click', () => {
      
      this.headerLinks.classList.toggle('active');
      this.togglemenu.classList.toggle("click");
    });

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 0) {
        this.header.classList.remove('active');
        this.togglemenu.classList.remove('click')
      }
    });

    window.addEventListener("scroll", () => {
      if (this.headerLinks.classList.contains('active')) {
        this.headerLinks.classList.remove('active');
      }
    });
  }
}




// Usage
const menu = new Menu();

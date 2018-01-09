class MyClass {
  render(elementId:string, text:string){
    var el: HTMLElement = document.getElementById(elementId);
    el.innerHTML = text; 
  }
}

window.onload = () => {
  var myclass = new MyClass();
  myclass.render('container','!!!Hello World!2!');
}
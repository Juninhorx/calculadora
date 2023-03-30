function CriaCalculadora() {
  this.display = document.querySelector(".display");

  this.iniciar = () => {
    this.apertaBotão();
  };

  this.btnParaDisplay = (valor) => {
    this.display.value += valor;  
    this.display.focus()
  };

  this.clearDisplay = () => {
    this.display.value = "";
  };

  this.apagaUm = () => {
    this.display.value = this.display.value.slice(0, -1);
  };

  this.fazConta = () => {
    let conta = this.display.value;
    try {
      this.display.value = String(eval(conta));
    } catch {
      alert("Conta inválida");
      this.display.value = "";
      return;
    }
  };

  this.apertaBotão = () => {
    document.addEventListener("click", (e) => {
      const el = e.target;
      if (el.classList.contains("btn-num")) {
        this.btnParaDisplay(el.innerText);
      }

      if (el.classList.contains("btn-clear")) {
        this.clearDisplay();
      }

      if (el.classList.contains("btn-dell")) {
        this.apagaUm();
      }

      if (el.classList.contains("btn-eq")) {
        this.fazConta();
      }
    });
  };
}
const calculadora = new CriaCalculadora();
calculadora.iniciar();

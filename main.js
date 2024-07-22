// Smooth Scroll para âncoras
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
  
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      const offset = document.querySelector(".navbar").offsetHeight;
  
      window.scrollTo({
        top: targetElement.offsetTop - offset,
        behavior: "smooth",
      });
    });
  });
  
  // Manipulação do DOM ao carregar o conteúdo
  document.addEventListener("DOMContentLoaded", function () {
    // Aplicar máscara ao campo de telefone
    aplicarMascaraTelefone();
  
    // Configurar validação do formulário
    configurarValidacaoFormulario();
  });
  
  /**
   * Aplica a máscara ao campo de telefone usando jQuery Mask Plugin
   */
  function aplicarMascaraTelefone() {
    $("#tel").mask("(00) 0.0000-0000");
  }
  
  /**
   * Configura a validação do formulário usando jQuery Validate Plugin
   */
  function configurarValidacaoFormulario() {
    $("form").validate({
      rules: {
        name: {
          required: true,
        },
        email: {
          required: true,
          email: true,
        },
        mensagem: {
          required: true,
        },
      },
      messages: {
        name: "Por favor, insira o seu nome.",
        email: {
          required: "Por favor, insira um e-mail válido.",
          email: "Por favor, insira um e-mail no formato correto.",
        },
        mensagem: "Deixe-nos uma mensagem.",
      },
      submitHandler: function (form) {
        console.log(form);
        alert(`Sua mensagem foi enviada.`);
      },
      invalidHandler: function (evento, validador) {
        let camposIncorretos = validador.numberOfInvalids();
        if (camposIncorretos) {
          alert(`Possui ${camposIncorretos} campos incompletos.`);
        }
      },
      errorPlacement: function (error, element) {
        error.addClass("error");
        error.insertAfter(element);
      },
    });
  }
  
  // logica do carrinho
  document.querySelectorAll(".button-minus").forEach(function (button) {
    button.addEventListener("click", function () {
      var input = this.closest(".input-group").querySelector(".input-number");
      var value = parseInt(input.value);
      if (value > parseInt(input.min)) {
        input.value = value - 1;
      }
    });
  });
  
  document.querySelectorAll(".button-plus").forEach(function (button) {
    button.addEventListener("click", function () {
      var input = this.closest(".input-group").querySelector(".input-number");
      input.value = parseInt(input.value) + 1;
    });
  });
  
  document.querySelectorAll(".add-button").forEach(function (button) {
    button.addEventListener("click", function () {
      var input = this.closest(".card-footer").querySelector(".input-number");
      var value = parseInt(input.value);
      var price = parseFloat(
        this.textContent.match(/R\$ ([0-9,]+)/)[1].replace(",", ".")
      );
      var total = value * price;
      alert("Valor total adicionado: R$ " + total.toFixed(2));
    });
  });
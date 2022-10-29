function buscarProdutos() {

    const data = search_form.search_textbox.value;
    
    alert(`Busca solicitada por: ${data}`)
    
}

/* Conhece o jogo selecionado para adicionar ao carrinho */
var call = function(elementId)
{
    var game = document.getElementById(elementId).id
    alert(`Você está adicionando ao carrinho: ${game}`);
}


/* Define elementos em comum para todas as páginas */

class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <nav id="navbar" class="navbar navbar-expand-sm navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="javascript:void(0)">Lojinha do Tiago</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mynavbar">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0)">Games</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0)">Apps</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0)">Hardware</a>
            </li>
          </ul>     
          <form class="d-flex" id="search_form" onsubmit="return buscarProdutos()">
            <input class="form-control me-2" type="text" id="search_textbox" placeholder="O que você procura?">
            <input class="btn btn-primary" type="submit" value="Buscar">Buscar</input>
          </form>
          <ul class="navbar-nav me-2">
          <li class="nav-item">
            <a class="nav-link" href="perfil.html">Meu Perfil</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="carrinho.html">Carrinho</a>
          </li>
          </ul>
        </div>
      </div>
    </nav> 
      `;
    }
  }class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `    
        <footer>Esse site é um projeto de ficção, qualquer semelhança com a realidade é mera coincidência

        <p>Cadastre seu e-mail e fique por dentro das novidades</p>
        <form action="https://jkorpela.fi/cgi-bin/echo.cgi" method="post">
            <label for="nome">Nome completo:</label><br>
            <input type="text" id="nome" name="name" value="José da Silva"><br>
            <label for="email">Email:</label><br>
            <input type="email" id="email" name="email" placeholder="email@dominio.com.br"><br><br>
            <input type="submit" value="Enviar">
          </form>


        </footer>     
      `;
    }
  }

customElements.define('main-header', Header);
customElements.define('main-footer', Footer);
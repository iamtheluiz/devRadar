import React from 'react';

// Styles
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/32724000?v=4" alt="Luiz Gustavo" />
              <div className="user-info">
                <strong>Luiz Gustavo</strong>
                <span>ReactJS, NodeJS, PHP</span>
              </div>
            </header>
            <p>Um Técnico em Informática para Internet entusiasmado com a tecnologia.</p>
            <a href="https://github.com/iamtheluiz">Acessar perfil do Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/32724000?v=4" alt="Luiz Gustavo" />
              <div className="user-info">
                <strong>Luiz Gustavo</strong>
                <span>ReactJS, NodeJS, PHP</span>
              </div>
            </header>
            <p>Um Técnico em Informática para Internet entusiasmado com a tecnologia.</p>
            <a href="https://github.com/iamtheluiz">Acessar perfil do Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/32724000?v=4" alt="Luiz Gustavo" />
              <div className="user-info">
                <strong>Luiz Gustavo</strong>
                <span>ReactJS, NodeJS, PHP</span>
              </div>
            </header>
            <p>Um Técnico em Informática para Internet entusiasmado com a tecnologia.</p>
            <a href="https://github.com/iamtheluiz">Acessar perfil do Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/32724000?v=4" alt="Luiz Gustavo" />
              <div className="user-info">
                <strong>Luiz Gustavo</strong>
                <span>ReactJS, NodeJS, PHP</span>
              </div>
            </header>
            <p>Um Técnico em Informática para Internet entusiasmado com a tecnologia.</p>
            <a href="https://github.com/iamtheluiz">Acessar perfil do Github</a>
          </li>
        </ul>
      </main>
    </div>
  )
}

export default App;

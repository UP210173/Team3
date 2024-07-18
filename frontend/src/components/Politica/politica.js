import React from 'react';
import './politica.css';

const politica = (props) => {
  return (
    <div><p>Políticas</p></div>
  );
}
function Policy() {
  const policyContainer = document.createElement('div');
  policyContainer.className = 'policy-container';

  policyContainer.innerHTML = `
    <h1 class="policy-title">Política</h1>
    <section class="policy-section">
      <h2 class="policy-subtitle">Últimas Noticias de Política</h2>
      <div class="policy-news-list">
        ${generateNewsCard('Título de la noticia 1', 'Descripción de la noticia 1', 'path/to/image1.jpg')}
        ${generateNewsCard('Título de la noticia 2', 'Descripción de la noticia 2', 'path/to/image2.jpg')}
        ${generateNewsCard('Título de la noticia 3', 'Descripción de la noticia 3', 'path/to/image3.jpg')}
      </div>
    </section>
  `;

  return policyContainer;
}

function generateNewsCard(title, description, imageUrl) {
  return `
    <div class="policy-news-card">
      <div class="policy-news-image">
        <img src="${imageUrl}" alt="${title}">
      </div>
      <div class="policy-news-content">
        <h3 class="policy-news-title">${title}</h3>
        <p class="policy-news-text">${description}</p>
        <button class="policy-news-button">Leer más</button>
      </div>
    </div>
  `;
}

export default politica;
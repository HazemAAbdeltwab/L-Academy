class Articles {
  _articleContainer = document.querySelector('.article-wall');
  _artReadClick = document.querySelector('.art-info');
  _articles = [
    {
      title: 'Test Title 1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum odio repudiandae dolorum eum.',
      link: '#',
      fullText: 'Full article content for Test Title 1... More details here.',
    },
    {
      title: 'Test Title 2',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum odio repudiandae dolorum eum.',
      link: '#',
      fullText: 'Full article content for Test Title 2... More details here.',
    },
    {
      title: 'Test Title 3',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum odio repudiandae dolorum eum.',
      link: '#',
      fullText: 'Full article content for Test Title 3... More details here.',
    },
    {
      title: 'Test Title 4',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum odio repudiandae dolorum eum.',
      link: '#',
      fullText: 'Full article content for Test Title 4... More details here.',
    },
  ];

  // Method to create and display articles
  createArticles() {
    // Clear the container before adding articles
    this._articleContainer.innerHTML = '';

    // Loop through the articles array and create HTML elements dynamically
    this._articles.forEach(article => {
      // Generate markup for each article
      const articleBox = this._generateMarkup(article);
      // Append the generated markup to the article container
      this._articleContainer.insertAdjacentHTML('beforeend', articleBox);
    });

    // Add event listeners for "read more" links after the articles are rendered
    this._addReadMoreEventListeners();
  }

  // Generate HTML markup for each article
  _generateMarkup(article) {
    return `
      <div class="art-box">
        <div class="art-text pt-4">
          <h4>${article.title}</h4>
          <p>${article.description}</p>
        </div>
        <div class="art-info">
          <a href="#" data-title="${article.title}" data-fulltext="${article.fullText}">
            <h3>read more</h3>
            <i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
      </div>`;
  }

  // Add event listeners to "read more" links
  _addReadMoreEventListeners() {
    const readMoreLinks =
      this._articleContainer.querySelectorAll('.art-info a');

    readMoreLinks.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault(); // Prevent default anchor behavior
        this._showPopup(link); // Pass the clicked link directly
      });
    });
  }

  // Show a pop-up with the article's full text
  _showPopup(link) {
    const articleTitle = link.getAttribute('data-title');
    const articleFullText = link.getAttribute('data-fulltext');

    // Check if the data attributes are correctly captured
    console.log('Article Title:', articleTitle);
    console.log('Article Full Text:', articleFullText);

    // Create the modal/pop-up dynamically
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = `
      <div class="popup-content">
        <h2>${articleTitle}</h2>
        <p>${articleFullText}</p>
        <button class="close-popup">Close</button>
      </div>
    `;

    // Append the modal to the body
    document.body.appendChild(popup);

    // Add close functionality
    const closeButton = popup.querySelector('.close-popup');
    closeButton.addEventListener('click', () => {
      popup.remove();
    });
  }
}

export default new Articles();

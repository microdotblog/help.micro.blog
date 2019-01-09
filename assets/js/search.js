function search() {
  var searchForm = document.getElementById('search');
  var searchSubmit = document.getElementById('search-submit');

  var endpoint = searchForm.dataset.searchIndex;
  var pages = [];

  function findResults(termToMatch, pages) {
    return pages.filter(function (item) {
      var regex = new RegExp(termToMatch, 'gi');
      return item.title.match(regex) || item.content.match(regex);
    });
  }

  function displayResults(input) {
    var resultsArray = findResults(input, pages);

    var result = resultsArray.map(function (item) {
      var description = item.description || 'No description provided'
      var html = `
        <a class="form__option" href="${item.url}" aria-label="${item.title} - ${description}">
          <h3 class="form__option-title">${item.title}</h3>
          <p class="form__option-description">${description}</p>
        </a>
      `;

      return {
        value: item.title,
        html
      };
    });

    return result;
  }

  if (searchForm) {
    fetch(endpoint)
      .then(blob => blob.json())
      .then(data => pages.push(...data));

    searchForm.setAttribute('action', '#search');
    searchForm.removeAttribute('method');
    searchSubmit.parentNode.removeChild(searchSubmit);

    window.addEventListener('load', function () {
      var searchCombobox = new aria.Combobox(
        document.getElementById('search-combobox'),
        document.getElementById('search-input'),
        displayResults
      );
    });
  }
}

search();

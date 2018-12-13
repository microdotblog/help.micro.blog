function search() {
  var searchForm = document.getElementById('search');
  var searchInput = document.getElementById('search-input');
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
      var html = `
        <a href="${item.url}">
          <h3 class="form__option-title">${item.title}</h3>
          <p class="form__option-description">${item.description}</p>
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
      var searchCombobox = new aria.ListboxCombobox(
        document.getElementById('search-combobox'),
        searchInput,
        document.getElementById('search-listbox'),
        displayResults
      );
    });
  }
}

search();

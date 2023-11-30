async function loadPage(page)
{
    let response = await fetch(page);

    if(!response.ok)
    {
        console.log(`Failed to load page '${page}'.`)
        return;
    }

    let markdown = await response.text();
    document.getElementById('content').innerHTML = marked.parse(markdown);

    setHeaderIds();
}

function setHeaderIds()
{
    var headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

      // Iterate through each header
      headers.forEach(function(header) {
        // Get the content of the header
        var headerText = header.textContent || header.innerText;

        // Generate an ID based on the header content
        var headerId = headerText.toLowerCase().replace(/\s+/g, '-');

        // Set the generated ID as the header's id attribute
        header.id = headerId;
      });
}
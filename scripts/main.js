window.onresize = function()
{
    // Clear inline styles to fix media query.
    if(window.innerWidth > 800)
    {
        let sidebar = document.getElementById('sidebar');
        sidebar.style = '';
    }
}

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
    let headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

    // Iterate through each header
    headers.forEach(function(header) 
    {
        // Get the content of the header
        var headerText = header.textContent || header.innerText;

        // Generate an ID based on the header content
        var headerId = headerText.toLowerCase().replace(/\s+/g, '-');

        // Set the generated ID as the header's id attribute
        header.id = headerId;
    });
}

function toggleSidebar()
{
    let sidebar = document.getElementById('sidebar');
    let display = window.getComputedStyle(sidebar, null).getPropertyValue('display');
    sidebar.style.display = (display == 'none') ? 'flex' : 'none';
}
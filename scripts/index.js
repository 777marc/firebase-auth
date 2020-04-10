const guidesList = document.querySelector('.guides');

const setUpGuides = data => {
    let html = '';
    data.forEach(doc => {
        const guide = doc.data();
        const li = `
            <li>
                <div class="collapsible-header grey lighten-4">${guide.title}</div>
                <div class="collapsible-body white">${guide.description}</div>
            </li>
        `;
        html += li;
    });
    guidesList.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);

});
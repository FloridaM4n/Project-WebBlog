const openButton = document.getElementById('open-sidebar-button')
const navbar = document.getElementById('navbar')

const media = window.matchMedia("(width < 700px)")

media.addEventListener('change', (e) => updateNavbar(e))

function updateNavbar(e){
  const isMobile = e.matches
  console.log(isMobile)
  if(isMobile){
    navbar.setAttribute('inert', '')
  }
  else{
    // desktop device
    navbar.removeAttribute('inert')
  }
}

function openSidebar(){
  navbar.classList.add('show')
  openButton.setAttribute('aria-expanded', 'true')
  navbar.removeAttribute('inert')
}

function closeSidebar(){
  navbar.classList.remove('show')
  openButton.setAttribute('aria-expanded', 'false')
  navbar.setAttribute('inert', '')
}

// For Bookmark Links
// const navLinks = document.querySelectorAll('nav a')
// navLinks.forEach(link => {
//   link.addEventListener('click', () => {
//     closeSidebar()
//   })
// })

updateNavbar(media)

document.getElementById('myForm').addEventListener('submit', function(event) {
    // Allow the form to submit
    setTimeout(function() {
        var inputs = document.querySelectorAll('.textInput'); // Select all inputs with class "textInput"
        inputs.forEach(function(input) {
            input.value = ''; // Clear each input field
        });
    }, 10); // Small delay to ensure the form submission happens first
});

function showSearchResults() {
    var input = document.getElementById('searchInput');
    var filter = input.value.toLowerCase();
    var results = document.getElementById('searchResults');
    var clearButton = document.getElementById('clearButton');
    results.innerHTML = '';

    if (filter.length > 0) {
        results.style.display = 'block';
        clearButton.style.display = 'block';

        // Example search results with links
        var items = [
            { title: 'Akhir Pekan Impian Para Siswa: Antara Istirahat dan Aktivitas', url: '/blogpost.html' },
            { title: 'test', url: '/kosongan.html' }
        ];

        items.forEach(function(item) {
            if (item.title.toLowerCase().includes(filter)) {
                var resultItem = document.createElement('a');
                resultItem.href = item.url;
                resultItem.textContent = item.title;
                results.appendChild(resultItem);
            }
        });
    } else {
        results.style.display = 'none';
        clearButton.style.display = 'none';
    }
}

function clearSearch() {
    var input = document.getElementById('searchInput');
    input.value = '';
    var results = document.getElementById('searchResults');
    results.style.display = 'none';
    var clearButton = document.getElementById('clearButton');
    clearButton.style.display = 'none';
}

function openRandomPage() {
    var pages = [
        '/blogpost.html',
        '/kosongan.html'
    ];

    var randomPage = pages[Math.floor(Math.random() * pages.length)];
    window.location.href = randomPage;
}
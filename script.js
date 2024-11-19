document.addEventListener('DOMContentLoaded', function() {
    const poemContainer = document.getElementById('poem-container');

    // استيراد البيانات من ملف JSON (أو من API لاحقًا)
    fetch('data/poems.json')
        .then(response => response.json())
        .then(poems => {
            poems.forEach(poem => {
                const poemDiv = document.createElement('div');
                poemDiv.classList.add('poem');
                poemDiv.innerHTML = `
                    <h2>${poem.title}</h2>
                    <p class="author">${poem.author}</p>
                    <p class="content">${poem.content}</p>
                `;
                poemContainer.appendChild(poemDiv);
            });
        })
        .catch(error => console.log(error));
});


// إضافة تأثيرات تفاعلية مثل التمرير السلس أو التأثيرات عند التمرير على القصائد
document.addEventListener('DOMContentLoaded', function () {
    // إضافة تأثير التمرير السلس عند الضغط على الروابط
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });
});

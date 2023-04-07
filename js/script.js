fetch("https://picsum.photos/v2/list?page=2&limit=23")
        .then((response) => response.json())
        .then((data) => {
            let html = '';
    data.map(data => {
        let htmlSegment = `
        <div>
            <a data-lightbox="roadtrip" href="${data.download_url}">
                <img  src="${data.download_url}" >
            </a>
        </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
        });

    // Light Box init
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    })
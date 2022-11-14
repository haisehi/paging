// limit 6
// page 1: 0->5;
// page 2: 6->11;
// page 3: 12->17;

// pageBegin = limit *(page-1)
// pageEnd  = limit -1

let thisPage = 1;
let limit = 6;
let list = document.querySelectorAll('.list .item');

function loadItem() {
    let pageBegin = limit * (thisPage - 1);
    let pageEnd = limit * thisPage - 1;
    list.forEach((item, key) => {
        if (key >= pageBegin && key <= pageEnd) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
    listPage();
}
loadItem();
function listPage() {
    let count = Math.ceil(list.length / limit);
    document.querySelector('.listPage').innerHTML = '';

    if (thisPage != 1) {
        let prev = document.createElement('li');
        prev.innerText = 'PREV';
        prev.setAttribute('onclick', 'changePage(' + (thisPage - 1) + ')');
        document.querySelector('.listPage').appendChild(prev);
    }

    for (i = 1; i <= count; i++) {
        let newPage = document.createElement('li');
        newPage.innerHTML = i;
        if (i == thisPage) {
            newPage.classList.add('active');
        }
        newPage.setAttribute('onclick', 'changePage(' + i + ')');
        document.querySelector('.listPage').appendChild(newPage);
    }

    if (thisPage != count) {
        let Next = document.createElement('li');
        Next.innerText = 'NEXT';
        prev.setAttribute('onclick', 'changePage(' + (thisPage + 1) + ')');
        document.querySelector('.listPage').appendChild(Next);
    }
}
function changePage(i) {
    thisPage = i;
    loadItem();
}

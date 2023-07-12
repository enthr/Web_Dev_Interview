const box = document.getElementById('box');
const posts = document.createElement('div');

const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    console.log(data);
    data.map((post) => {
        const divElement = document.createElement('div');
        const h1Element = document.createElement('h1');
        const h4Element = document.createElement('h4');
        const pElement = document.createElement('p');

        divElement.id = `post-${post.id}`;
        h1Element.textContent = post.title;
        h4Element.textContent = post.userId;
        pElement.textContent = post.body;

        divElement.appendChild(h1Element);
        divElement.appendChild(h4Element);
        divElement.appendChild(pElement);

        posts.appendChild(divElement);
        posts.appendChild(document.createElement('hr'));
    });
    box.textContent = '';
    box.appendChild(posts);
};

setTimeout(() => {
    fetchPosts();
}, 3000);
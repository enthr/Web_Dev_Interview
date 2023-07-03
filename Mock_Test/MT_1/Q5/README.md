# Q5. Implement a CSS grid layout to display a gallery of images in a grid format for design refer the image shown below, replace the empty boxed with actual images


### Code


```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>CSS Grid Layout</title>
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <div class="container">
            <div class="child_1">
                <img src="https://img.freepik.com/premium-vector/victory-business-achievement-triumph-award-winning-accomplishment-leadership-success-determination-career-success-concept-cheerful-businessman-winner-raising-flag-winning-trophy_212586-2040.jpg?w=1380" alt="Image-1">
            </div>
            <div class="child_2">
                <img src="https://img.freepik.com/premium-vector/hand-drawn-people-working-together-illustration_52683-76157.jpg?w=1380" alt="Image-2">
            </div>
            <div class="child_3">
                <img src="https://img.freepik.com/free-vector/hand-drawn-media-naranja-illustration_23-2150074406.jpg?w=1380&t=st=1688383336~exp=1688383936~hmac=a3811cdfab8e2b60de839dd5ba19a84aa268d89f42b14a9126fd022e4dd0088d" alt="Image-3">
            </div>
            <div class="child_4">
                <img src="https://img.freepik.com/free-vector/hand-drawn-collage-background_23-2149590537.jpg?w=1380&t=st=1688383364~exp=1688383964~hmac=daee957b3624c7432fe7f892ffff69f8f950d7eda66e4e163f872f40c864f091" alt="Image-4">
            </div>
            <div class="child_5">
                <img src="https://img.freepik.com/free-vector/hand-drawn-doodle-background_23-2149974133.jpg?w=1380&t=st=1688383395~exp=1688383995~hmac=c866746f199f40b69f8165263af3b1c2eb7f4fa1fddbd629d4947c66c83e955b" alt="Image-5">
            </div>
            <div class="child_6">
                <img src="https://www.shutterstock.com/image-illustration/artistic-painting-concept-halloween-background-600w-2196248301.jpg" alt="Image-6">
            </div>
        </div>
    </body>
</html>
```


```css
.container {
    width: 99vw;
    height: 99vh;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6, 1fr);
    gap: 10px;
}

.container > div {
    width: 100%;
    height: 100%;
}

.container > div > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.child_1, .child_2, .child_3 {
    grid-column: span 2;
}

.child_1, .child_2 {
    grid-row: span 3;
}

.child_3 {
    grid-row: span 2;
}

.child_4, .child_6 {
    grid-column: span 2;
    grid-row: span 2;
}

.child_5 {
    grid-column: span 4;
    grid-row: span 3;
}
```


### Output


![Output](./output.png)
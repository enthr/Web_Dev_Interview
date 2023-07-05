# Assignment-1


## Q1. `<!DOCTYPE html>` is it a tag of html? If not, what is it and why do we use it?
### Ans.
- No it is not a HTML tag but a Document Type Declaration(DTD). 
- It is used as the first line of every HTML and XHTML page.
- It instructs and informs the web browsers about the version of HTML and which rendering mode to use so it can be parsed and rendered the same way by every browser.


## Q2. Explain Semantic tags in html? And why do we need it?
### Ans.
- In English The word “Semantic” means “The meaning of words and sentences”. 
- Same way semantic tags in HTML gives meaning or a role to the element which the tags wrap around. 
- It improves search engines capability of ranking our website better and improves accessibility for disabled people.


## Q3. Differentiate between HTML Tags and Elements ?
### Ans.
- Though HTML Tags and Elements are used interchangeably they have slightly different meanings.
- HTML Tags are markup elements used in HTML documents to define structure and content of a web page. They are enclosed in angle brackets(<>) and consist of an opening and a closing tag except self-closing tags. E.g. <p> is a tag
- HTML Elements are the building blocks of an HTML document. It consists of an opening tag, a closing tag, the content within that tag and the attributes of the specific tag. E.g. <p class=”top”>Hello</p> is a element

## Q4. Build Your Resume Using HTML Only.
### Ans.
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Jaimin Prajapati | HTML Resume</title>
    </head>
    <body>
        <header>
            <h1>Jaimin Prajapati</h1>
            <p>Full Stack Web Developer</p>
            <div>
                <span>+91-0000000000</span>
                &nbsp;|&nbsp;
                <span><a target="_blank" href="mailto:myemail@email.com">myemail@email.com</a></span>
                &nbsp;|&nbsp;
                <span>Gujarat, India</span>
            </div>
        </header>
        <br>
        <hr>
        <main>
            <section>
                <h2><mark>PROFILE</mark></h2>
                <article>
                    <details open>
                        <summary>I am a Full Stack Web Developer With 1 Year of Experience.</summary>
                        <ul>
                            <li><strong>Languages:</strong>&nbsp;JavaScript, Python, C++</li>
                            <li><strong>Frontend:</strong>&nbsp;HTML, CSS, Tailwind CSS, Material UI, Redux Toolkit, RTK Query, Zustand, SWR, TanStack Query(React Query), React.js</li>
                            <li><strong>Backend:</strong>&nbsp;Node.js, Express.js, Fastify, Mongoose, Knex</li>
                            <li><strong>Database:</strong>&nbsp;MongoDB, PostgreSQL</li>
                        </ul>
                    </details>
                </article>
            </section>
            <section>
                <h2><mark>EDUCATION</mark></h2>
                <article>
                    <details open>
                        <summary>B.E. in Computer Engineering</summary>
                        <ul>
                            <li><strong>College:</strong>&nbsp;LDRP Institute of Technology & Research</li>
                            <li><strong>Year:</strong>&nbsp;2019 - 2023</li>
                        </ul>
                    </details>
                </article>
            </section>
            <section>
                <h2><mark>PROJECTS</mark></h2>
                <article>
                    <details open>
                        <summary>The Movie DB</summary>
                        <ul>
                            <li><strong>Technologies:</strong>&nbsp;HTML, CSS, Material UI, JavaScript, Zustand, SWR, React Router</li>
                            <li><strong>Repo Link:</strong>&nbsp;<a target="_blank" href="https://github.com/enthr/Full_Stack_JavaScript/tree/main/4_React/Project-7_The_Movie_DB">https://github.com/enthr/Full_Stack_JavaScript/tree/main/4_React/Project-7_The_Movie_DB</a>
                            </li>
                            <li><strong>Live Link:</strong>&nbsp;<a target="_blank" href="#">Link</a></li>
                            <li><strong>Description:</strong>&nbsp;The uses Open Movie Database API to create a Personal Movie DB App which has three type of bookmark functionalities Favourites, Wishlist and Watched. It searches and filters data and then display data on movies and shows. It uses SWR for Autoatic Data Fetching and Refetching as well as revalidating and Caching the respective request data. It uses Zustant for State Management which provides Dark Mode Function, Bookmarks Function With persist middleware and Pagination Function.</li>
                        </ul>
                    </details>
                </article>
                <article>
                    <details open>
                        <summary>Pokedex</summary>
                        <ul>
                            <li><strong>Technologies:</strong>&nbsp;HTML, CSS, Tailwind CSS, JavaScript, React, React Router</li>
                            <li><strong>Repo Link:</strong>&nbsp;<a target="_blank" href="https://github.com/enthr/Full_Stack_JavaScript/tree/main/4_React/Project-6_Pokedex">https://github.com/enthr/Full_Stack_JavaScript/tree/main/4_React/Project-6_Pokedex</a></li>
                            <li><strong>Live Link:</strong>&nbsp;<a target="_blank" href="#">Link</a></li>
                            <li><strong>Description:</strong>&nbsp;Pokedex For Searching and Filtering Pokemon and Seeing Their Details. The App Uses The Fetch API to fetch data from The Pokemon API and The Context API for State Management.</li>
                        </ul>
                    </details>
                </article>
                <article>
                    <details open>
                        <summary>The Meal DB</summary>
                        <ul>
                            <li><strong>Technologies:</strong>&nbsp;HTML, CSS, Tailwind CSS, JavaScript, React, React Router, React Spinners TanStack Query(React Query)</li>
                            <li><strong>Repo Link:</strong>&nbsp;<a target="_blank" href="https://github.com/enthr/Full_Stack_JavaScript/tree/main/4_React/Project-5_The_Meal_DB">https://github.com/enthr/Full_Stack_JavaScript/tree/main/4_React/Project-5_The_Meal_DB</a></li>
                            <li><strong>Live Link:</strong>&nbsp;<a target="_blank" href="#">Link</a></li>
                            <li><strong>Description:</strong>&nbsp;A Meal Recipe App Which Uses The Meal DB API. It has Light and Dark Mode. It uses TanStack Query aka React Query For Automatic Fetching and Refetching as well as Caching and Revalidating The Data Fetched From The API. It Uses The New Data Router Provided By React Router v6.4 for Instructing when to Fetch The Data.</li>
                        </ul>
                    </details>
                </article>
                <article>
                    <details open>
                        <summary>Rock, Paper, Scissors</summary>
                        <ul>
                            <li><strong>Technologies:</strong>&nbsp;HTML, CSS, Tailwind CSS, React, React-Hot-Toast, React Icons</li>
                            <li><strong>Repo Link:</strong>&nbsp;<a target="_blank"  href="https://github.com/enthr/Full_Stack_JavaScript/tree/main/4_React/Project-4_Rock_Paper_Scissors">https://github.com/enthr/Full_Stack_JavaScript/tree/main/4_React/Project-4_Rock_Paper_Scissors</a></li>
                            <li><strong>Live Link:</strong>&nbsp;<a target="_blank" href="#">Link</a></li>
                            <li><strong>Description:</strong>&nbsp;A Rock, Paper and Scissors Game Which Uses Suspense for Async UI Loading and Lazy loading. It has Dark Mode and Light Mode. Computer Selects random choice from 3 moves.</li>
                        </ul>
                    </details>
                </article>
                <article>
                    <details open>
                        <summary>Tic Tac Toe</summary>
                        <ul>
                            <li><strong>Technologies:</strong>&nbsp;HTML, CSS, Tailwind CSS, JavaScript, React, React-Hot-Toast, mdi-react</li>
                            <li><strong>Repo Link:</strong>&nbsp;<a target="_blank" href="https://github.com/enthr/Full_Stack_JavaScript/tree/main/4_React/Project-3_Tic_Tac_Toe">https://github.com/enthr/Full_Stack_JavaScript/tree/main/4_React/Project-3_Tic_Tac_Toe</a>
                            </li>
                            <li><strong>Live Link:</strong>&nbsp;<a target="_blank" href="#">Link</a></li>
                            <li><strong>Description:</strong>&nbsp;A Tic Tac Toe Game with Two AI Player Mode Easy AI and Hard AI. In Easy AI mode opponent select random moves. In Hard AI mode opponent will use the minimax algorith which is a recusrion based algorithm to calculate the next best move and choose that move. It has Dark Mode and Light Mode and Uses Context API for State Management.</li>
                        </ul>
                    </details>
                </article>
                <article>
                    <details open>
                        <summary>Weather App</summary>
                        <ul>
                            <li><strong>Technologies:</strong>&nbsp;HTML, CSS, Tailwind CSS, JavaScript</li>
                            <li><strong>Repo Link:</strong>&nbsp;<a target="_blank" href="https://github.com/enthr/Full_Stack_JavaScript/tree/main/3_JavaScript/3_Weather_App">https://github.com/enthr/Full_Stack_JavaScript/tree/main/3_JavaScript/3_Weather_App</a>
                            </li>
                            <li><strong>Live Link:</strong>&nbsp;<a target="_blank" href="#">Link</a></li>
                            <li><strong>Description:</strong>&nbsp;A Weathr App using HTML, Tailwind CSS, JavaScript which uses API from weatherapi.com.</li>
                        </ul>
                    </details>
                </article>
                <article>
                    <details open>
                        <summary>Tailwind Landing Pages</summary>
                        <ul>
                            <li><strong>Technologies:</strong>&nbsp;HTML, CSS, Tailwind CSS</li>
                            <li><strong>Repo Link:</strong>&nbsp;<a target="_blank" href="https://github.com/enthr/Full_Stack_JavaScript/tree/main/2_Tailwind">https://github.com/enthr/Full_Stack_JavaScript/tree/main/2_Tailwind</a>
                            </li>
                            <li><strong>Live Link:</strong>&nbsp;<a target="_blank" href="https://enthr.github.io/Tailwind_Projects">https://enthr.github.io/Tailwind_Projects</a>
                            </li>
                            <li><strong>Description:</strong>&nbsp;Landing Pages For Different Websites built using HTML and Tailwind CSS.</li>
                        </ul>
                    </details>
                </article>
                <article>
                    <details open>
                        <summary>Hero Sections</summary>
                        <ul>
                            <li><strong>Technologies:</strong>&nbsp;HTML, CSS</li>
                            <li><strong>Repo Link:</strong>&nbsp;<a target="_blank" href="https://github.com/enthr/Hero_Sections">https://github.com/enthr/Hero_Sections</a>
                            </li>
                            <li><strong>Live Link:</strong>&nbsp;<a target="_blank" href="https://enthr.github.io/Hero_Sections/">https://enthr.github.io/Hero_Sections/</a>
                            </li>
                            <li><strong>Description:</strong>&nbsp;Hero Sections For Websites built using HTML5 and CSS3.</li>
                        </ul>
                    </details>
                </article>
            </section>
            <section>
                <h2><mark>INTERNSHIPS</mark></h2>
                <article>
                    <details open>
                        <summary>Frontend Web Developer Intern</summary>
                        <ul>
                            <li><strong>Company:</strong>&nbsp;iNeuron</li>
                            <li><strong>Duration:</strong>&nbsp;April 2023 - June 2023</li>
                            <li><strong>Role:</strong>&nbsp;Frontend Web Developer - Intern</li>
                            <li><strong>Technologies:</strong>&nbsp;HTML, CSS, JavaScript, React.js</li>
                        </ul>
                    </details>
                </article>
                <article>
                    <details open>
                        <summary>Full Stack Web Developer Intern</summary>
                        <ul>
                            <li><strong>Company:</strong>&nbsp;Tatvasoft</li>
                            <li><strong>Duration:</strong>&nbsp;May 2022 - June 2022</li>
                            <li><strong>Role:</strong>&nbsp;Full Stack Web Developer - Intern</li>
                            <li><strong>Technologies:</strong>&nbsp;HTML, CSS, JavaScript, React.js, TypScript, C#, .NET, PostgreSQL</li>
                        </ul>
                    </details>
                </article>
            </section>
            <section>
                <h2><mark>CERTIFICATIONS</mark></h2>
                <div>
                    <span>
                        <article>
                            <details open>
                                <summary>Python For Data Science</summary>
                                <ul>
                                    <li><strong>Issued By:</strong>&nbsp;NPTEL</li>
                                    <li><strong>Issued On:</strong>&nbsp;February 2022</li>
                                </ul>
                            </details>
                        </article>
                    </span>
                    <span>
                        <article>
                            <details open>
                                <summary>Full Stack MERN Bootcamp</summary>
                                <ul>
                                    <li><strong>Issued By:</strong>&nbsp;LearnCodeOnline.in</li>
                                    <li><strong>Issued On:</strong>&nbsp;April 2022</li>
                                </ul>
                            </details>
                        </article>
                    </span>
                </div>
            </section>
        </main>
        <br>
        <hr>
        <footer>
            <p>© 2023 Jaimin Prajapati</p>
        </footer>
    </body>
</html>
```

## Q5. Write HTML code so that it looks like the below image
### Ans.
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Q5 HTMl From Image</title>
    </head>
    <body>
        <main>
            <section>
                <img src="https://github.com/enthr/Placement_Assignment_Jaimin_Prajapati/blob/main/HTML_QUESTIONS/Q5_HTML_From_Image/Image.png?raw=true" alt="Image">
            </section>

            <br>
            <br>

            <section>
                <p>We will be learning the following things this week:</p>
                <br>
                <br>
                <table>
                    <thead>
                        <th>Day 1</th>
                        <th>Day 2</th>
                        <th>Day 3</th>
                        <th>Day 4</th>  
                    </thead>
                    <tbody>
                        <tr>
                            <td>Linux 1</td>
                            <td>HTML</td>
                            <td>Linux 2</td>
                            <td>Linux 3</td>
                        </tr>
                        <tr>
                            <td>GIT 1</td>
                            <td>CSS</td>
                            <td>GIT 2</td>
                            <td>Bootstrap</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section>
                <p>If you want to contact me, please fill this form:</p>
                <form>
                    <div>
                        <label for="Name">Name:</label>
                        <input type="text">
                    </div>
                    <div>
                        <label for="Phone">Phone No.</label>
                        <input type="tel">
                    </div>
                    <div>
                        <label for="Email">Email:</label>
                        <input type="email">
                    </div>
                </form>
            </section>

            <br>
            <br>

            <section>
                <h3>The following things are important to be a programmer</h3>
                <ul>
                    <li>A problem solving mindset</li>
                    <li>Consistency</li>
                    <ul>
                        <li>Clean</li>
                        <li>Thorough knowledge of core concepts</li>
                        <li>Readable Code</li>
                    </ul>
                    <li>Speed</li>
                </ul>
            </section>
        </main>
    </body>
</html>
```


## Q6. What are some of the advantages of HTML5 over its previous versions?
### Ans.
- Better Multimedia support. E.g., Introduction of `<audio>`and `<video>` elements.
- Richer Semantics with Introduction of Semantic Elements.
- Improved forms with new form and input elements and corresponding attributes. E.g., `<input type=”date” required>`
- Better Performance and Compatibility. It is designed to be more efficient than previous versions and with mobile devices in mind to be more compatible.
- Better accessibility by supporting screen readers and assistive technologies for people with disabilities.


## Q7. Create a simple Music player using html only
### Ans.
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>HTML Music Player</title>
    </head>
    <body>
        <h1>Music Player</h1>
        <audio src="https://github.com/enthr/Placement_Assignment_Jaimin_Prajapati/blob/main/HTML_QUESTIONS/Q7_HTML_Music_Player/sample.mp3?raw=true" controls></audio>
        <h3>Song Title: Leva - Eternity</h3>
        <h4>lemonmusicstudio</h4>
    </body>
</html>
```


## Q8. What is the difference between `<figure>` tag and `<img>` tag?
### Ans.
- `<img>` tag is used for simply displaying an image whereas the `<figure>` tag is used to semantically organize images and its related contents such as captions and descriptions.

## Q9. What’s the difference between html tag and attribute and give example of some global attributes?
### Ans.
- HTML Tags mark the beginning and end of a HTML element, while attributes provide additional information about an Element.
- Some Global Attributes are: class, id, style, title, data.


## Q10. Write Html code so that it looks like the below image.
### Ans.
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>HTML Table From Image</title>
    </head>
    <body>
        <table border="1">
            <thead>
                <tr>
                    <th rowspan="3">Day</th>
                    <th colspan="4">Seminar</th>
                </tr>
                <tr>
                    <th colspan="2">Schedule</th>
                    <th rowspan="2">Topic</th>
                </tr>
                <tr>
                    <th>Begin</th>
                    <th>End</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td rowspan="2">Monday</td>
                    <td rowspan="2">8:00 a.m.</td>
                    <td rowspan="2">5:00 p.pm</td>
                    <td>Introduction To XML</td>
                </tr>
                <tr>
                    <td>Validity: DTD and Relax NG</td>
                </tr>
                <tr>
                    <td rowspan="6">Tuesday</td>
                    <td rowspan="2">8:00 a.m.</td>
                    <td rowspan="2">11:00 a.m.</td>
                    <td rowspan="3">XPath</td>
                </tr>
                <tr></tr>
                <tr>
                    <td rowspan="2">11:00 a.m.</td>
                    <td rowspan="2">2:00 p.m.</td>
                </tr>
                <tr>
                    <td rowspan="3">XSL Transformations</td>
                </tr>
                <tr>
                    <td rowspan="2">2:00 p.m.</td>
                    <td rowspan="2">5:00 p.m.</td>
                </tr>
                <tr></tr>
                <tr>
                    <td>Wednesday</td>
                    <td>8:00 a.m.</td>
                    <td>12:00 p.m.</td>
                    <td>XSL Formatting Objects</td>
                </tr>
            </tbody>
        </table>
    </body>
</html>
```
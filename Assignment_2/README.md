# Assignment-2

## Q1. What’s Box Model in CSS ?
### Ans.
- The Box Model in CSS is a Model For Representing each HTML Element of a document tree as zero or more rectangular boxes. Or in layman’s terms it is a way of representing HTML elements in CSS.
- It helps the browser's user agent to process the HTML document tree for visual media.


## Q2. What are the Different Types of Selectors in CSS & what are the advantages of them?
### Ans.
- There are mainly 9 types of CSS selectors. They are as follows
  1. Universal Selector (* { /*CSS Rules*/ })
  2. Individual Selector ([tag name] { /*CSS Rules*/ })
  3. Class Selector and ID Selector (.[class name] {/*CSS Rules*/}, #[id name] {/*CSS Rules*/})
  4. And or Chained Selector (.[class name]#[id name] {/*CSS Rules*/})
  5. Combined Selector ([Tag/Class/Id - Name], [Tag/Class/Id - Name] { /* CSS Rules */ })
  6. Inside Element Selector ([tag name] [tag name]... { /*CSS Rules*/ })
  7. Direct Child Selector ([Tag/Class/Id - Name] > [Tag/Class/Id - Name] { /* CSS Rules */ })
  8. Sibling Selector ([Tag/Class/Id] + [Tag/Class/Id] { /* CSS Rules */ })
  9. Attribute Selector ([tag name][attribute] {/*CSS Rules*/})
- Each different selector has its own use case and advantages. Universal Selector is used for providing baseline default styles. Individual, Class and ID selector are used most commonly used since they are simple to work with.
- But when needed Combined, Inside, Direct Child, Sibling and Attribute Selector provide the selecting capabilities to create and style a complex layout.
- CSS Selectors provide Flexibility, Reusability, Specificity and Consistency. 


## Q3. What is VW/VH ?
### Ans.
- Viewport Width(VW) and Viewport Height(VH) are relative units of measurement representing 1% of the width of viewport and 1% of the height of viewport respectively. 
- Whereas a Pixel(PX) represents an absolute unit of measurement which corresponds to each pixel of a display screen.


## Q4. Whats difference between Inline, Inline Block and block ?
### Ans.
- **Inline Elements** are rendered as inline and do not create line breaks. They occupy as much horizontal space as necessary. They do not have width or height and do not respect top and bottom margins. They cannot be floated and cleared. E.g. `<span>`
- **Inline Block Elements** also do not create line breaks but they can have height, width, margin, padding. They respect top and bottom margins. They can be floated and cleared. E.g. `<img>`
- **Block Elements** are rendered as block and start on a new line. They occupy the full width of their parent container by default. They have width, height, padding and margin properties. They can be floated and cleared. They create a line break before and after itself. Forming a separate block. E.g., `<p>`


## Q5. How is Border-box different from Content Box?
### Ans.
- When box-sizing property is set to border-box it takes into account the border and padding of the element when calculating the width and height or size of the element.
- Whereas when box-sizing property is set to content-box it does not include border and padding of the element when calculating the width and height or size of the element.
- By default box-sizing is set to content-box by browsers.


## Q6. What’s z-index and How does it Function ?
### Ans.
- The z-index is a property in CSS which is used for controlling the stacking order of positioned elements for creating visually appealing websites.
- It determines how elements are going to be stacked which have positions other than ‘static’. E.g., absolute, relative, fixed etc. It has no effect on statically positioned elements.
- It accepts a numerical value and elements with the higher values will be rendered in front of elements with lower values along the z-axis. 
- If two elements have the same z-index value then their stacking order will be determined by their position in the HTML structure(The elements at the bottom will be rendered on top).
- It creates a default stacking context where elements within the same stacking context are stacked relative to each other. For each positioned element on which z-index is used its child elements are rendered on top of their parent.


## Q7. What’s Grid & Flex and difference between them?
### Ans.
- CSS Grid and Flexbox(Flexible Box Layout) are CSS layout systems that allow us to control the way elements are displayed on the webpage. They help in creating responsive and flexible web layouts.
- Flexbox is one-dimensional and can operate in one direction at a time either row or column. It has a main axis along the row or column and a cross axis which is perpendicular to the main axis.
- Flexbox provides flexible and dynamic sizing and positioning of elements. It offers powerful alignment options to align along the main and cross axis.
- CSS Grid is two-dimensional and can operate on row and column at the same time. This allows us to define rows and columns to create a grid structure.
- CSS Grid uses grid lines to define boundaries of rows and columns and grid tracks to represent the space between these lines.
- CSS Grid provides explicit control over the grid structure allowing you to define the size and position of each row and column. It offers precise control over placement and positioning of grid items inside grid cells.
- In Summary, Flexbox is 1D and CSS Grid is 2D. Flexbox offers powerful alignment options and CSS Grid offers powerful positioning options.


## Q8. Difference between absolute and relative and sticky and fixed position explain with example.
### Ans.
- Difference between absolute, relative, sticky and fixed position is as follows:
- Example Code: ![Github Link](https://github.com/enthr/Placement_Assignment_Jaimin_Prajapati/tree/main/CSS_QUESTIONS/Q8_CSS_Positions)
- As shown in example, An absolute element is taken out of normal document flow and positioned relative to a containing block.
- A relative element is positioned relative to its original position. It does not get taken out of normal document flow.
- A fixed element is positioned relative to the initial containing block established by the viewport. It will stay in the same position when the page is scrolled. It is removed from the normal document flow.
- A sticky element is positioned according to the normal flow of the document. And on page scroll offset relative to its nearest scrolling ancestor and containing block. It starts as a relative element and then behaves like a fixed element.


## Q9. Build Periodic Table as shown in the below image.
### Ans.
- HTML
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Periodic Table</title>
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <header class="header">
            <h1 class="header__h1">PERIODIC TABLE</h1>
        </header>
        <main class="main">
            <div class="main__table-container">
                <table class="main__table">
                    <thead>
                        <!-- Row - 1 -->
                        <tr>
                            <th class="main__table-head">
                                <div>
                                    <p>Group &rarr;</p>
                                    <p>Period &darr;</p>
                                </div>
                            </th>
                            <th class="main__table-head">1</th>
                            <th class="main__table-head">2</th>
                            <th></th>
                            <th class="main__table-head">3</th>
                            <th class="main__table-head">4</th>
                            <th class="main__table-head">5</th>
                            <th class="main__table-head">6</th>
                            <th class="main__table-head">7</th>
                            <th class="main__table-head">8</th>
                            <th class="main__table-head">9</th>
                            <th class="main__table-head">10</th>
                            <th class="main__table-head">11</th>
                            <th class="main__table-head">12</th>
                            <th class="main__table-head">13</th>
                            <th class="main__table-head">14</th>
                            <th class="main__table-head">15</th>
                            <th class="main__table-head">16</th>
                            <th class="main__table-head">17</th>
                            <th class="main__table-head">18</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Row - 2 -->
                        <tr>
                            <td class="main__table-numcol">1</td>
                            <td class="main__table-red">
                                <div>
                                    <p>1</p>
                                    <p>H</p>
                                </div>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td class="main__table-red">
                                <div>
                                    <p>2</p>
                                    <p>He</p>
                                </div>
                            </td>
                        </tr>
    
                        <!-- Row - 3 -->
                        <tr>
                            <td class="main__table-numcol">2</td>
                            <td class="main__table-red">
                                <div>
                                    <p>3</p>
                                    <p>Li</p>
                                </div>
                            </td>
                            <td class="main__table-red">
                                <div>
                                    <p>4</p>
                                    <p>Be</p>
                                </div>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td class="main__table-yellow">
                                <div>
                                    <p>5</p>
                                    <p>B</p>
                                </div>
                            </td>
                            <td class="main__table-yellow">
                                <div>
                                    <p>6</p>
                                    <p>C</p>
                                </div>
                            </td>
                            <td class="main__table-yellow">
                                <div>
                                    <p>7</p>
                                    <p>N</p>
                                </div>
                            </td>
                            <td class="main__table-yellow">
                                <div>
                                    <p>8</p>
                                    <p>O</p>
                                </div>
                            </td>
                            <td class="main__table-yellow">
                                <div>
                                    <p>9</p>
                                    <p>F</p>
                                </div>
                            </td>
                            <td class="main__table-yellow">
                                <div>
                                    <p>10</p>
                                    <p>Ne</p>
                                </div>
                            </td>
                        </tr>
    
                        <!-- Row - 4 -->
                        <tr>
                            <td class="main__table-numcol">3</td>
                            <td class="main__table-red">
                                <div>
                                    <p>11</p>
                                    <p>Na</p>
                                </div>
                            </td>
                            <td class="main__table-red">
                                <div>
                                    <p>12</p>
                                    <p>Mg</p>
                                </div>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td class="main__table-yellow">
                                <div>
                                    <p>13</p>
                                    <p>Al</p>
                                </div>
                            </td>
                            <td class="main__table-yellow">
                                <div>
                                    <p>14</p>
                                    <p>Si</p>
                                </div>
                            </td>
                            <td class="main__table-yellow">
                                <div>
                                    <p>15</p>
                                    <p>P</p>
                                </div>
                            </td>
                            <td class="main__table-yellow">
                                <div>
                                    <p>16</p>
                                    <p>S</p>
                                </div>
                            </td>
                            <td class="main__table-yellow">
                                <div>
                                    <p>17</p>
                                    <p>Cl</p>
                                </div>
                            </td>
                            <td class="main__table-yellow">
                                <div>
                                    <p>18</p>
                                    <p>Ar</p>
                                </div>
                            </td>
                        </tr>
    
                        <!-- Row - 5 -->
                        <tr>
                            <td class="main__table-numcol">4</td>
                            <td class="main__table-red">
                                <div>
                                    <p>19</p>
                                    <p>K</p>
                                </div>
                            </td>
                            <td class="main__table-red">
                                <div>
                                    <p>20</p>
                                    <p>Ca</p>
                                </div>
                            </td>
                            <td></td>
                            <td class="main__table-blue">
                                <div>
                                    <p>21</p>
                                    <p>Sc</p>
                                </div>
                            </td>
                            <td class="main__table-blue">
                                <div>
                                    <p>22</p>
                                    <p>Ti</p>
                                </div>
                            </td>
                            <td class="main__table-blue">
                                <div>
                                    <p>23</p>
                                    <p>V</p>
                                </div>
                            </td>
                            <td class="main__table-blue">
                                <div>
                                    <p>24</p>
                                    <p>Cr</p>
                                </div>
                            </td>
                            <td class="main__table-blue">
                                <div>
                                    <p>25</p>
                                    <p>Mn</p>
                                </div>
                            </td>
                            <td class="main__table-blue">
                                <div>
                                    <p>26</p>
                                    <p>Fe</p>
                                </div>
                            </td>
                            <td class="main__table-blue">
                                <div>
                                    <p>27</p>
                                    <p>Co</p>
                                </div>
                            </td>
                            <td class="main__table-blue">
                                <div>
                                    <p>28</p>
                                    <p>Ni</p>
                                </div>
                            </td>
                            <td class="main__table-blue">
                                <div>
                                    <p>29</p>
                                    <p>Cu</p>
                                </div>
                            </td>
                            <td class="main__table-blue">
                                <div>
                                    <p>30</p>
                                    <p>Zn</p>
                                </div>
                            </td>
                            <td class="main__table-yellow">
                                <div>
                                    <p>31</p>
                                    <p>Ga</p>
                                </div>
                            </td>
                            <td class="main__table-yellow">
                                <div>
                                    <p>32</p>
                                    <p>Ge</p>
                                </div>
                            </td>
                            <td class="main__table-yellow">
                                <div>
                                    <p>33</p>
                                    <p>As</p>
                                </div>
                            </td>
                            <td class="main__table-yellow">
                                <div>
                                    <p>34</p>
                                    <p>Se</p>
                                </div>
                            </td>
                            <td class="main__table-yellow">
                                <div>
                                    <p>35</p>
                                    <p>Br</p>
                                </div>
                            </td>
                            <td class="main__table-yellow">
                                <div>
                                    <p>36</p>
                                    <p>Kr</p>
                                </div>
                            </td>
                        </tr>
    
                        <!-- Row - 6 -->
                        <tr>
                            <td class="main__table-numcol">5</td>
                            <td class="main__table-red">
                                <div>
                                    <p>37</p>
                                    <p>Rb</p>
                                </div>
                            </td>
                            <td class="main__table-red">
                                <div>
                                    <p>38</p>
                                    <p>Sr</p>
                                </div>
                            </td>
                            <td></td>
                            <td class="main__table-blue">
                                <div>
                                    <p>39</p>
                                    <p>Y</p>
                                </div>
                            </td>
                            <td class="main__table-blue">
                                <div>
                                    <p>40</p>
                                    <p>Zr</p>
                                </div>
                            </td>
                            <td class="main__table-blue">
                                <div>
                                    <p>41</p>
                                    <p>Nb</p>
                                </div>
                            </td>
                            <td class="main__table-blue">
                                <div>
                                    <p>42</p>
                                    <p>Mo</p>
                                </div>
                            </td>
                            <td class="main__table-blue">
                                <div>
                                    <p>43</p>
                                    <p>Tc</p>
                                </div>
                            </td>
                            <td class="main__table-blue">
                                <div>
                                    <p>44</p>
                                    <p>Ru</p>
                                </div>
                            </td>
                            <td class="main__table-blue">
                                <div>
                                    <p>45</p>
                                    <p>Rh</p>
                                </div>
                            </td>
                            <td class="main__table-blue">
                                <div>
                                    <p>46</p>
                                    <p>Pd</p>
                                </div>
                            </td>
                            <td class="main__table-blue">
                                <div>
                                    <p>47</p>
                                    <p>Ag</p>
                                </div>
                            </td>
                            <td class="main__table-blue">
                                <div>
                                    <p>48</p>
                                    <p>Cd</p>
                                </div>
                            </td>
                            <td class="main__table-yellow">
                                <div>
                                    <p>49</p>
                                    <p>In</p>
                                </div>
                            </td>
                            <td class="main__table-yellow">
                                <div>
                                    <p>50</p>
                                    <p>Sn</p>
                                </div>
                            </td>
                            <td class="main__table-yellow">
                                <div>
                                    <p>51</p>
                                    <p>Sb</p>
                                </div>
                            </td>
                            <td class="main__table-yellow">
                                <div>
                                    <p>52</p>
                                    <p>Te</p>
                                </div>
                            </td>
                            <td class="main__table-yellow">
                                <div>
                                    <p>53</p>
                                    <p>I</p>
                                </div>
                            </td>
                            <td class="main__table-yellow">
                                <div>
                                    <p>54</p>
                                    <p>Xe</p>
                                </div>
                            </td>
                        </tr>
    
                        <!-- Row - 7 -->
                        <tr>
                            <td class="main__table-numcol">6</td>
                            <td class="main__table-red">
                                <div>
                                    <p>55</p>
                                    <p>Cs</p>
                                </div>
                            </td>
                            <td class="main__table-red">
                                <div>
                                    <p>56</p>
                                    <p>Ba</p>
                                </div>
                            </td>
                            <td>*</td>
                            <td class="main__table-blue">
                                <div>
                                    <p>71</p>
                                    <p>Lu</p>
                                </div>
                            </td>
                            <td class="main__table-blue">
                                <div>
                                    <p>72</p>
                                    <p>Hf</p>
                                </div>
                            </td>
                            <td class="main__table-blue">
                                <div>
                                    <p>73</p>
                                    <p>Ta</p>
                                </div>
                            </td>
                            <td class="main__table-blue">
                                <div>
                                    <p>74</p>
                                    <p>W</p>
                                </div>
                            </td>
                            <td class="main__table-blue">
                                <div>
                                    <p>75</p>
                                    <p>Re</p>
                                </div>
                            </td>
                            <td class="main__table-blue">
                                <div>
                                    <p>76</p>
                                    <p>Os</p>
                                </div>
                            </td>
                            <td class="main__table-blue">
                                <div>
                                    <p>77</p>
                                    <p>Ir</p>
                                </div>
                            </td>
                            <td class="main__table-blue">
                                <div>
                                    <p>78</p>
                                    <p>Pt</p>
                                </div>
                            </td>
                            <td class="main__table-blue">
                                <div>
                                    <p>79</p>
                                    <p>Au</p>
                                </div>
                            </td>
                            <td class="main__table-blue">
                                <div>
                                    <p>80</p>
                                    <p>Hg</p>
                                </div>
                            </td>
                            <td class="main__table-yellow">
                                <div>
                                    <p>81</p>
                                    <p>Tl</p>
                                </div>
                            </td>
                            <td class="main__table-yellow">
                                <div>
                                    <p>82</p>
                                    <p>Pb</p>
                                </div>
                            </td>
                            <td class="main__table-yellow">
                                <div>
                                    <p>83</p>
                                    <p>Bi</p>
                                </div>
                            </td>
                            <td class="main__table-yellow">
                                <div>
                                    <p>84</p>
                                    <p>Po</p>
                                </div>
                            </td>
                            <td class="main__table-yellow">
                                <div>
                                    <p>85</p>
                                    <p>At</p>
                                </div>
                            </td>
                            <td class="main__table-yellow">
                                <div>
                                    <p>86</p>
                                    <p>Rn</p>
                                </div>
                            </td>
                        </tr>
    
                        <!-- Row - 8 -->
                        <tr>
                            <td class="main__table-numcol">7</td>
                            <td class="main__table-red">
                                <div>
                                    <p>87</p>
                                    <p>Fr</p>
                                </div>
                            </td>
                            <td class="main__table-red">
                                <div>
                                    <p>88</p>
                                    <p>Ra</p>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <p>*</p>
                                    <p>*</p>
                                </div>
                            </td>
                            <td class="main__table-blue">
                                <div>
                                    <p>103</p>
                                    <p>Lr</p>
                                </div>
                            </td>
                            <td class="main__table-blue">
                                <div>
                                    <p>104</p>
                                    <p>Rf</p>
                                </div>
                            </td>
                            <td class="main__table-blue">
                                <div>
                                    <p>105</p>
                                    <p>Db</p>
                                </div>
                            </td>
                            <td class="main__table-blue">
                                <div>
                                    <p>106</p>
                                    <p>Sg</p>
                                </div>
                            </td>
                            <td class="main__table-blue">
                                <div>
                                    <p>107</p>
                                    <p>Bh</p>
                                </div>
                            </td>
                            <td class="main__table-blue">
                                <div>
                                    <p>108</p>
                                    <p>Hs</p>
                                </div>
                            </td>
                            <td class="main__table-blue">
                                <div>
                                    <p>109</p>
                                    <p>Mt</p>
                                </div>
                            </td>
                            <td class="main__table-blue">
                                <div>
                                    <p>110</p>
                                    <p>Ds</p>
                                </div>
                            </td>
                            <td class="main__table-blue">
                                <div>
                                    <p>111</p>
                                    <p>Rg</p>
                                </div>
                            </td>
                            <td class="main__table-blue">
                                <div>
                                    <p>112</p>
                                    <p>Cn</p>
                                </div>
                            </td>
                            <td class="main__table-yellow">
                                <div>
                                    <p>113</p>
                                    <p>Nh</p>
                                </div>
                            </td>
                            <td class="main__table-yellow">
                                <div>
                                    <p>114</p>
                                    <p>Fl</p>
                                </div>
                            </td>
                            <td class="main__table-yellow">
                                <div>
                                    <p>115</p>
                                    <p>Mc</p>
                                </div>
                            </td>
                            <td class="main__table-yellow">
                                <div>
                                    <p>116</p>
                                    <p>Lv</p>
                                </div>
                            </td>
                            <td class="main__table-yellow">
                                <div>
                                    <p>117</p>
                                    <p>Ts</p>
                                </div>
                            </td>
                            <td class="main__table-yellow">
                                <div>
                                    <p>118</p>
                                    <p>Og</p>
                                </div>
                            </td>
                        </tr>
    
                        <!-- Row - 9 -->
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>*</td>
                            <td class="main__table-green">
                                <div>
                                    <p>57</p>
                                    <p>La</p>
                                </div>
                            </td>
                            <td class="main__table-green">
                                <div>
                                    <p>58</p>
                                    <p>Ce</p>
                                </div>
                            </td>
                            <td class="main__table-green">
                                <div>
                                    <p>59</p>
                                    <p>Pr</p>
                                </div>
                            </td>
                            <td class="main__table-green">
                                <div>
                                    <p>60</p>
                                    <p>Nd</p>
                                </div>
                            </td>
                            <td class="main__table-green">
                                <div>
                                    <p>61</p>
                                    <p>Pm</p>
                                </div>
                            </td>
                            <td class="main__table-green">
                                <div>
                                    <p>62</p>
                                    <p>Sm</p>
                                </div>
                            </td>
                            <td class="main__table-green">
                                <div>
                                    <p>63</p>
                                    <p>Eu</p>
                                </div>
                            </td>
                            <td class="main__table-green">
                                <div>
                                    <p>64</p>
                                    <p>Gd</p>
                                </div>
                            </td>
                            <td class="main__table-green">
                                <div>
                                    <p>65</p>
                                    <p>Tb</p>
                                </div>
                            </td>
                            <td class="main__table-green">
                                <div>
                                    <p>66</p>
                                    <p>Dy</p>
                                </div>
                            </td>
                            <td class="main__table-green">
                                <div>
                                    <p>67</p>
                                    <p>Ho</p>
                                </div>
                            </td>
                            <td class="main__table-green">
                                <div>
                                    <p>68</p>
                                    <p>Er</p>
                                </div>
                            </td>
                            <td class="main__table-green">
                                <div>
                                    <p>69</p>
                                    <p>Tm</p>
                                </div>
                            </td>
                            <td class="main__table-green">
                                <div>
                                    <p>70</p>
                                    <p>Yb</p>
                                </div>
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
    
                        <!-- Row - 10 -->
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <div>
                                    <p>*</p>
                                    <p>*</p>
                                </div>
                            </td>
                            <td class="main__table-green">
                                <div>
                                    <p>89</p>
                                    <p>Ac</p>
                                </div>
                            </td>
                            <td class="main__table-green">
                                <div>
                                    <p>90</p>
                                    <p>Th</p>
                                </div>
                            </td>
                            <td class="main__table-green">
                                <div>
                                    <p>91</p>
                                    <p>Pa</p>
                                </div>
                            </td>
                            <td class="main__table-green">
                                <div>
                                    <p>92</p>
                                    <p>U</p>
                                </div>
                            </td>
                            <td class="main__table-green">
                                <div>
                                    <p>93</p>
                                    <p>Np</p>
                                </div>
                            </td>
                            <td class="main__table-green">
                                <div>
                                    <p>94</p>
                                    <p>Pu</p>
                                </div>
                            </td>
                            <td class="main__table-green">
                                <div>
                                    <p>95</p>
                                    <p>Am</p>
                                </div>
                            </td>
                            <td class="main__table-green">
                                <div>
                                    <p>96</p>
                                    <p>Cm</p>
                                </div>
                            </td>
                            <td class="main__table-green">
                                <div>
                                    <p>97</p>
                                    <p>Bk</p>
                                </div>
                            </td>
                            <td class="main__table-green">
                                <div>
                                    <p>98</p>
                                    <p>Cf</p>
                                </div>
                            </td>
                            <td class="main__table-green">
                                <div>
                                    <p>99</p>
                                    <p>Es</p>
                                </div>
                            </td>
                            <td class="main__table-green">
                                <div>
                                    <p>100</p>
                                    <p>Fm</p>
                                </div>
                            </td>
                            <td class="main__table-green">
                                <div>
                                    <p>101</p>
                                    <p>Md</p>
                                </div>
                            </td>
                            <td class="main__table-green">
                                <div>
                                    <p>102</p>
                                    <p>No</p>
                                </div>
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
        <footer class="footer">
            <p class="footer__p">&COPY; 2023 Jaimin Prajapati</p>
        </footer>
    </body>
</html>
```


- CSS
```css
@import url(https://fonts.bunny.net/css?family=poppins:100,200,300,400,500,600,700,800,900);

:root {
    --color-white: #FAFAFA;
    --color-black: #212121;
    --color-light-red: #FF9999;
    --color-light-yellow: #FFFE8D;
    --color-light-blue: #93CCFF;
    --color-light-green: #97FE9A;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    scroll-behavior: smooth;
}

body {
    background-color: var(--color-white);
    min-height: 100vh;
}

.header {
    margin: 1rem;
    border: 1px solid var(--color-black);
}

.header__h1 {
    text-align: center;
    font-size: 3rem;
}

.main {
    margin: 1rem;
    border: 1px solid var(--color-black);
    min-height: 83vh;
}

.main__table-container {
    margin: 1rem;
    overflow-x: auto;
}

.main__table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 8px 16px;
}

.main__table-red {
    background-color: var(--color-light-red);
    border: 1px solid var(--color-black);
    padding: 0.5rem 1rem;
}

.main__table-yellow {
    background-color: var(--color-light-yellow);
    border: 1px solid var(--color-black);
    padding: 0.5rem 1rem;
}

.main__table-blue {
    background-color: var(--color-light-blue);
    border: 1px solid var(--color-black);
    padding: 0.5rem 1rem;
}

.main__table-green {
    background-color: var(--color-light-green);
    border: 1px solid var(--color-black);
    padding: 0.5rem 1rem;
}

.main__table-head, .main__table-numcol {
    padding: 0;
}

.main__table-head div p, .main__table-head, .main__table-numcol {
    text-align: center;
    font-size: 1rem;
}

.main__table-red div p, .main__table-yellow div p, .main__table-blue div p, .main__table-green div p {
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
}

.footer {
    margin: 1rem;
    border: 1px solid var(--color-black);
}

.footer__p {
    text-align: center;
    font-size: 1.25rem;
}

@media screen and (min-width: 768px) {
    body {
        width: 80%;
        margin: 0 auto;
    }
}
```

## Q10. Build Responsive Layout both desktop and mobile and Tablet, see below image for reference ?
### Ans.
- HTML
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Q11 Responsive Layout</title>
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <div class="container">
            <header class="header">
                <div class="header__logo"></div>
                <nav class="header__nav"></nav>
            </header>
            <main class="main">
                <section class="main__hero"></section>
                <section class="main__cards">
                    <div></div>
                    <div></div>
                    <div></div>
                </section>
            </main>
            <footer class="footer"></footer>
        </div>
    </body>
</html>
```


- CSS
```css
:root {
    --color-light-gray: #C5C6C0;
    --color-nav-gray: #ABABA9;
    --color-light-blue: #B5D2EB;
    --color-normal-gray: #797977;
    --color-blue: #5C9ECD;
    --color-white: #FAFAFA;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 16px;
}

body {
    background-color: var(--color-white);
    padding: 1rem;
}

.container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.header {
    display: flex;
    align-items: center;
    gap: 1rem;
    height: 10vh;
}

.header__logo {
    background-color: var(--color-blue);
    width: 30%;
    height: 100%;
}

.header__nav {
    background-color: var(--color-nav-gray);
    width: 70%;
    height: 100%;
}

.main {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.main__hero {
    background-color: var(--color-normal-gray);
    height: 30vh;
}

.main__cards {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 30vh;
}

.main__cards div {
    background-color: var(--color-light-blue);
    height: 100%;
}

.footer {
    background-color: var(--color-light-gray);
    height: 15vh;
}

@media screen and (min-width: 768px) {
    .main__hero {
        height: 50vh;
    }
    .main__cards {
        flex-direction: row;
        height: 50vh;
    }
    .main__cards div {
        flex: 1;
        height: 100%;
    }
    .footer {
        height: 30vh;
    } 
}
```
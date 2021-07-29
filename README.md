# Frontend-starterkit built in LESS
## Starter Kit for Front end development

## Table of Contents
### Folder structure

  1. [Core](#core)
  2. [Layout](#layout)
  3. [Modules](#modules)
  4. [Plugins](#plugins)
  5. [page.less](#page.less)


**Core**

- _button.less
- _fonts.less
- _mixins.less
- _normalize.less
- _reset.less
- _variables.less

**Layout**

- _global.less

**Modules**

- _header.less

**Plugins**

- Any third party css file include

**Page.less**
- page.less (where all files will be imported)

<br/>
<br/>

## **List of mixins used**
### Listing only the Important mixins, you can find list of mixins in core/_mixins.less file

<br/>

 > - **Padding Bottom Mixin**

  ```less
 .aspect-ratio(@width, @height) {
  position: relative;
  width: ~"@{width}px";
  padding-top: (@height / @width) * 100%;     
  height: 0;
    img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      transition: all .5s ease;                      
    }
}
  ```
<br/>

 - **Convert Photoshop tracking value to css**

> @spacing is the value used in photoshop. Don't use px or any unit

> text indent is used to balance the extra space taken after adding tracking to any word.

  ```less
    .letter_spacing_ph(@spacing){
        letter-spacing: unit(@spacing / 1000, em);
        text-indent:  unit(@spacing / 1000, em);
    };

    .letter_only_spacing(@spacing){
        letter-spacing: unit(@spacing / 1000, em);
    };
  ```

<br/>

 > - **Text hide**

  ```less
 .hide-text() {
  font: ~"0/0" a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}
  ```

<br/>

 > - **Position of container vertically, horizontally and in middle**

  ```less
.middle() {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}
.horizontal-middle(){
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform: translateX(-50%);
}

.vertical-middle(){
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
}
  ```

### Listing only the Important mixins, you can find list of mixins in core/_mixins.less file
<br/>

## **Variables**

 > - Global variables

  ```less
    @body_background
    @body_font-size
    @body_font
    @body_color
  ```
 

 > - Color variables

 ```less
    @primary-color
    @secondary-color
    @white
    @black
 ```

> - Fonts Variables

```less
    @primary_font
    @secondary_font
    @primary_font-size
    @secondary_font-size
```    


> - Shortcut path

```less
    @img-path
    @font-path
```    


> - Layout path

```less
    @layout_width:
```    

> - List of media Queries

```less
    @Xl_desktop: ~"only screen and (max-width: 1690px)";
    @l_desktop: ~"only screen and (max-width: 1490px)";
    @s_desktop: ~"only screen and (max-width: 1279px)";
    @l_tablet: ~"only screen and (max-width: 1100px)";
    @ipad_l: ~"only screen and (max-width: 1024px)";
    @s_tablet: ~"only screen and (max-width: 960px)";
    @ipad: ~"only screen and (max-width: 768px)";
    @m_screen: ~"only screen and (max-width: 767px)";
    @s_screen: ~"only screen and (max-width: 540px)";
    @phone: ~"only screen and (max-width: 480px)";
```    

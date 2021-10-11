import React, {Component, Fragment} from 'react';

class MegaMenuMobile extends Component {

    constructor(){
        super();
        this.MegaMenu=this.MegaMenu.bind(this);
    }

    componentDidMount() {
        this.MegaMenu();

    }

    MegaMenu(){
        let accordion= document.getElementsByClassName("accordionMobile");
        let accordionNumber= accordion.length;
        let i;
        for (i=0; i<accordionNumber; i++){
            accordion[i].addEventListener("click", function () {
                this.classList.toggle("active");
                let panel=this.nextElementSibling;

                if (panel.style.maxHeight) {
                    panel.style.maxHeight=null;

                }else {
                    panel.style.maxHeight=panel.scrollHeight+"Px";
                }
            })
        }
    }


    render() {
        return (
            <div className="accordionMenuDivMobile">
                <div className="accordionMenuDivInsideMobile">

                    <button className="accordionMobile"><img className="accordionMenuIconMobile" src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg" alt=""/> Men's Clothing</button>
                    <div className="panelMobile">
                        <ul>
                            <li><a href="" className="accordionItemMobile">Men's Shirt</a></li>
                            <li><a href="" className="accordionItemMobile">Men's Shirt</a></li>
                            <li><a href="" className="accordionItemMobile">Men's Shirt</a></li>
                            <li><a href="" className="accordionItemMobile">Men's Shirt</a></li>
                        </ul>
                    </div>
                    <button className="accordionMobile"><img className="accordionMenuIconMobile" src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg" alt=""/> Men's Clothing</button>
                    <div className="panelMobile">
                        <ul>
                            <li><a href="" className="accordionItemMobile">Men's Shirt</a></li>
                            <li><a href="" className="accordionItemMobile">Men's Shirt</a></li>
                            <li><a href="" className="accordionItemMobile">Men's Shirt</a></li>
                            <li><a href="" className="accordionItemMobile">Men's Shirt</a></li>
                        </ul>
                    </div>
                    <button className="accordionMobile"><img className="accordionMenuIconMobile" src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg" alt=""/> Men's Clothing</button>
                    <div className="panelMobile">
                        <ul>
                            <li><a href="" className="accordionItemMobile">Men's Shirt</a></li>
                            <li><a href="" className="accordionItemMobile">Men's Shirt</a></li>
                            <li><a href="" className="accordionItemMobile">Men's Shirt</a></li>
                            <li><a href="" className="accordionItemMobile">Men's Shirt</a></li>
                        </ul>
                    </div>
                    <button className="accordionMobile"><img className="accordionMenuIconMobile" src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg" alt=""/> Men's Clothing</button>
                    <div className="panelMobile">
                        <ul>
                            <li><a href="" className="accordionItemMobile">Men's Shirt</a></li>
                            <li><a href="" className="accordionItemMobile">Men's Shirt</a></li>
                            <li><a href="" className="accordionItemMobile">Men's Shirt</a></li>
                            <li><a href="" className="accordionItemMobile">Men's Shirt</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default MegaMenuMobile;
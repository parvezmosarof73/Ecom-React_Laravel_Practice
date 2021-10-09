import React, {Component, Fragment} from 'react';

class MegaMenu extends Component {

    constructor(){
        super();
        this.MegaMenu=this.MegaMenu.bind(this);
    }

    componentDidMount() {
        this.MegaMenu();

    }

    MegaMenu(){
        var accordion= document.getElementsByClassName("accordion");
        var accordionNumber= accordion.length;
        var i;
        for (i=0; i<accordionNumber; i++){
            accordion[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var panel=this.nextElementSibling;

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
            <Fragment>
                <div className="accordionMenuDiv">
                    <div className="accordionMenuDivInside">

                        <button className="accordion"><img className="accordionMenuIcon" src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg" alt=""/> Men's Clothing</button>
                        <div className="panel">
                            <ul>
                                <li><a href="" className="accordionItem">Men's Shirt</a></li>
                                <li><a href="" className="accordionItem">Men's Shirt</a></li>
                                <li><a href="" className="accordionItem">Men's Shirt</a></li>
                                <li><a href="" className="accordionItem">Men's Shirt</a></li>
                            </ul>
                        </div>
                        <button className="accordion"><img className="accordionMenuIcon" src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg" alt=""/> Men's Clothing</button>
                        <div className="panel">
                            <ul>
                                <li><a href="" className="accordionItem">Men's Shirt</a></li>
                                <li><a href="" className="accordionItem">Men's Shirt</a></li>
                                <li><a href="" className="accordionItem">Men's Shirt</a></li>
                                <li><a href="" className="accordionItem">Men's Shirt</a></li>
                            </ul>
                        </div>
                        <button className="accordion"><img className="accordionMenuIcon" src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg" alt=""/> Men's Clothing</button>
                        <div className="panel">
                            <ul>
                                <li><a href="" className="accordionItem">Men's Shirt</a></li>
                                <li><a href="" className="accordionItem">Men's Shirt</a></li>
                                <li><a href="" className="accordionItem">Men's Shirt</a></li>
                                <li><a href="" className="accordionItem">Men's Shirt</a></li>
                            </ul>
                        </div>
                        <button className="accordion"><img className="accordionMenuIcon" src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg" alt=""/> Men's Clothing</button>
                        <div className="panel">
                            <ul>
                                <li><a href="" className="accordionItem">Men's Shirt</a></li>
                                <li><a href="" className="accordionItem">Men's Shirt</a></li>
                                <li><a href="" className="accordionItem">Men's Shirt</a></li>
                                <li><a href="" className="accordionItem">Men's Shirt</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default MegaMenu;
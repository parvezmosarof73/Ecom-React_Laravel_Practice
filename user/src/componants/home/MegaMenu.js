import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";


class MegaMenu extends Component {

    constructor(props){
        super();


    }


    MenuItemClick(event){
        event.target.classList.toggle("active");
        let panel= event.target.nextElementSibling;

        if (panel.style.maxHeight) {
            panel.style.maxHeight=null;
        }else {
            panel.style.maxHeight=panel.scrollHeight+ "px";
        }
    }

    // MegaMenu(){
    //     var accordion= document.getElementsByClassName("accordion");
    //     var accordionNumber= accordion.length;
    //     var i;
    //     for (i=0; i<accordionNumber; i++){
    //         accordion[i].addEventListener("click", function () {
    //             this.classList.toggle("active");
    //             var panel=this.nextElementSibling;
    //
    //             if (panel.style.maxHeight) {
    //                 panel.style.maxHeight=null;
    //
    //             }else {
    //                 panel.style.maxHeight=panel.scrollHeight+"Px";
    //             }
    //         })
    //     }
    // }

    render() {

        const MyList=this.props.data;
        const MyView=MyList.map((CategoryList,i)=>{
            return <div key={i.toString()}>
                <button onClick={this.MenuItemClick} className="accordion"><img className="accordionMenuIcon" src={CategoryList.ParentCategoryImage} alt=""/> {CategoryList.ParentCategoryName}</button>
                <div className="panel">
                    <ul>
                        {
                            (CategoryList.SubCategory).map((SubCategoryList,i)=>{
                                return <li key={i.toString()}>
                                    <Link to={"ProductListBySubCategory/"+SubCategoryList.cat1_name+"/"+SubCategoryList.cat2_name} className="accordionItem">{SubCategoryList.cat2_name}</Link>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        });


        return (
            <Fragment>
                <div className="accordionMenuDiv">
                    <div className="accordionMenuDivInside">

                        {MyView}

                    </div>
                </div>
            </Fragment>
        );
    }
}

export default MegaMenu;
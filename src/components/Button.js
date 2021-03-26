import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
    
    //Adding reference to Context
    // static contextType = LanguageContext;

    renderButton(color) {
        return (
            <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>
                {(value) => {
                    if(value === "dutch") {
                        return "Voorleggen";
                    }
                    else if(value === "french") {
                        return "Soumettre";
                    } 
                    else {
                        return "Submit";
                    }
                }}
                </LanguageContext.Consumer>    
            </button>
        );
    }
    
    render() {
        // let text = "Submit";

        // if(this.context === "dutch") {
        //     text = "Voorleggen";
        // }
        // else if(this.context === "french") {
        //     text = "Soumettre";
        // }

        //Using Consumer to show the value
        return (
            <ColorContext.Consumer>
                {color => this.renderButton(color)}
            </ColorContext.Consumer>
        );
    }
}

export default Button;
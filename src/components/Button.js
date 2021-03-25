import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
    
    //Adding reference to Context
    static contextType = LanguageContext;

    render() {
        let text = "Submit";

        if(this.context === "dutch") {
            text = "Voorleggen";
        }
        else if(this.context === "french") {
            text = "Soumettre";
        }

        return (
            <button className="ui primary button">{text}</button>
        );
    }
}

export default Button;
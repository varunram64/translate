import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
    // static contextType = LanguageContext;

    render() {
        // let text = "Name";

        // if(this.context === "dutch") {
        //     text = "Naam";
        // }
        // else if(this.context === "french") {
        //     text = "Nom";
        // }

        return (
            <div className="ui field">
                <label>
                    <LanguageContext.Consumer>
                        {(value) => {
                            if(value === "dutch") {
                                return "Naam";
                            }
                            else if(value === "french") {
                                return "Nom";
                            } 
                            else {
                                return "Name";
                            }
                        }}
                    </LanguageContext.Consumer> 
                </label>
                <input type="text" />
            </div>
        );
    }
}

export default Field;
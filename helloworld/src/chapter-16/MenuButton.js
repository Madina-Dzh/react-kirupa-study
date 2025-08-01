import React, {PureComponent} from "react";
import './MenuButton.css';

class MenuButton extends PureComponent {
    // Прошлое решение для избегания ненужных операций рендеринга
    // shouldComponentUpdate(nextProps, nextState) {
    //     if (nextProps.handleMouseDown === this.props.handleMouseDown)
    //     {
    //         return false;
    //     } else {
    //         return true;
    //     }
    // }

    render() {
        console.log("Rendering: MenuButton");

        return (
            <button id="roundButton"
            onMouseDown={this.props.handleMouseDown}></button>
        );
    }
}

export default MenuButton;
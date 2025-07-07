import React, { Component } from "react";
import { motion } from "framer-motion"

class TodoItems extends Component {
    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
        this.delete = this.delete.bind(this);
    }

    delete(key) {
        this.props.delete(key);
    }

    createTasks(item) {
        return <li onClick={() => this.delete(item.key)}
            key={item.key}>{item.text}</li>
    }

    render() {
        var todoEntries = this.props.entries;
        var lisItems = todoEntries.map(this.createTasks);

        return (
            <ul className="theList">
                <motion.div 
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                >
                    {lisItems}
                </motion.div>
            </ul>
        );
    }
};

export default TodoItems;
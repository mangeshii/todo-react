import { useState } from "react";
import "./App.css";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { GrAdd } from "react-icons/gr";
import { GrClose } from "react-icons/gr";

function App() {
    const initialdata1=['Learn react']
    const initialdata2=['some random stuff']
    const [todo, setTodo] = useState();
    const [showTodo, setShowTodo] = useState([initialdata1,initialdata2]);

    const handleUserInput = (e) => {
        setTodo(e.target.value);
    };

    const handleAddTodo = () => {
        setShowTodo((oldItem) => {
            return [...oldItem, todo];
        });
        setTodo(" ");
    };

    const handleDelete = (id) => {
        setShowTodo((oldItem) => {
            return oldItem.filter((item, index) => {
                return index !== id;
            });
        });
    };
    const clearList = () => {
        setShowTodo([]);
    };

    return (
        <>
            <div className="App">
                <div className="todo-container">
                    <div className="header">
                        <h1>ToDo App</h1>
                    </div>
                    <div className="input-field">
                        <Paper
                            className="input"
                            component="form"
                            sx={{
                                p: "2px 4px",
                                display: "flex",
                                alignItems: "center",
                                maxWidth: 400,
                                m: "0px auto",
                            }}
                        >
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="What do you need to do?"
                                onChange={handleUserInput}
                                value={todo}
                            />
                            <IconButton
                                sx={{ p: "10px" }}
                                aria-label="search"
                                onClick={handleAddTodo}
                            >
                                <GrAdd />
                            </IconButton>
                        </Paper>
                        <div className="clear-list">
                            <button onClick={clearList}>Clear List</button>
                        </div>
                    </div>

                    <div className="task-list">
                        {showTodo.map((item, index) => {
                            return (
                                <>
                                    <div className="todo-task">
                                        <h3 key={index}>{item}</h3>
                                        <div className="delete">
                                            <IconButton

                                                sx={{ p: "10px" }}
                                                aria-label="search"
                                                onClick={() =>
                                                    handleDelete(index)
                                                }
                                            >
                                                <GrClose className="btn-close"/>
                                            </IconButton>
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;


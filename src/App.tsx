import React, {useState} from 'react';
import './App.scss'
import AddWord from "./components/AddWord";
import WordList from "./components/WordList";
import {VocablaryWord} from "./interfaces";


function App() {

    const [words, setWords] = useState<VocablaryWord[]>([])
    const addWord = (newVocablaryWord: VocablaryWord) => {
        setWords((prevState: VocablaryWord[]) => {
            return [...prevState, newVocablaryWord]
        })
    }

    return (
        <div className="App">
            <AddWord addWord={addWord} />
            <WordList words={words}/>
        </div>
    );
}

export default App;

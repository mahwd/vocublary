import React, {useState, ChangeEvent,} from "react";
import {VocablaryWord} from "../interfaces";

type Props = {
    addWord: (word: VocablaryWord) =>void;
}

const AddWord = (props: Props) => {

  const [VocablaryWord, setVocablaryWord] = useState<VocablaryWord>({ translation: "", word: ""})

  const changedVocablaryWord = (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setVocablaryWord((prevState: VocablaryWord) => ({
          ...prevState,
          [name]: value
      }));

  }

  const changedVocablaryTranslation = (event: ChangeEvent<HTMLInputElement>) => {
      setVocablaryWord({...VocablaryWord, translation: event.target.value})
  }

  const submit = (event: React.SyntheticEvent) => {
      event.preventDefault();
      console.log(VocablaryWord)
      props.addWord(VocablaryWord)
  }

  return (
     <div>
         <form onSubmit={submit}>
             <input type="text" name={"word"} value={VocablaryWord.word} placeholder="Type new word" onInput={changedVocablaryWord}/>
             <input type="text" name={"translation"} value={VocablaryWord.translation} placeholder="Type the translation" onInput={changedVocablaryTranslation}/>
             <input type="submit" value="Add" />
         </form>
     </div>
  )
}

export default AddWord;

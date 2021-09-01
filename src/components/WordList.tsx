import React from 'react';
import {VocablaryWord} from '../interfaces';
// import styled from "styled-components";
import {ListGroup, ListGroupItem} from "react-bootstrap";

type Props = {
    words: VocablaryWord[]
}

// const VocablaryList = styled.ul``

const WordList = (props: Props) => {

    return (
        <div>
            <ListGroup>
                {props.words.map((vocWord:VocablaryWord) => {
                        return(<ListGroupItem>
                                    <ListGroup horizontal>
                                        <ListGroupItem>{vocWord.word}</ListGroupItem>
                                        <ListGroupItem>{vocWord.translation}</ListGroupItem>
                                    </ListGroup>
                                </ListGroupItem>)
                })}
            </ListGroup>
        </div>
    );
}

export default WordList;

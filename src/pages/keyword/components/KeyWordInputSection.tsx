import React from 'react';
import Row from "../../../styles/Common/Row";
import styled from "styled-components";
import {ReactComponent as AddIcon} from "../../../assets/KeyWord/AddIcon.svg";
import Typography from "../../../components/Typography";

interface KeyWordInputSectionProps {
    keyWord: string;
    setKeyWord: React.Dispatch<React.SetStateAction<string>>;
    isAddActive: boolean;
    isMax: boolean;
    setIsInputFocused: React.Dispatch<React.SetStateAction<boolean>>;
    addKeyWordClick: (keyWord: string) => void;
}

export default function KeyWordInputSection({
                                                keyWord, setKeyWord, isAddActive, isMax,
                                                setIsInputFocused, addKeyWordClick,
                                            }: KeyWordInputSectionProps) {

    return (
        <Row $gap={12} $verticalAlign="center">
            <KeyWordInput
                value={keyWord}
                onChange={(e) => setKeyWord(e.target.value)}
                $isMax={isMax}
                readOnly={isMax}
                placeholder='키워드 입력'
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => setIsInputFocused(false)}
            />
            <AddButton
                onClick={() => addKeyWordClick(keyWord)}
                disabled={!isAddActive}
                $isAddActive={isAddActive}
            >
                <AddIcon/>
                <Typography typoSize="B3_medium" style={{marginTop:"4px"}}>추가하기</Typography>
            </AddButton>
        </Row>
    );
}

const KeyWordInput = styled.input<{ $isMax: boolean }>`
    width: calc(100% - 55px);
    padding: 20px;
    border-radius: 12px;
    border: 1px solid ${({theme}) => theme.LightGray};
    font-size: 18px;
    font-weight: 600;
    color: ${({theme}) => theme.Black};

    &:focus {
        border-color: ${({$isMax, theme}) => $isMax ? '#BD0000' : theme.Blue};
    }

    &::placeholder {
        color: #ADADAD;
    }
`;

const AddButton = styled.button<{ $isAddActive: boolean }>`
    color: ${({$isAddActive, theme}) => $isAddActive ? theme.Blue : '#DBDBDB'};
`;
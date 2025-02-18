import styled from "styled-components";
import {highlightText} from "../../../utils/highlightText";

interface DropDownProps {
    options: string[];
    DropDownClick: (clickedUniversity: string) => void;
    searchInput: string;
}

export default function DropDown({options, DropDownClick, searchInput = ''}: DropDownProps) {
    return (
        <DropDownUl>
            <ScrollDiv>
                {options.map((university, idx) =>
                    <DropDownLi key={idx} onClick={() => DropDownClick(university)}>
                        {highlightText(university, searchInput, 18)}
                    </DropDownLi>
                )}
            </ScrollDiv>
        </DropDownUl>
    );
}

const ScrollDiv = styled.div`
    max-height: 192px;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 4px;
    }

    &::-webkit-scrollbar-thumb {
        background: #f0f0f0;
        border-radius: 12px;
    }
`;

const DropDownUl = styled.ul`
    position: relative;
    border: 1px solid ${({theme}) => theme.Blue};
    border-top: none;
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
    cursor: pointer;
    padding: 10px 20px;

    li:last-child {
        border-bottom-right-radius: 12px;
        border-bottom-left-radius: 12px;
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        width: 90%;
        height: 1px;
        transform: translateX(-50%);
        background-color: ${({theme}) => theme.LightGray};
    }
`;

const DropDownLi = styled.li`
    color: ${({theme}) => theme.Black};
    background-color: ${({theme}) => theme.White};
    padding: 20px 0;
    font-size: 18px;
    font-weight: 500;

    &:active {
        background-color: rgba(233, 233, 233, 0.25);;
    }
`;
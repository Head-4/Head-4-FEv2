import React, {useState} from 'react';
import styled from "styled-components";
import {ReactComponent as FaqIcon} from "../../assets/faq/FaqIcon.svg";
import CommonButton from "../../components/CommonButton";
import Typography from "../../components/Typography";
import {B2_medium, B3_medium} from "../../styles/Common/Typography.styled";

export default function Faq() {
    const [faqInput, setFaqInput] = useState<string>('');

    // api 설정
    const clickButton = () => {
        setFaqInput('');
    }

    return (
        <>
            <FaqInput
                rows={20}
                value={faqInput}
                onChange={(e) => setFaqInput(e.target.value)}
                placeholder="건의할 내용을 입력해 주세요"
            />
            <FaqInfo>
                <LineDiv/>
                <FaqB2 typoSize="B2_medium" color="Gray600"><FaqIcon/>알려드려요</FaqB2>
                <Typography typoSize="B3_medium" color="Gray500" style={{marginBottom: "4px"}}>· 건의 내용을 자세하게 적어주시면 빠른
                    답변에 도움돼요</Typography>
                <Typography typoSize="B3_medium" color="Gray500" style={{marginBottom: "4px"}}>· 보내주신 건의의 답변에는 시간이 조금
                    소요될 수 있어요</Typography>
                <Typography typoSize="B3_medium" color="Gray500" style={{marginBottom: "4px"}}>· 더 편리한 우리의 공지 사용을 위해 모든
                    건의는 기록으로 남아 보관돼요</Typography>
            </FaqInfo>
            <CommonButton onClick={clickButton} isActive={faqInput.length > 0}>
                건의하기
            </CommonButton>
        </>
    );
}

const FaqInput = styled.textarea`
    margin-top: 20px;
    color: ${({theme}) => theme.Black};
    font-size: 16px;
    font-weight: 500;
    width: 100%;
    resize: none;

    &::placeholder {
        color: #ADADAD;
    }
`;

const FaqInfo = styled.div`
    margin-bottom: 20px;
`;

const FaqB2 = styled(Typography)`
    margin-bottom: 8px;
    display: flex;
    column-gap: 4px;
`;

const LineDiv = styled.div`
    height: 12px;
    width: calc(100% + 40px);
    transform: translateX(-20px);
    background-color: ${({theme}) => theme.Gray50};
    margin: 20px 0;
`;
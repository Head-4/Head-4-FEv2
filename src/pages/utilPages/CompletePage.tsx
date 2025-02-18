import React from 'react';
import styled from "styled-components";
import CommonButton from "../../components/CommonButton";
import {useNavigate} from "react-router-dom";
import CompleteLogo from "../../assets/Logo/CompleteLogo.png";
import Typography from "../../components/Typography";
import {T3_medium} from "../../styles/Common/Typography.styled";

export default function CompletePage() {
    const navigate = useNavigate();

    const clickButton = () => {
        navigate('/main');
    }

    return (
        <>
            <CompleteSection>
                <Typography typoSize="H1" color="Black" style={{marginBottom: "24px"}}>환영합니다!</Typography>
                <Typography typoSize="T3_medium" color="Gray600" style={{marginBottom:"62px"}}>이제 필요한 공지만<br/>빠르게 받아볼 수 있어요</Typography>
                <CompleteLogoImg src={CompleteLogo} alt="complete logo"/>
            </CompleteSection>
            <CommonButton onClick={clickButton} isActive={true}>
                확인
            </CommonButton>
        </>
    );
}

const CompleteSection = styled.section`
    margin-top: 68px;
    text-align: center;
`;

const CompleteLogoImg = styled.img`
    width: 100%;
    max-width: 280px;
`;
import React, {useEffect, useState} from 'react';
import Overlay from "../../styles/Common/Overlay";
import CommonButton from "../../components/CommonButton";
import styled from "styled-components";
import {ReactComponent as MainLogo} from "../../assets/Logo/MainLogo.svg";
import Typography from "../../components/Typography";
import {usePWAInstall} from 'react-use-pwa-install'
import iOSInstallGuide from "../../assets/Login/iOSInstallGuide.png";

export default function PwaInstallModal() {
    const install = usePWAInstall()
    const [isModalVisible, setIsModalVisible] = useState(true);
    const [isIOS, setIsIOS] = useState(false);

    useEffect(() => {
        const isDeviceIOS = /iPad|iPhone|iPod/.test(window.navigator.userAgent);
        setIsIOS(isDeviceIOS);
    }, []);

    return (
        <>
            {isModalVisible && (isIOS ? (
                <>
                    <Overlay onClick={() => setIsModalVisible(false)}/>
                    <PWAModalDiv>
                        <StyledMainLogo/>
                        <Typography typoSize="T1" color="Black" textAlign="center" style={{margin: "44px 0 4px"}}>
                            iOS에서 설치하기
                        </Typography>
                        <GuideImage src={iOSInstallGuide} alt="iOS 설치 가이드" />
                    </PWAModalDiv>
                </>
            ) : install && (
                <>
                    <Overlay onClick={() => setIsModalVisible(false)}/>
                    <PWAModalDiv>
                        <StyledMainLogo/>
                        <Typography typoSize="T1" color="Black" textAlign="center" style={{margin: "44px 0 4px"}}>
                            터치 한 번으로<br/>바로 시작해 보세요!
                        </Typography>
                        <CommonButton isActive={true} onClick={install}>
                            앱 내려받기
                        </CommonButton>
                    </PWAModalDiv>
                </>
            ))}
        </>
    );
}

const PWAModalDiv = styled.div`
    text-align: center;
    background-color: ${({theme}) => theme.White};
    z-index: 1000;
    position: absolute;
    bottom: 20%;
    transform: translateY(20%);
    width: 95%;
    border-radius: 20px;
    padding: 40px 24px 28px;
`;

const StyledMainLogo = styled(MainLogo)`
    width: 100%;
    max-width: 170px;
`;

const GuideImage = styled.img`
    width: 100%;
    max-width: 280px;
    margin: 20px 0;
`;
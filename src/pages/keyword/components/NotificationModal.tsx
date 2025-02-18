import React from 'react';
import Overlay from "../../../styles/Common/Overlay";
import styled from "styled-components";
import Column from "../../../styles/Common/Column";
import {ReactComponent as BellIcon} from "../../../assets/Common/BellIcon.svg";
import CommonButton from "../../../components/CommonButton";
import {useNavigate} from "react-router-dom";
import {handleAllowNotification} from "../../../utils/firebaseConfig";
import patchAllowNotification from "../../../apis/fcm/patchAllowNotification";
import {useMutation} from "@tanstack/react-query";
import Typography from "../../../components/Typography";

interface NotificationModalProps {
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NotificationModal({isModalOpen, setIsModalOpen}: NotificationModalProps) {
    const navigate = useNavigate();

    const {mutateAsync: patchAllowMutate} = useMutation({
        mutationFn: (allow: boolean) => patchAllowNotification(allow),
        onSuccess: (data) => {
            console.log('success: ', data);
        },
        onError: (error) => {
            console.error("Error: ", error);
        },
    });

    const {mutateAsync: patchFcmTokenMutate} = useMutation({
        mutationFn: () => handleAllowNotification(),
        onSuccess: (data) => {
            console.log('success: ', data);
        },
        onError: (error) => {
            console.error("Error: ", error);
        },
    });

    const clickButton = async (isAllow: boolean) => {
        if (isAllow) {
            const {result} = await patchFcmTokenMutate();
            if (result === "success") {
                await patchAllowMutate(true);
            }
        }
        navigate('/register/complete');
    }

    return (
        <>
            {isModalOpen && <Overlay onClick={() => setIsModalOpen(false)}/>}
            <NotificationModalDiv $isModalOpen={isModalOpen}>
                <Column $verticalAlign="center">
                    <BellIconDiv>
                        <BellIcon color="#246AD2" width={32} height={32}/>
                    </BellIconDiv>
                    <Typography typoSize="H3" color="Black" style={{marginBottom: "8px"}}>알림을 받을까요?</Typography>
                    <Typography typoSize="B1_medium" textAlign="center" style={{color: "#6E6E6E"}}>알림 받기를 수락하셔야 등록된 키워드가<br/>포함된
                        공지의 알림을 받을 수 있어요</Typography>
                </Column>
                <ButtonDiv>
                    <CommonButton isActive={true} onClick={() => {
                        clickButton(true)
                    }}>알림 받기
                    </CommonButton>
                    <LaterButton onClick={() => {
                        clickButton(false)
                    }}>나중에 하기</LaterButton>
                </ButtonDiv>
            </NotificationModalDiv>
        </>
    );
}

const NotificationModalDiv = styled.div<{ $isModalOpen: boolean }>`
    display: ${({$isModalOpen}) => $isModalOpen ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: ${({theme}) => theme.White};
    z-index: 1000;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    padding: 24px 20px 86px;
    gap: 32px;
`;

const BellIconDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: rgba(43, 117, 203, 0.10);
    margin-bottom: 18px;
`;

const ButtonDiv = styled.div`
    width: 100%;
`;

const LaterButton = styled.button`
    width: 100%;
    font-weight: 700;
    font-size: 18px;
    color: #686868;
    border-radius: 12px;
    background-color: ${({theme}) => theme.White};
    padding: 18px 0;
    border: 1px solid #DDD;
    margin-top: 12px;
`;
import styled from "styled-components";
import {Link} from "react-router-dom";
import {ReactComponent as UniversityIcon} from "../../../assets/Aside/UniversityIcon.svg";
import {ReactComponent as KeywordIcon} from "../../../assets/Aside/KeywordIcon.svg";
import {ReactComponent as MessageIcon} from "../../../assets/Aside/MessageIcon.svg";
import {ReactComponent as ExpandIcon} from "../../../assets/Aside/ExpandIcon.svg";
import {ReactComponent as BellIcon} from "../../../assets/Common/BellIcon.svg";
import useAsideStore from "../../../store/AsideStore";
import Typography from "../../../components/Typography";
import {TextOverflow} from "../../../styles/Common/TextOverflow";
import {useUserNotificationStatus} from "../hooks/useUserNotificationStatus";
import {usePatchUserNotificationStatus} from "../hooks/usePatchUserNotificationStatus";
import {usePatchUserFcmToken} from "../../../pages/utilPages/hooks/usePatchUserFcmToken";
import {handleAllowNotification} from "../../../utils/firebaseConfig";

const AsideItems = [
    {
        to: "/setting/university",
        Icon: UniversityIcon,
        label: "학교 설정",
    },
    {
        to: "/setting/keyword",
        Icon: KeywordIcon,
        label: "키워드 설정",
    },
    {
        to: "/faq",
        Icon: MessageIcon,
        label: "건의하기",
    },
];

export default function AsideBottom() {
    const toggleAside = useAsideStore((state) => state.toggleAside);
    const userNotificationStatus = useUserNotificationStatus();
    const patchUserNotificationStatus = usePatchUserNotificationStatus();
    const patchUserFcmToken = usePatchUserFcmToken();

    const clickKeyWordToggle = async () => {
        if (!userNotificationStatus?.data) {
            // 토큰 있는지 없는지 확인하는 api 있어야 할 듯 - 유저 정보에 저장
            if (Notification.permission === "granted"){
                patchUserNotificationStatus(true);
            }else{
                const {result, userFcmToken} = await handleAllowNotification();
                if (result === "success") {
                    await patchUserFcmToken(userFcmToken); // 여기서 토큰이 저장이 됐는지 확인
                    patchUserNotificationStatus(true);
                }
            }
        } else {
            console.log('알림 거절')
            patchUserNotificationStatus(false);
        }
    };

    return (
        <>
            <OnOffDiv>
                <BellIcon/>
                <AsideSetting typoSize="B1_semibold" color="Black">키워드 알림</AsideSetting>
                <KeyWordOnOffButton onClick={clickKeyWordToggle} $keyWordToggle={userNotificationStatus?.data}>
                    {userNotificationStatus?.data ? "ON" : "OFF"}
                </KeyWordOnOffButton>
            </OnOffDiv>
            <ul>
                {AsideItems.map(({to, Icon, label}, index) => (
                    <li key={index}>
                        <AsideLink to={to} onClick={toggleAside}>
                            <Icon/>
                            <AsideSetting typoSize="B1_semibold" color="Black">{label}</AsideSetting>
                            <ExpandIcon/>
                        </AsideLink>
                    </li>
                ))}
            </ul>
        </>
    );
}

const OnOffDiv = styled.div`
    margin-top: 10px;
    display: flex;
    column-gap: 12px;
    padding: 16px 20px;
    align-items: center;
    color: #DDDDDD;
`;

const KeyWordOnOffButton = styled.button<{ $keyWordToggle: boolean }>`
    padding: 0 10px;
    text-align: ${({$keyWordToggle}) => $keyWordToggle ? 'left' : 'right'};
    font-size: 12px;
    font-weight: 600;
    color: ${({$keyWordToggle, theme}) => $keyWordToggle ? theme.Blue : theme.Gray400};
    position: relative;
    width: 64px;
    height: 32px;
    border-radius: 24px;
    border: 1px solid ${({$keyWordToggle, theme}) => $keyWordToggle ? '#BFCFE9' : theme.Gray200};
    background-color: ${({$keyWordToggle, theme}) => $keyWordToggle ? '#E4EBF5' : theme.Gray50};
    transition: all 0.2s;

    &::after {
        position: absolute;
        content: "";
        left: ${({$keyWordToggle}) => $keyWordToggle ? '38px' : '5px'};
        top: 50%;
        transform: translateY(-50%);
        width: 20px;
        height: 20px;
        background-color: ${({$keyWordToggle, theme}) => $keyWordToggle ? theme.Blue : theme.Gray300};
        border-radius: 50%;
        transition: all 0.2s;
    }
`;

const AsideLink = styled(Link)`
    display: flex;
    column-gap: 12px;
    padding: 16px 20px;
    align-items: center;
    color: #DDDDDD;

    &:active {
        background-color: rgba(233, 233, 233, 0.25);
    }
`;

const AsideSetting = styled(Typography)`
    ${TextOverflow}
`;
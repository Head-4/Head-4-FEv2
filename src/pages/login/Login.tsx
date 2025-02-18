import styled from "styled-components";
import {ReactComponent as KakaoIcon} from "../../assets/Login/KakaoIcon.svg";
import {ReactComponent as MainLogo} from "../../assets/Logo/MainLogo.svg";
import Column from "../../styles/Common/Column";
import PwaInstallModal from "../utilPages/PWAInstallModal";
import Typography from "../../components/Typography";
import {useQuery} from "@tanstack/react-query";

export default function Login() {
    const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;

    const clickKakaoLogin = () => {
        window.location.href = KAKAO_LOGIN_URL;
    }
    // 로그인 확인 로직 추가
    // const {data} = useQuery({
    //     queryKey: ["login"],
    //     queryFn: getIsLogin,
    // });

    return (
        <Column $gap={164} $verticalAlign="center" style={{margin: 'auto 0', position: 'relative'}}>
            <PwaInstallModal/>
            <LoginLogoSection>
                <MainLogo width='100%'/>
                <Typography typoSize="T3_semibold" color="Black" style={{marginTop: "28px"}}>
                    나에게 필요한 공지만<br/>빠르게 받아볼 수 있어요</Typography>
            </LoginLogoSection>
            <LoginButtonSection>
                <Typography typoSize="T4_medium" textAlign="center" style={{color: "#6F6F6F", marginBottom: "16px"}}>
                    카카오로 바로 시작해 보세요</Typography>
                <LoginButton onClick={clickKakaoLogin}>
                    <KakaoIcon/>
                    <KakaoLogin>카카오 로그인</KakaoLogin>
                </LoginButton>
            </LoginButtonSection>
        </Column>
    );
};

const LoginLogoSection = styled.section`
    color: ${({theme}) => theme.Gray50};
    text-align: center;
`;

const LoginButtonSection = styled.section`
    width: 100%;
`;

const LoginButton = styled.button`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 18px 32px;
    border-radius: 12px;
    background: #FEE500;
`;

const KakaoLogin = styled.span`
    flex: 1;
    color: ${({theme}) => theme.Black};
    font-size: 20px;
    font-weight: 600;
`;
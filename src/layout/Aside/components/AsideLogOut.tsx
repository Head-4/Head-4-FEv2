import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import useAsideStore from "../../../store/AsideStore";

export default function AsideLogOut() {
    const navigate = useNavigate();
    const toggleAside  = useAsideStore((state) => state.toggleAside);

    const clickLogOut = () => {
        toggleAside();
        navigate('/');
    }

    return (
        <LogOutButton onClick={clickLogOut}>
            로그아웃
        </LogOutButton>
    );
}

const LogOutButton = styled.button`
    position: absolute;
    left: 20px;
    bottom: 140px;
    color: #A9A9A9;
    font-size: 12px;
    font-weight: 500;
    text-decoration-line: underline;
`;
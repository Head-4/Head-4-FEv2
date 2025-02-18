import styled from "styled-components";
import {ReactComponent as CloseIcon} from "../../../assets/Aside/CloseIcon.svg";
import {ReactComponent as MiniKakaoIcon} from "../../../assets/Aside/MiniKakaoIcon.svg";
import useAsideStore from "../../../store/AsideStore";
import Typography from "../../../components/Typography";
import {TextOverflow} from "../../../styles/Common/TextOverflow";
import {useQuery} from "@tanstack/react-query";
import getUserEmail from "../../../apis/login/getUserEmail";

export default function AsideTop() {
    const toggleAside = useAsideStore((state) => state.toggleAside);

    const {data: email} = useQuery({
        queryKey: ["email"],
        queryFn: getUserEmail,
        staleTime: 1000000,
    });

    return (
        <AsideTopSection>
            <MiniKakaoIcon/>
            <AsideUserName typoSize="T4_semibold" color="Black">{email?.data}</AsideUserName>
            <button onClick={toggleAside} style={{display: "flex"}}>
                <CloseIcon/>
            </button>
        </AsideTopSection>
    );
}

const AsideTopSection = styled.section`
    height: 52px;
    display: flex;
    column-gap: 8px;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
`;

const AsideUserName = styled(Typography)`
    ${TextOverflow}
`;
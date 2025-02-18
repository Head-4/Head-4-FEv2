import {Link, useNavigate} from "react-router-dom";
import styled from "styled-components";
import {ReactComponent as BellIcon} from "../../../assets/Common/BellIcon.svg";
import {ReactComponent as MenuIcon} from "../../../assets/Layout/Header/MenuIcon.svg";
import {ReactComponent as SearchIcon} from "../../../assets/Layout/Header/SearchIcon.svg";
import Row from "../../../styles/Common/Row";
import useAsideStore from "../../../store/AsideStore";
import Typography from "../../../components/Typography";
import {TextOverflow} from "../../../styles/Common/TextOverflow";
import {useUserUniversity} from "../../../pages/university/hooks/useUserUniversity";

export default function MainHeader() {
    const navigate = useNavigate();
    const toggleAside = useAsideStore((state) => state.toggleAside);

    const userUniversity = useUserUniversity();

    // if (!isLoading && (!userUniversity?.data || isError)) {
    //     navigate("/register/userUniversity");
    // }

    return (
        <>
            <HeaderH4 typoSize="H4" color="Black">{userUniversity?.data}</HeaderH4>
            <Row $gap={12}>
                <Link to='/search'>
                    <Row>
                        <SearchIcon/>
                    </Row>
                </Link>
                <Link to='/notification'>
                    <AfterRedPoint $isNew={false}>
                        <BellIcon/>
                    </AfterRedPoint>
                </Link>
                <button onClick={toggleAside} style={{display: 'flex'}}>
                    <MenuIcon/>
                </button>
            </Row>
        </>
    );
}

const AfterRedPoint = styled.div<{ $isNew: boolean }>`
    display: flex;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 4px;
        height: 4px;
        background-color: #BD0000;
        border-radius: 50%;
        display: ${({$isNew}) => ($isNew ? 'block' : 'none')};
    }
`;

const HeaderH4 = styled(Typography)`
    ${TextOverflow}
`;
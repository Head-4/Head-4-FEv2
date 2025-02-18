import {Link, useNavigate} from "react-router-dom";
import styled from "styled-components";
import {ReactComponent as BellIcon} from "../../../assets/Common/BellIcon.svg";
import {ReactComponent as MenuIcon} from "../../../assets/Layout/Header/MenuIcon.svg";
import {ReactComponent as SearchIcon} from "../../../assets/Layout/Header/SearchIcon.svg";
import Row from "../../../styles/Common/Row";
import useAsideStore from "../../../store/AsideStore";
import {useQuery} from "@tanstack/react-query";
import getUniversity from "../../../apis/university/getUniversity";
import Typography from "../../../components/Typography";
import {TextOverflow} from "../../../styles/Common/TextOverflow";

export default function MainHeader() {
    const navigate = useNavigate();

    const toggleAside = useAsideStore((state) => state.toggleAside);
    const {data: university, isError, isLoading} = useQuery({
        queryKey: ["university"],
        queryFn: getUniversity,
        staleTime: 10000,
    });

    // if (!isLoading && (!university?.data || isError)) {
    //     navigate("/register/university");
    // }

    return (
        <>
            <HeaderH4 typoSize="H4" color="Black">{university?.data}</HeaderH4>
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
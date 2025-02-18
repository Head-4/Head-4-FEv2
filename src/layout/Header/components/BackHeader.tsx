import {useNavigate} from "react-router-dom";
import {ReactComponent as BackIcon} from "../../../assets/Layout/Header/BackIcon.svg";
import styled from "styled-components";
import {TextOverflow} from "../../../styles/Common/TextOverflow";
import Typography from "../../../components/Typography";

interface BackHeaderProps {
    pageName: string;
}

export default function BackHeader({pageName}: BackHeaderProps) {
    const navigate = useNavigate();

    const BackClick = () => {
        navigate(-1);
    }

    return (
        <>
            <button onClick={BackClick} style={{display: 'flex'}}>
                <BackIcon/>
            </button>
            <HeaderH4 typoSize="H4" color="Black">
                {pageName}
            </HeaderH4>
        </>
    );
}

const HeaderH4 = styled(Typography)`
    ${TextOverflow}
`;
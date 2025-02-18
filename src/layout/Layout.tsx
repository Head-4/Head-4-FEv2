import styled from "styled-components";
import {Outlet, useLocation} from "react-router-dom";
import Header from "./Header/Header";
import Aside from "./Aside/Aside";

export default function Layout() {
    const location = useLocation();
    const pageRoute = location.pathname;

    return (
        <LayoutWrapper $pageRoute={pageRoute}>
            <Header pageRoute={pageRoute}/>
            <LayoutMain>
                <Outlet/>
            </LayoutMain>
            <Aside pageRoute={pageRoute}/>
        </LayoutWrapper>
    );
};

const LayoutWrapper = styled.div<{ $pageRoute: string }>`
    position: relative;
    min-height: 100vh;
    padding: 52px 20px 86px;
    background-color: ${({$pageRoute,theme}) => {
        switch ($pageRoute) {
            case "/main":
                return theme.Background;
            case "/search":
                return theme.Background;
            default:
                return theme.White;
        }
    }};
    background: ${({$pageRoute}) => $pageRoute === '/' ? 'linear-gradient(180deg, rgba(36, 106, 210, 0.20) -20.26%, rgba(36, 106, 210, 0.00) 38.63%), #FFF' : ''};
`;

const LayoutMain = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: calc(100vh - 52px - 86px);
`;
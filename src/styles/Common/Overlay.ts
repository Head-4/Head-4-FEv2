import styled from "styled-components";

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(51, 54, 63, 0.10);
    z-index: 999;

    @media (min-width: 500px) {
        left: calc(50vw - 250px);
        width: 500px
    }
`;

export default Overlay;
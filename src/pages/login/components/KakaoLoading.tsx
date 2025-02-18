import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import postKakaoToken from "../../../apis/login/postKakaoToken";

export default function KakaoLoading() {
    const navigate = useNavigate();

    const GetToken = async (code: string): Promise<void> => {
        try {
            const result = await postKakaoToken(code);
            if (!result) {
                alert('토큰을 받아올 수 없습니다.');
                navigate('/');
                return;
            }

            localStorage.setItem('isFirst',result.data.data);
            if (result.data.data) {
                navigate('/register/university');
            } else {
                navigate('/main');
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const code = new URL(window.location.href).searchParams.get("code");
        if (code) {
            GetToken(code);
        } else {
            //에러처리
        }
    }, []);

    return (
        <>
        </>
    );
}

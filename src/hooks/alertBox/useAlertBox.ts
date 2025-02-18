import {useEffect, useState} from "react";

export const useAlertBox = () => {
    const [isAlert, setIsAlert] = useState<boolean>(false);
    const [result, setResult] = useState<boolean>(true);

    const showAlert = (isAlert: boolean, result: boolean) => {
        setIsAlert(isAlert);
        setResult(result);
    }

    useEffect(() => {
        if (isAlert) {
            const timer = setTimeout(() => {
                setIsAlert(false);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [isAlert]);

    return {
        isAlert,
        showAlert,
        result,
    }
}
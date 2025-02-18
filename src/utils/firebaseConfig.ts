import {initializeApp} from "firebase/app";
import {getMessaging, getToken, Messaging} from "firebase/messaging";
import patchFcmToken from "../apis/fcm/patchFcmToken";

interface NotificationResponse {
    result: "success" | "fail";
}

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FCM_APIKEY,
    authDomain: process.env.REACT_APP_FCM_AUTHDOMAIN,
    projectId: process.env.REACT_APP_FCM_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FCM_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FCM_SENDER_ID,
    appId: process.env.REACT_APP_FCM_APP_ID
};

export const app = initializeApp(firebaseConfig);
export const messaging: Messaging = getMessaging(app);

export async function handleAllowNotification(): Promise<NotificationResponse> {
    try {
        const permission: "granted" | "denied" | "default" = await Notification.requestPermission();

        if (permission === "granted") {
            const currentToken: string | null = await getToken(messaging, {
                vapidKey: process.env.REACT_APP_VAPID_KEY
            });

            if (currentToken) {
                console.log("토큰 등록");
                await patchFcmToken(currentToken);
                return {result: "success"};
            } else {
                console.log("권한 허용했는데 토큰은 못받음");
                return {result: "fail"};
            }
        } else {
            console.log("web push 권한이 차단되었습니다. 알림을 사용하시려면 권한을 허용해주세요");
            return {result: "fail"};
        }
    } catch (error) {
        console.error("푸시 토큰 가져오는 중에 에러 발생", error);
        return {result: "fail"};
    }
}
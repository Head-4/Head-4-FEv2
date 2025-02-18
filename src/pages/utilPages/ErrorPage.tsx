import {useRouteError} from "react-router-dom";

export const ErrorPage = () => {
    const error: any = useRouteError();
    console.error(error);

    return (
        <div>
            <h1>에러!!</h1>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};
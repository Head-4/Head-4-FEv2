import {MutationCache, QueryCache, QueryClient} from "@tanstack/react-query";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            retry: 0,
            // staleTime: 600000,
            // gcTime: 900000,
        },
    },
    queryCache: new QueryCache({
        onError: (error) => {
            console.log(error.message, "query");
        }
    }),
    mutationCache: new MutationCache({
        onError: (error) => {
            console.log(error.message, "mutation");
        }
    })
});
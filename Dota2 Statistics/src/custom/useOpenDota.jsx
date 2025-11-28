import { useQuery } from "@tanstack/react-query";

export default function useOpenDota(id, type, url)
{
    const {data, isFetching, error} = useQuery({
        queryKey : [type, id],
        queryFn : async function()
        {
            const response = await fetch(url);

            if (!response.ok)
            {
                throw new Error();
            }

            const result = await response.json();
            return result
        },
        staleTime : Infinity
    })

    return {data, isFetching, error}
}
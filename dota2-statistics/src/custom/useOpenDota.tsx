import { useQuery } from "@tanstack/react-query";

export default function useOpenDota<T = unknown>(key : string, url : string)
{
    return useQuery<T>(
        {
            queryKey : [key],
            queryFn : async function()
            {
                const response = await fetch(url);

                if (!response.ok)
                {
                    throw new Error(`${response.status}`)
                }

                const result = await response.json();

                return result;
            },
            staleTime : 1000 * 60 * 60
        }
    )
}
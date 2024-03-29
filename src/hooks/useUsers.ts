import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

interface Users {
  id: number;
  name: string;
}

interface UserQuery {
  pageSize: number;
}

const useUsers = (query: UserQuery) =>
//@ts-ignore
  useInfiniteQuery<Users[], Error>({
    queryKey: ["users", query],
    queryFn: ({ pageParam = 1 }) =>
      axios
        .get("https://jsonplaceholder.typicode.com/users", {
          params: {
            _page: pageParam,
            _limit: 4,
          },
        })
        .then((res) => res.data),

    getNextPageParam(lastPage, allPages) {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
  });

export default useUsers;
export const mutationLogin = async() => {
    const res = await fetch(
        "https://api.themoviedb.org/3/authentication/guest_session/new", 
        {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNGEzZjAzMDU3ZGVlYmUyNTIzMjQ3NDQ3NjJiMGY3ZCIsInN1YiI6IjY1Y2YyNjE5NzA2ZTU2MDE3OTM5NDdhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.emLcOdn157EwYJcnZzMkvcUAf-d3S4DBCGQapWsTV00"
            },

        }

    );

    console.log(res.json());

    return res.json();
};
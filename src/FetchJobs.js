export const FetchJobs = async (JobList, setJobsList, limit, offset) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
        "limit": limit,
        "offset": offset
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body
    };

    await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
        .then((response) => response.text())
        .then((result) => {
            let data = JSON.parse(result).jdList;
            setJobsList([...JobList , ...data]);
        })
        .catch((error) => console.error(error));

}

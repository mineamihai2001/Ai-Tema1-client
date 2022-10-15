export const input = [
    {
        label: "Max Capacity Container n",
        id: "container-1",
    },
    {
        label: "Max Capacity Container m",
        id: "container-2",
    },
    {
        label: "Target Capacity",
        id: "capacity",
    },
    {
        label: "Number of iterations",
        id: "iterations"
    }
];

export const select = {
    label: "Select a strategy",
    id: "strategy",
    select: true,
    options: ["Backtracking", "BFS", "HillClimb", "A*"],
};

export const format = (response) => {
    const columns = 4;
    const visited = [];
    const detailed = [];

    let formatted = response.map((transition) => {
        let move = Object.keys(transition)[0];
        let result = Object.values(transition)[0];

        move = move
            .replace("Move", "")
            .replaceAll("=", ":")
            .replaceAll("FILL", '"FILL"')
            .replaceAll("POUR", '"POUR"')
            .replaceAll("EMPTY", '"EMPTY"')
            .replace((/(['"])?([a-z0-9A-Z_]+)(['"])?:/g, '"$2": '));

        move = eval("(" + move + ")");

        const wasVisited = visited.some(
            (s) =>
                s.capacity0 === result.capacity0 &&
                s.capacity1 === result.capacity1
        );
        detailed.push({
            ...move,
            ...result,
        });
        if (!wasVisited) {
            visited.push({
                capacity0: result.capacity0,
                capacity1: result.capacity1,
            });
            return {
                ...move,
                ...result,
            };
        }
    });
    const result = [];

    formatted = formatted.filter((x) => typeof x !== "undefined");
    console.log(formatted);

    while (formatted.length > 0) result.push(formatted.splice(0, columns));
    console.log("##", result);
    return [result, detailed];
};

export const showResponse = (response) => {
    response.map((transition) => {});
};

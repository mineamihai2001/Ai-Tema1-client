import { input } from "../config";

export default function Select(props) {
    const { label, id, options } = props.attr;
    const { handleChange } = props;
    const changed = (handleChange) => {
        const select = document.getElementById("strategy");
        switch (select.value) {
            case "Backtracking":
                handleChange([
                    {
                        label: "Number of Iterations",
                        id: "iterations",
                    },
                ]);
                break;
            case "HillClimb":
                handleChange([
                    {
                        label: "Number of Iterations",
                        id: "iterations",
                    },
                    {
                        label: "Max Depth",
                        id: "depth",
                    },
                    {
                        label: "Number of Improvements",
                        id: "improvements",
                    },
                ]);
                break;
        }
    };

    return (
        <>
            <div className="col d-flex justify-content-end align-items-center flex-column">
                <label for={id}></label>
                <select
                    onChange={() => changed(handleChange)}
                    id={id}
                    className="form-select mt-2"
                >
                    <option selected>{label}</option>
                    {options.map((option) => (
                        <option>{option}</option>
                    ))}
                </select>
            </div>
        </>
    );
}

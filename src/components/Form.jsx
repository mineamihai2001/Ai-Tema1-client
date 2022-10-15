import InputGroup from "./InputGroup";
import Select from "./Select";
import { format, input, select } from "../config";
import { useCallback, useState } from "react";

const sendData = (setResult, setDetails, inputs) => {
    const spinner = document.getElementById("spinner");
    spinner.classList.remove("invisible");

    const idList = [];
    inputs.map((inputGroup) => idList.push(inputGroup.id));
    idList.push(select.id);

    const data = [];
    idList.map((id) => {
        const elem = document.getElementById(id);
        data.push({
            id,
            value: elem.value,
        });
    });
    console.log(data);

    fetch("http://localhost:8080/request/", {
        method: "POST",
        body: JSON.stringify(data),
        dataType: "json",
        headers: {
            "Content-Type": "application/json", // text/plain
        },
    })
        .then((response) => response.json())
        .then((response) => {
            spinner.classList.add("invisible");
            const [newRes, detailed] = format(response);
            setResult(newRes);
            setDetails(detailed);
        })
        .catch((error) => {
            spinner.classList.add("invisible");
            setResult(JSON.stringify(error));
        });
};

export default function Form(props) {
    const { setResult, setDetails } = props;
    const [inputs, setInputs] = useState(input);
    const handleChange = useCallback((params) => {
        setInputs(input);
        setInputs([...input, ...params]);
    });

    return (
        <>
            <form id="instance-form">
                <div className="row">
                    {inputs.map((inputGroup) => {
                        return (
                            <InputGroup
                                label={inputGroup.label}
                                id={inputGroup.id}
                            />
                        );
                    })}
                    <Select attr={select} handleChange={handleChange} />
                    <div className="col-2 d-flex justify-content-end align-items-end">
                        <button
                            type="button"
                            className="btn btn-primary pe-4"
                            onClick={() =>
                                sendData(setResult, setDetails, inputs)
                            }
                        >
                            <span
                                id="spinner"
                                className="spinner-border spinner-border-sm invisible me-2"
                                role="status"
                                aria-hidden="true"
                            ></span>
                            Start
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}

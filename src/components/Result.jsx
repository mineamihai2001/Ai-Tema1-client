import State from "./State";
import Transition from "./Transition";
import { useState } from "react";

export default function Result(props) {
    const { result, details } = props;
    const [shown, setShown] = useState(false);
    let total = 0;
    result.map((r) => (total += r.length));

    const handleShown = () => {
        shown ? setShown(false) : setShown(true);
    };

    return (
        <div id="result" className="my-5">
            <div className="d-flex justify-content-start align-items-center mb-5">
                <h1 className="">Result </h1>
                <p className="fs-6 mt-4 ms-3">(POUR(x) means POUR from container(x) to container(y))</p>
                <button
                    className={`btn btn-secondary ms-auto ${
                        result.length === 0 ? "d-none" : ""
                    }`}
                    onClick={handleShown}
                >
                    {shown ? "Hide" : "Show"} full result
                </button>
            </div>
            <div id="result-area" className="">
                {result.map((row, rowNum) => {
                    return (
                        <div className="row my-4">
                            {row.map((state, index) => {
                                const key = rowNum * 3 + index + rowNum;
                                return (
                                    <>
                                        <div className="col-1 ms-5 d-flex justify-content-center align-items-center">
                                            <Transition
                                                type={state.moveType}
                                                direction={"right"}
                                                key={index * rowNum}
                                                vaseNumber={state.vaseNumber}
                                                initial={
                                                    key === 0 ? true : false
                                                }
                                            />
                                        </div>
                                        <div className="col-1 mx-4 justify-content-center align-items-center">
                                            <State
                                                key={key}
                                                n={state.capacity0}
                                                m={state.capacity1}
                                                final={
                                                    key === total - 1
                                                        ? true
                                                        : false
                                                }
                                            />
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
            <div className={`${shown ? "" : "d-none"}`}>
                <h1 className="my-5">Full Result</h1>
                <div id="details">
                    {result.length > 0 ? JSON.stringify(details) : ""}
                </div>
            </div>
        </div>
    );
}

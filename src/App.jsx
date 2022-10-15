import Form from "./components/Form";
import Result from "./components/Result";
import Title from "./components/Title";
import { useState } from "react";

export default function App() {
    const [result, setResult] = useState([]);
    const [details, setDetails] = useState([]);
    return (
        <>
            <div id="main" className="w-100 h-100 p-5">
                <Title />
                <Form setResult={setResult} setDetails={setDetails}/>
                <Result result={result} details={details}/>
            </div>
        </>
    );
}

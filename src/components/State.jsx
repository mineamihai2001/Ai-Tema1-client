export default function State(props) {
    const {key, n, m, final} = props;
    return (
        <>
            <div id={`state-${key}`} className={`state ${final === true ? "bg-success": ""}`}>
                <div>capacity0={n}</div>
                <div>capacity1={m}</div>
            </div>  
        </>
    );
}
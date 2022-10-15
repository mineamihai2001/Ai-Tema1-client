export default function InputGroup(props) {
    const { label, id, select, options } = props;
    return (
        <>
            <div className="col">
                <label className="form-label" htmlFor={id}>
                    {label}
                </label>
                <input className="form-control" id={id}></input>
            </div>
        </>
    );
}

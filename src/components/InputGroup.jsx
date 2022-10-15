export default function InputGroup(props) {
    const { label, id, select, options } = props;
    return (
        <>
            <div className="col d-flex justify-content-end align-items-center flex-column">
                <label className="form-label me-auto" htmlFor={id}>
                    {label}
                </label>
                <input className="form-control" id={id}></input>
            </div>
        </>
    );
}

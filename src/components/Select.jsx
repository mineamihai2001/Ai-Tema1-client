export default function Select(props) {
    const { label, id, options } = props.attr;
    return (
        <>
            <div className="col">
                <label for={id}></label>
                <select id={id} className="form-select mt-2">
                    <option selected>{label}</option>
                    {options.map(option => <option>{option}</option>)}
                </select>
            </div>
        </>
    );
}

export default function Response(props) {
    const { response } = props;
    return (
        <>
            <div id="response-full">{response.map((transition) => {
                return <div className="row">{JSON.stringify(transition)}</div>
            })}</div>
        </>
    );
}

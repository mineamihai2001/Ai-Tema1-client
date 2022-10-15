const getArrow = (direction, type, vaseNumber, initial) => {
    switch (direction) {
        case "right":
            return (
                <>
                    <span className="type">
                        {initial ? "INITIAL" : type + " (" + vaseNumber + ")"}
                    </span>
                    <div className="d-flex justify-content-center align-items-center">
                        <span className={`arrow-${direction}`}></span>
                        <span className={direction}></span>
                    </div>
                </>
            );
        case "left":
            return (
                <>
                    <span className="type">
                        {initial ? "INITIAL" : type + " (" + vaseNumber + ")"}
                    </span>
                    <div className="d-flex justify-content-center align-items-center">
                        <span className={direction}></span>
                        <span className={`arrow-${direction}`}></span>
                    </div>
                </>
            );
        case "top":
            return (
                <div className="d-flex justify-content-center align-items-center  flex-column">
                    <span className={direction}></span>
                    <span className={`arrow-${direction}`}>
                        <span className="type ms-5">
                            {initial
                                ? "INITIAL"
                                : type + " (" + vaseNumber + ")"}
                        </span>
                    </span>
                </div>
            );
        case "bottom":
            return (
                <div className="d-flex justify-content-center align-items-center flex-column">
                    <span className={`arrow-${direction}`}>
                        <span className="type ms-5">
                            {initial
                                ? "INITIAL"
                                : type + " (" + vaseNumber + ")"}
                        </span>
                    </span>
                    <span className={direction}></span>
                </div>
            );
    }
};

export default function Transition(props) {
    const { type, direction, vaseNumber, initial } = props;
    return (
        <>
            <div className="transition mx-4">
                {getArrow(direction, type, vaseNumber, initial)}
            </div>
        </>
    );
}

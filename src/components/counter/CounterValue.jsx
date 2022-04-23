export default function CounterValue(props) {
    const { value } = props;
    return(
        <div className="counterValue">
            <span>{`Counter value : ${value}`}</span>
        </div>
    )
}
import FinveItemShort from "./FinveItemShort";

function FinveList({ finves, setActiveFinveId, setShowFinveLong }) {
    // if finves list empty or finves not existing return message
    if (finves?.length === 0 || !finves) {
        return (
            <div>
                <h3>Liste</h3>
                <p>Keine Finanzierungsvereinbarungen gefunden</p>
            </div>
        )
    }

    return (
        <div>
            <h4>Liste</h4>
            {finves.map(finve => (
                <FinveItemShort key={finve.id} finve={finve} showDiagrams={false} showButtonLong={true} setActiveFinveId={setActiveFinveId} setShowFinveLong={setShowFinveLong}/>
            ))}
        </div>
    )
}

export default FinveList

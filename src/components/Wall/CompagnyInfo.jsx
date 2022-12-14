import { useFirestoreCompagnyID} from "../../firebase/useFirestoreDeccos"

const CompagnyInfo = ({milestone}) => {

    const compagny = useFirestoreCompagnyID('CompagnyMeta', milestone.CompagnyID)

    return(
        <>
            {compagny && compagny.map(comp => (
                <div key={comp.CompagnyID} className='compagny-meta-inner-container'>
                    <img className='organisations-logo' src={comp.Logo} alt="logo" data-id={comp.CompagnyID} onClick={() => ''} />
                    <div className='milestone-flex-container'>
                        <h2 data-id={comp.CompagnyID} onClick={() => ''}>{comp.CommunityName}</h2>
                    </div>
                </div>
            ))}
        </>
    )
}

export default CompagnyInfo
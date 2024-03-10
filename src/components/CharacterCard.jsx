export default function CharacterCard({data}){
    return (
        <div className={'userCard'}>
            <img src={data.image}/>
            <h2>{data.name}</h2>
            <p>Species: <b>{data.species}</b></p>
            <p>Gender: <b>{data.gender}</b></p>
            <p>Location: <b>{data.location.name}</b></p>
        </div>
    )
}
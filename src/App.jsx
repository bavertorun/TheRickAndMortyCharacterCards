import './App.css'
import {useEffect, useState} from "react";
import CharacterCard from "./components/CharacterCard.jsx";

function App() {

    const [dataResults, setDataResults] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [searchTerm,setSearchTerm] = useState('')
    useEffect(() => {
        const getApi = async () => {
            const res = await (await fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}&name=${searchTerm}`)).json()
            setTotalPages(res.info.pages)
            setDataResults(res.results)
        }
        getApi()
    }, [currentPage,searchTerm]);

    const prevBtnHandle = () => {
        setCurrentPage(currentPage - 1)
    }
    const nextBtnHandle = () => {
        setCurrentPage(currentPage + 1)
    }

    return (
        <>
            <h1 className={'title'}>The Rick and Morty Character Cards</h1>
            <input
                className={'search'}
                type="text"
                placeholder="Search by Character Name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <div className={'userCards'}>
                {dataResults?.map(dt => (
                    <CharacterCard key={dt.id} data={dt}/>
                ))}
            </div>
            <div className={'buttons'}>
                <button disabled={currentPage == 1} onClick={prevBtnHandle} className={'prev'}>Prev</button>
                <p>
                    <input
                        className={'currentPageInput'}
                        type={'number'}
                        value={currentPage}
                        onChange={(e) => setCurrentPage(parseInt(e.target.value, 10))}
                        min="1"
                        max={totalPages}
                    />

                    / {totalPages}</p>
                <button disabled={currentPage == 42} onClick={nextBtnHandle} className={'next'}>Next</button>
            </div>
        </>
    )
}

export default App

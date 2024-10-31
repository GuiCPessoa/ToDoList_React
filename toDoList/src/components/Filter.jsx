const Filter = ({ filter, setFilter, setSort }) => {
    return (
        <div className="filter">
            <h2>Filtrar:</h2>
            <div className="filter-options">
                <div>
                    <p>Status:</p>
                    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="All">Todas</option>
                        <option value="Completed">Completas</option>
                        <option value="Incomplete">Incompleta</option>
                    </select>
                </div>
                <div>
                    <button onClick={() => setSort("Ascendente")}>Ascendente</button>
                    <button onClick={() => setSort("Descendente")}>Descendente</button>
                </div>
            </div>
        </div>
    )
}

export default Filter;
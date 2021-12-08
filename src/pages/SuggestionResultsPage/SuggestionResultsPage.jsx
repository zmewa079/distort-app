import SearchForm from "../../components/SearchForm/SearchForm"
import { Link } from "react-router-dom"
import AddMusic from '../../components/AddSuggestion/AddSuggestion'
import { getSuggestions } from "../../services/apiService"

const SuggestionResultsPage = ({user, suggestions}) => {

    const handleSearch = async (formData) => {
        
    }

    return (
        <>
            <main>
                
            </main>
            <body>
            {suggestions?.Similar?.Results.map(suggestion =>
            <>
                <div>                    
                    <h2>
                        {<Link to="/details" state={suggestion}>{suggestion.Name}</Link>}
                    </h2>
                    <AddMusic suggestion={suggestion}/>
                </div>
            </>  
            )}
            </body>
        </>
    )

}

export default SuggestionResultsPage
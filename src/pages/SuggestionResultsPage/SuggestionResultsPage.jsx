import { Link } from "react-router-dom"
import AddSuggestion from '../../components/AddSuggestion/AddSuggestion'
import './SuggestionResultsPage.css'

const SuggestionResultsPage = ({user, suggestions}) => {

    

    return (
        <>
            <main>
                
            </main>
            <body class='container'>
            {suggestions?.Similar?.Results.map(suggestion =>
                <div class='box'>                    
                    <h2 class='artist'>
                        {<Link to="/details" state={suggestion}>{suggestion.Name}</Link>}
                    </h2>
                    <a class ='youtube'
                        href={suggestion.yUrl} target='_blank'>
                        Youtube                     
                    </a>
                    <p class='teaser'>
                        {suggestion.wTeaser}
                    </p>
                    <br />
                    <p class='button'>
                    <AddSuggestion suggestion={suggestion}/>
                    </p>
                </div>
            )}
            </body>
        </>
    )

}

export default SuggestionResultsPage
import Cards from "./Components/Cards/Cards"

const App = () => {
    return (
        <div>
            <Cards
                title= "My first Card"
                source="https://placeimg.com/640/480/any"
                paragraph="Random generted images"
            />
            <Cards
                title= "My second Card"
                source="https://placeimg.com/640/480/any"
                paragraph="Random generted images 2nd"
            />
            <Cards
                title= "My second Card"
                source="https://placeimg.com/640/480/any"
                paragraph="Random generted images 2nd"
            />
        </div>
    )
}

export default App;
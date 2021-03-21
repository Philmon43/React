const App = () => {
    const checkBox = ["i read the term of the app", "i accept the term of the app", "i want to get the weekly newslater", "i want to get sales and ofers"].map((el, i) => {
        if(i > 1){
            return <label key={i}>
                                <input  type="checkbox" defaultChecked/>
                                        {el}
                                        <br />
                                </label>
                            }
                            return <label key={i}>
                            <input  type="checkbox" />
                            {el}
                            <br />
                    </label>
    });
    return <div>{checkBox}</div>
}
export default App
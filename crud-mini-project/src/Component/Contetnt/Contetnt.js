const Table = ({tableRow}) => {
    return tableRow.map((usr) => {
        return  <div key={usr.id} className="content">
                    <div>{usr.id}</div>
                    <div>{usr.firstName}</div>
                    <div>{usr.lastName}</div>
                    <div>{usr.age}</div>
                    <div>{usr.email}</div>
                    <div>{usr.country}</div>
                </div>
    });
}
export default Table;
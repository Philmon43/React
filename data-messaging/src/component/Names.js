const Names = ({data}) => {
   return data.map((el, i) => {
       return <div key={i}> {el} </div>
   });
}

export default Names
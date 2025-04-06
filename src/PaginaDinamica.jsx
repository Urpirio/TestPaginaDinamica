// import { Prueba } from "./Prueba"
import { useState } from "react";
import { useEffect } from "react";


export default function PaginaDinamica() {

    const [List ,setList] = useState([]);
    const [loading,setloading] = useState(true);
    //primero tenemos que traernos el hook de stado,luego le asignamos un estado, en este caso uno es una array y el otro 
    //un boleano

    useEffect(()=>{//usamos el hook de efecto creamos una funcion dentro del mismo

        const Movies = async () =>{

            setloading(true);

            fetch('https://randomapi.com/api/64341635050aff56e147f511e437a4c1',{
                method: 'GET'
            }).then( res => res.json())
            .then((Data)=>{
                setList(Data.results[0].Movies);
                setloading(false)
            }).catch((err)=>{
                console.log(err)
            });

        };
        Movies();
    },[])

    if(loading == true){
        return <div>Cargando</div>
    }
    if(!loading && List.length === 0){
        return <div>no hay elementos</div>
    };

    const Remove = ()=>{

        const Input = document.getElementById('Remove').value;
        for(let x = 0; x < List.length; x++){
            if(Input == List[x].release_year){
                document.getElementById(List[x].release_year).remove()
            }else{
                continue;
            }
        };
        console.log(List[0].release_year)


    }

        return(
            <div>
                <button onClick={Remove} >ClickMe</button>
                <input type="text" id="Remove" />
                <div id="Object">
                    {List.map((Datos)=>{
                        return(<h2 id={Datos.release_year} key={Datos.release_year}>{Datos.title}</h2>)
                    })}
                </div>
            </div>
        )
        
};

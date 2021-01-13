import React ,{useState}from 'react';
import { GithubPicker} from 'react-color' ;
 

export default function Color() {
    const [col , setCol] = useState('#ff0000')
    return (
        <div>
            <div style={{ float : 'left'}}>
            <GithubPicker 
            color={col}
            onChangeComplete={(col)=>{setCol(col.hex)} }/>
            </div>
            <span style={{
                float : 'left' ,
                backgroundColor: col,
                transition: 'ease 500ms' ,
                width:'22px' ,
                height: '22px'
            }

            }> </span>
        </div>
    )
}

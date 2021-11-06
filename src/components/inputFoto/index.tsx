import {FiCamera} from 'react-icons/fi';
import { ContainerInputPhoto } from './style';

interface Props{
    onChange: (e:any) => void;
    value: string;
}

export default function Inputfoto({onChange, value }:Props){
    async function savePic(e: any){
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.onloadend = () => {
            var e = reader.result;
            onChange(e);
        }
        reader.readAsDataURL(file);
    }
    return(
        <ContainerInputPhoto>
            <label htmlFor="image">
                <div>
                    {!value ? <FiCamera size="25" color="FFEB0A"/> : 
                        <div>
                            <img src={value} alt="foto perfil"/>
                        </div>
                    }
                </div>
            </label>
            <input 
            id="image" 
            type="file" 
            alt="foto perfil" 
            accept="image/x-png,image/jpeg,image/jpg"
            onChange={e=>savePic(e)}
            />
        </ContainerInputPhoto>
    );
}